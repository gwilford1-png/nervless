/* ============================================================
   Nervless — UI
   Screen routing, rendering, lessons, feedback, dashboard, practice — everything that touches the DOM. Depends on: data.js, logic.js.
   ============================================================ */


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
  r.setProperty('--sc', '#5B4FD9');
  r.setProperty('--sc-light', '#EEEAFF');
  r.setProperty('--sc-mid', '#C8C0F5');

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
  const earnedPts = scoredAll.reduce((sum, s) => sum + getBestScore(s.id), 0);
  const maxPts = scoredAll.length * 100;
  document.getElementById('stat-points').textContent = earnedPts.toLocaleString();
  document.getElementById('stat-points-max').textContent = '/ ' + maxPts.toLocaleString();
  document.getElementById('stat-sessions-line').textContent = totalDone + ' of ' + totalSessions + ' sessions complete';
  document.getElementById('stat-phase-text').textContent = 'Phase ' + currPhase + ' of 9';
  const fill = document.getElementById('journey-progress-fill');
  const pct = totalSessions ? Math.round((totalDone / totalSessions) * 100) : 0;
  if (fill) fill.style.width = Math.max(5, Math.min(100, pct)) + '%';

  // ── Phase data: palette + representative icon + one-line benefit ──
  const PHASES = [
    { num:1, name:'Understanding the Fear',    benefit:'Why your brain treats speaking as a threat',    icon:'brain',    color:'#5B4FD9', light:'#EEEAFF', mid:'#C8C0F5' },
    { num:2, name:'The Body First',            benefit:'Calm your nervous system on demand',            icon:'wind',     color:'#1FA98F', light:'#C9EDE5', mid:'#9ED9CC' },
    { num:3, name:'Gradual Exposure',          benefit:'Build from zero-stakes to real audiences',      icon:'trending', color:'#3B82C4', light:'#D6E6F6', mid:'#AECBE9' },
    { num:4, name:'Changing the Narrative',    benefit:'Reality-test the thoughts that fuel anxiety',   icon:'message',  color:'#8E6FC0', light:'#E6DDF4', mid:'#CBBBE8' },
    { num:5, name:'Finding Your Voice',        benefit:'Discover what makes you worth listening to',    icon:'mic',      color:'#D89B25', light:'#F6E6BE', mid:'#ECD08A' },
    { num:6, name:'Raising the Stakes',        benefit:'Present to senior people and hold your ground', icon:'target',   color:'#DB6098', light:'#F7D9E6', mid:'#EFB6CE' },
    { num:7, name:'In-the-Moment Tools',       benefit:'Recover from blanks and shaky moments',         icon:'zap',      color:'#34A7B8', light:'#CEEBF0', mid:'#A6DAE3' },
    { num:8, name:'Performing Under Pressure', benefit:'Deliver with presence when it counts',          icon:'users',    color:'#5E52CC', light:'#DCD8F6', mid:'#BFB8EC' },
    { num:9, name:'Maintenance',               benefit:'Keep your progress sharp for good',             icon:'refresh',  color:'#3E9D60', light:'#D2ECDB', mid:'#A9D9BB' },
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
        // isCurrent: explicitly flagged, OR first unpassed session in an active phase
        const firstUnpassed = sessions.find(ss => !hasPassedSession(ss.id));
        const isCurrent = !isDone && (s.id === CURRENT || s === firstUnpassed);
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
          cls = 'todo'; inner = si + 1;
          sub = 'Tap to start';
          right = '<div class="j-s-chev">›</div>';
        }
        const click = ` onclick="loadSession(${s.id})"`;
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

const lessonState = {
  step: 'read', // 'read' | 'check' | 'talk'
  sessionId: null,
  quizAnswers: {},
  quizCorrect: 0,
  totalQuestions: 0,
  isRecording: false,
  seconds: 0,
  timerInterval: null,
  mediaRecorder: null,
  audioChunks: []
};

function setSessionColor(phase) {
  const map = {
    1:{c:'#5B4FD9',l:'#EEEAFF',m:'#C8C0F5'},
    2:{c:'#1FA98F',l:'#C9EDE5',m:'#9ED9CC'},
    3:{c:'#3B82C4',l:'#D6E6F6',m:'#AECBE9'},
    4:{c:'#8E6FC0',l:'#E6DDF4',m:'#CBBBE8'},
    5:{c:'#D89B25',l:'#F6E6BE',m:'#ECD08A'},
    6:{c:'#DB6098',l:'#F7D9E6',m:'#EFB6CE'},
    7:{c:'#34A7B8',l:'#CEEBF0',m:'#A6DAE3'},
    8:{c:'#5E52CC',l:'#DCD8F6',m:'#BFB8EC'},
    9:{c:'#3E9D60',l:'#D2ECDB',m:'#A9D9BB'}
  };
  const p = map[phase] || map[1];
  const r = document.documentElement.style;
  r.setProperty('--sc', p.c);
  r.setProperty('--sc-light', p.l);
  r.setProperty('--sc-mid', p.m);
}

function loadSession(id) {
  const s = CURRICULUM.find(s => s.id === id);
  if (!s) return;
  setSessionColor(s.phase);
  state.currentSessionId = id;
  lessonState.sessionId = id;

  // Sessions with lesson content use the new flow; others use old practice screen
  const hasLesson = !!LESSON_CONTENT[id];
  if (hasLesson) {
    startLesson(s);
  } else {
    // fallback to old practice screen
    document.getElementById('session-phase-label').textContent = 'Phase ' + s.phase + ' · Session ' + s.id;
    document.getElementById('session-title-label').textContent = s.title;
    document.getElementById('practice-chip').textContent = 'Level ' + state.level;
    document.getElementById('prompt-text').textContent = s.prompt;
    document.getElementById('prompt-type').textContent = s.type;
    document.getElementById('prompt-duration').textContent = s.duration;
    document.getElementById('coaching-tip').innerHTML = '<strong>Coach:</strong> ' + s.coaching;
    resetRecording();
    showScreen('screen-practice');
  }
}

function startLesson(s) {
  lessonState.step = 'read';
  lessonState.quizAnswers = {};
  lessonState.quizCorrect = 0;

  const lc = LESSON_CONTENT[s.id];
  if (!lc) { console.error('No lesson content for session', s.id); return; }
  lessonState.totalQuestions = lc.quiz ? lc.quiz.length : 0;

  // Determine flow based on format
  const fmt = s.format || 'read_speak';
  lessonState.format = fmt;

  // Some formats skip the quiz step
  const hasQuiz = lc.quiz && lc.quiz.length > 0;
  lessonState.hasQuiz = hasQuiz;

  // Update step labels based on format
  const stepReadLabel = document.querySelector('#step-read .step-label');
  const stepCheckEl = document.getElementById('step-check');
  const stepTalkLabel = document.querySelector('#step-talk .step-label');
  const conn1 = document.getElementById('conn-1');

  if (fmt === 'reflect') {
    stepReadLabel.textContent = 'Read';
    stepTalkLabel.textContent = 'Reflect';
  } else if (fmt === 'scenario') {
    stepReadLabel.textContent = 'Read';
    stepTalkLabel.textContent = 'Record';
  } else if (fmt === 'timed') {
    stepReadLabel.textContent = 'Read';
    stepTalkLabel.textContent = 'Timed';
  } else if (fmt === 'surprise') {
    stepReadLabel.textContent = 'Read';
    stepTalkLabel.textContent = 'Go!';
  } else {
    stepReadLabel.textContent = 'Read';
    stepTalkLabel.textContent = 'Talk';
  }

  // Determine if this is a scored (recording) session
  const isScored = s.scored !== false;
  lessonState.isScored = isScored;

  // Hide quiz step if no quiz
  if (!hasQuiz) {
    stepCheckEl.style.display = 'none';
    conn1.style.display = 'none';
  } else {
    stepCheckEl.style.display = '';
    conn1.style.display = '';
  }

  // Hide talk step for unscored sessions
  const stepTalkEl = document.getElementById('step-talk');
  const conn2 = document.getElementById('conn-2');
  if (!isScored) {
    stepTalkEl.style.display = 'none';
    conn2.style.display = 'none';
  } else {
    stepTalkEl.style.display = '';
    conn2.style.display = '';
  }

  // Header
  document.getElementById('lesson-title').textContent = s.title;
  updateLessonStepUI('read');

  // Populate read content
  document.getElementById('lesson-read-content').innerHTML = lc.read;

  // Reset all interactive formats
  resetInteractiveFormats();

  // Set up format-specific interactive elements
  if (lc.cards && (fmt === 'read_only')) {
    setupContentCards(lc.cards);
    // For card-only sessions, enable complete button after cards are done
    if (!isScored && !hasQuiz) {
      document.getElementById('lesson-next-btn').disabled = true;
      document.getElementById('lesson-next-btn').style.opacity = '0.45';
    }
  } else if (lc.reframe && (fmt === 'reframe')) {
    setupReframe(lc.reframe.prompt, lc.reframe.label);
  } else if (lc.scenario && (fmt === 'scenario')) {
    setupScenario(lc.scenario.description, lc.scenario.options);
    // Disable next until option is picked
    document.getElementById('lesson-next-btn').disabled = true;
    document.getElementById('lesson-next-btn').style.opacity = '0.45';
  } else if (fmt === 'surprise') {
    setupSurprise(s.prompt);
  } else if (fmt === 'timed' && lc.timedSeconds) {
    setupTimed(lc.timedSeconds);
  }

  // Populate quiz (if exists)
  if (hasQuiz) {
    let quizHtml = '';
    lc.quiz.forEach((q, i) => {
      const letters = ['A', 'B', 'C', 'D'];
      quizHtml += `<div class="quiz-question" id="quiz-q-${i}">
        <div class="quiz-q-num">Question ${i + 1} of ${lc.quiz.length}</div>
        <div class="quiz-q-text">${q.q}</div>
        <div class="quiz-options">`;
      q.options.forEach((opt, j) => {
        quizHtml += `<button class="quiz-option" id="quiz-opt-${i}-${j}" onclick="selectQuizAnswer(${i},${j})">
          <span class="quiz-option-letter">${letters[j]}</span>${opt}
        </button>`;
      });
      quizHtml += `<div class="quiz-feedback" id="quiz-fb-${i}"></div></div></div>`;
    });
    document.getElementById('lesson-quiz-container').innerHTML = quizHtml;
    document.getElementById('quiz-all-correct').classList.remove('show');
    document.getElementById('quiz-progress-label').textContent = 'Answer all questions to continue';
  }

  // Populate talk (only for scored sessions)
  if (isScored) {
    document.getElementById('talk-prompt-text').textContent = s.prompt;
    document.getElementById('talk-type').textContent = s.type;
    document.getElementById('talk-duration').textContent = s.duration;
    document.getElementById('talk-coach').innerHTML = '<strong>Coach:</strong> ' + s.coaching;
    resetLessonRecording();
  }

  // Show/hide steps
  document.getElementById('lesson-read').style.display = 'block';
  document.getElementById('lesson-check').style.display = 'none';
  document.getElementById('lesson-talk').style.display = 'none';
  const nextBtn = document.getElementById('lesson-next-btn');

  if (!isScored && !hasQuiz) {
    nextBtn.textContent = 'Complete session ✓';
  } else if (!isScored && hasQuiz) {
    nextBtn.textContent = 'I\'ve read this →';
  } else {
    nextBtn.textContent = 'I\'ve read this →';
  }
  nextBtn.disabled = false;
  nextBtn.style.opacity = '1';
  nextBtn.onclick = lessonNext;

  showScreen('screen-lesson');
}

