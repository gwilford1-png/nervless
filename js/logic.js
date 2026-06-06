/* ============================================================
   Nervless — BUSINESS LOGIC
   Scoring & unlock rules, AI proxy/throttle, audio signal analysis. No DOM. Depends on: data.js.
   ============================================================ */

function getStarThresholds(session) { return STAR_THRESHOLDS[session.phase] || { star1: 55, star2: 70, star3: 85 }; }
function getStars(score, session) {
  const t = getStarThresholds(session);
  if (score >= t.star3) return 3;
  if (score >= t.star2) return 2;
  if (score >= t.star1) return 1;
  return 0;
}
function getPassScore(session) { return getStarThresholds(session).star1; }
function getSessionAttempts(sessionId) { return state.sessions.filter(s => s.sessionId === sessionId).length; }
function getBestScore(sessionId) { const all = state.sessions.filter(s => s.sessionId === sessionId); return all.length ? Math.max(...all.map(s => s.score)) : 0; }
function getBestStars(sessionId) {
  const session = CURRICULUM.find(s => s.id === sessionId);
  if (!session) return 0;
  return getStars(getBestScore(sessionId), session);
}
function hasPassedSession(sessionId) {
  // Check explicit passed list first
  const passed = JSON.parse(localStorage.getItem('nervless_passed')||'[]');
  if (passed.includes(sessionId)) return true;
  // Unscored sessions: check completion list
  const session = CURRICULUM.find(s => s.id === sessionId);
  if (session && session.scored === false) {
    const completed = JSON.parse(localStorage.getItem('nervless_completed')||'[]');
    if (completed.includes(sessionId)) {
      markSessionPassed(sessionId);
      return true;
    }
    return false;
  }
  // Scored sessions: auto-pass if best score meets threshold
  if (session && getBestScore(sessionId) >= getPassScore(session)) {
    markSessionPassed(sessionId);
    return true;
  }
  return false;
}
function markSessionPassed(sessionId) {
  const passed = JSON.parse(localStorage.getItem('nervless_passed')||'[]');
  if (!passed.includes(sessionId)) { passed.push(sessionId); localStorage.setItem('nervless_passed', JSON.stringify(passed)); }
  if (!state.completedSessions.includes(sessionId)) { state.completedSessions.push(sessionId); localStorage.setItem('nervless_completed', JSON.stringify(state.completedSessions)); }
}
function isPhaseUnlocked(phaseNum, relevant) {
  if (phaseNum === 1) return true;
  return relevant.filter(s => s.phase === phaseNum - 1).every(s => hasPassedSession(s.id));
}

const NERVLESS_PROXY = 'https://shark-app-3ywir.ondigitalocean.app';
function getProxyUrl() { return NERVLESS_PROXY; }
function checkApiKeys() { return true; }

// ── REQUEST THROTTLE ──
const throttle = { lastCall: 0, cooldownMs: 15000, callsThisMinute: 0, minuteStart: 0, maxPerMinute: 6 };
function checkThrottle() {
  const now = Date.now();
  if (now - throttle.minuteStart > 60000) { throttle.callsThisMinute = 0; throttle.minuteStart = now; }
  if (now - throttle.lastCall < throttle.cooldownMs) {
    const wait = Math.ceil((throttle.cooldownMs - (now - throttle.lastCall)) / 1000);
    alert('Please wait ' + wait + ' seconds before recording again.');
    return false;
  }
  if (throttle.callsThisMinute >= throttle.maxPerMinute) {
    alert('You\'ve reached the limit of ' + throttle.maxPerMinute + ' recordings per minute. Take a breath and try again shortly.');
    return false;
  }
  throttle.lastCall = now;
  throttle.callsThisMinute++;
  return true;
}

function buildRecord(result, sessionId, session) {
  const a = result.analysis;
  return {
    id: Date.now(),
    sessionId,
    sessionTitle: session ? session.title : 'Practice',
    score: a.overallScore,
    wpm: result.wpm,
    fillers: result.fillerCount,
    clarity: a.scores.clarity,
    confidence: a.scores.confidence,
    promptAdherence: a.scores.promptAdherence,
    openness: a.scores.openness,
    duration: result.durationSeconds,
    level: state.level,
    date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
  };
}

function scoreColour(n) {
  return n >= 8 ? 'var(--green)' : n >= 5 ? 'var(--gold)' : 'var(--red)';
}

// ── AUDIO ANALYSIS ENGINE ──
const audioAnalysis = { samples: [], pitchSamples: [], volumeSamples: [], audioCtx: null, analyser: null, interval: null };

function initAudioAnalysis(stream) {
  try {
    audioAnalysis.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioAnalysis.audioCtx.createMediaStreamSource(stream);
    audioAnalysis.analyser = audioAnalysis.audioCtx.createAnalyser();
    audioAnalysis.analyser.fftSize = 2048;
    source.connect(audioAnalysis.analyser);
    audioAnalysis.samples = [];
    audioAnalysis.pitchSamples = [];
    audioAnalysis.volumeSamples = [];

    const bufferLength = audioAnalysis.analyser.fftSize;
    const dataArray = new Float32Array(bufferLength);
    const sampleRate = audioAnalysis.audioCtx.sampleRate;

    audioAnalysis.interval = setInterval(() => {
      audioAnalysis.analyser.getFloatTimeDomainData(dataArray);

      let sum = 0;
      for (let i = 0; i < bufferLength; i++) sum += dataArray[i] * dataArray[i];
      const rms = Math.sqrt(sum / bufferLength);
      const db = rms > 0 ? Math.round(20 * Math.log10(rms)) : -100;
      audioAnalysis.volumeSamples.push(db);

      const pitch = detectPitch(dataArray, sampleRate);
      if (pitch > 50 && pitch < 500) audioAnalysis.pitchSamples.push(pitch);

      audioAnalysis.samples.push({ t: audioAnalysis.samples.length * 0.2, db, pitch: pitch || 0 });
    }, 200);
  } catch (e) { console.warn('Audio analysis init failed:', e); }
}

