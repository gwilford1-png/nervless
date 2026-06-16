/* ============================================================
   Nervless — JOURNAL UI  (js/journal-ui.js)
   Renders the Journal screen, log composer flow, voice debrief.
   Loads after journal.js.
   ============================================================ */

// hook used by _transcribeDebrief to continue whichever flow is active
let _afterDebriefTranscribe = null;

// ── Render the Journal tab ──
async function showJournal() {
  setActiveNav('journal');
  if (typeof stopSpeaking === 'function') stopSpeaking();
  await Journal.load();
  renderJournalHome();
  showScreen('screen-journal');
}

function renderJournalHome() {
  const s = Journal.stats();
  const evidence = Journal.evidenceLine();
  const events = Journal.events().filter(e => e.status === 'upcoming');
  const logs = Journal.logs();

  // Evidence banner
  const evBox = document.getElementById('jr-evidence');
  if (evBox) {
    if (evidence) {
      evBox.innerHTML = `<div class="jr-evidence-num">${s.fearedNotHappened}/${s.withOutcome}</div><div class="jr-evidence-text">feared outcomes didn't happen</div>`;
      evBox.style.display = 'flex';
    } else {
      evBox.style.display = 'none';
    }
  }

  // Upcoming events
  const evList = document.getElementById('jr-events');
  if (evList) {
    if (events.length) {
      evList.innerHTML = '<div class="jr-section-label">Coming up</div>' + events.map(ev => {
        const c = Journal.eventLogCounts(ev.id);
        const meta = [c.pre ? `${c.pre} before` : '', c.after ? `${c.after} after` : ''].filter(Boolean).join(' · ') || 'nothing logged yet';
        const dateStr = ev.event_date ? new Date(ev.event_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }) : '';
        return `<div class="jr-event-card" onclick="openEventLog('${ev.id}')">
          <div class="jr-event-main">
            <div class="jr-event-title">${_esc(ev.title)}</div>
            <div class="jr-event-meta">${dateStr ? dateStr + ' · ' : ''}${meta}</div>
          </div>
          <div class="jr-event-actions">
            <button class="jr-mini-btn" onclick="event.stopPropagation();openEventLog('${ev.id}')">Before</button>
            <button class="jr-mini-btn jr-mini-done" onclick="event.stopPropagation();startDebrief('${ev.id}')">After</button>
          </div>
        </div>`;
      }).join('');
    } else {
      evList.innerHTML = '';
    }
  }

  // History — grouped by moment
  const histList = document.getElementById('jr-history');
  if (histList) {
    const series = _buildSeries();
    if (series.length) {
      histList.innerHTML = '<div class="jr-section-label">Your record</div>' + series.map((g, i) => _renderSeriesCard(g, i)).join('');
    } else {
      histList.innerHTML = `<div class="jr-empty">
        <div class="jr-empty-icon"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="var(--muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 4.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/><line x1="9" y1="7" x2="15" y2="7"/></svg></div>
        <div class="jr-empty-title">Your evidence record starts here</div>
        <div class="jr-empty-sub">Log a real speaking moment — what you feared, what actually happened. Over time this becomes proof that the fear lies.</div>
      </div>`;
    }
  }
}

// ════════════════════════════════════════════════════════════
//  MOMENT SERIES — grouping, averages, detail view
// ════════════════════════════════════════════════════════════
let _seriesCache = [];

function _seriesStatsFromLogs(logsArr) {
  // "before" ratings: pre logs + the in-the-moment rating on spontaneous/mission logs
  // (debrief logs carry a COPY of the pre prediction — excluded to avoid double counting)
  const beforeVals = logsArr.filter(l => l.kind !== 'debrief' && typeof l.predicted_anxiety === 'number').map(l => l.predicted_anxiety);
  const afterVals  = logsArr.filter(l => typeof l.actual_anxiety === 'number' && !l.bailed).map(l => l.actual_anxiety);
  const outcomes   = logsArr.filter(l => l.outcome && !l.bailed);
  const avg = a => a.length ? Math.round((a.reduce((x, y) => x + y, 0) / a.length) * 10) / 10 : null;
  return {
    avgPred: avg(beforeVals),
    avgActual: avg(afterVals),
    beforeN: logsArr.filter(l => l.kind === 'pre').length,
    afterN: logsArr.filter(l => l.kind === 'debrief' || l.kind === 'spontaneous' || (l.kind === 'mission' && !l.bailed)).length,
    notHappened: outcomes.filter(l => l.outcome === 'no').length,
    outcomeN: outcomes.length
  };
}

function _buildSeries() {
  const groups = {};
  const order = [];
  Journal.logs().forEach(l => {
    const key = l.event_id || ('t:' + (l.title || '').trim().toLowerCase() || l.id);
    if (!groups[key]) { groups[key] = { key, title: l.title || 'Untitled moment', logs: [] }; order.push(key); }
    groups[key].logs.push(l);
    if (!groups[key].title && l.title) groups[key].title = l.title;
  });
  _seriesCache = order.map(k => Object.assign(groups[k], _seriesStatsFromLogs(groups[k].logs)));
  return _seriesCache;
}

function _fmtAvg(n) { return n === null ? '–' : (Number.isInteger(n) ? n : n.toFixed(1)); }