function updateLessonStepUI(step) {
  const steps = ['read', 'check', 'talk'];
  const idx = steps.indexOf(step);
  const hasQuiz = lessonState.hasQuiz;

  steps.forEach((s, i) => {
    const item = document.getElementById('step-' + s);
    if (s === 'check' && !hasQuiz) {
      item.className = 'step-item';
      return;
    }
    item.className = 'step-item' + (i < idx ? ' done' : i === idx ? ' active' : '');
  });
  // Update connectors
  const conn1 = document.getElementById('conn-1');
  const conn2 = document.getElementById('conn-2');
  if (hasQuiz) {
    conn1.className = 'step-connector' + (idx > 0 ? ' done' : '');
    conn2.className = 'step-connector' + (idx > 1 ? ' done' : '');
  } else {
    // When no quiz, conn2 acts as the only connector (read → talk)
    conn2.className = 'step-connector' + (idx > 0 ? ' done' : '');
  }
}

// ── INTERACTIVE FORMAT FUNCTIONS ──
let cardsState = { current: 0, total: 0 };

function setupContentCards(cards) {
  cardsState.current = 0;
  cardsState.total = cards.length;

  const track = document.getElementById('cards-track');
  track.innerHTML = cards.map((html, i) => `
    <div class="content-card-item">
      <div class="lesson-content">${html}</div>
      <div style="text-align:right;font-size:11px;font-weight:700;color:var(--text-faint);margin-top:8px">${i+1} of ${cards.length}</div>
    </div>
  `).join('');
  track.style.transform = 'translateX(0%)';

  const dots = document.getElementById('cards-dots');
  dots.innerHTML = cards.map((_, i) => `<div class="cards-dot${i===0?' active':''}" id="card-dot-${i}"></div>`).join('');

  updateCardsNav();

  document.getElementById('lesson-read-content').style.display = 'none';
  document.getElementById('lesson-cards-wrap').style.display = 'block';
  document.getElementById('lesson-reframe-wrap').style.display = 'none';
  document.getElementById('lesson-scenario-wrap').style.display = 'none';
  document.getElementById('lesson-surprise-wrap').style.display = 'none';
  document.getElementById('lesson-timed-wrap').style.display = 'none';
}

function updateCardsNav() {
  document.getElementById('cards-prev-btn').disabled = cardsState.current === 0;
  document.getElementById('cards-counter').textContent = `${cardsState.current+1} / ${cardsState.total}`;
  const nextBtn = document.getElementById('cards-next-btn');
  if (cardsState.current === cardsState.total - 1) {
    nextBtn.textContent = 'Done ✓';
    nextBtn.onclick = function() {
      document.getElementById('lesson-next-btn').disabled = false;
      document.getElementById('lesson-next-btn').style.opacity = '1';
    };
  } else {
    nextBtn.textContent = 'Next →';
    nextBtn.onclick = cardsNext;
  }
  for (let i = 0; i < cardsState.total; i++) {
    const dot = document.getElementById('card-dot-'+i);
    if (dot) dot.className = 'cards-dot' + (i === cardsState.current ? ' active' : '');
  }
}

function cardsNext() {
  if (cardsState.current < cardsState.total - 1) {
    cardsState.current++;
    document.getElementById('cards-track').style.transform = `translateX(-${cardsState.current * 100}%)`;
    updateCardsNav();
  }
}
function cardsPrev() {
  if (cardsState.current > 0) {
    cardsState.current--;
    document.getElementById('cards-track').style.transform = `translateX(-${cardsState.current * 100}%)`;
    updateCardsNav();
  }
}

function setupReframe(prompt, label) {
  document.getElementById('reframe-label').textContent = label || 'Your thought';
  document.getElementById('reframe-prompt').textContent = prompt;
  document.getElementById('reframe-input').value = '';
  document.getElementById('reframe-response').style.display = 'none';
  document.getElementById('reframe-submit-btn').disabled = true;

  document.getElementById('lesson-read-content').style.display = 'block';
  document.getElementById('lesson-cards-wrap').style.display = 'none';
  document.getElementById('lesson-reframe-wrap').style.display = 'block';
  document.getElementById('lesson-scenario-wrap').style.display = 'none';
  document.getElementById('lesson-surprise-wrap').style.display = 'none';
  document.getElementById('lesson-timed-wrap').style.display = 'none';

  document.getElementById('lesson-next-btn').disabled = true;
  document.getElementById('lesson-next-btn').style.opacity = '0.45';
}

function checkReframeInput() {
  const val = document.getElementById('reframe-input').value.trim();
  document.getElementById('reframe-submit-btn').disabled = val.length < 5;
}

