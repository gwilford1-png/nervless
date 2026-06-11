/* ============================================================
   Nervless — JOURNAL  (js/journal.js)
   Real-world missions, event tracking, anxiety logging, voice debriefs.
   The evidence record: feared-vs-happened over time.
   Loads after ui.js + suds.js, before app.js.
   ============================================================ */

// ── MISSION CONTENT ──
// One real-world mission per phase from Phase 3 onward. Calibrated to the
// phase's theme. Gating: user must LOG AN ATTEMPT (bail counts) to advance.
const MISSIONS = {
  3: {
    id: 'm3',
    title: 'Ask one question out loud in a meeting or group this week.',
    why: 'Phase 3 is graduated exposure. A single spoken question in a real room is the smallest rung that still counts — low stakes, real people.',
    feared_prompt: 'What are you afraid will happen when you speak up?'
  },
  4: {
    id: 'm4',
    title: 'Share an opinion you would normally keep to yourself — in person.',
    why: 'You have been reframing the catastrophic thoughts. Now test the new narrative against reality: say the thing, watch what actually happens.',
    feared_prompt: 'What do you predict the reaction will be?'
  },
  5: {
    id: 'm5',
    title: 'Tell someone a short story this week — something that happened to you.',
    why: 'Phase 5 is your voice. Storytelling out loud, to one person, is the most natural rep there is.',
    feared_prompt: 'What are you worried about as you tell it?'
  },
  6: {
    id: 'm6',
    title: 'Voice a disagreement or push back on something — calmly, out loud.',
    why: 'Raising the stakes. Holding a position under mild social pressure is the exact skill Phase 6 builds.',
    feared_prompt: 'What do you fear will happen if you disagree?'
  },
  7: {
    id: 'm7',
    title: 'Speak up in a moment you did not prepare for — answer a question on the spot.',
    why: 'Phase 7 is in-the-moment tools. Use one (the pause, the breath, PREP) when caught off guard, for real.',
    feared_prompt: 'What do you fear about being put on the spot?'
  },
  8: {
    id: 'm8',
    title: 'Volunteer to present, lead, or speak to a group — however small.',
    why: 'Performing under pressure. Put yourself in the chair on purpose. This is the rung the whole journey was building toward.',
    feared_prompt: 'What is the worst you imagine happening?'
  },
  9: {
    id: 'm9',
    title: 'This week, take one speaking opportunity you would have avoided before.',
    why: 'Maintenance is about not letting the ground you have gained slip back. Keep choosing the harder option.',
    feared_prompt: 'What pull toward avoidance are you noticing?'
  }
};

const Journal = (function () {

  let _sb = () => (typeof DB !== 'undefined' && DB.getClient ? DB.getClient() : null);
  let _events = [];
  let _logs = [];
  let _loaded = false;

  // debrief recording state
  const rec = { isRecording: false, mediaRecorder: null, chunks: [], seconds: 0, timer: null, transcript: '' };
  // the log being composed
  let _draft = null;

  // ── Local cache (works offline / signed out) ──
  function _loadLocal() {
    try {
      _events = JSON.parse(localStorage.getItem('nervless_journal_events') || '[]');
      _logs   = JSON.parse(localStorage.getItem('nervless_journal_logs')   || '[]');
    } catch { _events = []; _logs = []; }
  }
  function _saveLocal() {
    localStorage.setItem('nervless_journal_events', JSON.stringify(_events.slice(-100)));
    localStorage.setItem('nervless_journal_logs', JSON.stringify(_logs.slice(-300)));
  }

  async function load() {
    _loadLocal();
    _loaded = true;
    // Pull from cloud if signed in
    if (typeof DB !== 'undefined' && DB.isSignedIn && DB.isSignedIn() && DB.loadJournal) {
      try {
        const data = await DB.loadJournal();
        if (data) {
          if (data.events) _events = data.events;
          if (data.logs) _logs = data.logs;
          _saveLocal();
        }
      } catch (e) { console.warn('[Journal] cloud load failed:', e); }
    }
  }

  // ── Evidence stats ──
  function stats() {
    const withOutcome = _logs.filter(l => l.outcome && !l.bailed);
    const fearedNotHappened = withOutcome.filter(l => l.outcome === 'no').length;
    return {
      total: _logs.length,
      missions: _logs.filter(l => l.kind === 'mission').length,
      withOutcome: withOutcome.length,
      fearedNotHappened
    };
  }

  // Evidence line for surfacing before high-stakes moments
  function evidenceLine() {
    const s = stats();
    if (s.withOutcome < 2) return null;
    return `${s.fearedNotHappened} of your ${s.withOutcome} feared outcomes didn't happen.`;
  }

  function hasLoggedMission(phase) {
    const m = MISSIONS[phase];
    if (!m) return true; // no mission for this phase = no gate
    return _logs.some(l => l.kind === 'mission' && l.mission_id === m.id);
  }

  // ── Persist a completed log ──
  async function _commitLog(log) {
    log.id = 'jl_' + Date.now();
    log.created_at = new Date().toISOString();
    _logs.unshift(log);
    _saveLocal();
    if (typeof DB !== 'undefined' && DB.isSignedIn && DB.isSignedIn() && DB.saveJournalLog) {
      try { await DB.saveJournalLog(log); } catch (e) { console.warn('[Journal] save failed:', e); }
    }
    return log;
  }

  async function _commitEvent(ev) {
    ev.id = 'je_' + Date.now();
    ev.created_at = new Date().toISOString();
    ev.status = 'upcoming';
    _events.unshift(ev);
    _saveLocal();
    if (typeof DB !== 'undefined' && DB.isSignedIn && DB.isSignedIn() && DB.saveJournalEvent) {
      try { await DB.saveJournalEvent(ev); } catch (e) { console.warn('[Journal] event save failed:', e); }
    }
    return ev;
  }

  // ── Accessors ──
  function events() { return _events; }
  function logs() { return _logs; }
  function mission(phase) { return MISSIONS[phase] || null; }

  return {
    load, stats, evidenceLine, hasLoggedMission, events, logs, mission,
    _commitLog, _commitEvent,
    get rec() { return rec; },
    get draft() { return _draft; },
    set draft(v) { _draft = v; }
  };
})();