function _renderSeriesCard(g, i) {
  const date = new Date(g.logs[0].created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const meta = [g.beforeN ? `${g.beforeN} before` : '', g.afterN ? `${g.afterN} after` : ''].filter(Boolean).join(' · ');
  let score = '';
  if (g.avgPred !== null && g.avgActual !== null) {
    const drop = Math.round((g.avgPred - g.avgActual) * 10) / 10;
    score = `<div class="jr-log-anx">Feared <strong>${_fmtAvg(g.avgPred)}</strong> → felt <strong>${_fmtAvg(g.avgActual)}</strong>${drop > 0 ? ` <span class="jr-drop">↓${_fmtAvg(drop)}</span>` : ''}${g.logs.length > 1 ? ' <span class="jr-avg-tag">avg</span>' : ''}</div>`;
  } else if (g.avgPred !== null) {
    score = `<div class="jr-log-anx">Anticipated: <strong>${_fmtAvg(g.avgPred)}/10</strong>${g.beforeN > 1 ? ' <span class="jr-avg-tag">avg</span>' : ''}</div>`;
  }
  let outcome = '';
  if (g.outcomeN) {
    const good = g.notHappened === g.outcomeN;
    outcome = `<div class="jr-log-outcome ${good ? 'jr-out-good' : 'jr-out-mid'}">${g.outcomeN === 1
      ? (good ? 'The feared thing didn\u2019t happen' : { partly: 'It partly happened', yes: 'It happened' }[g.logs.find(l => l.outcome && !l.bailed).outcome] || '')
      : `${g.notHappened} of ${g.outcomeN} feared outcomes didn\u2019t happen`}</div>`;
  }
  return `<div class="jr-log-card jr-series-card" onclick="openSeriesDetail(${i})">
    <div class="jr-log-head"><span class="jr-log-kind">${meta || 'Moment'}</span><span class="jr-log-date">${date}</span></div>
    <div class="jr-log-title">${_esc(g.title)}</div>
    ${score}${outcome}
    <div class="jr-series-more">Tap for the full story ›</div>
  </div>`;
}

function openSeriesDetail(i) {
  const g = _seriesCache[i];
  if (!g) return;
  const modal = document.getElementById('jr-composer');
  const body = document.getElementById('jr-composer-body');
  if (!modal || !body) return;

  // Chronological: oldest first, so the story reads befores → after → outcome.
  const ordered = g.logs.slice().sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

  // Show feared text once (the earliest statement of it) to avoid repetition.
  let fearedShown = false;

  const rows = ordered.map((l) => {
    const date = new Date(l.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
    const kindLabel = { pre: 'Before', debrief: 'After', spontaneous: 'After', mission: 'Mission' }[l.kind] || '';
    let line = '';
    if (l.bailed) line = 'Attempted \u2014 didn\u2019t complete';
    else if (typeof l.predicted_anxiety === 'number' && typeof l.actual_anxiety === 'number') line = `Feared ${l.predicted_anxiety} \u2192 felt ${l.actual_anxiety}`;
    else if (typeof l.actual_anxiety === 'number') line = `Felt ${l.actual_anxiety}/10`;
    else if (typeof l.predicted_anxiety === 'number') line = `Anticipated ${l.predicted_anxiety}/10`;

    let detail = '';
    if (l.feared_text && !fearedShown) { detail += `<div class="jr-d-feared">\u201C${_esc(l.feared_text)}\u201D</div>`; fearedShown = true; }
    if (l.outcome) {
      const oTxt = { no: 'The feared thing didn\u2019t happen', partly: 'It partly happened', yes: 'It happened' }[l.outcome];
      const oCls = { no: 'jr-out-good', partly: 'jr-out-mid', yes: 'jr-out-bad' }[l.outcome];
      detail += `<div class="jr-log-outcome ${oCls}">${oTxt}</div>`;
    }
    if (l.ai_feedback) detail += `<div class="jr-log-ai">${_esc(l.ai_feedback)}</div>`;

    return `<div class="jr-d-row open">
      <div class="jr-d-row-head">
        <span class="jr-log-kind">${kindLabel}</span>
        <span class="jr-d-row-line">${line}</span>
        <span class="jr-log-date">${date}</span>
      </div>
      ${detail ? `<div class="jr-d-row-body">${detail}</div>` : ''}
    </div>`;
  }).join('');

  // Honest header — only claims a "win" when felt actually came in under feared.
  let summary = '';
  if (g.avgPred !== null && g.avgActual !== null) {
    const drop = Math.round((g.avgPred - g.avgActual) * 10) / 10;
    const fearLine = g.outcomeN ? ` \u00B7 ${g.notHappened}/${g.outcomeN} fears didn\u2019t happen` : '';
    if (drop > 0) {
      summary = `<div class="jr-d-summary jr-out-good">It landed <strong>${_fmtAvg(drop)}</strong> lower than you feared \u2014 ${_fmtAvg(g.avgPred)} \u2192 ${_fmtAvg(g.avgActual)}${fearLine}</div>`;
    } else if (drop < 0) {
      summary = `<div class="jr-d-summary jr-out-mid">It ran a little hotter than predicted (${_fmtAvg(g.avgPred)} \u2192 ${_fmtAvg(g.avgActual)}). That happens \u2014 the honest record still counts.${fearLine}</div>`;
    } else {
      summary = `<div class="jr-d-summary">It landed about where you predicted (${_fmtAvg(g.avgPred)} \u2192 ${_fmtAvg(g.avgActual)}).${fearLine}</div>`;
    }
  } else if (g.avgPred !== null) {
    summary = `<div class="jr-d-summary">Anticipated <strong>${_fmtAvg(g.avgPred)}/10</strong> \u2014 log the after to see how it actually landed.</div>`;
  }

  body.innerHTML = `<div class="jr-c-title" style="margin-bottom:6px">${_esc(g.title)}</div>${summary}
    <div class="jr-d-list">${rows}</div>
    <button class="btn-primary jr-c-btn" onclick="closeComposer()">Done</button>`;
  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.classList.add('show'));
}

function _renderLogCard(l) {
  const date = new Date(l.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  const kindLabel = { pre: 'Before', debrief: 'After', spontaneous: 'After', mission: 'Mission' }[l.kind] || '';
  let body = '';
  if (l.bailed) {
    body = `<div class="jr-log-bail">Attempted — didn't complete. That still counts.</div>`;
  } else {
    if (typeof l.predicted_anxiety === 'number' && typeof l.actual_anxiety === 'number') {
      const drop = l.predicted_anxiety - l.actual_anxiety;
      body += `<div class="jr-log-anx">Feared <strong>${l.predicted_anxiety}</strong> → felt <strong>${l.actual_anxiety}</strong>${drop>0?` <span class="jr-drop">↓${drop}</span>`:''}</div>`;
    } else if (typeof l.predicted_anxiety === 'number') {
      body += `<div class="jr-log-anx">Anticipated anxiety: <strong>${l.predicted_anxiety}/10</strong></div>`;
    }
    if (l.outcome) {
      const oTxt = { no: 'The feared thing didn\'t happen', partly: 'It partly happened', yes: 'It happened' }[l.outcome];
      const oCls = { no: 'jr-out-good', partly: 'jr-out-mid', yes: 'jr-out-bad' }[l.outcome];
      body += `<div class="jr-log-outcome ${oCls}">${oTxt}</div>`;
    }
    if (l.ai_feedback) body += `<div class="jr-log-ai">${_esc(l.ai_feedback)}</div>`;
  }
  return `<div class="jr-log-card">
    <div class="jr-log-head"><span class="jr-log-kind">${kindLabel}</span><span class="jr-log-date">${date}</span></div>
    ${l.title ? `<div class="jr-log-title">${_esc(l.title)}</div>` : ''}
    ${body}
  </div>`;
}

function _esc(s) { return (s||'').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

// ════════════════════════════════════════════════════════════
//  LOG COMPOSER — multi-step modal
// ════════════════════════════════════════════════════════════

// Entry points
function startSpontaneousLog() {
  Journal.draft = { kind: 'spontaneous', title: '' };
  _openComposer('spontaneous');
}
function openEventLog(eventId) {
  const ev = Journal.events().find(e => e.id === eventId);
  Journal.draft = { kind: 'pre', event_id: eventId, title: ev ? ev.title : '' };
  _openComposer('pre');
}
function startMissionLog(phase) {
  const m = Journal.mission(phase);
  if (!m) return;
  Journal.draft = { kind: 'mission', mission_id: m.id, phase, title: m.title, _feared_prompt: m.feared_prompt };
  _openComposer('mission');
}

// "I'm speaking soon" — quick pre-event flow
function startSpeakingSoon() {
  Journal.draft = { kind: 'spontaneous', title: '', _speakingSoon: true };
  _openComposer('speaking-soon');
}

// ── BEFORE / AFTER entry points ──
// Before → moment picker (new or attach to a series).
// After  → list of OPEN moments (a before logged, not yet closed) to debrief,
//          plus an impromptu option for something logged after the fact.
function startBeforeLog() { _openMomentPicker('before'); }

function startAfterLog() {
  const modal = document.getElementById('jr-composer');
  const body = document.getElementById('jr-composer-body');
  if (!modal || !body) return;
  const open = Journal.events().filter(e => e.status === 'upcoming');

  let list = '';
  if (open.length) {
    list = '<div class="jr-moment-chips">' + open.map(ev => {
      const c = Journal.eventLogCounts(ev.id);
      const meta = [c.pre ? `${c.pre} before` : '', c.after ? `${c.after} after` : ''].filter(Boolean).join(' \u00B7 ') || 'before logged';
      return `<button class="jr-moment-chip" onclick="startDebrief('${ev.id}')">
        <span class="jr-moment-chip-title">${_esc(ev.title)}</span>
        <span class="jr-moment-chip-meta">${meta}</span>
      </button>`;
    }).join('') + '</div>';
  } else {
    list = '<div class="jr-c-sub" style="margin-bottom:4px">No moments waiting on a debrief right now.</div>';
  }

  body.innerHTML = `<div class="jr-c-title">How did it go?</div>
    <div class="jr-c-sub" style="margin-bottom:14px">${open.length ? 'Pick the moment you logged a before for:' : ''}</div>
    ${list}
    <button class="jr-action-card jr-action-impromptu jr-c-impromptu-row" onclick="startSpontaneousLog()">
      <span class="jr-action-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
      <span class="jr-action-txt"><strong>Something I didn't prep for</strong><span>No before \u2014 just log how it went</span></span>
    </button>`;

  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.classList.add('show'));
}

function _openMomentPicker(which) {
  const modal = document.getElementById('jr-composer');
  if (!modal) return;
  const series = Journal.momentSeries();
  const isBefore = which === 'before';

  let chips = '';
  if (series.length) {
    chips = '<div class="jr-c-sub" style="margin-bottom:8px">Same moment as before? Tap it — all your befores and afters stay linked.</div>' +
      '<div class="jr-moment-chips">' +
      series.slice(0, 6).map(m => {
        const meta = [m.pre ? `${m.pre} before` : '', m.after ? `${m.after} after` : ''].filter(Boolean).join(' · ') || 'no logs yet';
        return `<button class="jr-moment-chip" onclick="_pickMoment('${which}','${m.id}')">
          <span class="jr-moment-chip-title">${_esc(m.title)}</span>
          <span class="jr-moment-chip-meta">${meta}</span>
        </button>`;
      }).join('') + '</div>';
  }

  const body = document.getElementById('jr-composer-body');
  body.innerHTML = `<div class="jr-c-title">${isBefore ? 'What\u2019s coming up?' : 'What just happened?'}</div>
    ${chips}
    <div class="jr-c-sub" style="margin-top:${series.length ? '14px' : '0'}">${series.length ? 'Or name a new moment:' : 'A few words is enough — \u201Cteam standup\u201D, \u201Cclient call\u201D, \u201Cbest man speech\u201D.'}</div>
    <input class="jr-c-input" id="jr-c-moment-in" placeholder="Name the moment">
    <button class="btn-primary jr-c-btn" onclick="_pickMoment('${which}', null)">Next \u2192</button>`;

  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.classList.add('show'));
}

async function _pickMoment(which, eventId) {
  let ev = null;
  if (eventId) {
    ev = Journal.events().find(e => e.id === eventId) || null;
  } else {
    const inp = document.getElementById('jr-c-moment-in');
    const title = inp ? inp.value.trim() : '';
    if (!title) { if (inp) inp.focus(); return; }
    // typed a title that matches an existing moment → link to its series
    ev = Journal.findEventByTitle(title);
    if (!ev && which === 'after') {
      // brand-new after-the-fact moment → spontaneous flow with title prefilled
      Journal.draft = { kind: 'spontaneous', title };
      _composerMode = 'spontaneous';
      _composerStep = _steps().indexOf('predicted');
      _renderComposerStep();
      return;
    }
    if (!ev) {
      // brand-new upcoming moment → pre flow, create the event on finish
      Journal.draft = { kind: 'pre', event_id: null, title, _speakingSoon: true };
      _composerMode = 'pre';
      _composerStep = _steps().indexOf('predicted');
      _renderComposerStep();
      return;
    }
  }
  // Existing moment selected
  if (which === 'before') {
    Journal.reopenEvent(ev.id); // recurring moment comes back under "Coming up"
    Journal.draft = { kind: 'pre', event_id: ev.id, title: ev.title };
    _composerMode = 'pre';
    _composerStep = _steps().indexOf('predicted');
    _renderComposerStep();
  } else {
    startDebrief(ev.id); // carries the latest pre-log's feared text forward
  }
}

function _openComposer(mode) {
  const modal = document.getElementById('jr-composer');
  if (!modal) return;
  _composerStep = 0;
  _composerMode = mode;
  _renderComposerStep();
  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.classList.add('show'));
}