async function submitReframe() {
  const input = document.getElementById('reframe-input').value.trim();
  if (!input) return;

  const btn = document.getElementById('reframe-submit-btn');
  btn.disabled = true;
  btn.textContent = 'Thinking...';

  const s = CURRICULUM.find(s => s.id === lessonState.sessionId);
  const proxy = getProxyUrl();

  try {
    const res = await fetch(proxy + '/analyse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        messages: [{ role: 'user', content: `You are a CBT therapist helping someone with public speaking anxiety. They wrote this anxious thought: "${input}"

Challenge this thought using evidence-based cognitive restructuring. Be warm but direct. In 2-3 sentences:
1. Name the cognitive distortion (catastrophising, mind-reading, fortune-telling, etc.)
2. Ask one question that challenges the evidence for the thought
3. Offer a balanced alternative thought

Keep it conversational and kind. No bullet points.` }]
      })
    });
    if (res.ok) {
      const data = await res.json();
      const response = data.content[0].text.trim();
      document.getElementById('reframe-response').textContent = response;
      document.getElementById('reframe-response').style.display = 'block';
    } else {
      document.getElementById('reframe-response').textContent = "That's a common thought pattern. Ask yourself: what's the actual evidence that this will happen? And even if it did — would it really be as bad as your brain is predicting?";
      document.getElementById('reframe-response').style.display = 'block';
    }
  } catch(e) {
    document.getElementById('reframe-response').textContent = "That's a common thought pattern. Ask yourself: what's the actual evidence that this will happen? And even if it did — would it really be as bad as your brain is predicting?";
    document.getElementById('reframe-response').style.display = 'block';
  }

  btn.textContent = 'Done ✓';
  document.getElementById('lesson-next-btn').disabled = false;
  document.getElementById('lesson-next-btn').style.opacity = '1';
}

function setupScenario(description, options) {
  document.getElementById('scenario-desc').textContent = description;
  const container = document.getElementById('pick-options');
  const letters = ['A', 'B', 'C', 'D'];
  container.innerHTML = options.map((opt, i) => `
    <div class="pick-option" id="pick-opt-${i}" onclick="selectPickOption(${i})">
      <div class="pick-option-letter">${letters[i]}</div>
      <div class="pick-option-text">${opt}</div>
    </div>
  `).join('');
  lessonState.pickedOption = -1;

  document.getElementById('lesson-read-content').style.display = 'block';
  document.getElementById('lesson-cards-wrap').style.display = 'none';
  document.getElementById('lesson-reframe-wrap').style.display = 'none';
  document.getElementById('lesson-scenario-wrap').style.display = 'block';
  document.getElementById('lesson-surprise-wrap').style.display = 'none';
  document.getElementById('lesson-timed-wrap').style.display = 'none';
}

function selectPickOption(idx) {
  document.querySelectorAll('.pick-option').forEach((el, i) => {
    el.classList.toggle('selected', i === idx);
  });
  lessonState.pickedOption = idx;
  document.getElementById('lesson-next-btn').disabled = false;
  document.getElementById('lesson-next-btn').style.opacity = '1';
}

function setupSurprise(prompt) {
  lessonState.surprisePrompt = prompt;
  document.getElementById('surprise-prompt-text').textContent = prompt;
  document.getElementById('surprise-prompt-hidden').style.display = 'none';
  document.getElementById('surprise-reveal-btn').style.display = 'block';
  document.getElementById('surprise-reveal-btn').textContent = 'Reveal prompt ⚡';

  document.getElementById('lesson-read-content').style.display = 'block';
  document.getElementById('lesson-cards-wrap').style.display = 'none';
  document.getElementById('lesson-reframe-wrap').style.display = 'none';
  document.getElementById('lesson-scenario-wrap').style.display = 'none';
  document.getElementById('lesson-surprise-wrap').style.display = 'block';
  document.getElementById('lesson-timed-wrap').style.display = 'none';

  document.getElementById('lesson-next-btn').disabled = true;
  document.getElementById('lesson-next-btn').style.opacity = '0.45';
}

function revealSurprise() {
  document.getElementById('surprise-prompt-hidden').style.display = 'block';
  document.getElementById('surprise-reveal-btn').style.display = 'none';
  document.getElementById('lesson-next-btn').disabled = false;
  document.getElementById('lesson-next-btn').style.opacity = '1';
  document.getElementById('lesson-next-btn').textContent = 'Start recording →';
}

function setupTimed(seconds) {
  lessonState.timedLimit = seconds;
  document.getElementById('timed-limit-display').textContent = seconds + 's';

  document.getElementById('lesson-read-content').style.display = 'block';
  document.getElementById('lesson-cards-wrap').style.display = 'none';
  document.getElementById('lesson-reframe-wrap').style.display = 'none';
  document.getElementById('lesson-scenario-wrap').style.display = 'none';
  document.getElementById('lesson-surprise-wrap').style.display = 'none';
  document.getElementById('lesson-timed-wrap').style.display = 'block';
}

function resetInteractiveFormats() {
  document.getElementById('lesson-read-content').style.display = 'block';
  document.getElementById('lesson-cards-wrap').style.display = 'none';
  document.getElementById('lesson-reframe-wrap').style.display = 'none';
  document.getElementById('lesson-scenario-wrap').style.display = 'none';
  document.getElementById('lesson-surprise-wrap').style.display = 'none';
  document.getElementById('lesson-timed-wrap').style.display = 'none';
}

function lessonNext() {
  if (lessonState.step === 'read') {
    if (lessonState.hasQuiz) {
      lessonState.step = 'check';
      updateLessonStepUI('check');
      document.getElementById('lesson-read').style.display = 'none';
      document.getElementById('lesson-check').style.display = 'block';
      document.getElementById('lesson-next-btn').textContent = 'Continue →';
      document.getElementById('lesson-next-btn').disabled = true;
      document.getElementById('lesson-next-btn').style.opacity = '0.45';
    } else if (lessonState.isScored) {
      lessonState.step = 'talk';
      updateLessonStepUI('talk');
      document.getElementById('lesson-read').style.display = 'none';
      document.getElementById('lesson-talk').style.display = 'block';
      document.getElementById('lesson-next-btn').textContent = 'Submit recording';
      document.getElementById('lesson-next-btn').disabled = true;
      document.getElementById('lesson-next-btn').style.opacity = '0.45';
    } else {
      completeUnscoredSession();
      return;
    }
    document.getElementById('screen-lesson').scrollTo(0, 0);

  } else if (lessonState.step === 'check') {
    if (lessonState.isScored) {
      lessonState.step = 'talk';
      updateLessonStepUI('talk');
      document.getElementById('lesson-check').style.display = 'none';
      document.getElementById('lesson-talk').style.display = 'block';
      document.getElementById('lesson-next-btn').textContent = 'Submit recording';
      document.getElementById('lesson-next-btn').disabled = true;
      document.getElementById('lesson-next-btn').style.opacity = '0.45';
    } else {
      completeUnscoredSession();
      return;
    }
    document.getElementById('screen-lesson').scrollTo(0, 0);

  } else if (lessonState.step === 'talk') {
    stopLessonRecording();
  }
}

function completeUnscoredSession() {
  const sid = lessonState.sessionId;
  markSessionPassed(sid);
  const idx = CURRICULUM.findIndex(s => s.id === sid);
  if (idx >= 0 && idx < CURRICULUM.length - 1) {
    const next = CURRICULUM[idx + 1];
    state.currentSessionId = next.id;
    localStorage.setItem('nervless_current_session', next.id);
  }
  showCurriculum();
}

function lessonBack() {
  if (lessonState.step === 'check') {
    lessonState.step = 'read';
    updateLessonStepUI('read');
    document.getElementById('lesson-check').style.display = 'none';
    document.getElementById('lesson-read').style.display = 'block';
    document.getElementById('lesson-next-btn').textContent = 'I\'ve read this →';
    document.getElementById('lesson-next-btn').disabled = false;
    document.getElementById('lesson-next-btn').style.opacity = '1';
  } else if (lessonState.step === 'talk') {
    if (lessonState.hasQuiz) {
      lessonState.step = 'check';
      updateLessonStepUI('check');
      document.getElementById('lesson-talk').style.display = 'none';
      document.getElementById('lesson-check').style.display = 'block';
      checkQuizComplete();
    } else {
      lessonState.step = 'read';
      updateLessonStepUI('read');
      document.getElementById('lesson-talk').style.display = 'none';
      document.getElementById('lesson-read').style.display = 'block';
      document.getElementById('lesson-next-btn').textContent = 'I\'ve read this →';
      document.getElementById('lesson-next-btn').disabled = false;
      document.getElementById('lesson-next-btn').style.opacity = '1';
    }
  }
}

function selectQuizAnswer(qIdx, optIdx) {
  const lc = LESSON_CONTENT[lessonState.sessionId];
  const q = lc.quiz[qIdx];
  if (lessonState.quizAnswers[qIdx] !== undefined) return;

  lessonState.quizAnswers[qIdx] = optIdx;
  const isCorrect = optIdx === q.correct;

  q.options.forEach((_, j) => {
    const btn = document.getElementById(`quiz-opt-${qIdx}-${j}`);
    btn.classList.remove('selected');
    if (j === q.correct) btn.classList.add('correct');
    else if (j === optIdx && !isCorrect) btn.classList.add('wrong');
    btn.disabled = true;
  });

  const fb = document.getElementById(`quiz-fb-${qIdx}`);
  fb.className = 'quiz-feedback show ' + (isCorrect ? 'correct-fb' : 'wrong-fb');
  fb.textContent = (isCorrect ? '✓ ' : '✗ ') + q.explanation;

  if (isCorrect) lessonState.quizCorrect++;
  checkQuizComplete();
}

function checkQuizComplete() {
  const total = lessonState.totalQuestions;
  const answered = Object.keys(lessonState.quizAnswers).length;
  const allCorrect = lessonState.quizCorrect === total && answered === total;

  document.getElementById('quiz-progress-label').textContent =
    answered < total ? `${answered} of ${total} answered` : allCorrect ? 'Perfect score!' : `${lessonState.quizCorrect} of ${total} correct`;

  if (answered === total) {
    if (allCorrect) {
      document.getElementById('quiz-all-correct').classList.add('show');
    }
    document.getElementById('lesson-next-btn').disabled = false;
    document.getElementById('lesson-next-btn').style.opacity = '1';
    if (!lessonState.isScored) {
      document.getElementById('lesson-next-btn').textContent = 'Complete session ✓';
    } else {
      document.getElementById('lesson-next-btn').textContent = allCorrect ? 'Now let\'s talk →' : 'Continue anyway →';
    }
  }
}

// ── LESSON RECORDING ──
function resetLessonRecording() {
  lessonState.isRecording = false;
  lessonState.seconds = 0;
  clearInterval(lessonState.timerInterval);
  const t = document.getElementById('lesson-timer');
  const b = document.getElementById('lesson-record-btn');
  const h = document.getElementById('lesson-record-hint');
  const w = document.getElementById('lesson-waveform');
  if (t) t.textContent = '0:00';
  if (t) t.classList.remove('recording');
  if (b) { b.classList.remove('recording'); b.textContent = ''; }
  if (h) h.textContent = 'Tap to start recording';
  if (w) w.classList.remove('active');
}

async function toggleLessonRecording() {
  if (!lessonState.isRecording) await startLessonRecording();
  else stopLessonRecording();
}

async function startLessonRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    initAudioAnalysis(stream);
    const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' :
                     MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '';
    lessonState.mediaRecorder = mimeType ? new MediaRecorder(stream, {mimeType}) : new MediaRecorder(stream);
    lessonState.audioChunks = [];
    lessonState.mediaRecorder.ondataavailable = e => { if (e.data.size > 0) lessonState.audioChunks.push(e.data); };
    lessonState.mediaRecorder.onstop = () => { stream.getTracks().forEach(t => t.stop()); cleanupAudioAnalysis(); processLessonFeedback(); };
    lessonState.mediaRecorder.start();
    lessonState.isRecording = true;
    lessonState.seconds = 0;
    document.getElementById('lesson-record-btn').classList.add('recording');
    document.getElementById('lesson-record-btn').textContent = '';
    document.getElementById('lesson-record-hint').textContent = 'Recording... tap to stop';
    document.getElementById('lesson-timer').classList.add('recording');
    document.getElementById('lesson-waveform').classList.add('active');
    const nextBtn = document.getElementById('lesson-next-btn');
    nextBtn.disabled = false;
    nextBtn.style.opacity = '1';
    nextBtn.textContent = 'Stop & Submit →';
    lessonState.timerInterval = setInterval(() => {
      lessonState.seconds++;
      const m = Math.floor(lessonState.seconds / 60), s = lessonState.seconds % 60;
      document.getElementById('lesson-timer').textContent = m + ':' + s.toString().padStart(2, '0');
    }, 1000);
  } catch (err) { console.error('Recording error:', err); alert('Microphone error: ' + err.message + '. Try allowing microphone access.'); }
}

function stopLessonRecording() {
  if (lessonState.mediaRecorder && lessonState.mediaRecorder.state !== 'inactive') {
    clearInterval(lessonState.timerInterval);
    lessonState.isRecording = false;
    const nextBtn = document.getElementById('lesson-next-btn');
    if (nextBtn) { nextBtn.textContent = 'Submitting...'; nextBtn.disabled = true; nextBtn.style.opacity = '0.6'; }
    lessonState.mediaRecorder.stop();
  } else if (lessonState.audioChunks && lessonState.audioChunks.length > 0) {
    processLessonFeedback();
  }
}

async function runAIPipeline(audioChunks, durationSeconds, session) {
  if (!checkThrottle()) { hideLoading(); return null; }
  const proxy = getProxyUrl();

  showLoading('Transcribing your speech...', 'Sending to Whisper...');
  const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
  const formData = new FormData();
  formData.append('file', audioBlob, 'recording.webm');

  let transcript = '';
  let words = [];
  try {
    const whisperRes = await fetch(proxy + '/transcribe', {
      method: 'POST',
      body: formData
    });
    if (!whisperRes.ok) throw new Error('Whisper error: ' + whisperRes.status);
    const whisperData = await whisperRes.json();
    transcript = whisperData.text || '';
    words = whisperData.words || [];
  } catch (err) {
    console.error('Whisper failed:', err);
    transcript = '[Transcription failed — check your proxy is running]';
  }

  const wordCount = transcript.trim().split(/\s+/).filter(w => w.length > 0).length;
  if (!transcript || transcript.trim() === '' || wordCount < 5) {
    hideLoading();
    return {
      transcript: transcript || '',
      wpm: 0,
      fillerCount: 0,
      durationSeconds,
      analysis: {
        overallScore: 0,
        title: "Nothing detected",
        subtitle: "We didn't pick up any speech — try again and speak clearly into your microphone.",
        scores: { promptAdherence: 0, clarity: 0, confidence: 0, openness: 0 },
        fillerWords: { count: 0, examples: [], verdict: "No speech detected." },
        pace: { wpm: 0, verdict: "No speech detected." },
        coachingPoints: [
          "Make sure your microphone is working and you're in a quiet environment.",
          "Try speaking for at least 30 seconds — even a few sentences is enough to get started.",
          "It's completely normal to feel awkward at first. Press record and just start talking."
        ],
        transcriptHighlight: "",
        modelAnswer: ""
      }
    };
  }

  showLoading('Claude is analysing...', 'Reading your response...');

  const wpm = durationSeconds > 0
    ? Math.round(((words.length || transcript.split(' ').length) / durationSeconds) * 60)
    : 0;

  let cadenceData = '';
  if (words.length > 2 && words[0].start !== undefined) {
    const gaps = [];
    for (let i = 1; i < words.length; i++) {
      const gap = words[i].start - words[i-1].end;
      if (gap >= 0) gaps.push({ after: words[i-1].word, gap: Math.round(gap * 100) / 100 });
    }
    const longPauses = gaps.filter(g => g.gap > 1.0);
    const medPauses = gaps.filter(g => g.gap > 0.5 && g.gap <= 1.0);
    const allGaps = gaps.map(g => g.gap).filter(g => g >= 0);
    const avgGap = allGaps.length > 0 ? Math.round((allGaps.reduce((a,b) => a+b, 0) / allGaps.length) * 100) / 100 : 0;

    const windowSize = 10;
    const windows = [];
    for (let t = 0; t < durationSeconds; t += windowSize) {
      const wordsInWindow = words.filter(w => w.start >= t && w.start < t + windowSize);
      windows.push({ start: t, wpm: Math.round((wordsInWindow.length / windowSize) * 60) });
    }
    const wpmValues = windows.map(w => w.wpm).filter(w => w > 0);
    const wpmVariation = wpmValues.length > 1 ? Math.max(...wpmValues) - Math.min(...wpmValues) : 0;

    cadenceData = `
CADENCE DATA (from word-level timestamps):
- Average gap between words: ${avgGap}s
- Long pauses (>1s): ${longPauses.length} — ${longPauses.length > 0 ? 'after words: ' + longPauses.slice(0, 8).map(p => '"' + p.after + '" (' + p.gap + 's)').join(', ') : 'none'}
- Medium pauses (0.5–1s): ${medPauses.length}
- Pace variation across ${windows.length} segments: ${wpmVariation} WPM range (${wpmValues.length > 1 ? 'slowest ' + Math.min(...wpmValues) + ', fastest ' + Math.max(...wpmValues) : 'not enough data'})
- ${wpmVariation < 20 ? 'MONOTONE PACE — very little speed variation detected' : wpmVariation < 50 ? 'MODERATE variation in pace' : 'GOOD pace variation — natural speech rhythm detected'}
Use this data to assess delivery quality: deliberate pauses show control, rushed sections suggest anxiety, monotone pace suggests nervousness or disengagement. Long pauses after filler words suggest the speaker is struggling to find words.`;
  }

  const fillerPattern = /\b(um|uh|er|erm|you know|sort of|kind of|basically|literally|I mean)\b/gi;
  const fillerMatches = transcript.match(fillerPattern) || [];
  const fillerCount = fillerMatches.length;

  const isReflective = session && (session.phase === 1 || session.phase === 4);

  let scoringRubric = '';
  const phase = session ? session.phase : 2;
  if (phase === 1) {
    scoringRubric = `SCORING RUBRIC — PHASE 1 (Reflective/Understanding):
Score generously on effort and emotional honesty. This is about speaking freely and building self-awareness.
- promptAdherence: Did they attempt the prompt? Low bar — effort counts.
- clarity: NOT scored strictly. Rambling is fine. Just needs to be understandable.
- confidence: Look for willingness to be vulnerable, not assertiveness.
- openness: MOST IMPORTANT. Emotional honesty and depth. Weight this heavily.
- Filler words: Ignore completely. Do not mention them.
- Pace/cadence: Note but do not penalise.
- overallScore: 60-90 range for genuine attempts. Below 60 only if clearly no effort.`;
  } else if (phase === 2) {
    scoringRubric = `SCORING RUBRIC — PHASE 2 (Body & Regulation):
Score on technique execution and self-awareness of physical state.
- promptAdherence: Did they actually do the technique (breathing, grounding, etc)?
- clarity: Can you follow their narration of what they're doing?
- confidence: Listen for voice changes — does it settle through the exercise?
- openness: Willingness to describe physical sensations honestly.
- Filler words: Note but don't penalise heavily.
- Pace/cadence: Important — look for pace settling as regulation kicks in.
- overallScore: Score honestly. Partial technique execution = partial score.`;
  } else if (phase === 3) {
    scoringRubric = `SCORING RUBRIC — PHASE 3 (Exposure):
Score on engagement with the exposure challenge and gradual comfort.
- promptAdherence: Did they address the actual prompt, not dodge it?
- clarity: Should be improving — expect basic structure.
- confidence: Key metric. Hedging language, trailing off, and apologising should lower this.
- openness: Still matters but less than Phase 1.
- Filler words: Start noting them. More than 8 per minute is worth flagging.
- Pace/cadence: Flag rushing (>170 WPM) as a sign of anxiety.
- overallScore: 50-85 range. Genuinely good = 80+. Average effort = 60-70.`;
  } else if (phase === 4) {
    scoringRubric = `SCORING RUBRIC — PHASE 4 (Cognitive Reframing — Reflective):
Score on self-awareness, honest engagement with thought patterns, and cognitive flexibility.
- promptAdherence: Did they genuinely engage with the cognitive exercise?
- clarity: Less important than honesty. Structure not expected.
- confidence: Look for conviction when challenging their own thoughts.
- openness: MOST IMPORTANT. Are they being genuinely honest about their internal monologue?
- Filler words: Ignore. This is reflective work.
- Pace/cadence: Slower, thoughtful pace is positive here.
- overallScore: 60-90 range for genuine attempts. Performative answers = lower scores.`;
  } else if (phase === 5) {
    scoringRubric = `SCORING RUBRIC — PHASE 5 (Finding Your Voice):
Score on authenticity, emotional range, and personal distinctiveness.
- promptAdherence: Strict. They must address the specific prompt.
- clarity: Expect clear structure — beginning, middle, end.
- confidence: Should sound like them, not like they're performing. Genuine > polished.
- openness: Emotional range matters — monotone delivery should lose points.
- Filler words: Penalise. More than 5 per minute is too many at this stage.
- Pace/cadence: Variation is key. Monotone pace = lower score. Natural rhythm = higher.
- overallScore: 45-90 range. Be honest. Bland, safe answers shouldn't score above 65.`;
  } else if (phase === 6) {
    scoringRubric = `SCORING RUBRIC — PHASE 6 (High Stakes):
Score strictly on delivery under pressure. These are professional scenarios.
- promptAdherence: Strict. Must address the scenario directly, not waffle around it.
- clarity: CRITICAL. Must have clear structure. Rambling = penalised hard.
- confidence: Key metric. Hedging, apologising, undermining own points = low score.
- openness: Less relevant. Replace with "composure" — did they stay steady?
- Filler words: Penalise firmly. More than 4 per minute at this stage is too many.
- Pace/cadence: Rushing = anxiety. Long pauses after filler words = struggling. Flag both.
- Duration: If response is under 60 seconds for a 2-3 min prompt, penalise — they're cutting short.
- overallScore: 40-90 range. Be strict. This phase should feel harder to score well on.`;
  } else if (phase === 7) {
    scoringRubric = `SCORING RUBRIC — PHASE 7 (In-the-Moment Tools):
Score on technique execution and recovery quality.
- promptAdherence: Must actually perform the technique, not just talk about it.
- clarity: Expect clear narration of what they're doing and why.
- confidence: Recovery speed matters — how quickly do they regain composure?
- openness: Honest self-assessment of what worked and what didn't.
- Filler words: Penalise. Filler words during recovery = the technique isn't landing.
- Pace/cadence: Critical. Use cadence data to assess voice steadiness and recovery.
- overallScore: 45-90 range. Technique not demonstrated = max 50.`;
  } else if (phase === 8) {
    scoringRubric = `SCORING RUBRIC — PHASE 8 (Performing Under Pressure):
STRICTEST SCORING. These are advanced performance sessions.
- promptAdherence: Must fully address the prompt with sophistication.
- clarity: Expect polished structure. Point-by-point, narrative arc, clear transitions.
- confidence: Should sound commanding, not tentative. Score vocal authority.
- openness: Replace with "audience awareness" — are they speaking TO someone, not AT them?
- Filler words: Strict. More than 3 per minute loses points. Pauses should replace fillers by now.
- Pace/cadence: MOST IMPORTANT. Use cadence data heavily. Score vocal variety, deliberate pauses, pace variation. Monotone = penalise. Rushed = penalise.
- Duration: Must meet the suggested duration. Under-time = penalise. This is about sustained performance.
- overallScore: 35-95 range. Average attempts should score 55-70. Only genuinely strong delivery = 80+.`;
  } else if (phase === 9) {
    scoringRubric = `SCORING RUBRIC — PHASE 9 (Maintenance):
Score on honest self-assessment and continued growth.
- promptAdherence: Must engage with the specific reflection or challenge.
- clarity: Expect clear, mature communication at this stage.
- confidence: Should sound grounded and self-aware. Not performing confidence — being confident.
- openness: Critical again. Honest reflection on remaining challenges = high marks.
- Filler words: Note but weight less than Phase 8. This is reflective.
- Pace/cadence: Natural, conversational pace is the goal.
- overallScore: Compare implicitly to what Phase 1 delivery sounded like. Reward growth.`;
  }

  const claudePrompt = `You are an expert speaking coach analysing a recorded speech exercise. The user is working to overcome speaking anxiety.

SCOPE RESTRICTION: You are a speaking coach analysing delivery, not a general assistant. The user may speak about any topic — that's expected, because the prompts ask them to discuss careers, opinions, stories, and more. Analyse their SPEAKING (clarity, structure, confidence, pace, filler words) regardless of subject matter. However, if the transcript is clearly not a speaking exercise but instead a direct question or request to you as an AI (e.g. asking you to write something, explain an unrelated topic, or have a conversation), note in coachingPoints that Nervless is designed for speaking practice and encourage them to try the prompt again.

SCORING INTEGRITY: Score honestly based on what was actually said. If the transcript is very short (under 20 words), the overallScore must not exceed 15. If the response doesn't meaningfully address the prompt, promptAdherence must be 1-2 regardless of phase. Do not give credit for effort that isn't there — credibility depends on honest scoring.

${scoringRubric}

SESSION CONTEXT:
- Phase: ${session ? session.phase : '?'}
- Session: "${session ? session.title : 'Practice'}"
- What it covers: "${session ? session.what : ''}"
- The prompt they were given: "${session ? session.prompt : ''}"
- Type: ${session ? session.type : 'Practice'}
- Expected duration: ${session ? session.duration : 'unknown'}
- Actual duration: ${durationSeconds} seconds

SPEECH DATA:
- Duration: ${durationSeconds} seconds
- Words per minute: ${wpm}
- Filler words detected: ${fillerCount} (${fillerMatches.slice(0, 10).join(', ') || 'none'})
- Note: The automated filler count only catches unambiguous fillers (um, uh, er, erm, you know, sort of, kind of, basically, literally, I mean). Words like "like", "so", "right", "actually" are NOT auto-detected because they're often used as normal speech. Use your judgement to identify any additional filler usage from context in the transcript.
- Full transcript: "${transcript}"
${cadenceData}
${getAudioAnalysisReport()}

Analyse this speech and return ONLY a JSON object with exactly this structure (no markdown, no explanation, just the JSON):
{
  "overallScore": <integer 0-100. Follow the scoring rubric above for this phase. Use the full range specified.>,
  "title": "<2-4 word title — encouraging for Phase 1, honest for Phase 2+>",
  "subtitle": "<one sentence — warm acknowledgement for Phase 1, specific honest observation for Phase 2+>",
  "scores": {
    "promptAdherence": <integer 1-10, did they actually address the prompt?>,
    "clarity": <integer 1-10, structured and coherent? Phase 1: less weight. Phase 2+: strict>,
    "confidence": <integer 1-10, based on hedging language, trailing off, assertiveness>,
    "openness": <integer 1-10, emotional honesty and depth — most important in Phase 1>
  },
  "fillerWords": {
    "count": ${fillerCount},
    "examples": [<up to 5 specific filler words found>],
    "verdict": "<one short sentence>"
  },
  "pace": {
    "wpm": ${wpm},
    "verdict": "<one sentence on pace>",
    "pauseVerdict": "<one sentence on pause usage — were pauses deliberate/strategic or anxious/stumbling? Use cadence data if available>",
    "variationVerdict": "<one sentence on pace variation — was delivery monotone or naturally varied? Reference the cadence data>"
  },
  "coachingPoints": [
    "<specific observation referencing their actual words or cadence data — what you noticed>",
    "<one thing they did well — be specific, quote their words if possible>",
    "<one concrete actionable improvement — name the technique, framework, or specific change>"
  ],
  "improvementPlan": {
    "focus": "<the single most impactful thing to improve>",
    "technique": "<name a specific framework or technique to try>",
    "example": "<rewrite one weak sentence from their transcript using the technique>"
  },
  "transcriptHighlight": "<a specific phrase from their transcript worth noting, with a one-sentence observation>",
  "modelAnswer": ${isReflective ? '"" /* leave empty for reflective phases */' : '"<ONLY if overallScore < 70: write a 2-3 sentence example of how a strong answer to this prompt would sound. Use their topic/content where possible. If score >= 70, leave empty string.>"'}
}`;

  let analysis = null;
  try {
    const claudeRes = await fetch(proxy + '/analyse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [{ role: 'user', content: claudePrompt }]
      })
    });
    if (!claudeRes.ok) throw new Error('Claude error: ' + claudeRes.status);
    const claudeData = await claudeRes.json();
    const raw = claudeData.content[0].text.trim();
    const cleaned = raw.replace(/```json|```/g, '').trim();
    analysis = JSON.parse(cleaned);
  } catch (err) {
    console.error('Claude failed:', err);
    analysis = {
      overallScore: Math.min(95, Math.max(40, 70 - fillerCount * 3 + (wpm > 100 && wpm < 180 ? 10 : 0))),
      title: 'Good effort',
      subtitle: 'You showed up and practised — that\'s the most important thing.',
      scores: { promptAdherence: 7, clarity: 7, confidence: 6, openness: 7 },
      fillerWords: { count: fillerCount, examples: fillerMatches.slice(0, 5), verdict: fillerCount === 0 ? 'No fillers detected.' : `${fillerCount} filler words detected.` },
      pace: { wpm, verdict: wpm < 120 ? 'Speaking slowly — try to pick up pace.' : wpm > 170 ? 'Speaking quickly — try slowing down.' : 'Good pace.' },
      coachingPoints: ['You completed the exercise — consistency is what builds change.', 'Keep your proxy running for detailed AI feedback.', 'Try recording again and notice if anything feels different.'],
      transcriptHighlight: ''
    };
  }

  return { transcript, analysis, wpm, fillerCount, durationSeconds };
}

