let state={currentQuestion:0,answers:[],level:2,currentSessionId:6,isRecording:false,timerInterval:null,seconds:0,mediaRecorder:null,audioChunks:[],sessions:JSON.parse(localStorage.getItem('nervless_sessions')||'[]'),completedSessions:JSON.parse(localStorage.getItem('nervless_completed')||'[]'),screenHistory:['screen-curriculum']};

// Redirect to /start if no saved level — user hasn't done the assessment yet
(function(){
  if(!localStorage.getItem('nervless_level')){
    window.location.replace('/start.html');
    return;
  }
  // Load saved state and show curriculum
  state.level=parseInt(localStorage.getItem('nervless_level'));
  state.currentSessionId=parseInt(localStorage.getItem('nervless_current_session')||6);
  setTimeout(function(){showCurriculum();},0);
})();

// ── STAR THRESHOLDS ──
// 1 star = pass and unlock next. 2 stars = good. 3 stars = mastered.
// Thresholds increase by phase. 1-star is not easy — you still have to genuinely try.
const STAR_THRESHOLDS = {
  1: { star1: 55, star2: 70, star3: 85 },
  2: { star1: 58, star2: 72, star3: 86 },
  3: { star1: 60, star2: 75, star3: 88 },
  4: { star1: 58, star2: 72, star3: 86 },
  5: { star1: 62, star2: 76, star3: 90 },
  6: { star1: 65, star2: 78, star3: 92 },
  7: { star1: 65, star2: 78, star3: 92 },
  8: { star1: 68, star2: 80, star3: 94 },
  9: { star1: 65, star2: 78, star3: 92 },
};
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

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(state.screenHistory[state.screenHistory.length-1]!==id)state.screenHistory.push(id);
  window.scrollTo(0,0);
  // Show nav on main app screens, hide on onboarding
  const noNav=['screen-apikeys','screen-lesson','screen-feedback','screen-practice'];
  const nav=document.getElementById('bottom-nav');
  if(nav) nav.style.display=noNav.includes(id)?'none':'flex';
}
function goBack(){state.screenHistory.pop();showScreen(state.screenHistory[state.screenHistory.length-1]||'screen-curriculum');}
function showCurriculum() {
  const r = document.documentElement.style;
  r.setProperty('--sc', '#C2724F');
  r.setProperty('--sc-light', '#FAEDE5');
  r.setProperty('--sc-mid', '#EAC9B6');

  state.level = parseInt(localStorage.getItem('nervless_level') || state.level);
  state.currentSessionId = parseInt(localStorage.getItem('nervless_current_session') || LEVEL_ENTRY[state.level]);
  state.completedSessions = JSON.parse(localStorage.getItem('nervless_completed') || '[]');

  const passed = JSON.parse(localStorage.getItem('nervless_passed') || '[]');
  const DONE = passed;
  const CURRENT = state.currentSessionId;
  const entry = LEVEL_ENTRY[state.level];
  const relevant = CURRICULUM.filter(s => s.id >= entry);

  const totalDone = passed.length;
  const totalSessions = relevant.length;
  const currSession = CURRICULUM.find(s => s.id === CURRENT);
  const currPhase = currSession ? currSession.phase : 1;

  // ── Score card ──
  const scoredAll = relevant.filter(s => s.scored !== false);
  const earnedPts = scoredAll.reduce((sum, s) => sum + getBestScore(s.id), 0)
    + relevant.filter(s => s.scored === false && hasPassedSession(s.id)).length * 100;
  const maxPts = totalSessions * 100;
  document.getElementById('stat-points').textContent = earnedPts.toLocaleString();
  document.getElementById('stat-points-max').textContent = '/ ' + maxPts.toLocaleString();
  document.getElementById('stat-sessions-line').textContent = totalDone + ' of ' + totalSessions + ' sessions complete';
  document.getElementById('stat-phase-text').textContent = 'Phase ' + currPhase + ' of 9';
  const fill = document.getElementById('journey-progress-fill');
  const pct = totalSessions ? Math.round((totalDone / totalSessions) * 100) : 0;
  if (fill) fill.style.width = Math.max(5, Math.min(100, pct)) + '%';

  // ── Phase data: palette + representative icon + one-line benefit ──
  const PHASES = [
    { num:1, name:'Understanding the Fear',    benefit:'Why your brain treats speaking as a threat',    icon:'brain',    color:'#C2724F', light:'#FAEDE5', mid:'#EAC9B6' },
    { num:2, name:'The Body First',            benefit:'Calm your nervous system on demand',            icon:'wind',     color:'#4F9E7E', light:'#E7F3EE', mid:'#BDE0D2' },
    { num:3, name:'Gradual Exposure',          benefit:'Build from zero-stakes to real audiences',      icon:'trending', color:'#4A6FA5', light:'#E8EEF6', mid:'#BFD0E6' },
    { num:4, name:'Changing the Narrative',    benefit:'Rewrite the thoughts that fuel the fear',       icon:'message',  color:'#5E6CB0', light:'#EBEDF7', mid:'#CBD1ED' },
    { num:5, name:'Finding Your Voice',        benefit:'Discover what makes you worth listening to',    icon:'mic',      color:'#C19A45', light:'#F6EFDD', mid:'#E8D5A8' },
    { num:6, name:'Raising the Stakes',        benefit:'Present to senior people and hold your ground', icon:'target',   color:'#CB7385', light:'#F8E9EC', mid:'#EEC6CF' },
    { num:7, name:'In-the-Moment Tools',       benefit:'Recover from blanks and shaky moments',         icon:'zap',      color:'#4E9E8C', light:'#E7F3F0', mid:'#BCDED6' },
    { num:8, name:'Performing Under Pressure', benefit:'Deliver with presence when it counts',          icon:'users',    color:'#8A77C4', light:'#EFEBF7', mid:'#D3C9EC' },
    { num:9, name:'Maintenance',               benefit:'Keep your skills sharp for the long run',       icon:'refresh',  color:'#3FA86A', light:'#E4F4EB', mid:'#B6E1C5' },
  ];

  const ICONS = {
    brain:`<svg viewBox="0 0 24 24"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z"/></svg>`,
    wind:`<svg viewBox="0 0 24 24"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>`,
    trending:`<svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
    message:`<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    mic:`<svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
    target:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
    zap:`<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    users:`<svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    refresh:`<svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`,
  };
  const CHECK = `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`;
  const LOCK  = `<svg viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>`;
  const CONT_ICONS = {
    book:`<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
    check:`<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
    talk:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>`,
  };

  function phaseState(num) {
    const ss = relevant.filter(s => s.phase === num);
    if (ss.length === 0) return 'locked';
    if (ss.every(s => hasPassedSession(s.id))) return 'done';
    // First phase present in relevant is always active (entry phase for this level)
    const firstPhase = Math.min(...relevant.map(s => s.phase));
    if (num === firstPhase) return 'active';
    const prev = relevant.filter(s => s.phase === num - 1);
    // If previous phase not in relevant (user entered mid-programme), treat as cleared
    if (prev.length === 0) return 'active';
    return prev.every(s => hasPassedSession(s.id)) ? 'active' : 'locked';
  }

  // ── Continue card ──
  const contCard = document.getElementById('j-continue-card');
  if (currSession && phaseState(currSession.phase) !== 'done') {
    const phaseSessions = relevant.filter(s => s.phase === currSession.phase);
    const idxInPh = phaseSessions.findIndex(s => s.id === currSession.id) + 1;
    document.getElementById('j-continue-meta').textContent =
      'Continue · Phase ' + currSession.phase + ' · Session ' + (idxInPh > 0 ? idxInPh : 1);
    document.getElementById('j-continue-title').textContent = currSession.title;
    const lc = LESSON_CONTENT[currSession.id];
    const hasQuiz = !!(lc && lc.quiz && lc.quiz.length);
    const isScored = currSession.scored !== false;
    const steps = [{ l:'Read', i:'book' }];
    if (hasQuiz) steps.push({ l:'Check', i:'check' });
    if (isScored) steps.push({ l:'Talk', i:'talk' });
    document.getElementById('j-continue-steps').innerHTML = steps.map((st, i) =>
      (i > 0 ? '<span class="j-step-sep">›</span>' : '') +
      `<div class="j-step"><div class="j-step-ic">${CONT_ICONS[st.i]}</div><div class="j-step-label">${st.l}</div></div>`
    ).join('');
    if (contCard) { contCard.style.display = 'block'; contCard.onclick = () => loadSession(currSession.id); }
  } else if (contCard) {
    contCard.style.display = 'none';
  }

  // ── Phases-complete count ──
  const phasesPresent = [...new Set(relevant.map(s => s.phase))];
  const phasesDone = phasesPresent.filter(n => relevant.filter(s => s.phase === n).every(s => hasPassedSession(s.id))).length;
  document.getElementById('j-phases-count').textContent = phasesDone + ' of ' + phasesPresent.length + ' complete';

  // ── Build phase cards ──
  const html = PHASES.map((p, pi) => {
    const sessions = relevant.filter(s => s.phase === p.num);
    if (sessions.length === 0) return '';
    const st = phaseState(p.num);
    const doneCount = sessions.filter(s => hasPassedSession(s.id)).length;
    const isOpen = st === 'active';
    const delay = (pi * 0.045).toFixed(3);

    const badge = st === 'done' ? `<div class="j-tile-badge done">${CHECK}</div>`
      : st === 'locked' ? `<div class="j-tile-badge locked">${LOCK}</div>` : '';

    const dots = sessions.map(s => {
      const d = hasPassedSession(s.id), c = s.id === CURRENT && !d;
      return `<span class="j-dot ${d ? 'done' : c ? 'current' : 'todo'}"></span>`;
    }).join('');

    const rightIc = st === 'locked'
      ? `<div class="j-lock-ic">${LOCK}</div>`
      : `<div class="j-chev"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>`;

    let body;
    if (st === 'locked') {
      body = `<div class="j-unlock">${LOCK} ${sessions.length} sessions · finish Phase ${p.num - 1} to unlock</div>`;
    } else {
      const rows = sessions.map((s, si) => {
        const isDone = hasPassedSession(s.id);
        const isCurrent = s.id === CURRENT && !isDone;
        const isScored = s.scored !== false;
        let cls, inner, sub, subCls = '', right;
        if (isDone) {
          cls = 'passed'; inner = CHECK;
          sub = isScored ? 'Passed' : 'Done';
          right = isScored ? `<div class="j-s-score">${getBestScore(s.id)}</div>` : '';
        } else if (isCurrent) {
          cls = 'current'; inner = si + 1;
          sub = 'Up next · tap to start'; subCls = ' up';
          right = '<div class="j-s-arrow">→</div>';
        } else {
          cls = 'locked'; inner = si + 1;
          sub = 'Locked';
          right = '<div class="j-s-chev">›</div>';
        }
        const click = (isDone || isCurrent) ? ` onclick="loadSession(${s.id})"` : '';
        return `<div class="j-session ${cls}"${click}>
            <div class="j-s-status ${cls}">${inner}</div>
            <div class="j-s-mid"><div class="j-s-title">${s.title}</div><div class="j-s-sub${subCls}">${sub}</div></div>
            <div class="j-s-right">${right}</div>
          </div>`;
      }).join('');
      body = `<div class="j-sessions">${rows}</div>`;
    }

    return `<div class="j-phase-card state-${st}${isOpen ? ' open' : ''}" style="--pc:${p.color};--pc-light:${p.light};--pc-mid:${p.mid};animation-delay:${delay}s">
        <div class="j-phase-head"${st !== 'locked' ? ' data-toggle="1"' : ''}>
          <div class="j-tile">${ICONS[p.icon] || ''}${badge}</div>
          <div class="j-phase-mid">
            <div class="j-phase-label">Phase ${p.num}</div>
            <div class="j-phase-name">${p.name}</div>
            <div class="j-phase-benefit">${p.benefit}</div>
          </div>
          <div class="j-phase-right">
            <div class="j-count-col"><div class="j-count">${doneCount}/${sessions.length}</div><div class="j-dots">${dots}</div></div>
            ${rightIc}
          </div>
        </div>
        ${body}
      </div>`;
  }).join('');

  document.getElementById('curriculum-list').innerHTML = '<div class="j-phase-list">' + html + '</div>';

  document.querySelectorAll('.j-phase-head[data-toggle]').forEach(head => {
    head.onclick = () => { const c = head.closest('.j-phase-card'); if (c) c.classList.toggle('open'); };
  });

  setActiveNav('journey');
  showScreen('screen-curriculum');
}