function closeComposer() {
  const modal = document.getElementById('jr-composer');
  if (!modal) return;
  modal.classList.remove('show');
  setTimeout(() => { modal.style.display = 'none'; _resetDebrief(); }, 200);
}

let _composerStep = 0;
let _composerMode = 'spontaneous';

// Step sequences per mode
function _steps() {
  const d = Journal.draft || {};
  if (_composerMode === 'pre' || _composerMode === 'speaking-soon') {
    return ['title', 'predicted', 'feared', 'evidence-show', 'done-pre'];
  }
  if (_composerMode === 'mission') {
    return ['mission-intro', 'predicted', 'feared', 'go', 'debrief-or-bail'];
  }
  // spontaneous / debrief
  return ['title', 'predicted', 'feared', 'debrief-record', 'outcome', 'generating', 'done'];
}

function _renderComposerStep() {
  const steps = _steps();
  const step = steps[_composerStep];
  const body = document.getElementById('jr-composer-body');
  const d = Journal.draft;
  if (!body) return;

  let html = '';
  switch (step) {
    case 'title':
      html = `<div class="jr-c-title">${d.kind==='spontaneous'?'What just happened?':'What&apos;s coming up?'}</div>
        <div class="jr-c-sub">A few words is enough — "team standup", "client call", "best man speech".</div>
        <input class="jr-c-input" id="jr-c-title-in" value="${_esc(d.title||'')}" placeholder="Name the moment">
        <button class="btn-primary jr-c-btn" onclick="_composerNext()">Next →</button>`;
      break;
    case 'mission-intro': {
      const m = Journal.mission(d.phase);
      html = `<div class="jr-c-eyebrow">Your mission</div>
        <div class="jr-c-title">${_esc(m.title)}</div>
        <div class="jr-c-why">${_esc(m.why)}</div>
        <button class="btn-primary jr-c-btn" onclick="_composerNext()">I'm ready →</button>
        <button class="jr-c-link" onclick="closeComposer()">Not yet</button>`;
      break;
    }
    case 'predicted':
      html = `<div class="jr-c-title">How anxious do you feel about it?</div>
        <div class="jr-c-sub">Right now, anticipating it. 0 = calm, 10 = dread.</div>
        <div class="jr-c-scale" id="jr-c-pred"></div>`;
      break;
    case 'feared': {
      const prompt = d._feared_prompt || 'What are you afraid will happen?';
      html = `<div class="jr-c-title">${_esc(prompt)}</div>
        <div class="jr-c-sub">Name the specific fear. Naming it is the first step to testing it.</div>
        <textarea class="jr-c-textarea" id="jr-c-feared-in" placeholder="I'm afraid that...">${_esc(d.feared_text||'')}</textarea>
        <button class="btn-primary jr-c-btn" onclick="_composerNext()">Next →</button>`;
      break;
    }
    case 'evidence-show': {
      const line = Journal.evidenceLine();
      html = `<div class="jr-c-icon">🛡️</div>
        <div class="jr-c-title">Before you go — your track record</div>
        ${line ? `<div class="jr-c-evidence">${_esc(line)}</div>` : `<div class="jr-c-sub">This is your first logged moment. After a few, you'll see your own evidence here — and it's almost always reassuring.</div>`}
        <div class="jr-c-sub">Your forecast usually runs hotter than reality. Take that with you.</div>
        <button class="btn-primary jr-c-btn" onclick="_composerNext()">Got it →</button>`;
      break;
    }
    case 'go':
      html = `<div class="jr-c-icon">🎯</div>
        <div class="jr-c-title">Go do it.</div>
        <div class="jr-c-sub">Come back when it's done — whether it went well, badly, or you bailed. All of it counts.</div>
        <button class="btn-primary jr-c-btn" onclick="closeComposer()">I'll come back →</button>`;
      break;
    case 'done-pre':
      _finishPreLog();
      html = `<div class="jr-c-icon">✓</div>
        <div class="jr-c-title">Logged.</div>
        <div class="jr-c-sub">We'll be here when it's done — tap "It happened" on the event to debrief.</div>
        <button class="btn-primary jr-c-btn" onclick="closeComposer();renderJournalHome()">Done</button>`;
      break;
    case 'debrief-or-bail':
      html = `<div class="jr-c-title">How did it go?</div>
        <div class="jr-c-sub">Did you do it, or did you bail this time? Both are honest answers.</div>
        <button class="btn-primary jr-c-btn" onclick="_composerMode='debrief-from-mission';_composerStep=-1;_advanceTo('debrief-record')">I did it →</button>
        <button class="btn-secondary jr-c-btn" onclick="_logBail()">I bailed — log it honestly</button>`;
      break;
    case 'debrief-record':
      html = `<div class="jr-c-title">Talk through what happened</div>
        <div class="jr-c-sub">60 seconds. What actually went on — and one thing that went better than you expected.</div>
        <div class="jr-debrief-zone">
          <div class="jr-debrief-timer" id="jr-debrief-timer">0:00</div>
          <button class="record-btn" id="jr-debrief-btn" onclick="toggleDebriefRecording()"></button>
          <div class="jr-debrief-hint" id="jr-debrief-hint">Tap to record your debrief</div>
        </div>
        <button class="jr-c-link" id="jr-debrief-skip" onclick="_skipDebrief()">Skip the voice note</button>`;
      break;
    case 'outcome':
      html = `<div class="jr-c-title">The thing you feared — did it happen?</div>
        <div class="jr-c-sub">Be honest. This is the data that changes how your brain predicts.</div>
        <div class="jr-c-outcome-btns">
          <button class="jr-outcome-btn jr-out-good" onclick="_setOutcome('no')">No — it didn't</button>
          <button class="jr-outcome-btn jr-out-mid" onclick="_setOutcome('partly')">Partly</button>
          <button class="jr-outcome-btn jr-out-bad" onclick="_setOutcome('yes')">Yes — it did</button>
        </div>`;
      break;
    case 'generating':
      html = `<div class="jr-c-icon jr-spin">◌</div>
        <div class="jr-c-title">Reading your debrief…</div>
        <div class="jr-c-sub">One honest reflection coming up.</div>`;
      _generateFeedback();
      break;
    case 'done':
      html = `<div class="jr-c-icon">✓</div>
        <div class="jr-c-title">Logged into your record.</div>
        <div class="jr-c-ai" id="jr-done-ai">${_esc(Journal.draft.ai_feedback || '')}</div>
        <button class="btn-primary jr-c-btn" onclick="closeComposer();renderJournalHome()">Done</button>`;
      break;
  }
  body.innerHTML = html;

  // wire up scale builders
  if (step === 'predicted') _buildScale('jr-c-pred', (v) => { Journal.draft.predicted_anxiety = v; _composerNext(); });
}