function processLessonFeedback() {
  if (!checkApiKeys()) return;
  const session = CURRICULUM.find(s => s.id === lessonState.sessionId);
  runAIPipeline(lessonState.audioChunks, lessonState.seconds, session).then(result => {
    if (!result) { hideLoading(); return; }
    hideLoading();
    try {
      const rec = buildRecord(result, lessonState.sessionId, session);
      state.sessions.unshift(rec);
      localStorage.setItem('nervless_sessions', JSON.stringify(state.sessions.slice(0, 30)));
      renderFeedback(rec, result.transcript, result.analysis);
    } catch(err) {
      console.error('renderFeedback error:', err);
      document.getElementById('feedback-title').textContent = result.analysis.title || 'Done';
      document.getElementById('feedback-sub').textContent = result.analysis.subtitle || '';
      document.getElementById('score-num').textContent = result.analysis.overallScore || '-';
      document.getElementById('score-ring').style.setProperty('--pct', (result.analysis.overallScore || 0) + '%');
      showScreen('screen-feedback');
    }
  }).catch(err => {
    hideLoading();
    console.error('Pipeline error:', err);
  });
}

function processFeedback() {
  if (!checkApiKeys()) return;
  const session = CURRICULUM.find(s => s.id === state.currentSessionId);
  runAIPipeline(state.audioChunks, state.seconds, session).then(result => {
    if (!result) return;
    hideLoading();
    const rec = buildRecord(result, state.currentSessionId, session);
    state.sessions.unshift(rec);
    localStorage.setItem('nervless_sessions', JSON.stringify(state.sessions.slice(0, 30)));
    renderFeedback(rec, result.transcript, result.analysis);
  });
}