function drawArcGauge(canvasId, earnedPts, maxPts, colour, animate) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 26, cy = 26, r = 20;
  const startA = Math.PI * 0.75;
  const spanA = Math.PI * 1.5;

  function draw(frac) {
    ctx.clearRect(0, 0, 72, 72);
    // Track
    ctx.beginPath();
    ctx.arc(cx, cy, r, startA, startA + spanA, false);
    ctx.strokeStyle = '#E4E0D8';
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.stroke();
    // Fill
    if (frac > 0.01) {
      ctx.beginPath();
      ctx.arc(cx, cy, r, startA, startA + spanA * Math.min(frac, 1), false);
      ctx.strokeStyle = colour;
      ctx.lineWidth = 7;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
    // Ticks at thresholds
    [250, 400, 475, maxPts].forEach(t => {
      if (t > maxPts) return;
      const a = startA + (t / maxPts) * spanA;
      ctx.beginPath();
      ctx.moveTo(cx + (r - 4) * Math.cos(a), cy + (r - 4) * Math.sin(a));
      ctx.lineTo(cx + (r + 4) * Math.cos(a), cy + (r + 4) * Math.sin(a));
      ctx.strokeStyle = 'rgba(255,255,255,0.95)';
      ctx.lineWidth = 1.5;
      ctx.lineCap = 'round';
      ctx.stroke();
    });
  }

  if (!animate) { draw(earnedPts / maxPts); return; }

  let frame = 0, total = 50;
  function step() {
    frame++;
    const ease = 1 - Math.pow(1 - frame / total, 3);
    draw((earnedPts / maxPts) * ease);
    if (frame < total) requestAnimationFrame(step);
    else draw(earnedPts / maxPts);
  }
  requestAnimationFrame(step);
}

function drawAllArcs(phases, relevant, done) {
  phases.forEach(p => {
    const sessions = relevant.filter(s => s.phase === p.num);
    if (!sessions.length) return;
    const scoredSessions = sessions.filter(s => s.scored !== false);
    const maxPts = scoredSessions.length * 100;
    const earnedPts = scoredSessions.reduce((sum, s) => sum + getBestScore(s.id), 0);
    const ptsPct = maxPts > 0 ? earnedPts / maxPts : 0;
    const colour = earnedPts === 0 ? '#E4E0D8'
      : ptsPct >= 0.95 ? '#C4922A'
      : ptsPct >= 0.80 ? '#2E9E7A'
      : ptsPct >= 0.50 ? '#E67E22'
      : '#D95470';
    drawArcGauge('arc-' + p.num, earnedPts, maxPts, colour, true);
  });
}

function v7ToggleCard(n, event) {
  event.stopPropagation();
  const card = document.getElementById('v7-pc-' + n);
  const label = document.getElementById('v7-trigger-label-' + n);
  const sessions = CURRICULUM.filter(s => s.phase === n);
  const isNowOpen = card.classList.toggle('open');
  label.textContent = isNowOpen ? 'Hide sessions' : 'Show ' + sessions.length + ' sessions';
  if (isNowOpen) requestAnimationFrame(() => drawSessionArcs(sessions));
}

function drawSessionArc(canvasId, score, passScore, hasPassed) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = 24, cy = 24, r = 18;
  const startA = Math.PI * 0.75;
  const spanA = Math.PI * 1.5;

  ctx.clearRect(0, 0, 48, 48);

  // Track
  ctx.beginPath();
  ctx.arc(cx, cy, r, startA, startA + spanA, false);
  ctx.strokeStyle = '#E4E0D8';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Fill — gold if passed, muted amber if attempted but not passed
  if (score > 0) {
    const frac = Math.min(score / 100, 1);
    ctx.beginPath();
    ctx.arc(cx, cy, r, startA, startA + spanA * frac, false);
    ctx.strokeStyle = hasPassed ? '#C4922A' : '#CEC9BF';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.stroke();
  }

  // Single tick at pass threshold
  const passA = startA + (passScore / 100) * spanA;
  ctx.beginPath();
  ctx.moveTo(cx + (r - 3) * Math.cos(passA), cy + (r - 3) * Math.sin(passA));
  ctx.lineTo(cx + (r + 3) * Math.cos(passA), cy + (r + 3) * Math.sin(passA));
  ctx.strokeStyle = 'rgba(255,255,255,0.95)';
  ctx.lineWidth = 1.5;
  ctx.lineCap = 'round';
  ctx.stroke();
}

function drawSessionArcs(sessions) {
  sessions.forEach(s => {
    const score = getBestScore(s.id);
    const t = getStarThresholds(s);
    const hasPassed = hasPassedSession(s.id);
    drawSessionArc('sarc-' + s.id, score, t.star1, hasPassed);
  });
}

function toggleMenu(){
  const overlay=document.getElementById('menu-overlay');
  const drawer=document.getElementById('menu-drawer');
  const btn=document.getElementById('burger-btn');
  const isOpen=drawer.classList.contains('open');
  overlay.classList.toggle('open',!isOpen);
  drawer.classList.toggle('open',!isOpen);
  btn.classList.toggle('open',!isOpen);
}
function togglePhase(phaseId){
  const sessions=document.getElementById('sessions-'+phaseId);
  const chevron=document.getElementById('chevron-'+phaseId);
  if(!sessions)return;
  const isOpen=sessions.style.display!=='none';
  sessions.style.display=isOpen?'none':'block';
  if(chevron)chevron.style.transform=isOpen?'rotate(0deg)':'rotate(180deg)';
}