function _buildScale(containerId, onPick) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = '';
  for (let i = 0; i <= 10; i++) {
    const b = document.createElement('button');
    b.className = 'suds-num';
    b.textContent = i;
    b.onclick = () => onPick(i);
    c.appendChild(b);
  }
  const anchors = document.createElement('div');
  anchors.className = 'suds-anchors';
  anchors.style.gridColumn = '1 / -1';
  anchors.innerHTML = '<span>Calm</span><span>Dread</span>';
  c.appendChild(anchors);
}

function _composerNext() {
  const steps = _steps();
  const cur = steps[_composerStep];
  const d = Journal.draft;
  // capture inputs
  if (cur === 'title') {
    const v = document.getElementById('jr-c-title-in');
    if (v) d.title = v.value.trim();
  }
  if (cur === 'feared') {
    const v = document.getElementById('jr-c-feared-in');
    if (v) d.feared_text = v.value.trim();
  }
  _composerStep++;
  _renderComposerStep();
}

function _advanceTo(stepName) {
  const steps = _steps();
  const idx = steps.indexOf(stepName);
  if (idx >= 0) { _composerStep = idx; _renderComposerStep(); }
}

// ── Pre-log finish (anticipating an event) ──
async function _finishPreLog() {
  const d = Journal.draft;
  // ensure event exists for pre logs tied to a new moment
  let eventId = d.event_id;
  if (!eventId && (d.kind === 'pre' || d._speakingSoon)) {
    const ev = await Journal._commitEvent({ title: d.title || 'Upcoming moment', event_date: null });
    eventId = ev.id;
  }
  await Journal._commitLog({
    kind: 'pre',
    event_id: eventId || null,
    title: d.title,
    predicted_anxiety: d.predicted_anxiety,
    feared_text: d.feared_text
  });
}