function renderFeedback(rec, transcript, analysis) {
  const a = analysis;
  resetFeedbackWidget();

  document.getElementById('score-ring').style.setProperty('--pct', a.overallScore + '%');
  document.getElementById('score-num').textContent = a.overallScore;
  document.getElementById('feedback-title').textContent = a.title;
  document.getElementById('feedback-sub').textContent = a.subtitle;

  const session = CURRICULUM.find(s => s.id === (rec.sessionId || state.currentSessionId));
  if (session) {
    document.getElementById('session-context-strip').innerHTML =
      '<strong style="color:var(--sc)">Session ' + session.id + ': ' + session.title + '</strong><br><span style="font-size:12px">' + session.what + '</span>';
  }

  const wc = a.pace.wpm < 120 ? 'var(--gold)' : a.pace.wpm > 170 ? 'var(--red)' : 'var(--green)';
  const fc = a.fillerWords.count === 0 ? 'var(--green)' : a.fillerWords.count < 4 ? 'var(--gold)' : 'var(--red)';
  document.getElementById('m-pace').innerHTML = '<span style="color:' + wc + '">' + a.pace.wpm + ' <span style="font-size:12px;font-weight:600;color:var(--muted)">WPM</span></span>';
  document.getElementById('m-pace-desc').textContent = a.pace.verdict;
  document.getElementById('m-fillers').innerHTML = '<span style="color:' + fc + '">' + a.fillerWords.count + '</span>';
  document.getElementById('m-fillers-desc').textContent = a.fillerWords.verdict;

  setTimeout(() => {
    const paceMarker = document.getElementById('pace-marker');
    if (paceMarker) {
      const pacePct = Math.min(100, Math.max(0, (a.pace.wpm / 220) * 100));
      paceMarker.style.left = pacePct + '%';
    }
  }, 200);

  function renderScore(id, barId, score) {
    const colour = scoreColour(score);
    document.getElementById(id).innerHTML = '<span style="color:' + colour + '">' + score + '</span><span style="font-size:11px;color:var(--muted);font-weight:600">/10</span>';
    setTimeout(() => {
      const bar = document.getElementById(barId);
      if (bar) {
        bar.style.width = (score * 10) + '%';
        bar.style.background = colour;
      }
    }, 300);
  }
  renderScore('m-prompt', 'bar-prompt', a.scores.promptAdherence);
  renderScore('m-clarity', 'bar-clarity', a.scores.clarity);
  renderScore('m-confidence', 'bar-confidence', a.scores.confidence);
  renderScore('m-openness', 'bar-openness', a.scores.openness);

  const voiceRow = document.getElementById('voice-analysis-row');
  const va = audioAnalysis.volumeSamples.filter(d => d > -80);
  const pa = audioAnalysis.pitchSamples;
  if (va.length > 3 && voiceRow) {
    voiceRow.style.display = 'block';
    const avgVol = Math.round(va.reduce((a,b)=>a+b,0)/va.length);
    const volLabel = avgVol < -35 ? 'Quiet' : avgVol > -15 ? 'Strong' : 'Good';
    const volColour = avgVol < -35 ? 'var(--gold)' : 'var(--green)';
    document.getElementById('m-volume').innerHTML = '<span style="color:'+volColour+'">'+volLabel+'</span>';
    document.getElementById('m-volume-desc').textContent = avgVol + ' dB avg';

    if (pa.length > 5) {
      const pitchRange = Math.round(Math.max(...pa)) - Math.round(Math.min(...pa));
      const pitchLabel = pitchRange < 30 ? 'Flat' : pitchRange < 60 ? 'Limited' : pitchRange < 100 ? 'Good' : 'Expressive';
      const pitchColour = pitchRange < 30 ? 'var(--red)' : pitchRange < 60 ? 'var(--gold)' : 'var(--green)';
      document.getElementById('m-pitch').innerHTML = '<span style="color:'+pitchColour+'">'+pitchLabel+'</span>';
      document.getElementById('m-pitch-desc').textContent = pitchRange + ' Hz range';

      const windowSize = 5;
      const vars = [];
      for (let i = 0; i <= pa.length - windowSize; i++) {
        const w = pa.slice(i, i + windowSize);
        const mean = w.reduce((a,b)=>a+b,0)/w.length;
        vars.push(w.reduce((a,b)=>a+(b-mean)**2,0)/w.length);
      }
      const maxVar = vars.length > 0 ? Math.max(...vars) : 0;
      const steadyLabel = maxVar > 800 ? 'Shaky' : maxVar > 400 ? 'Uneven' : 'Steady';
      const steadyColour = maxVar > 800 ? 'var(--red)' : maxVar > 400 ? 'var(--gold)' : 'var(--green)';
      document.getElementById('m-steady').innerHTML = '<span style="color:'+steadyColour+'">'+steadyLabel+'</span>';
      document.getElementById('m-steady-desc').textContent = maxVar > 800 ? 'voice tremor detected' : maxVar > 400 ? 'some instability' : 'good control';
    } else {
      document.getElementById('m-pitch').textContent = '—';
      document.getElementById('m-pitch-desc').textContent = 'not enough data';
      document.getElementById('m-steady').textContent = '—';
      document.getElementById('m-steady-desc').textContent = 'not enough data';
    }
  } else if (voiceRow) {
    voiceRow.style.display = 'none';
  }

  const fillerPattern = /\b(um|uh|er|erm|you know|sort of|kind of|basically|literally|I mean)\b/gi;
  const highlightedTranscript = transcript
    ? transcript.replace(fillerPattern, w => '<span class="filler">' + w + '</span>')
    : '<em style="color:var(--muted)">No transcript available.</em>';
  document.getElementById('transcript-box').innerHTML = highlightedTranscript;

  let tipsHtml = '';
  if (a.coachingPoints) {
    a.coachingPoints.forEach((tip, i) => {
      tipsHtml += '<div class="tip-card"><div class="tip-num">' + (i + 1) + '</div><div class="tip-text">' + tip + '</div></div>';
    });
  }

  if (a.pace.pauseVerdict || a.pace.variationVerdict) {
    tipsHtml += '<div class="tip-card" style="border-color:rgba(196,146,42,0.3);background:rgba(196,146,42,0.04)">'
      + '<div class="tip-num" style="background:rgba(196,146,42,0.15);color:var(--gold);border-color:rgba(196,146,42,0.3)">🎙</div>'
      + '<div class="tip-text">'
      + (a.pace.pauseVerdict ? '<div style="margin-bottom:4px">' + a.pace.pauseVerdict + '</div>' : '')
      + (a.pace.variationVerdict ? '<div>' + a.pace.variationVerdict + '</div>' : '')
      + '</div></div>';
  }

  if (a.transcriptHighlight) {
    tipsHtml += '<div class="tip-card" style="border-color:rgba(194,114,79,0.3);background:rgba(194,114,79,0.04)"><div class="tip-num" style="background:rgba(194,114,79,0.15);color:var(--accent);border-color:rgba(194,114,79,0.3)">💬</div><div class="tip-text" style="font-style:italic">' + a.transcriptHighlight + '</div></div>';
  }

  if (a.improvementPlan && a.improvementPlan.focus) {
    tipsHtml += '<div style="background:var(--surface);border:1.5px solid rgba(194,114,79,0.25);border-radius:16px;padding:18px;margin-top:12px;">'
      + '<div style="font-size:11px;color:var(--accent);letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:10px;">🎯 Focus for next attempt</div>'
      + '<div style="font-size:14px;font-weight:800;color:var(--text);margin-bottom:6px;">' + a.improvementPlan.focus + '</div>'
      + '<div style="font-size:13px;color:var(--muted);line-height:1.6;margin-bottom:10px;">' + a.improvementPlan.technique + '</div>'
      + (a.improvementPlan.example ? '<div style="font-size:13px;color:var(--text);line-height:1.6;background:rgba(194,114,79,0.04);border-radius:10px;padding:12px 14px;font-style:italic;">"' + a.improvementPlan.example + '"</div>' : '')
      + '</div>';
  }

  document.getElementById('tips-container').innerHTML = tipsHtml;

  const sessionForScore = CURRICULUM.find(s => s.id === (rec.sessionId || state.currentSessionId));
  const thresholds = sessionForScore ? getStarThresholds(sessionForScore) : { star1: 55, star2: 70, star3: 85 };
  const isPhase1Session = sessionForScore && (sessionForScore.phase === 1 || sessionForScore.phase === 4);
  const alreadyPassed = hasPassedSession(rec.sessionId || state.currentSessionId);
  const banner = document.getElementById('pass-fail-banner');
  const btn = document.getElementById('complete-session-btn');

  if (isPhase1Session) {
    const note = document.createElement('div');
    note.style.cssText = 'background:rgba(194,114,79,0.06);border:1px solid rgba(194,114,79,0.15);border-radius:14px;padding:14px 16px;margin-bottom:12px;font-size:13px;color:var(--muted);line-height:1.6;text-align:center;';
    const phaseNote = sessionForScore.phase === 1
      ? '🫶 <strong style="color:var(--accent)">Phase 1 — no judgement.</strong> This phase is about speaking freely and building self-awareness.'
      : '💭 <strong style="color:var(--accent)">Reflective phase.</strong> This phase scores emotional honesty and self-awareness, not delivery technique.';
    note.innerHTML = phaseNote;
    if (banner && !document.getElementById('phase1-note')) {
      note.id = 'phase1-note';
      banner.parentNode.insertBefore(note, banner);
    }
  }

  if (banner) {
    banner.style.display = 'block';
    const passed = a.overallScore >= thresholds.star1;

    if (passed) {
      banner.style.background = 'rgba(46,158,122,0.1)';
      banner.style.border = '1px solid rgba(46,158,122,0.3)';
      banner.innerHTML =
        '<div style="font-size:32px;margin-bottom:6px;">✓</div>'
        + '<div style="font-weight:800;color:var(--green);font-size:18px;margin-bottom:4px;">Session passed</div>'
        + '<div style="font-size:13px;color:var(--muted);">You scored ' + a.overallScore + ' / 100</div>';

      if (btn) {
        if (!alreadyPassed) {
          btn.textContent = 'Continue →';
          btn.style.background = 'var(--green)';
          btn.style.width = '100%';
          btn.onclick = completeSession;
        } else {
          btn.textContent = 'Back to journey';
          btn.style.background = '';
          btn.style.width = '100%';
          btn.onclick = showCurriculum;
        }
      }
    } else {
      banner.style.background = 'rgba(217,84,112,0.06)';
      banner.style.border = '1px solid rgba(217,84,112,0.2)';
      banner.innerHTML =
        '<div style="font-size:32px;margin-bottom:6px;">✗</div>'
        + '<div style="font-weight:800;color:var(--red);font-size:18px;margin-bottom:4px;">Not yet</div>'
        + '<div style="font-size:13px;color:var(--muted);">You scored ' + a.overallScore + ' — need ' + thresholds.star1 + ' to pass</div>'
        + (alreadyPassed ? '<div style="font-size:12px;color:var(--muted);margin-top:6px;">Your previous pass is kept.</div>' : '');

      if (btn) {
        btn.textContent = 'Try again';
        btn.style.background = '';
        btn.style.width = '100%';
        btn.onclick = () => loadSession(rec.sessionId || state.currentSessionId);
      }

      const actionsDiv = document.getElementById('feedback-actions');
      const existingShowHow = document.getElementById('show-how-btn');
      if (existingShowHow) existingShowHow.remove();

      if (!isPhase1Session && a.modelAnswer && actionsDiv) {
        const showHowBtn = document.createElement('button');
        showHowBtn.id = 'show-how-btn';
        showHowBtn.className = 'btn-secondary';
        showHowBtn.style.cssText = 'width:100%;margin-top:10px;background:rgba(194,114,79,0.06);border-color:rgba(194,114,79,0.3);color:var(--accent);font-weight:700;';
        showHowBtn.textContent = '💡 Show me how to improve';
        showHowBtn.onclick = () => showModelAnswer(a.modelAnswer, sessionForScore);
        actionsDiv.insertBefore(showHowBtn, actionsDiv.querySelector('.btn-secondary'));
      }
    }
  }

  showScreen('screen-feedback');
}