function detectPitch(buf, sampleRate) {
  const size = buf.length;
  let rms = 0;
  for (let i = 0; i < size; i++) rms += buf[i] * buf[i];
  rms = Math.sqrt(rms / size);
  if (rms < 0.01) return 0;

  let r1 = 0, r2 = size - 1;
  const thresh = 0.2;
  for (let i = 0; i < size / 2; i++) { if (Math.abs(buf[i]) < thresh) { r1 = i; break; } }
  for (let i = 1; i < size / 2; i++) { if (Math.abs(buf[size - i]) < thresh) { r2 = size - i; break; } }

  const trimBuf = buf.slice(r1, r2);
  const trimSize = trimBuf.length;
  const c = new Float32Array(trimSize);
  for (let i = 0; i < trimSize; i++) {
    let sum = 0;
    for (let j = 0; j < trimSize - i; j++) sum += trimBuf[j] * trimBuf[j + i];
    c[i] = sum;
  }

  let d = 0;
  while (c[d] > c[d + 1]) { d++; if (d >= trimSize - 1) return 0; }
  let maxVal = -1, maxPos = -1;
  for (let i = d; i < trimSize; i++) { if (c[i] > maxVal) { maxVal = c[i]; maxPos = i; } }
  return maxPos > 0 ? sampleRate / maxPos : 0;
}

function getAudioAnalysisReport() {
  const v = audioAnalysis.volumeSamples.filter(d => d > -80);
  const p = audioAnalysis.pitchSamples;
  if (v.length < 3) return '';

  const avgVol = Math.round(v.reduce((a, b) => a + b, 0) / v.length);
  const maxVol = Math.max(...v);
  const minVol = Math.min(...v);
  const volVariation = maxVol - minVol;

  let pitchReport = '';
  if (p.length > 5) {
    const avgPitch = Math.round(p.reduce((a, b) => a + b, 0) / p.length);
    const maxPitch = Math.round(Math.max(...p));
    const minPitch = Math.round(Math.min(...p));
    const pitchRange = maxPitch - minPitch;

    const windowSize = 5;
    const pitchVariances = [];
    for (let i = 0; i <= p.length - windowSize; i++) {
      const window = p.slice(i, i + windowSize);
      const mean = window.reduce((a, b) => a + b, 0) / window.length;
      const variance = window.reduce((a, b) => a + (b - mean) ** 2, 0) / window.length;
      pitchVariances.push(variance);
    }
    const avgPitchVariance = pitchVariances.length > 0 ? Math.round(pitchVariances.reduce((a, b) => a + b, 0) / pitchVariances.length) : 0;
    const maxPitchVariance = pitchVariances.length > 0 ? Math.round(Math.max(...pitchVariances)) : 0;

    const stabilityLabel = maxPitchVariance > 800 ? 'UNSTABLE — possible voice shakiness detected' :
                           maxPitchVariance > 400 ? 'SOMEWHAT UNSTABLE — moderate pitch fluctuation' :
                           avgPitchVariance < 50 ? 'VERY STABLE but potentially monotone' : 'STABLE — natural variation';

    pitchReport = `
- Average pitch: ${avgPitch} Hz (${avgPitch < 130 ? 'lower register' : avgPitch < 200 ? 'mid register' : 'higher register'})
- Pitch range: ${minPitch}–${maxPitch} Hz (${pitchRange} Hz variation)
- ${pitchRange < 30 ? 'MONOTONE PITCH — very little variation, sounds flat' : pitchRange < 60 ? 'LIMITED pitch variation — could use more expression' : pitchRange < 100 ? 'GOOD pitch variation — natural expressive range' : 'WIDE pitch variation — strong vocal expression'}
- Pitch stability: ${stabilityLabel} (avg variance: ${avgPitchVariance}, peak: ${maxPitchVariance})
- ${maxPitchVariance > 800 ? 'High pitch instability often indicates nervousness or voice tremor. This is normal early on and improves with practice.' : ''}`;
  }

  return `
VOICE ANALYSIS (from real-time audio monitoring):
Volume:
- Average: ${avgVol} dB, Range: ${minVol} to ${maxVol} dB (${volVariation} dB variation)
- ${volVariation < 6 ? 'FLAT VOLUME — speaking at one level throughout, sounds disengaged' : volVariation < 15 ? 'MODERATE volume variation — some dynamics present' : 'GOOD volume dynamics — natural emphasis and variation'}
- ${avgVol < -35 ? 'QUIET — speaker may be holding back or speaking away from microphone' : avgVol > -15 ? 'STRONG PROJECTION — good volume for speaking' : 'ADEQUATE volume'}
${pitchReport}
Use this data to assess: flat pitch + flat volume = monotone delivery. High pitch variance with short spikes = possible voice shakiness from anxiety. Wide pitch range with controlled variation = confident, expressive delivery.`;
}

function cleanupAudioAnalysis() {
  if (audioAnalysis.interval) clearInterval(audioAnalysis.interval);
  if (audioAnalysis.audioCtx && audioAnalysis.audioCtx.state !== 'closed') {
    try { audioAnalysis.audioCtx.close(); } catch(e) {}
  }
  audioAnalysis.interval = null;
  audioAnalysis.audioCtx = null;
  audioAnalysis.analyser = null;
}