// ── LESSON CONTENT ──
const LESSON_CONTENT = {
  1: {
    read: `
      <div class="lesson-content">
        <h3>Why does speaking make us so anxious?</h3>
        <p>Your body can't tell the difference between a tiger and a room full of people. To your brain, both are threats — and it responds the same way: heart racing, palms sweating, mind going blank.</p>
        <p>This is the fight-or-flight response. It evolved to keep us alive in dangerous situations. The problem is it fires in situations that aren't actually dangerous — like being asked to speak in a meeting.</p>
        <div class="highlight-box">"The body doesn't know the difference between physical threat and social threat. It just knows: threat."</div>
        <p>The symptoms you feel — dry mouth, trembling voice, racing heart — aren't signs that something is wrong with you. They're your body doing exactly what it was designed to do. The goal of this programme isn't to eliminate that response. It's to stop it from running the show.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">💡</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Anxiety is not a character flaw or a weakness. It's a biological response that evolved for survival — just misfiring in a modern context.</div>
      </div>`,
    cards: [
      `<h3>Your brain can't tell the difference</h3><p>A tiger in the wild. A room full of colleagues watching you present. To your brain, both are threats — and it responds the same way: heart racing, palms sweating, mind going blank.</p><p>This is the <strong>fight-or-flight response</strong>. It evolved to keep us alive. The problem? It fires in situations that aren't actually dangerous.</p>`,
      `<h3>What those symptoms really mean</h3><p>Dry mouth. Trembling voice. Racing heart. Sweaty palms.</p><p>These aren't signs that something is wrong with you. They're your body doing <strong>exactly what it was designed to do</strong> — preparing you to fight or flee from a threat.</p><div class="highlight-box">The symptoms are the alarm system. Not the problem itself.</div>`,
      `<h3>You're not broken — you're human</h3><p>Public speaking anxiety affects roughly <strong>75% of people</strong>. It's one of the most common fears in the world — more common than fear of death in most surveys.</p><p>The goal of this programme isn't to eliminate the response. It's to stop it from running the show.</p>`,
      `<h3>What this programme does</h3><p>Through <strong>graduated exposure</strong> — speaking in progressively more challenging situations — your brain learns that speaking is survivable. Even manageable.</p><p>Each session you complete rewires your threat register. You're not fighting your biology. You're updating it.</p><div class="highlight-box">You don't need to feel ready to start. Waiting until you feel ready is the thing that keeps you stuck.</div>`
    ],
    quiz: [
      { q: "Why does your body react physically when you have to speak publicly?", options: ["You haven't practised enough","Your brain treats social threat the same as physical danger","You lack confidence","Anxiety is a sign of poor preparation"], correct: 1, explanation: "The fight-or-flight response evolved for physical danger — but your brain fires it in social situations too. It's the same system, wrong context." },
      { q: "What does a racing heart and dry mouth before speaking actually mean?", options: ["Something is seriously wrong with you","You're not cut out for public speaking","Your body is doing exactly what it was designed to do","You need more experience before trying"], correct: 2, explanation: "These symptoms are your biology working as intended — not evidence of inadequacy. The goal is learning to work with the system, not fight it." }
    ]
  },
  2: {
    read: `
      <div class="lesson-content">
        <h3>Meet your amygdala</h3>
        <p>Deep inside your brain sits a small almond-shaped structure called the amygdala. It's your brain's alarm system — constantly scanning for danger. When it detects a threat, it hijacks your rational mind and floods your body with adrenaline.</p>
        <p>Here's the problem: the amygdala is fast but crude. It doesn't distinguish between "a lion is chasing me" and "twenty people are watching me present." It sees a crowd of evaluating faces and reads it as danger.</p>
        <div class="highlight-box">The amygdala responds before your rational brain can intervene — which is why your hands start shaking before you even consciously decide to be nervous.</div>
        <p>The prefrontal cortex — the rational, thinking part of your brain — can calm the amygdala down, but it needs time and practice to override the alarm. That's exactly what this programme builds: the neural pathways that let your rational brain stay in control even when the amygdala fires.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🧠</div>
        <div class="key-insight-text"><strong>Key insight:</strong> You can't stop the amygdala from firing — but you can train your brain to recover faster and let the rational mind take back control.</div>
      </div>`,
    quiz: [
      { q: "What is the amygdala's primary role?", options: ["Controlling speech and language","Storing long-term memories","Scanning for threat and triggering alarm responses","Managing social relationships"], correct: 2, explanation: "The amygdala is your brain's alarm system — fast, powerful, and not very nuanced. It fires first, asks questions later." },
      { q: "Why do physical symptoms of anxiety appear before you've 'decided' to be nervous?", options: ["Because anxiety is irrational","Because the amygdala acts faster than your conscious mind","Because your body is weaker than your mind","Because you haven't trained yourself enough yet"], correct: 1, explanation: "The amygdala bypasses your rational prefrontal cortex — it's a faster circuit. Your hands are shaking before you've consciously processed the situation." }
    ]
  },
  3: {
    read: `
      <div class="lesson-content">
        <h3>The trap that makes anxiety worse</h3>
        <p>When something makes us anxious, our instinct is to avoid it. Avoid the presentation. Turn down the speaking opportunity. Stay quiet in the meeting. It works — the anxiety disappears immediately. Relief.</p>
        <p>But here's what avoidance actually teaches your brain: <em>that situation was genuinely dangerous</em>. Every time you avoid, your brain updates its threat register. The next time a similar situation arises, the alarm fires louder.</p>
        <div class="highlight-box">Avoidance provides short-term relief and long-term amplification. It is the single biggest driver of worsening anxiety over time.</div>
        <p>The only way to reduce anxiety about speaking is to speak — gradually, safely, and repeatedly — until your brain learns through direct experience that the situation is not actually dangerous. That's exposure therapy, and it's what this programme is built on.</p>
        <p>Every session you complete is directly rewriting that threat register. You're teaching your nervous system that speaking is survivable.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">⚠️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Avoidance feels like relief but functions like fuel — it feeds the fear. Gradual, repeated exposure is the only proven way to reduce anxiety long-term.</div>
      </div>`,
    quiz: [
      { q: "What does avoidance teach your brain about the feared situation?", options: ["That you need more preparation next time","That the situation was genuinely dangerous","That your anxiety is improving","That speaking isn't important to you"], correct: 1, explanation: "When you avoid a feared situation, your brain registers: 'We escaped danger.' This confirms the threat and makes the anxiety stronger next time." },
      { q: "What is the proven way to reduce speaking anxiety over time?", options: ["Avoiding all high-pressure situations until you feel ready","Thinking positively about speaking","Gradual, repeated exposure to speaking situations","Watching other confident speakers and copying them"], correct: 2, explanation: "Exposure therapy — starting with low-anxiety situations and gradually increasing — is the gold standard treatment for anxiety. Each session you do here is exactly that." }
    ],
    reframe: { label: "Your avoidance pattern", prompt: "What's one speaking situation you've avoided recently? It could be speaking up in a meeting, turning down a presentation, or staying quiet when you had something to say. What did avoiding it cost you?" }
  },
  4: {
    read: `
      <div class="lesson-content">
        <h3>Your anxiety is trying to protect you</h3>
        <p>Here's a reframe that changes everything: your speaking anxiety isn't an enemy. It's a misguided protector.</p>
        <p>Anxiety about speaking usually protects against one or more core fears: being seen as incompetent, being rejected or humiliated, being judged negatively by people whose opinion matters to you. These are real social fears with real evolutionary roots — exclusion from the group was once genuinely dangerous.</p>
        <div class="highlight-box">Ask yourself: what exactly is my anxiety afraid will happen? Most people have never actually named it clearly.</div>
        <p>When you understand <em>what</em> your anxiety is protecting against, you can have a different relationship with it. You can acknowledge the protection it's offering while gently showing it that the feared outcome is unlikely — or survivable even if it happens.</p>
        <p>This isn't about toxic positivity. It's about accuracy: your anxiety is almost always overestimating the probability and the severity of the feared outcome.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🛡️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Anxiety protects against something specific — usually rejection, humiliation, or being judged incompetent. Naming the exact fear is the first step to reducing its power.</div>
      </div>`,
    quiz: [
      { q: "What is the most useful way to think about speaking anxiety?", options: ["As a sign you're not ready","As a character weakness to overcome","As a misguided protector with a positive intention","As something that will disappear with enough experience"], correct: 2, explanation: "Anxiety evolved to protect us. Understanding what yours is protecting against — specifically — transforms your relationship with it from enemy to something you can work with." },
      { q: "What does anxiety typically do with the probability of the feared outcome?", options: ["Estimates it accurately","Underestimates it","Overestimates it significantly","Ignores it completely"], correct: 2, explanation: "Anxiety almost always overestimates both the likelihood and the severity of the feared outcome. The feared humiliation rarely happens — and even when things go imperfectly, it's rarely as catastrophic as feared." }
    ]
  },
  5: {
    read: `
      <div class="lesson-content">
        <h3>Everyone's anxiety pattern is different</h3>
        <p>Speaking anxiety isn't one thing. It's a pattern — unique to you — built from your specific history, your specific triggers, and the specific stories your brain has been telling you about what speaking means.</p>
        <p>Some people freeze in front of authority figures but are fine with peers. Some are terrified of formal presentations but comfortable in meetings. Some avoid speaking to strangers but can present to colleagues. These patterns make sense when you understand their origin.</p>
        <div class="highlight-box">Understanding your specific pattern — not anxiety in general — is what allows targeted, efficient work. Generalised advice rarely shifts deep patterns.</div>
        <p>In this session, you're going to map your anxiety profile in detail. This isn't an exercise in dwelling on fear — it's diagnostic. The clearer the map, the more precisely we can work.</p>
        <p>Think about: where it's worst, where it's manageable, what makes it better, what makes it worse, when it started, and whether there's a specific moment or experience at its root.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🗺️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Your anxiety pattern is specific to you — your triggers, history, and fears. Mapping it precisely is more valuable than generic reassurance.</div>
      </div>`,
    quiz: [
      { q: "Why is understanding your specific anxiety pattern more useful than general anxiety advice?", options: ["It isn't — general advice works for everyone","Because it lets you avoid your specific triggers","Because targeted work on your actual pattern is more efficient than generic approaches","Because it helps you explain your anxiety to others"], correct: 2, explanation: "General advice addresses average patterns. Your anxiety has a specific shape — specific triggers, specific fears, specific history. Working with that specificity is far more powerful." },
      { q: "What is the purpose of mapping your anxiety profile in detail?", options: ["To prove how anxious you are","To diagnose the problem precisely so you can work on it accurately","To find excuses to avoid certain situations","To compare yourself to other speakers"], correct: 1, explanation: "The anxiety profile is diagnostic, not self-critical. The clearer you can see the pattern, the more precisely we can target the work. It's information, not judgement." }
    ]
  },
  28: {
    read: `
      <div class="lesson-content">
        <h3>Why interviews feel different — and what to do about it</h3>
        <p>The job interview is one of the most universally feared speaking situations. The stakes feel existential — your career, your income, your self-worth all seem to be on the line simultaneously. This is why even people who speak comfortably in other contexts freeze in interviews.</p>
        <p>The anxiety is compounded by the evaluative nature of the situation: everything you say is being judged. But here's the thing — everyone in the room knows that. The interviewer expects nerves. What they're looking for isn't polish; it's clarity, relevance, and authenticity.</p>
        <div class="highlight-box">The "Tell me about yourself" question isn't an invitation to recite your CV. It's an invitation to tell a coherent story: who you are professionally, what you've built, why you're here, what you bring.</div>
        <p>The most effective interview preparation isn't memorising answers — it's developing structures you can deploy flexibly. A prepared structure gives you a frame to hang your words on when anxiety empties your mind. Structure is the scaffold that holds the answer together when pressure bears down.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">💼</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Interviewers expect nerves. What they're assessing is clarity, relevance, and whether you can hold a coherent thought under pressure — not whether you're perfectly calm.</div>
      </div>`,
    scenario: { description: "The interviewer asks: 'Tell me about yourself.' You have about 2 minutes.", options: ["Chronological: education, career path, where you are now", "Problem-solver: focus on a challenge you solved and what it shows about you", "Future-focused: where you're headed and why this role fits"] },
    quiz: [
      { q: "What are interviewers actually assessing when they ask 'Tell me about yourself'?", options: ["How impressive your CV is","Whether you can recite your work history accurately","Clarity, relevance, and whether you can hold a coherent story under pressure","How confident and polished you sound"], correct: 2, explanation: "The question is an invitation to demonstrate structured thinking and self-awareness under mild pressure. Interviewers know it triggers anxiety. They're watching for coherence and relevance — not perfection." },
      { q: "Why is having a prepared structure more useful than memorising answers?", options: ["Because memorised answers sound robotic","Structures are flexible frames that hold answers together when anxiety empties the mind","Because structures are easier to remember than specific answers","Because every interview question is different"], correct: 1, explanation: "Memorised answers fail when you get a slightly different question — you have nowhere to go. Structures (situation-action-result, who-what-why-offer) are frameworks you can fill in real time, giving you direction even when anxiety is high." }
    ]
  },
  29: {
    read: `
      <div class="lesson-content">
        <h3>The authority trap — and how to escape it</h3>
        <p>Speaking to senior people triggers a specific anxiety response: a felt status difference. The instinct is to shrink — to use more hedging language, to over-explain, to pre-emptively apologise for your view. This is the authority trap, and it's counterproductive.</p>
        <p>Here's the reframe: when you've been invited to speak to senior people, it's because your perspective is valued. You're not asking for permission to have a view — you're being asked to bring one. The invitation itself is the signal that you belong in the room.</p>
        <div class="highlight-box">The authority trap manifests in language: "I might be wrong but...", "I suppose one could argue...", "This is just my opinion...". These phrases don't make you sound humble. They make you sound unsure of yourself.</div>
        <p>Handling pushback from authority figures is its own skill. The instinct is to immediately concede. The more effective response: acknowledge the concern, maintain your position if you believe it's correct, and explain your reasoning. Changing your view because of a question is not humility — it's capitulation. Changing it because of a good argument is intellectual integrity.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">👔</div>
        <div class="key-insight-text"><strong>Key insight:</strong> When you're invited to present to senior people, you've already been granted authority to speak. Shrinking in response to that invitation is what undermines your credibility.</div>
      </div>`,
    scenario: { description: "You're presenting a recommendation to the leadership team. Someone senior pushes back: 'I'm not sure this is the right approach.'", options: ["Acknowledge their concern, then restate your evidence calmly", "Ask what specifically concerns them before responding", "Stand firm and explain why the data supports your position"] },
    quiz: [
      { q: "What is the 'authority trap' in speaking?", options: ["Being too aggressive when speaking to people above you","Shrinking — hedging, over-explaining, pre-emptively apologising — in response to a felt status difference","Trying to impress senior people with technical knowledge","Speaking too formally in hierarchical situations"], correct: 1, explanation: "The authority trap is the instinctive shrinking that happens when status anxiety activates. It shows up in language — hedges, apologies, qualifications — that signals uncertainty rather than the confidence the speaker actually has." },
      { q: "What is the difference between intellectual integrity and capitulation when handling pushback?", options: ["Capitulation is faster","Intellectual integrity means always holding your position","Changing your view because of a good argument is integrity; changing it because of a question or authority is capitulation","There is no meaningful difference"], correct: 2, explanation: "Immediately conceding when a senior person questions you isn't humility — it's anxiety-driven capitulation. Genuinely updating your view when presented with better evidence or reasoning is intellectual integrity. The distinction matters for credibility." }
    ]
  },
  30: {
    read: `
      <div class="lesson-content">
        <h3>What to do when a question feels like an attack</h3>
        <p>Difficult questions — critical, sceptical, or hostile — trigger a threat response. The brain registers the challenge as social danger and either freezes, fights back defensively, or collapses into over-explanation. None of these are the right response.</p>
        <p>The first and most important move is the pause. A deliberate, visible breath before answering signals composure rather than panic. It also gives your prefrontal cortex time to come back online after the amygdala spike. Most people rush because silence feels dangerous — which is exactly why taking a moment signals confidence.</p>
        <div class="highlight-box">The composure sequence: pause → acknowledge (not agree) → reframe if needed → answer directly. Never begin with an apology. Apologising for your existence before answering signals that the attack was accurate.</div>
        <p>The hardest part is not becoming defensive. Defensive answers — which explain too much, justify too hard, or attack back — tell the asker that the question landed as intended. A calm, direct answer is the most powerful response to hostility: it signals that you're not threatened.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🛡️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> A calm, direct answer to a hostile question is the most powerful response. Defensiveness signals the attack landed. Composure signals it didn't.</div>
      </div>`,
    scenario: { description: "After your presentation, someone asks a pointed question designed to expose a weakness in your argument.", options: ["Pause, acknowledge the valid part, then answer directly", "Redirect to the strengths of your overall argument", "Be honest that you don't have a complete answer yet"] },
    quiz: [
      { q: "Why is the pause before answering a difficult question so important?", options: ["To show you're taking the question seriously","It signals composure, gives your rational brain time to engage, and is itself a confidence signal","To buy time to think of a deflection","Because silence makes the questioner uncomfortable"], correct: 1, explanation: "The pause does multiple things simultaneously: it prevents a defensive reflex, allows the prefrontal cortex to re-engage after the amygdala spike, and signals to the room that you are not rattled. Most people rush because silence feels dangerous — which is why taking it signals the opposite." },
      { q: "Why should you never begin a response to a difficult question with an apology?", options: ["Because apologies are unprofessional","Apologising signals that the challenge was accurate before you've even answered it","Because it wastes valuable answer time","Because senior people find it irritating"], correct: 1, explanation: "An opening apology — 'I'm sorry, I should have...' — concedes the questioner's implicit criticism before you've addressed it. It signals that the attack landed. A direct answer without apology signals that you're engaging with the substance, not the subtext." }
    ]
  },
  31: {
    read: `
      <div class="lesson-content">
        <h3>How to deliver bad news well</h3>
        <p>Something has gone wrong. You need to tell someone. The instinct is to bury it — in context, in hedges, in passive language, in excessive apology. This instinct is understandable and almost always makes things worse. The person receiving the news needs information first, not protection from the truth.</p>
        <p>Clear crisis communication follows a simple four-part structure: what happened, what the impact is, what you're doing about it, and what will prevent it recurring. This structure works because it answers the four questions the listener needs answered before they can regulate their own response.</p>
        <div class="highlight-box">State it once, clearly, then stop talking. The most common crisis communication mistake is over-explaining — filling silence with more words in an attempt to manage the listener's reaction. This makes you look less in control, not more.</div>
        <p>The voice matters as much as the words. A steady, measured tone — not flat, but controlled — signals that you have the situation in hand. A wavering, accelerating voice signals panic even when the words are saying the opposite. Breathing before you speak, slowing your pace, and projecting from the chest rather than the throat are all techniques that work here.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🚨</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Bad news delivered clearly with a plan is respected. Bad news buried in hedges and apology is alarming. Structure and directness are acts of respect for the listener.</div>
      </div>`,
    timedSeconds: 90,
    quiz: [
      { q: "What is the four-part structure for effective crisis communication?", options: ["Apologise, explain, reassure, close","What happened, impact, action, prevention","Context, problem, blame, solution","Acknowledge, justify, minimise, move on"], correct: 1, explanation: "What happened (facts), impact (consequences), action (what you're doing), prevention (what stops this recurring). This structure answers the four questions the listener needs before they can regulate their response. It signals accountability and control simultaneously." },
      { q: "Why does over-explaining during crisis communication make things worse?", options: ["Because it wastes time","It signals that you are trying to manage the listener's reaction rather than inform them — which looks like panic, not control","Because listeners don't have time for detail","Because it reveals more problems than necessary"], correct: 1, explanation: "Over-explanation is an anxiety response — filling silence to avoid the discomfort of the listener's reaction. But listeners read it as loss of control. State the facts, the impact, the plan, and stop. Silence after delivering difficult news is a sign of steadiness, not weakness." }
    ]
  },
  32: {
    read: `
      <div class="lesson-content">
        <h3>Why asking for what you want is so hard</h3>
        <p>Negotiation is one of the most anxiety-provoking speaking situations precisely because it requires stating your own worth and needs clearly — which feels exposing and presumptuous. The fear is of being judged as greedy, difficult, or unrealistic. This fear causes most people to either avoid negotiating entirely or to undermine their own position the moment pushback arrives.</p>
        <p>The research on negotiation is consistent: most people leave significant value on the table because they never ask, or they ask and then immediately retreat. The first number stated in a negotiation has disproportionate influence — the anchor effect. If you anchor low, you'll settle low.</p>
        <div class="highlight-box">The most powerful negotiation technique is also the simplest: make your ask clearly and specifically, give one reason, then stop talking. Silence after an ask is not awkward — it's pressure on the other side.</div>
        <p>Handling pushback is where anxiety-driven speakers fail. "That's above our budget" is an invitation to negotiate, not a rejection. The composed response: acknowledge the constraint, restate your reasoning, and ask what flexibility exists. Don't retreat to a lower number immediately — that signals you didn't believe your original ask.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🤝</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Negotiating is professional and expected. The most powerful move is to make a clear, specific ask and then stay silent. Retreating immediately after pushback signals you didn't believe in your own position.</div>
      </div>`,
    scenario: { description: "You're asking for a raise. Your manager says: 'That's above our budget for this cycle.'", options: ["Acknowledge the constraint, then ask what flexibility exists", "Restate your value and the market data supporting your ask", "Suggest a phased approach — partial now, remainder at next review"] },
    quiz: [
      { q: "What is the 'anchor effect' in negotiation and why does it matter?", options: ["The feeling of being stuck in a negotiation","The first number stated has disproportionate influence on the final outcome","The technique of repeating your position multiple times","When both sides refuse to move"], correct: 1, explanation: "Anchoring is a well-documented cognitive bias — the first number mentioned in a negotiation sets a reference point that all subsequent discussion orbits around. If you anchor high (with justification), you'll settle higher. If you anchor low or let the other side anchor first, you'll typically settle lower." },
      { q: "What does immediately retreating after pushback signal to the other party?", options: ["That you're reasonable and flexible","That you didn't believe in your original position — which undermines your credibility","That you understand their constraints","That you're eager to reach an agreement"], correct: 1, explanation: "Immediate retreat after 'That's too much' signals that your opening position was inflated — which the other side will remember. Holding your position, acknowledging their constraint, and asking what flexibility exists is both more credible and more likely to result in a better outcome." }
    ]
  },
  33: {
    read: `
      <div class="lesson-content">
        <h3>Putting it all together under pressure</h3>
        <p>By this session, you have every tool you need. You understand the neuroscience of your anxiety. You can regulate your body before and during speaking. You have structural frameworks for answers, stories, and arguments. You've practised gradually escalating situations. This session is about integration — using all of it at once, under genuine pressure.</p>
        <p>A well-structured presentation has five elements: a hook that earns attention, a problem that creates stakes, evidence that builds credibility, a solution that answers the problem, and a call to action that gives the listener something to do. These five elements are present in almost every effective piece of public communication.</p>
        <div class="highlight-box">The hook is the most underused element. Most presentations start with context — "Today I want to talk about..." — which gives the audience no reason to lean in. A hook starts with something surprising, provocative, or immediately relevant.</div>
        <p>The measure of this session isn't perfection. It's coherence under stress. Can you hold a clear structure while anxious? Can you stay on your main point when you lose your thread? Can you project and pause when your body wants to rush and fill? These are the real skills being developed here — and they get better every time you practise them.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🎯</div>
        <div class="key-insight-text"><strong>Key insight:</strong> The measure of a good presentation isn't perfection — it's coherence under stress. Can you hold your structure when anxiety peaks? That's the real skill.</div>
      </div>`,
    timedSeconds: 180,
    quiz: [
      { q: "What are the five elements of a well-structured presentation?", options: ["Introduction, background, content, summary, conclusion","Hook, problem, evidence, solution, call to action","Opening, body, examples, argument, close","Context, issue, analysis, recommendation, next steps"], correct: 1, explanation: "Hook (earns attention), Problem (creates stakes), Evidence (builds credibility), Solution (answers the problem), Call to action (gives the listener something to do). This structure works because each element answers a specific question in the listener's mind." },
      { q: "Why do most presentations fail to hook the audience at the start?", options: ["Because they don't practise the opening enough","They start with context ('Today I want to talk about...') which gives the audience no reason to lean in","Because audiences have short attention spans","Because the opening is the hardest part to prepare"], correct: 1, explanation: "Context-first openings ('Today I'll be covering...') are the default because they feel safe. But they give the audience no reason to pay attention. A hook starts with something surprising, provocative, or immediately relevant to the listener's situation — earning their attention rather than assuming it." }
    ]
  },
  21: {
    read: `
      <div class="lesson-content">
        <h3>Generic is forgettable. Specific is memorable.</h3>
        <p>The most common mistake people make when trying to become better speakers is trying to sound more like a "good speaker" — polished, authoritative, impressive. The result is a kind of generic confidence that washes over listeners without leaving a mark.</p>
        <p>The speakers people actually remember are the ones who are most specifically themselves. The unusual detail. The unexpected perspective. The personal story nobody else could tell. These are what lodge in memory.</p>
        <div class="highlight-box">Specificity is the engine of memorable communication. "I grew up in a flat above a chip shop in Glasgow" is more interesting than "I had an ordinary childhood." Both might be true. Only one is worth listening to.</div>
        <p>This phase is about finding your voice — not a better voice, your voice. The goal is to identify what is distinctively you as a communicator, and then develop it deliberately. What do you notice that others miss? What do you care about that most people don't? What stories can only you tell?</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">💬</div>
        <div class="key-insight-text"><strong>Key insight:</strong> The goal is never to sound like a good speaker in general. It's to sound like the most fully developed version of yourself as a speaker specifically.</div>
      </div>`,
    quiz: [
      { q: "Why does trying to sound like a 'good speaker' often backfire?", options: ["Because audiences prefer informal speech","It produces generic confidence that is forgettable rather than distinctive and memorable","Because it requires too much preparation","Good speakers are intimidating to listen to"], correct: 1, explanation: "Generic polish sounds like everyone else who has tried to improve their speaking. What makes speakers memorable is specificity — the particular details, perspectives, and stories that only they could deliver. Trying to sound impressive often erases exactly what makes someone worth listening to." },
      { q: "What is the engine of memorable communication?", options: ["Volume and projection","Confidence and authority","Specificity — the particular details that only you could provide","Polish and preparation"], correct: 2, explanation: "Specific details — the exact place, the precise feeling, the particular story — are what lodge in memory. Generalities wash over listeners. The more specific you are, the more real and human you become to your audience." }
    ]
  },
  22: {
    read: `
      <div class="lesson-content">
        <h3>Why stories work on the brain</h3>
        <p>When you present information, the listener's brain processes it analytically — evaluating, categorising, judging. When you tell a story, something different happens. The brain activates as if it's experiencing the events directly. This is called neural coupling — the listener's brain begins to mirror the storyteller's.</p>
        <p>This is why stories are the most powerful communication tool humans have. They bypass evaluation and create shared experience. A well-told story doesn't just inform — it transports.</p>
        <div class="highlight-box">The four-part story structure: Situation (set the scene) → Complication (what went wrong or what was at stake) → Action (what you did) → Result (what happened). Every compelling story follows some version of this arc.</div>
        <p>The most common storytelling mistake is spending too long on the situation and rushing the complication and action — which is where all the interest lives. The other common mistake is no clear ending. A story without a result trails off. The result doesn't need to be triumphant — it just needs to be there.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">📖</div>
        <div class="key-insight-text"><strong>Key insight:</strong> A story's power comes from the complication — what was at stake, what went wrong, what had to be navigated. Without complication, there is no story, just a sequence of events.</div>
      </div>`,
    quiz: [
      { q: "What is 'neural coupling' and why does it matter for storytelling?", options: ["A technique for memorising stories","When the listener's brain mirrors the storyteller's, creating shared experience","The connection between emotion and memory","How the brain stores narrative information"], correct: 1, explanation: "Neural coupling means the listener's brain activates as if experiencing the events of the story directly. This is why stories bypass analytical evaluation — they create experience rather than just transmitting information. It's the neurological basis of why stories are so persuasive." },
      { q: "What is the most common storytelling mistake?", options: ["Making the story too personal","Too much detail in the complication","Spending too long on the situation and rushing the complication and action — where the interest lives","Not having a clear beginning"], correct: 2, explanation: "People instinctively over-explain the setup and rush what actually matters — the problem, the tension, the choice. The complication and action are where listener engagement peaks. The situation should be brief; the complication should breathe." }
    ]
  },
  23: {
    read: `
      <div class="lesson-content">
        <h3>Why emotion makes words land</h3>
        <p>Anxious speakers develop a habit of emotional neutrality — stripping feeling from their voice as a control mechanism. If I don't show emotion, I can't lose control of it. This feels safe. But it has a cost: words without feeling don't land. They're heard but not felt.</p>
        <p>The neuroscience is clear: emotionally charged information is processed differently and remembered longer. When you speak with genuine feeling, you activate the listener's limbic system — the emotional brain — alongside their cortex. Information delivered with feeling is significantly more persuasive and more memorable.</p>
        <div class="highlight-box">The goal isn't to perform emotion. It's to let genuine feeling be audible. There's a crucial difference: performed emotion feels manipulative. Genuine emotion that's been allowed to surface feels human.</div>
        <p>The key is permission — giving yourself permission to feel something while speaking, rather than managing feeling out of the experience. This doesn't mean losing control. It means trusting that your emotion is appropriate and that showing it will connect you to your listener rather than expose you to risk.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">❤️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Emotional neutrality feels safe but costs connection. The most influential speakers aren't the calmest — they're the ones who let genuine feeling be heard.</div>
      </div>`,
    quiz: [
      { q: "Why do anxious speakers tend to strip emotion from their voice?", options: ["Because emotion makes them sound less credible","As a control mechanism — if I don't show emotion, I can't lose control of it","Because audiences prefer neutral delivery","Because emotional speaking uses more cognitive resources"], correct: 1, explanation: "Emotional neutrality is a coping strategy for anxiety — it feels like control. But the cost is connection. Words without feeling don't land in the same way. The listener can hear that something is being withheld, even if they can't name it." },
      { q: "What is the difference between performed emotion and genuine emotion in speaking?", options: ["There is no difference — all emotion in speaking is performance","Performed emotion feels manipulative; genuine emotion that's been allowed to surface feels human","Performed emotion is more effective because it's controlled","Genuine emotion is only appropriate in personal conversations"], correct: 1, explanation: "Audiences are extremely sensitive to authenticity. Performed emotion — laid on top of neutral delivery — reads as manipulation. Genuine emotion that the speaker has given themselves permission to feel reads as human and trustworthy. The difference is felt, not analysed." }
    ]
  },
  24: {
    read: `
      <div class="lesson-content">
        <h3>Why trying to be funny makes you unfunny</h3>
        <p>Humour in speaking is almost always counterproductive when it's performed — when you can see someone trying to be funny, the comedy dies. Genuine humour emerges from the same place as genuine emotion: specificity, truth, and permission.</p>
        <p>The funniest spoken moments are almost always observations about real situations — the absurdity of something that actually happened, the gap between what was expected and what occurred, the uncomfortable truth everyone recognises but nobody says. This kind of humour requires no setup, no punchline, just honesty.</p>
        <div class="highlight-box">The comedy triangle: Specificity + Truth + Timing. The more specific and true the observation, the funnier it is. Timing is simply giving the listener space to respond — pausing after the funny thing rather than rushing past it.</div>
        <p>Self-deprecating humour — laughing at your own mistakes or limitations — is one of the fastest ways to connect with an audience. It signals confidence (I'm secure enough to laugh at myself) and humanity (I'm not trying to be perfect). It also disarms the evaluative stance listeners sometimes bring to speakers.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">😄</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Genuine humour comes from truth and specificity, not from trying to be funny. The more honest and specific the observation, the more naturally the comedy emerges.</div>
      </div>`,
    quiz: [
      { q: "Why does trying to be funny usually make speaking less funny?", options: ["Because audiences don't appreciate humour in professional contexts","When you can see someone trying to be funny, the comedy dies — performed humour lacks authenticity","Because humour requires rehearsal to land properly","Because funny people are naturally funny and it can't be learned"], correct: 1, explanation: "Performed humour — where the intention to be funny is visible — creates distance. The audience becomes a judge rather than a participant. Genuine humour emerges naturally from honest observation of real situations. You can't perform your way to funny; you can notice your way there." },
      { q: "What makes self-deprecating humour effective for speakers?", options: ["It makes the speaker seem less threatening","It signals both confidence and humanity — and disarms the evaluative stance of listeners","It gets a guaranteed laugh","It shifts attention away from the speaker's weaknesses"], correct: 1, explanation: "Self-deprecation works on multiple levels: it signals that you're secure enough to laugh at yourself (confidence), that you're human and imperfect (relatability), and that you're not performing a polished persona (authenticity). All of these reduce the distance between speaker and listener." }
    ]
  },
  25: {
    read: `
      <div class="lesson-content">
        <h3>There is no correct speaking style</h3>
        <p>One of the most persistent myths about public speaking is that there's an ideal style — measured, authoritative, energetic, warm — and that the goal of improving is to move toward it. This is wrong and it's damaging. Trying to speak like someone else erases what makes you worth listening to.</p>
        <p>Every effective communicator has a distinct style that emerges from who they actually are: their background, their thinking patterns, their emotional register, their natural pace. Some of the most influential speakers are quiet. Some are intense. Some are funny. Some are rigorous. None of them are trying to be someone else.</p>
        <div class="highlight-box">Your speaking style at its best is simply who you are, communicated clearly and without apology. The work of developing it is the work of removing the interference — the anxiety, the performance, the self-consciousness — that gets in the way.</div>
        <p>This session is diagnostic. You're mapping your natural communication style — not what you think it should be, but what it actually is. That map is the foundation for everything that follows.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🪞</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Developing your voice isn't about adding things — it's about removing the interference that stops your natural voice from coming through clearly.</div>
      </div>`,
    quiz: [
      { q: "What is the most persistent myth about improving as a speaker?", options: ["That practice makes perfect","That there's an ideal speaking style to move toward — when actually the goal is to develop your own","That confidence is the most important quality","That preparation eliminates anxiety"], correct: 1, explanation: "The idea that there's a correct speaking style causes enormous damage — it makes people try to speak like someone else, which erases specificity and authenticity. The goal is never to speak like a great speaker in general. It's to speak like the most developed version of yourself specifically." },
      { q: "What does 'developing your voice' actually involve?", options: ["Adding new techniques and frameworks","Copying successful communicators you admire","Removing the anxiety, performance, and self-consciousness that interfere with your natural voice","Practising until speaking feels effortless"], correct: 2, explanation: "Your natural voice — the one that emerges when you're relaxed, engaged, and not performing — is already good. The work isn't about adding a better voice on top of it. It's about removing the interference that suppresses it: the anxiety, the self-monitoring, the performance." }
    ]
  },
  26: {
    read: `
      <div class="lesson-content">
        <h3>The shift from performing to connecting</h3>
        <p>Most speaking anxiety is driven by an audience-orientation: What do they think of me? How am I coming across? Am I making sense? This focus on audience evaluation is self-perpetuating — the more you monitor their response, the more anxious you become, and the more your performance degrades.</p>
        <p>Connection orientation is the antidote. Instead of "how am I doing?", the question becomes "is this landing for them?" — a subtle but profound shift in attention. You're still aware of your audience, but you're focusing on them rather than on yourself being watched by them.</p>
        <div class="highlight-box">The simplest connection technique: speak to one person. Not the room, not the camera, not a vague audience — one real person whose understanding you care about. This transforms performance into conversation.</div>
        <p>When you speak to connect rather than to impress, something changes in every measurable dimension: pace slows naturally, filler words drop, eye contact becomes genuine, voice becomes warmer. These aren't techniques you apply — they emerge automatically when the goal shifts from performance to connection.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🤝</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Performance anxiety is self-focused attention. Connection is other-focused attention. Shifting from "how am I doing?" to "is this landing for them?" changes everything downstream.</div>
      </div>`,
    quiz: [
      { q: "What is the difference between 'performance orientation' and 'connection orientation'?", options: ["Performance orientation is more professional; connection is more casual","Performance orientation focuses on how you're coming across; connection orientation focuses on whether it's landing for the listener","Connection orientation is less prepared","Performance orientation requires an audience; connection orientation works one-on-one"], correct: 1, explanation: "Performance orientation keeps attention on the self — being evaluated, being judged. Connection orientation shifts attention to the other person — their understanding, their response, their needs. This shift resolves much of the self-consciousness that drives anxiety." },
      { q: "Why does speaking to 'one person' rather than 'the room' reduce anxiety?", options: ["Because individuals are less intimidating than groups","It transforms performance into conversation — a context where most people are naturally comfortable","Because you can make eye contact with one person","Because one person gives more feedback than a group"], correct: 1, explanation: "Most people who struggle with public speaking are comfortable in conversation. Speaking to one real person — even imagined — activates the same neural and emotional systems as conversation rather than performance. The anxiety of 'audience' disappears when it becomes 'person'." }
    ]
  },
  27: {
    read: `
      <div class="lesson-content">
        <h3>The story that carries you</h3>
        <p>Every effective communicator has at least one signature story — a narrative that encapsulates something essential about who they are, what they believe, or what they've learned. It's not necessarily dramatic or impressive. It's specific, true, and reveals character.</p>
        <p>A signature story is valuable for several reasons: it's repeatable (you can tell it many times and it gets better), it's distinctive (nobody else has it), and it does the work of introduction more powerfully than any list of credentials could.</p>
        <div class="highlight-box">The most powerful signature stories don't end with triumph. They end with insight — something the speaker genuinely learned, noticed, or had to reckon with. Insight is more relatable than success.</div>
        <p>Finding your signature story is a process of excavation, not invention. It's already there — in the experiences that shaped your thinking, the moments that changed direction, the failures that taught more than the successes. This session is about surfacing it.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">⭐</div>
        <div class="key-insight-text"><strong>Key insight:</strong> A signature story isn't about being impressive — it's about being specific and true. The best ones end with insight, not triumph. Insight is more relatable than success.</div>
      </div>`,
    quiz: [
      { q: "What makes a signature story 'signature'?", options: ["It's your most impressive achievement","It's dramatic and emotionally powerful","It's specific, true, reveals character, and only you could tell it","It's rehearsed until it's perfectly delivered"], correct: 2, explanation: "A signature story isn't defined by its drama or impressiveness. It's defined by specificity and character — it reveals something genuine about who you are and what you've learned. Its value is that it's unrepeatable by anyone else." },
      { q: "Why do the most powerful signature stories end with insight rather than triumph?", options: ["Because audiences are cynical about success stories","Because insight is more relatable than triumph — everyone has struggled, not everyone has succeeded","Because triumph sounds arrogant","Because insight is more memorable than outcomes"], correct: 1, explanation: "Triumph creates distance — not everyone relates to winning. Insight — something genuinely learned from difficulty, failure, or unexpected experience — creates connection. It signals honesty and self-awareness, which are far more compelling than achievement." }
    ]
  },
  6: {
    read: `
      <div class="lesson-content">
        <h3>Your breath is your remote control</h3>
        <p>When anxiety hits, your breathing becomes shallow and fast — which actually makes the anxiety worse. Short breaths signal danger to your brain, which releases more adrenaline, which makes you breathe faster. It's a loop.</p>
        <p>The good news: you can break that loop deliberately. Slow, controlled breathing directly activates your parasympathetic nervous system — the biological "calm down" signal. It's not a metaphor. It's physiology.</p>
        <div class="highlight-box">Box breathing: inhale 4 counts, hold 4, exhale 4, hold 4. One cycle takes 16 seconds. Three cycles takes under a minute — and measurably lowers your heart rate.</div>
        <p>This works because the exhale activates the vagus nerve, which tells your heart to slow down. The "hold" phases give your nervous system time to register the change. Four counts in, hold, four counts out, hold — repeat until you feel the shift.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🫁</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Breathing is the only autonomic function you can consciously control — making it the fastest, most accessible tool for managing anxiety in real time.</div>
      </div>`,
    quiz: [
      { q: "Why does shallow, fast breathing make anxiety worse rather than better?", options: ["It doesn't — fast breathing always helps calm you down","It signals danger to the brain, which releases more adrenaline","It reduces oxygen to the brain","It makes your voice sound nervous"], correct: 1, explanation: "Shallow breathing is part of the fight-or-flight response. It signals to your brain that you're in danger, which triggers more adrenaline — creating a feedback loop that escalates anxiety." },
      { q: "What specifically makes box breathing effective at reducing anxiety?", options: ["It distracts your mind from being nervous","The exhale activates the vagus nerve, slowing the heart rate","It increases oxygen levels in the blood","It gives you something to count instead of worrying"], correct: 1, explanation: "The exhale phase activates the vagus nerve — the main pathway of the parasympathetic nervous system. This directly signals the heart to slow down. It's a physiological response, not just distraction." }
    ]
  },
  7: {
    read: `
      <div class="lesson-content">
        <h3>Where anxiety hides in your body</h3>
        <p>Most people carry physical tension without realising it. By the time they're aware of it, it's already affecting their voice — making it tighter, higher, or less resonant. A pre-speaking body scan takes 60 seconds and addresses this before it becomes a problem.</p>
        <p>The most common tension points for speaking anxiety: the jaw (clenched or held), the shoulders (raised or pulled forward), the chest (tight or shallow), the stomach (knotted), and the hands (gripped or fidgeting).</p>
        <div class="highlight-box">Jaw tension directly affects voice quality. If your jaw is tight, your voice will be too. Releasing it — even slightly — opens resonance and lowers your register.</div>
        <p>The technique is simple: scan from top to bottom, notice where you're holding tension, and consciously release it. Don't try to relax everything at once. Name each area, breathe into it, and let it go. Two or three passes is usually enough.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🧘</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Physical tension and anxiety reinforce each other. Releasing tension in the body directly reduces the feeling of anxiety — not just the symptoms of it.</div>
      </div>`,
    quiz: [
      { q: "Why is jaw tension particularly important for speakers to address?", options: ["Because it causes headaches","Because jaw tension directly affects voice quality and resonance","Because it makes you look nervous","Because it affects how clearly you pronounce words"], correct: 1, explanation: "The jaw is directly connected to vocal resonance. A tense jaw produces a tighter, less resonant voice. Releasing it opens your natural vocal range and lowers your register — making you sound more calm and authoritative." },
      { q: "What is the relationship between physical tension and the feeling of anxiety?", options: ["Tension is just a symptom — it doesn't affect anxiety itself","They reinforce each other — releasing tension reduces anxiety, not just its symptoms","Tension is always caused by anxiety, never the other way around","Physical relaxation only affects the body, not the mind"], correct: 1, explanation: "The body-mind connection runs both ways. Just as anxiety creates tension, releasing tension signals safety to the nervous system — directly reducing the experience of anxiety, not just its physical symptoms." }
    ]
  },
  8: {
    read: `
      <div class="lesson-content">
        <h3>The power of saying nothing</h3>
        <p>Filler words — um, uh, like, basically, you know — are a nervous reflex. They exist to fill silence because silence feels dangerous. But to your listener, a pause sounds like confidence. To you, it feels like an eternity. That gap between perception and reality is what this session trains.</p>
        <p>Here's the counterintuitive truth: a two-second pause is almost never noticed by the listener. But it is noticed when you don't pause — when you rush, fill every gap, and never give your words room to land.</p>
        <div class="highlight-box">The most powerful speakers use silence deliberately. A pause before an important point signals: what I'm about to say matters. Listen.</div>
        <p>The fix isn't to think "don't say um" — that creates more anxiety. The fix is to get comfortable with silence. Practice pausing mid-sentence. Let gaps exist. Breathe into them. Over time, your brain stops treating silence as a threat that needs to be filled.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🤫</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Silence feels much longer to the speaker than to the listener. A 2-second pause that feels uncomfortable to you sounds like authority to the room.</div>
      </div>`,
    quiz: [
      { q: "Why do filler words like 'um' and 'like' appear when we speak?", options: ["Because we haven't prepared enough","As a nervous reflex to fill silence that feels uncomfortable","Because our vocabulary isn't strong enough","Because we're speaking too quickly"], correct: 1, explanation: "Filler words are a comfort reflex — silence feels threatening, so we fill it automatically. It's not about vocabulary or preparation. It's about your relationship with silence." },
      { q: "What is the most effective way to reduce filler words?", options: ["Think hard about not saying them","Prepare more thoroughly before speaking","Get comfortable with silence so your brain stops treating it as a threat","Speak faster so there's less time for fillers"], correct: 2, explanation: "Telling yourself 'don't say um' creates self-consciousness that makes things worse. The real fix is practising silence — letting gaps exist and breathe — until your nervous system stops treating silence as dangerous." }
    ]
  },
  9: {
    read: `
      <div class="lesson-content">
        <h3>When panic hits mid-speech</h3>
        <p>Sometimes anxiety doesn't build gradually — it spikes suddenly. Your mind goes blank, your heart races, and you feel completely derailed. This is an amygdala hijack: your threat system has fired so strongly that your prefrontal cortex — the thinking brain — temporarily goes offline.</p>
        <p>The 5-4-3-2-1 grounding technique works by forcing your brain to engage the senses, which pulls attention out of the anxious thought loop and back into the present moment. It's not a magic trick — it's neuroscience.</p>
        <div class="highlight-box">5 things you can see. 4 you can physically feel. 3 you can hear. 2 you can smell. 1 you can taste. Each step pulls your brain further from the anxiety spiral and deeper into right now.</div>
        <p>The key is doing it slowly and genuinely — not rattling through it. Really look at what you can see. Really feel the weight of your feet on the floor. The technique works through genuine sensory attention, not just recitation.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">⚓</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Anxiety lives in anticipation of the future or rumination about the past. Sensory grounding forces the brain into the present — where anxiety cannot survive.</div>
      </div>`,
    quiz: [
      { q: "What is an 'amygdala hijack' and why does it cause mind blanks?", options: ["When you forget what you were going to say","When the threat system fires so strongly it temporarily takes the thinking brain offline","When you speak too fast and lose your train of thought","When physical anxiety symptoms become too distracting"], correct: 1, explanation: "An amygdala hijack is when the fear response is so intense it overrides the prefrontal cortex — your thinking brain. This is why mind blanks feel sudden and total. The rational mind has literally been taken offline by the survival system." },
      { q: "Why must the 5-4-3-2-1 technique be done slowly and genuinely?", options: ["To make it last long enough to work","Because rushing it signals more anxiety to the brain","It works through genuine sensory attention, not just recitation","To give yourself time to remember the next step"], correct: 2, explanation: "The technique works by genuinely engaging the senses — which activates different neural pathways to the anxiety loop. Rushing through it as a checklist doesn't engage the senses. You need to actually see, feel, and hear each item." }
    ]
  },
  10: {
    read: `
      <div class="lesson-content">
        <h3>Volume is confidence made audible</h3>
        <p>Quiet speakers are perceived as less confident — not because they're less capable, but because volume is one of the primary signals humans use to assess certainty and authority. This isn't fair, but it is consistent.</p>
        <p>Here's what most people don't realise: speaking more quietly when anxious makes you feel more anxious. Your brain interprets your own quiet voice as evidence that you're not confident — and responds accordingly. It's another feedback loop.</p>
        <div class="highlight-box">Projection is not about being loud. It's about speaking to the back of the room with intention. The difference is direction and energy, not volume.</div>
        <p>The technique: imagine your voice needs to reach the furthest person in the room. Not shout — project. Feel it resonating in your chest rather than just your throat. A chest voice is richer, calmer, and carries more authority than a throat voice. Anxiety typically pushes the voice upward — into the throat, then the head. Grounding it back in the chest is a learnable skill.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🎙️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Your voice isn't just communicating to others — it's communicating to you. A projected, chest-resonant voice signals confidence to your own nervous system.</div>
      </div>`,
    quiz: [
      { q: "Why does speaking quietly when anxious tend to make anxiety worse?", options: ["Because people ask you to repeat yourself, which is embarrassing","Your brain interprets your own quiet voice as evidence of low confidence, increasing anxiety","Because you can't hear your own mistakes","Because quiet speaking uses more energy"], correct: 1, explanation: "The feedback loop runs both ways. Just as anxiety makes you speak quietly, speaking quietly sends a 'I'm not confident' signal to your own brain — which increases the anxiety. Deliberately projecting breaks this loop." },
      { q: "What is the difference between projecting and shouting?", options: ["There is no real difference — both are just louder","Projection is about direction and resonance, not raw volume","Shouting is for large rooms, projection is for small ones","Projection uses the chest voice, shouting uses the throat voice"], correct: 1, explanation: "Projection is intentional — directing your voice with energy and resonance toward your audience. Shouting is just increased volume without control. Projected speech comes from the chest and feels grounded; shouting feels forced and tight." }
    ]
  },
  11: {
    read: `
      <div class="lesson-content">
        <h3>Building your pre-speech routine</h3>
        <p>Elite performers — athletes, surgeons, musicians — use pre-performance routines not because they're superstitious but because predictability calms the nervous system. A routine signals: we've done this before. This is safe. We know what happens next.</p>
        <p>The routine doesn't need to be elaborate. In fact, simpler is better — something you can do in 60 seconds anywhere: before a meeting, in a bathroom before a presentation, standing outside a room. The key is consistency.</p>
        <div class="highlight-box">A routine only works if you repeat it enough times to create an association. The more you use it, the stronger the conditioned calm response becomes.</div>
        <p>An effective pre-speaking routine typically combines three elements: a breathing technique to physiologically calm the body, a physical release to drop tension, and a grounding or focusing moment to bring your attention to the present. You've now learned all three. This session is about combining them into something that's yours.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🎯</div>
        <div class="key-insight-text"><strong>Key insight:</strong> A pre-speech routine works through conditioned association — the more consistently you use it, the stronger the automatic calm response becomes.</div>
      </div>`,
    quiz: [
      { q: "Why do elite performers use pre-performance routines?", options: ["To pass the time before performing","Because predictability signals safety to the nervous system — 'we've done this before'","To show the audience they take it seriously","To physically warm up their body"], correct: 1, explanation: "Routines work through neural conditioning. Repeating the same sequence before a high-stakes moment teaches the nervous system to associate that sequence with safety and readiness. Over time, starting the routine triggers an automatic calm response." },
      { q: "What are the three elements of an effective pre-speaking routine?", options: ["Preparation, rehearsal, and review","Breathing, physical tension release, and a grounding moment","Visualisation, affirmation, and movement","Warm-up, practice, and recovery"], correct: 1, explanation: "These three elements address the three levels of the anxiety response: breathing addresses the physiological (heart rate, breath); tension release addresses the physical (muscle tension); grounding addresses the mental (pulling attention to the present)." }
    ]
  },
  12: {
    read: `
      <div class="lesson-content">
        <h3>Rewriting the story your body tells</h3>
        <p>Racing heart. Tight chest. Dry mouth. Heightened alertness. These are the physical symptoms of anxiety — but they are physiologically identical to excitement. The difference isn't in the body. It's in the label your brain puts on those sensations.</p>
        <p>Psychologist Alison Wood Brooks at Harvard found that people who reframe pre-performance anxiety as excitement — out loud, saying "I am excited" — perform measurably better than those who try to calm down or those who say nothing.</p>
        <div class="highlight-box">Trying to calm down is fighting your biology. Reframing anxiety as excitement works with it — channelling the same arousal state into a different, more useful emotion.</div>
        <p>This isn't positive thinking. It's cognitive reappraisal — a well-studied psychological technique where you change the meaning of a situation rather than trying to change the situation itself. Your body is already charged. The question is whether you interpret that charge as threat or as readiness.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">⚡</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Anxiety and excitement are physiologically identical. The only difference is the label. Saying "I'm excited" out loud shifts the interpretation — and measurably improves performance.</div>
      </div>`,
    quiz: [
      { q: "What did Harvard research find about reframing anxiety as excitement?", options: ["It made people more anxious because they were pretending","It had no effect compared to calming techniques","People who said 'I am excited' performed measurably better","It only works for mild anxiety, not severe cases"], correct: 2, explanation: "Alison Wood Brooks' research showed that saying 'I am excited' out loud — compared to trying to calm down — improved performance on public speaking, math tests, and singing. The reframe works because it uses the arousal rather than fighting it." },
      { q: "Why is 'I'm excited' more effective than 'calm down' as a pre-speech strategy?", options: ["Because excitement is always better than calmness","Reframing works with the body's arousal state; trying to calm down fights it","Because saying it out loud makes you believe it","Because 'calm down' is too negative a phrase"], correct: 1, explanation: "Trying to calm down is trying to reduce physiological arousal — which is very difficult in the moment. Reframing to excitement keeps the same arousal level but channels it into a positive, approach-oriented emotion. You're working with your biology, not against it." }
    ]
  },
  13: {
    read: `
      <div class="lesson-content">
        <h3>The ladder that changes everything</h3>
        <p>Exposure therapy is the most evidence-based treatment for anxiety disorders. The core principle is simple: you approach what you fear, gradually and repeatedly, until your nervous system learns through direct experience that the feared situation is survivable — even manageable.</p>
        <p>The anxiety hierarchy — sometimes called an anxiety ladder — is the map for that process. It lists feared situations from least to most frightening, giving you a structured path from where you are to where you want to be.</p>
        <div class="highlight-box">The critical rule: you never skip rungs. You work a level until your anxiety response drops to a manageable level — typically 50% of its original intensity — before moving up.</div>
        <p>Your hierarchy is personal. What's terrifying for one person is trivial for another. There's no right or wrong list — there's only your list. The value is in the specificity: a vague fear of "public speaking" is hard to address. A specific fear of "being asked a question in a board meeting" gives you something to work with.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🪜</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Exposure therapy works by teaching the nervous system through experience, not logic. Your brain doesn't update its threat register through reassurance — only through doing.</div>
      </div>`,
    quiz: [
      { q: "What is the critical rule when working through an anxiety hierarchy?", options: ["Move up as quickly as possible to build momentum","Skip rungs that seem too similar","Never skip rungs — work each level until anxiety drops before moving up","Always start at the most feared situation for maximum impact"], correct: 2, explanation: "Moving too fast defeats the purpose. You need to stay at each rung long enough for your nervous system to habituate — to learn that this level is safe. Only when your anxiety at that level has significantly reduced should you move up." },
      { q: "Why is a specific fear more useful than a general one in exposure therapy?", options: ["Because specific fears are less serious","General fears can't be treated","Specificity gives you something concrete to practice and measure progress against","Because specific fears are easier to avoid"], correct: 2, explanation: "Vague fears ('public speaking') are hard to address because there's nothing concrete to practise. Specific fears ('answering an unexpected question in a team meeting') give you an exact situation to rehearse, approach gradually, and measure your response to." }
    ]
  },
  14: {
    read: `
      <div class="lesson-content">
        <h3>The most underused speaking practice</h3>
        <p>Recording yourself and listening back is one of the highest-leverage things you can do to improve your speaking. Research consistently shows it accelerates improvement faster than almost any other single practice. And almost nobody does it.</p>
        <p>Why? Because most people can't stand hearing their own voice. The voice you hear in your head is different from what others hear — it has more bass, more resonance. Your recorded voice sounds thin and strange. This discomfort is the exact reason listening back is so powerful.</p>
        <div class="highlight-box">Your listeners hear your recorded voice every time you speak. Getting comfortable with it means getting accurate about how you actually come across — rather than how you imagine you do.</div>
        <p>This session starts at the very bottom of the hierarchy: speaking with no social audience at all. Just you and a recording. It sounds trivial. It isn't. For many people with speaking anxiety, even this first step produces measurable anxiety. That's important data — and important work.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🎧</div>
        <div class="key-insight-text"><strong>Key insight:</strong> The discomfort of hearing your recorded voice is itself exposure work. Getting comfortable with how you sound is a prerequisite for getting comfortable with how others hear you.</div>
      </div>`,
    quiz: [
      { q: "Why do most people dislike the sound of their recorded voice?", options: ["Because recording equipment distorts the voice","Because the recorded voice is different from the internally-heard voice, which has added bass and resonance","Because anxious people have objectively worse voices","Because we're more self-critical when we can't change what's happening"], correct: 1, explanation: "You hear your own voice through bone conduction as well as air — which adds lower frequencies. Others only hear the air-conducted version. Your recorded voice is actually what everyone hears; the internal version is a distortion." },
      { q: "Why is 'speaking to yourself with a recording' a meaningful first step even though there's no audience?", options: ["It isn't — you need an audience for real exposure practice","For many people with anxiety, even this step produces anxiety — making it real exposure work","It's mainly useful for getting used to the sound of your voice","It's a warm-up before the real practice begins"], correct: 1, explanation: "The anxiety hierarchy starts where anxiety actually exists — and for many people, even speaking alone with a microphone produces measurable anxiety. This is real exposure, not a warm-up. The nervous system is being trained from the very first recording." }
    ]
  },
  15: {
    read: `
      <div class="lesson-content">
        <h3>Why passion unlocks your best voice</h3>
        <p>When people talk about things they genuinely love, something changes. The voice becomes warmer. The pace becomes more natural. Filler words drop. Eye contact (if there's an audience) increases. The speaker leans forward. This isn't performance — it's what happens when the brain shifts out of threat mode.</p>
        <p>Anxiety narrows attention onto the self — how am I coming across? What do they think of me? Am I making sense? Passion shifts attention outward — onto the topic, the ideas, the other person. That shift is one of the fastest ways to reduce performance anxiety.</p>
        <div class="highlight-box">The voice you use when talking about your favourite subject is your natural speaking voice. The goal of this programme is to make that voice available in every situation.</div>
        <p>This session is deliberately easy. There's a reason it comes early in Phase 3 — you need to experience what good speaking feels like in your body, so you have something to aim for. Notice the difference. That difference is important data.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">❤️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Passion shifts attention from self-monitoring to subject — which is the same mental shift that reduces performance anxiety. Talking about what you love is the clearest window into your natural speaking voice.</div>
      </div>`,
    quiz: [
      { q: "Why do filler words and anxiety symptoms reduce when people talk about something they love?", options: ["Because they've rehearsed those topics more","Passion shifts attention from self-monitoring to subject, reducing the anxiety feedback loop","Because passion topics are always simpler to explain","Because the brain relaxes when talking about positive things"], correct: 1, explanation: "Speaking anxiety is partly maintained by self-focused attention — monitoring your own performance. Passion shifts attention outward to the topic and the ideas. This reduces the self-monitoring that fuels anxiety, allowing natural speaking to emerge." },
      { q: "What is the purpose of an 'easy' passion session early in the exposure phase?", options: ["To give you a break from challenging work","To experience what your natural voice feels like — giving you something concrete to aim for","To build confidence before the hard sessions","Because passion topics are the only safe starting point"], correct: 1, explanation: "You need to know what you're working toward. Experiencing your natural, unguarded voice — the one that emerges when you're talking about something you love — gives you a felt sense of the goal. That embodied reference p