let lastFeedbackType = '';
function submitScoreFeedback(type) {
  lastFeedbackType = type;
  document.querySelectorAll('.fb-btn').forEach(b => { b.style.borderColor = 'var(--border)'; b.style.background = 'var(--surface)'; });
  const btn = document.getElementById('fb-' + type.replace('_', '-'));
  if (btn) { btn.style.borderColor = 'var(--accent)'; btn.style.background = 'rgba(194,114,79,0.08)'; }

  if (type === 'accurate') {
    logFeedback(type, '');
    document.getElementById('fb-detail').style.display = 'none';
    document.getElementById('fb-thanks').style.display = 'block';
  } else {
    document.getElementById('fb-detail').style.display = 'block';
    document.getElementById('fb-thanks').style.display = 'none';
    document.getElementById('fb-text').focus();
  }
}
function sendFeedbackDetail() {
  const text = document.getElementById('fb-text').value.trim();
  logFeedback(lastFeedbackType, text);
  document.getElementById('fb-detail').style.display = 'none';
  document.getElementById('fb-thanks').style.display = 'block';
}
function logFeedback(type, detail) {
  const feedback = JSON.parse(localStorage.getItem('nervless_feedback') || '[]');
  feedback.push({
    type, detail,
    sessionId: state.currentSessionId,
    score: state.sessions.length > 0 ? state.sessions[0].score : null,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('nervless_feedback', JSON.stringify(feedback.slice(-50)));
}
function resetFeedbackWidget() {
  document.querySelectorAll('.fb-btn').forEach(b => { b.style.borderColor = 'var(--border)'; b.style.background = 'var(--surface)'; });
  document.getElementById('fb-detail').style.display = 'none';
  document.getElementById('fb-thanks').style.display = 'none';
  document.getElementById('fb-text').value = '';
  lastFeedbackType = '';
}

function showModelAnswer(modelAnswer, session) {
  const existing = document.getElementById('model-answer-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'model-answer-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(247,245,240,0.97);z-index:200;overflow-y:auto;padding:0 0 40px;';
  overlay.innerHTML = `
    <div style="padding:52px 24px 24px;">
      <button onclick="document.getElementById('model-answer-overlay').remove()" style="background:none;border:none;font-size:24px;cursor:pointer;color:var(--muted);margin-bottom:20px;display:block;">←</button>
      <div style="font-size:11px;color:var(--accent);letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:8px;">💡 HOW TO STRUCTURE THIS BETTER</div>
      <div style="font-family:'DM Serif Display',serif;font-size:22px;margin-bottom:6px;">${session ? session.title : 'Your session'}</div>
      <div style="font-size:14px;color:var(--muted);margin-bottom:24px;">Here's how a strong answer to this prompt could sound, based on what you were trying to say.</div>
    </div>
    <div style="margin:0 24px 20px;background:var(--surface);border:1.5px solid rgba(194,114,79,0.25);border-radius:20px;padding:22px;">
      <div style="font-size:11px;color:var(--accent);letter-spacing:2px;text-transform:uppercase;font-weight:700;margin-bottom:12px;">Example answer</div>
      <div style="font-size:15px;color:var(--text);line-height:1.75;">${modelAnswer}</div>
    </div>
    <div style="margin:0 24px 20px;background:var(--surface2);border-radius:16px;padding:18px;">
      <div style="font-size:13px;color:var(--muted);line-height:1.6;">
        <strong style="color:var(--text);">What makes this stronger:</strong> Notice how it answers the prompt directly, uses specific detail rather than generalities, and has a clear structure. Try reading the example out loud once, then record your own version — you don't need to copy it, just borrow the shape.
      </div>
    </div>
    <div style="margin:0 24px 20px;background:rgba(46,158,122,0.06);border:1px solid rgba(46,158,122,0.2);border-radius:16px;padding:18px;">
      <div style="font-size:13px;color:var(--text);line-height:1.6;">
        <strong>Quick tips for this attempt:</strong><br>
        • Start with your main point — don't build up to it<br>
        • Use one specific example, not several vague ones<br>
        • Aim for a natural pace — if you're rushing, slow down deliberately<br>
        • When you feel an "um" coming, pause silently instead
      </div>
    </div>
    <div style="padding:0 24px;">
      <button class="btn-primary" onclick="document.getElementById('model-answer-overlay').remove();loadSession(${session ? session.id : 'state.currentSessionId'})" style="margin:0;">Try again with this in mind →</button>
    </div>`;
  document.body.appendChild(overlay);
}

function resetRecording(){state.isRecording=false;state.seconds=0;clearInterval(state.timerInterval);document.getElementById('timer').textContent='0:00';document.getElementById('timer').classList.remove('recording');document.getElementById('record-btn').classList.remove('recording');document.getElementById('record-btn').textContent='';document.getElementById('record-hint').textContent='Tap to start recording';document.getElementById('waveform').classList.remove('active');}

async function toggleRecording(){if(!state.isRecording)await startRecording();else stopRecording();}
async function startRecording(){
  try{
    const stream=await navigator.mediaDevices.getUserMedia({audio:true});
    initAudioAnalysis(stream);
    const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' :
                     MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '';
    state.mediaRecorder = mimeType ? new MediaRecorder(stream, {mimeType}) : new MediaRecorder(stream);
    state.audioChunks=[];
    state.mediaRecorder.ondataavailable=e=>{if(e.data.size>0)state.audioChunks.push(e.data);};
    state.mediaRecorder.onstop=()=>{stream.getTracks().forEach(t=>t.stop());cleanupAudioAnalysis();processFeedback();};
    state.mediaRecorder.start();state.isRecording=true;state.seconds=0;
    document.getElementById('record-btn').classList.add('recording');document.getElementById('record-btn').textContent='';
    document.getElementById('record-hint').textContent='Recording... tap to stop';
    document.getElementById('timer').classList.add('recording');document.getElementById('waveform').classList.add('active');
    state.timerInterval=setInterval(()=>{state.seconds++;const m=Math.floor(state.seconds/60),s=state.seconds%60;document.getElementById('timer').textContent=m+':'+s.toString().padStart(2,'0');},1000);
  }catch(err){alert('Microphone access needed. Please allow and try again. Requires HTTPS.');}
}
function stopRecording(){if(state.mediaRecorder&&state.mediaRecorder.state!=='inactive'){clearInterval(state.timerInterval);state.isRecording=false;state.mediaRecorder.stop();}}
function showPhaseLockedMsg(phaseNum) {
  const prevPhase = phaseNum - 1;
  const relevant = CURRICULUM.filter(s => s.id >= LEVEL_ENTRY[state.level]);
  const prevSessions = relevant.filter(s => s.phase === prevPhase);
  const remaining = prevSessions.filter(s => !hasPassedSession(s.id)).length;
  alert('Phase ' + phaseNum + ' is locked. Pass all ' + prevSessions.length + ' sessions in Phase ' + prevPhase + ' to unlock it. You have ' + remaining + ' left to pass.');
}

function completeSession() {
  const id = state.currentSessionId;
  const session = CURRICULUM.find(s => s.id === id);
  const lastRec = state.sessions.find(s => s.sessionId === id);
  const score = lastRec ? lastRec.score : 0;
  const passScore = session ? getPassScore(session) : 55;

  if (score >= passScore) {
    markSessionPassed(id);
    const entry = LEVEL_ENTRY[state.level];
    const relevant = CURRICULUM.filter(s => s.id >= entry);
    const nextUnpassed = relevant.find(s => !hasPassedSession(s.id));
    if (nextUnpassed) {
      state.currentSessionId = nextUnpassed.id;
      localStorage.setItem('nervless_current_session', nextUnpassed.id);
    }
  }
  showCurriculum();
}

function showDashboard(){
  const sessions=state.sessions,count=sessions.length,avg=count?Math.round(sessions.reduce((a,s)=>a+s.score,0)/count):null,mins=Math.round(sessions.reduce((a,s)=>a+(s.duration||60),0)/60);
  document.getElementById('stat-sessions').textContent=count;document.getElementById('stat-avg').textContent=avg||'-';document.getElementById('stat-mins').textContent=mins;
  document.getElementById('streak-value').textContent=count>0?Math.min(count,7)+' day'+(count>1?'s':''):'Start today';
  const list=document.getElementById('history-list');
  if(!sessions.length){list.innerHTML='<div style="text-align:center;color:var(--muted);padding:32px;font-size:15px">No sessions yet. Start your journey to see progress here.</div>';}
  else{list.innerHTML=sessions.slice(0,8).map(s=>{const c=s.score>=70?'var(--green)':s.score>=50?'var(--gold)':'var(--red)';return'<div class="history-card"><div><div class="history-prompt">'+(s.sessionTitle||'Practice session')+'</div><div class="history-meta">Level '+s.level+' &middot; '+s.date+'</div></div><div class="history-score" style="color:'+c+'">'+s.score+'</div></div>';}).join('');}
  setActiveNav('progress');
  showScreen('screen-dashboard');
  renderProgressChart();
}

function renderProgressChart() {
  const canvas = document.getElementById('progress-chart');
  if (!canvas) return;

  const scored = state.sessions.filter(s => typeof s.score === 'number' && s.score > 0);
  const slice = scored.slice(-20);

  if (slice.length < 2) {
    const wrap = document.getElementById('progress-chart-wrap');
    if (wrap) wrap.style.display = 'none';
    return;
  }

  const wrap = document.getElementById('progress-chart-wrap');
  if (wrap) wrap.style.display = 'block';

  const labels = slice.map((s, i) => s.sessionTitle ? s.sessionTitle.split(' ').slice(0,2).join(' ') : 'Session ' + (i + 1));
  const scores = slice.map(s => s.score);
  const fillers = slice.map(s => typeof s.fillers === 'number' ? s.fillers : null);
  const hasFillers = fillers.some(f => f !== null);

  const style = getComputedStyle(document.documentElement);
  const accentColor = style.getPropertyValue('--accent').trim() || '#5B4FD9';
  const greenColor  = style.getPropertyValue('--green').trim()  || '#2E9E7A';
  const mutedColor  = style.getPropertyValue('--text-faint').trim() || '#ADA89E';
  const borderColor = style.getPropertyValue('--border').trim() || '#E4E0D8';

  if (canvas._chartInstance) {
    canvas._chartInstance.destroy();
  }

  const datasets = [
    {
      label: 'Score',
      data: scores,
      borderColor: accentColor,
      backgroundColor: accentColor + '18',
      borderWidth: 2.5,
      pointRadius: 4,
      pointBackgroundColor: accentColor,
      tension: 0.35,
      fill: true,
      yAxisID: 'y'
    }
  ];

  if (hasFillers) {
    datasets.push({
      label: 'Filler words',
      data: fillers,
      borderColor: greenColor,
      backgroundColor: 'transparent',
      borderWidth: 2,
      pointRadius: 3,
      pointBackgroundColor: greenColor,
      borderDash: [4, 3],
      tension: 0.35,
      fill: false,
      yAxisID: 'y2'
    });
  }

  canvas._chartInstance = new Chart(canvas, {
    type: 'line',
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: mutedColor,
            font: { family: 'Nunito', size: 11, weight: '700' },
            boxWidth: 12,
            padding: 16
          }
        },
        tooltip: {
          backgroundColor: '#fff',
          titleColor: '#1A1814',
          bodyColor: '#7A7268',
          borderColor: borderColor,
          borderWidth: 1,
          titleFont: { family: 'Nunito', weight: '800', size: 12 },
          bodyFont: { family: 'Nunito', size: 12 },
          padding: 10,
          cornerRadius: 10
        }
      },
      scales: {
        x: {
          ticks: {
            color: mutedColor,
            font: { family: 'Nunito', size: 10 },
            maxRotation: 30,
            maxTicksLimit: 8
          },
          grid: { color: borderColor }
        },
        y: {
          min: 0, max: 100,
          ticks: {
            color: mutedColor,
            font: { family: 'Nunito', size: 11 },
            stepSize: 25
          },
          grid: { color: borderColor },
          title: {
            display: true,
            text: 'Score',
            color: mutedColor,
            font: { family: 'Nunito', size: 11, weight: '700' }
          }
        },
        ...(hasFillers ? {
          y2: {
            position: 'right',
            min: 0,
            ticks: {
              color: greenColor,
              font: { family: 'Nunito', size: 11 }
            },
            grid: { drawOnChartArea: false },
            title: {
              display: true,
              text: 'Fillers',
              color: greenColor,
              font: { family: 'Nunito', size: 11, weight: '700' }
            }
          }
        } : {})
      }
    }
  });
}