// ── Bail log ──
async function _logBail() {
  const d = Journal.draft;
  await Journal._commitLog({
    kind: d.kind === 'mission' ? 'mission' : 'spontaneous',
    mission_id: d.mission_id || null,
    phase: d.phase || null,
    title: d.title,
    predicted_anxiety: d.predicted_anxiety,
    feared_text: d.feared_text,
    bailed: true
  });
  const body = document.getElementById('jr-composer-body');
  if (body) body.innerHTML = `<div class="jr-c-icon">🤍</div>
    <div class="jr-c-title">Logged honestly.</div>
    <div class="jr-c-sub">Bailing is data too. The fact that you faced it enough to log it is the rep. Next time the rung will feel lower.</div>
    <button class="btn-primary jr-c-btn" onclick="closeComposer();renderJournalHome();refreshMissionGate()">Done</button>`;
}

// ════════════════════════════════════════════════════════════
//  VOICE DEBRIEF
// ════════════════════════════════════════════════════════════
async function toggleDebriefRecording() {
  const r = Journal.rec;
  if (!r.isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mime = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' :
                   MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '';
      r.mediaRecorder = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream);
      r.chunks = [];
      r.mediaRecorder.ondataavailable = e => { if (e.data.size > 0) r.chunks.push(e.data); };
      r.mediaRecorder.onstop = () => { stream.getTracks().forEach(t => t.stop()); _transcribeDebrief(); };
      r.mediaRecorder.start();
      r.isRecording = true; r.seconds = 0;
      document.getElementById('jr-debrief-btn').classList.add('recording');
      document.getElementById('jr-debrief-hint').textContent = 'Recording… tap to stop';
      const skip = document.getElementById('jr-debrief-skip'); if (skip) skip.style.display = 'none';
      r.timer = setInterval(() => {
        r.seconds++;
        const m = Math.floor(r.seconds/60), s = r.seconds%60;
        const t = document.getElementById('jr-debrief-timer');
        if (t) t.textContent = m + ':' + s.toString().padStart(2,'0');
        if (r.seconds >= 90) toggleDebriefRecording(); // hard cap 90s
      }, 1000);
    } catch (err) { alert('Microphone access needed to record your debrief.'); }
  } else {
    clearInterval(r.timer);
    r.isRecording = false;
    if (r.mediaRecorder && r.mediaRecorder.state !== 'inactive') r.mediaRecorder.stop();
    const hint = document.getElementById('jr-debrief-hint');
    if (hint) hint.textContent = 'Processing…';
  }
}