function showLoading(t, sub){
  document.getElementById('loading-text').textContent=t;
  const subEl = document.getElementById('loading-sub');
  if (subEl) subEl.textContent = sub || '';
  document.getElementById('loading').classList.add('active');
}
function hideLoading(){document.getElementById('loading').classList.remove('active');}

let freeState = { mode: null, prompt: '', isRecording: false, seconds: 0, timerInterval: null, mediaRecorder: null, audioChunks: [] };

function showFreeTab() {
  setActiveNav('free');
  freeState.mode = null;
  freeState.prompt = '';
  freeState.round2 = false;
  freeState.round1Transcript = '';
  freeState.followUpQuestion = '';
  freeState.round1Prompt = '';
  document.getElementById('free-prompt-area').style.display = 'none';
  document.getElementById('free-recording-wrap').style.display = 'none';
  document.querySelectorAll('.free-mode-card').forEach(c => c.classList.remove('selected'));
  resetFreeRecording();
  showScreen('screen-free');
}

function selectFreeMode(mode) {
  freeState.mode = mode;
  freeState.round2 = false;
  freeState.round1Transcript = '';
  freeState.followUpQuestion = '';
  freeState.round1Prompt = '';
  document.querySelectorAll('.free-mode-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('free-card-' + mode).classList.add('selected');
  const m = FREE_MODES[mode];
  const prompts = m.prompts;
  freeState.prompt = prompts[Math.floor(Math.random() * prompts.length)];
  document.getElementById('free-prompt-text').textContent = freeState.prompt;
  document.getElementById('free-prompt-label-text').textContent = m.isInteractive ? '🔥 Round 1' : 'Your prompt';
  document.getElementById('free-prompt-area').style.display = 'block';
  document.getElementById('free-recording-wrap').style.display = 'flex';
  resetFreeRecording();
}

function resetFreeRecording() {
  freeState.isRecording = false; freeState.seconds = 0;
  clearInterval(freeState.timerInterval);
  const t=document.getElementById('free-timer'),b=document.getElementById('free-record-btn'),h=document.getElementById('free-record-hint'),w=document.getElementById('free-waveform');
  if(t){t.textContent='0:00';t.classList.remove('recording');}
  if(b){b.classList.remove('recording');b.textContent='';}
  if(h)h.textContent='Tap to start recording';
  if(w)w.classList.remove('active');
  const sb=document.getElementById('free-submit-btn');
  if(sb) sb.style.display='none';
}

async function toggleFreeRecording() {
  if (!freeState.isRecording) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({audio:true});
      initAudioAnalysis(stream);
      const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' :
                       MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '';
      freeState.mediaRecorder = mimeType ? new MediaRecorder(stream, {mimeType}) : new MediaRecorder(stream);
      freeState.audioChunks = [];
      freeState.mediaRecorder.ondataavailable = e => { if(e.data.size>0) freeState.audioChunks.push(e.data); };
      freeState.mediaRecorder.onstop = () => { stream.getTracks().forEach(t=>t.stop()); cleanupAudioAnalysis(); processFreeRecording(); };
      freeState.mediaRecorder.start();
      freeState.isRecording = true; freeState.seconds = 0;
      document.getElementById('free-record-btn').classList.add('recording');
      document.getElementById('free-record-btn').textContent = '';
      document.getElementById('free-record-hint').textContent = 'Recording... tap to stop';
      document.getElementById('free-timer').classList.add('recording');
      document.getElementById('free-waveform').classList.add('active');
      freeState.timerInterval = setInterval(()=>{
        freeState.seconds++;
        const m=Math.floor(freeState.seconds/60),s=freeState.seconds%60;
        document.getElementById('free-timer').textContent=m+':'+s.toString().padStart(2,'0');
      },1000);
    } catch(err) { alert('Microphone access needed. Requires HTTPS.'); }
  } else {
    clearInterval(freeState.timerInterval);
    freeState.isRecording = false;
    freeState.mediaRecorder.stop();
  }
}

function processFreeRecording() {
  const mode = FREE_MODES[freeState.mode];

  if (mode && mode.isInteractive && !freeState.round2) {
    processHotSeatRound1();
    return;
  }

  const fakeSession = {
    title: mode?.title || 'Free Practice',
    what: freeState.round2 ? 'Hot Seat: Round 2 follow-up response' : 'Free practice session',
    prompt: freeState.round2 ? freeState.round1Prompt + ' | FOLLOW-UP: ' + freeState.followUpQuestion : freeState.prompt,
    type: freeState.mode,
    phase: 2,
    duration: '2 min'
  };

  runAIPipeline(freeState.audioChunks, freeState.seconds, fakeSession).then(result => {
    if (!result) return;
    hideLoading();

    if (freeState.round2 && freeState.round1Transcript) {
      result.analysis.coachingPoints = result.analysis.coachingPoints || [];
      result.analysis.coachingPoints.unshift('Round 1 answer: "' + freeState.round1Transcript.slice(0, 100) + '..." → Follow-up: "' + freeState.followUpQuestion + '"');
    }

    const rec = {
      id: Date.now(), sessionId: 'free-'+Date.now(),
      sessionTitle: mode?.title || 'Free Practice',
      score: result.analysis.overallScore, wpm: result.wpm, fillers: result.fillerCount,
      clarity: result.analysis.scores.clarity, confidence: result.analysis.scores.confidence,
      promptAdherence: result.analysis.scores.promptAdherence, openness: result.analysis.scores.openness,
      duration: result.durationSeconds, level: state.level,
      date: new Date().toLocaleDateString('en-GB',{day:'numeric',month:'short'})
    };
    state.sessions.unshift(rec);
    localStorage.setItem('nervless_sessions', JSON.stringify(state.sessions.slice(0,30)));
    renderFeedback(rec, result.transcript, result.analysis);
    const banner = document.getElementById('pass-fail-banner');
    const btn = document.getElementById('complete-session-btn');
    if(banner){ banner.style.display='none'; }
    if(btn){ btn.textContent='Back to practice'; btn.style.background=''; btn.onclick=showFreeTab; }
    freeState.round2 = false;
    freeState.round1Transcript = '';
    freeState.followUpQuestion = '';
    freeState.round1Prompt = '';
  });
}

async function processHotSeatRound1() {
  showLoading('Transcribing round 1...', 'Preparing your follow-up...');
  const proxy = getProxyUrl();

  const audioBlob = new Blob(freeState.audioChunks, { type: freeState.mediaRecorder?.mimeType || 'audio/webm' });
  const formData = new FormData();
  formData.append('file', audioBlob, 'recording.webm');

  let transcript = '';
  try {
    const whisperRes = await fetch(proxy + '/transcribe', { method: 'POST', body: formData });
    if (whisperRes.ok) {
      const data = await whisperRes.json();
      transcript = data.text || '';
    }
  } catch(e) { console.error('Hot Seat R1 transcription failed:', e); }

  if (!transcript || transcript.trim().split(/\s+/).length < 5) {
    hideLoading();
    alert('We didn\'t catch enough speech for round 1. Try again and speak a bit more.');
    resetFreeRecording();
    return;
  }

  freeState.round1Transcript = transcript;
  freeState.round1Prompt = freeState.prompt;

  showLoading('Generating follow-up...', 'Claude is thinking of a tough one...');
  try {
    const claudeRes = await fetch(proxy + '/analyse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 200,
        messages: [{ role: 'user', content: `You are an interviewer in a speaking practice exercise. The speaker was asked: "${freeState.prompt}"

Their answer was: "${transcript}"

Generate ONE sharp, specific follow-up question that:
- Directly challenges, probes, or extends something they said
- Requires them to think on their feet
- Feels like a real follow-up a manager, interviewer, or audience member would ask
- Is 1-2 sentences maximum

Return ONLY the follow-up question, nothing else.` }]
      })
    });
    if (!claudeRes.ok) throw new Error('Claude error');
    const data = await claudeRes.json();
    freeState.followUpQuestion = data.content[0].text.trim();
  } catch(e) {
    console.error('Follow-up generation failed:', e);
    freeState.followUpQuestion = 'Can you give me a specific example of what you just described?';
  }

  hideLoading();

  freeState.round2 = true;
  freeState.audioChunks = [];

  document.getElementById('free-prompt-label-text').textContent = '🔥 FOLLOW-UP QUESTION';
  document.getElementById('free-prompt-text').textContent = freeState.followUpQuestion;
  document.getElementById('free-record-hint').textContent = 'Tap to record your answer';
  document.getElementById('free-timer').textContent = '0:00';
  document.getElementById('free-timer').classList.remove('recording');
  document.getElementById('free-record-btn').classList.remove('recording');
  document.getElementById('free-record-btn').textContent = '';
  document.getElementById('free-waveform').classList.remove('active');
  freeState.isRecording = false;
}

// ── NAV ──
function setActiveNav(tab) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const el = document.getElementById('nav-'+tab);
  if(el) el.classList.add('active');
}