async function _transcribeDebrief() {
  const r = Journal.rec;
  try {
    const blob = new Blob(r.chunks, { type: 'audio/webm' });
    const fd = new FormData();
    fd.append('file', blob, 'debrief.webm');
    const res = await fetch(getProxyUrl() + '/transcribe', { method: 'POST', body: fd });
    const data = await res.json();
    Journal.draft.transcript = data.text || '';
  } catch (e) {
    console.warn('[Journal] debrief transcribe failed:', e);
    Journal.draft.transcript = '';
  }
  // Continue whichever flow is active
  if (_afterDebriefTranscribe) { const fn = _afterDebriefTranscribe; _afterDebriefTranscribe = null; fn(); }
  else _advanceTo('outcome');
}

function _skipDebrief() {
  Journal.draft.transcript = '';
  if (_afterDebriefTranscribe) { const fn = _afterDebriefTranscribe; _afterDebriefTranscribe = null; fn(); }
  else _advanceTo('outcome');
}

function _resetDebrief() {
  const r = Journal.rec;
  if (r.timer) clearInterval(r.timer);
  r.isRecording = false; r.chunks = []; r.seconds = 0;
}

function _setOutcome(outcome) {
  Journal.draft.outcome = outcome;
  _advanceTo('generating');
}

// ── AI feedback ──
async function _generateFeedback() {
  const d = Journal.draft;
  const evidence = Journal.evidenceLine();
  const prompt = `You are a CBT-informed coach inside a public speaking anxiety app. A user just logged a real speaking exposure. Write ONE short reflection (3-4 sentences max, warm but not soft, never just reassurance). Ground it in their data. Do not give generic advice.

Their feared prediction: "${d.feared_text || 'not stated'}"
Predicted anxiety beforehand: ${typeof d.predicted_anxiety==='number'?d.predicted_anxiety+'/10':'not stated'}
Did the feared thing happen: ${d.outcome === 'no' ? 'No' : d.outcome === 'partly' ? 'Partly' : 'Yes'}
${d.transcript ? `What they said in their voice debrief: "${d.transcript}"` : 'No voice debrief.'}
${evidence ? `Their track record: ${evidence}` : ''}

Rules: Name the gap between feared and actual if there is one. If they gave a voice debrief, reference one specific real thing they said. If the feared thing partly or fully happened, acknowledge it honestly and find the part they handled. End with something that makes them rely on the app's reassurance LESS, not more. No headers, no lists. Just the reflection text.`;

  let feedback = '';
  try {
    const res = await fetch(getProxyUrl() + '/analyse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 400,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await res.json();
    feedback = (data.content && data.content[0] && data.content[0].text || '').trim();
  } catch (e) {
    console.warn('[Journal] feedback failed:', e);
  }
  if (!feedback) {
    feedback = d.outcome === 'no'
      ? "You feared something that didn't come. That gap — between what your mind predicted and what actually happened — is the whole point. Log enough of these and the prediction starts to lose its grip."
      : "You faced it and logged it honestly. That's the rep that counts, regardless of how it went. Each one makes the next rung lower.";
  }
  d.ai_feedback = feedback;

  // commit the full debrief log
  await Journal._commitLog({
    kind: d.kind === 'mission' ? 'mission' : (d.event_id ? 'debrief' : 'spontaneous'),
    event_id: d.event_id || null,
    mission_id: d.mission_id || null,
    phase: d.phase || null,
    title: d.title,
    predicted_anxiety: d.predicted_anxiety,
    actual_anxiety: d.actual_anxiety,
    feared_text: d.feared_text,
    outcome: d.outcome,
    transcript: d.transcript,
    ai_feedback: feedback
  });

  _advanceTo('done');
  if (typeof refreshMissionGate === 'function') refreshMissionGate();
}

// "It happened" on an existing event → debrief flow
function startDebrief(eventId) {
  const ev = Journal.events().find(e => e.id === eventId);
  // pull the pre-log to carry the feared text forward
  const pre = Journal.logs().find(l => l.event_id === eventId && l.kind === 'pre');
  Journal.draft = {
    kind: 'debrief',
    event_id: eventId,
    title: ev ? ev.title : '',
    feared_text: pre ? pre.feared_text : '',
    predicted_anxiety: pre ? pre.predicted_anxiety : null
  };
  // mark event done
  if (ev) { ev.status = 'done'; }
  _composerMode = 'debrief';
  // debrief flow: actual anxiety → record → outcome → generate → done
  _composerStep = -1;
  _openComposerDebrief();
}

function _openComposerDebrief() {
  const modal = document.getElementById('jr-composer');
  if (!modal) return;
  modal.style.display = 'flex';
  requestAnimationFrame(() => modal.classList.add('show'));
  // custom debrief sequence
  _composerMode = 'debrief';
  _debriefStep = 0;
  _renderDebriefStep();
}

let _debriefStep = 0;
function _renderDebriefStep() {
  const body = document.getElementById('jr-composer-body');
  const d = Journal.draft;
  const seq = ['actual', 'debrief-record', 'outcome', 'generating', 'done'];
  const step = seq[_debriefStep];
  if (!body) return;
  let html = '';
  if (step === 'actual') {
    html = `<div class="jr-c-title">How anxious did it actually get?</div>
      <div class="jr-c-sub">At its peak during the moment. ${typeof d.predicted_anxiety==='number'?`You predicted ${d.predicted_anxiety}/10.`:''}</div>
      <div class="jr-c-scale" id="jr-c-actual"></div>`;
    body.innerHTML = html;
    _buildScale('jr-c-actual', (v) => { d.actual_anxiety = v; _debriefStep++; _renderDebriefStep(); });
    return;
  }
  if (step === 'debrief-record') {
    body.innerHTML = `<div class="jr-c-title">Talk through what happened</div>
      <div class="jr-c-sub">60 seconds. What actually went on — and one thing that went better than you expected.</div>
      <div class="jr-debrief-zone">
        <div class="jr-debrief-timer" id="jr-debrief-timer">0:00</div>
        <button class="record-btn" id="jr-debrief-btn" onclick="toggleDebriefRecording()"></button>
        <div class="jr-debrief-hint" id="jr-debrief-hint">Tap to record your debrief</div>
      </div>
      <button class="jr-c-link" id="jr-debrief-skip" onclick="_skipDebrief()">Skip the voice note</button>`;
    // override transcribe target to continue debrief sequence
    _afterDebriefTranscribe = () => { _debriefStep++; _renderDebriefStep(); };
    return;
  }
  if (step === 'outcome') {
    body.innerHTML = `<div class="jr-c-title">The thing you feared — did it happen?</div>
      <div class="jr-c-sub">${d.feared_text ? '"'+_esc(d.feared_text)+'"' : 'Be honest — this is the data that matters.'}</div>
      <div class="jr-c-outcome-btns">
        <button class="jr-outcome-btn jr-out-good" onclick="d_outcome('no')">No — it didn't</button>
        <button class="jr-outcome-btn jr-out-mid" onclick="d_outcome('partly')">Partly</button>
        <button class="jr-outcome-btn jr-out-bad" onclick="d_outcome('yes')">Yes — it did</button>
      </div>`;
    return;
  }
  if (step === 'generating') {
    body.innerHTML = `<div class="jr-c-icon jr-spin">◌</div><div class="jr-c-title">Reading your debrief…</div><div class="jr-c-sub">One honest reflection coming up.</div>`;
    _generateFeedback().then(() => {});
    return;
  }
  if (step === 'done') {
    body.innerHTML = `<div class="jr-c-icon">✓</div><div class="jr-c-title">Logged into your record.</div>
      <div class="jr-c-ai">${_esc(d.ai_feedback||'')}</div>
      <button class="btn-primary jr-c-btn" onclick="closeComposer();renderJournalHome()">Done</button>`;
  }
}

function d_outcome(o) { Journal.draft.outcome = o; _debriefStep++; _renderDebriefStep(); }

// ════════════════════════════════════════════════════════════
//  PROGRESS TAB — real-world evidence panel
// ════════════════════════════════════════════════════════════
async function renderJournalEvidence() {
  const wrap = document.getElementById('jr-dash');
  if (!wrap || typeof Journal === 'undefined') return;
  await Journal.load();
  const logs = Journal.logs();
  if (!logs.length) { wrap.style.display = 'none'; return; }

  const all = _seriesStatsFromLogs(logs);
  const statsEl = document.getElementById('jr-dash-stats');
  if (statsEl) {
    const drop = (all.avgPred !== null && all.avgActual !== null) ? Math.round((all.avgPred - all.avgActual) * 10) / 10 : null;
    statsEl.innerHTML = `
      <div class="jr-dash-stat"><div class="jr-dash-num">${_fmtAvg(all.avgPred)}</div><div class="jr-dash-lbl">Avg feared</div></div>
      <div class="jr-dash-stat"><div class="jr-dash-num">${_fmtAvg(all.avgActual)}</div><div class="jr-dash-lbl">Avg felt</div></div>
      <div class="jr-dash-stat"><div class="jr-dash-num" style="${drop !== null && drop > 0 ? 'color:var(--green)' : ''}">${drop === null ? '–' : (drop > 0 ? '↓' + _fmtAvg(drop) : _fmtAvg(Math.abs(drop)))}</div><div class="jr-dash-lbl">Gap</div></div>
      <div class="jr-dash-stat"><div class="jr-dash-num">${all.outcomeN ? all.notHappened + '/' + all.outcomeN : '–'}</div><div class="jr-dash-lbl">Fears didn't happen</div></div>`;
  }

  // Per-moment rows (only moments with both a before and an after)
  const momentsEl = document.getElementById('jr-dash-moments');
  if (momentsEl) {
    const series = _buildSeries().filter(g => g.avgPred !== null && g.avgActual !== null).slice(0, 5);
    momentsEl.innerHTML = series.length ? series.map(g => {
      const drop = Math.round((g.avgPred - g.avgActual) * 10) / 10;
      return `<div class="jr-dash-row">
        <div class="jr-dash-row-title">${_esc(g.title)}</div>
        <div class="jr-dash-row-score">${_fmtAvg(g.avgPred)} → ${_fmtAvg(g.avgActual)}${drop > 0 ? ` <span class="jr-drop">↓${_fmtAvg(drop)}</span>` : ''}</div>
      </div>`;
    }).join('') : '';
  }
  _renderEvidenceChart(logs);
  wrap.style.display = 'block';
}

// Feared vs felt over time — the "your brain over-predicts" graph
function _renderEvidenceChart(logs) {
  const wrap = document.getElementById('jr-dash-chart-wrap');
  const canvas = document.getElementById('jr-dash-chart');
  if (!wrap || !canvas || typeof Chart === 'undefined') return;

  // completed moments with both numbers, oldest → newest
  const pts = logs
    .filter(l => !l.bailed && typeof l.predicted_anxiety === 'number' && typeof l.actual_anxiety === 'number')
    .slice(0, 20)
    .reverse();

  if (pts.length < 2) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';

  const labels = pts.map(l => new Date(l.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }));
  const style = getComputedStyle(document.documentElement);
  const accentColor = style.getPropertyValue('--accent').trim() || '#5B4FD9';
  const greenColor  = style.getPropertyValue('--green').trim()  || '#2E9E7A';
  const mutedColor  = style.getPropertyValue('--text-faint').trim() || '#ADA89E';
  const borderColor = style.getPropertyValue('--border').trim() || '#E4E0D8';

  if (canvas._chartInstance) canvas._chartInstance.destroy();
  canvas._chartInstance = new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Feared',
          data: pts.map(l => l.predicted_anxiety),
          borderColor: accentColor,
          backgroundColor: accentColor + '14',
          borderWidth: 2,
          borderDash: [5, 4],
          pointRadius: 3,
          pointBackgroundColor: accentColor,
          tension: 0.35,
          fill: '+1' // shade the gap down to the Felt line
        },
        {
          label: 'Felt',
          data: pts.map(l => l.actual_anxiety),
          borderColor: greenColor,
          backgroundColor: 'transparent',
          borderWidth: 2.5,
          pointRadius: 3,
          pointBackgroundColor: greenColor,
          tension: 0.35,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: true,
          labels: { color: mutedColor, font: { family: 'Nunito', size: 11, weight: '700' }, boxWidth: 12, padding: 12 }
        }
      },
      scales: {
        y: {
          min: 0, max: 10,
          ticks: { stepSize: 2, color: mutedColor, font: { family: 'Nunito', size: 10 } },
          grid: { color: borderColor + '66' }
        },
        x: {
          ticks: { color: mutedColor, font: { family: 'Nunito', size: 10 }, maxRotation: 0, autoSkip: true, maxTicksLimit: 6 },
          grid: { display: false }
        }
      }
    }
  });
}
