/* ============================================================
   Nervless — SUDS (Subjective Units of Distress) ratings  (js/suds.js)
   Two-tap anxiety check (0-10) before and after every speaking rep.
   Self-contained: intercepts record start, prompts after feedback.
   Stores locally (always) + Supabase (when signed in). Non-blocking.
   Loads after ui.js, before app.js.
   ============================================================ */

const SUDS = (function () {

  // pending rating for the rep in progress
  let _pending = null;   // { context, refId, pre, post }
  let _onContinue = null; // callback after pre-rating captured

  const LS_KEY = 'nervless_suds';

  // ── Local store ──
  function _loadLocal() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); }
    catch { return []; }
  }
  function _saveLocal(arr) {
    localStorage.setItem(LS_KEY, JSON.stringify(arr.slice(-200)));
  }

  // ── Show the rating modal ──
  // phase: 'pre' | 'post'   onPick: fn(value)
  function _showModal(phase, onPick) {
    const modal = document.getElementById('suds-modal');
    const title = document.getElementById('suds-title');
    const sub   = document.getElementById('suds-sub');
    const scale = document.getElementById('suds-scale');
    if (!modal) { onPick(null); return; }

    if (phase === 'pre') {
      title.textContent = 'How anxious do you feel right now?';
      sub.textContent = 'Before you speak — there are no wrong answers.';
    } else {
      title.textContent = 'And now?';
      sub.textContent = 'How anxious do you feel having done it?';
    }

    // Build 0-10 buttons
    scale.innerHTML = '';
    for (let i = 0; i <= 10; i++) {
      const b = document.createElement('button');
      b.className = 'suds-num';
      b.textContent = i;
      b.onclick = () => { _hide(); onPick(i); };
      scale.appendChild(b);
    }

    modal.style.display = 'flex';
    requestAnimationFrame(() => modal.classList.add('show'));
  }

  function _hide() {
    const modal = document.getElementById('suds-modal');
    if (!modal) return;
    modal.classList.remove('show');
    setTimeout(() => { modal.style.display = 'none'; }, 200);
  }

  // ── Public: called before recording starts ──
  // Captures pre-rating, then runs the continuation (the actual record start).
  function pre(context, refId, continueFn) {
    _pending = { context, refId, pre: null, post: null, ts: Date.now() };
    _showModal('pre', (val) => {
      _pending.pre = val;
      if (continueFn) continueFn();
    });
  }

  // ── Public: called after feedback renders ──
  function post(onDone) {
    if (!_pending) { if (onDone) onDone(); return; }
    _showModal('post', (val) => {
      _pending.post = val;
      _commit();
      if (onDone) onDone();
    });
  }

  // ── Persist the completed pre+post pair ──
  function _commit() {
    if (!_pending) return;
    const rec = {
      context: _pending.context,
      refId: String(_pending.refId),
      pre: _pending.pre,
      post: _pending.post,
      date: new Date().toISOString()
    };
    const arr = _loadLocal();
    arr.push(rec);
    _saveLocal(arr);

    // Cloud sync (non-blocking)
    if (typeof DB !== 'undefined' && DB.isSignedIn && DB.isSignedIn()) {
      DB.saveSuds(rec).catch(() => {});
    }
    _pending = null;
  }

  // ── Read helpers for Progress screen ──
  function all() { return _loadLocal(); }

  function trend(context) {
    // Returns chronological array of {date, pre, post} for a context
    return _loadLocal()
      .filter(r => !context || r.context === context)
      .map(r => ({ date: r.date, pre: r.pre, post: r.post }));
  }

  function averageDrop(context) {
    const rows = _loadLocal().filter(r =>
      (!context || r.context === context) &&
      typeof r.pre === 'number' && typeof r.post === 'number'
    );
    if (!rows.length) return null;
    const drops = rows.map(r => r.pre - r.post);
    return Math.round((drops.reduce((a, b) => a + b, 0) / drops.length) * 10) / 10;
  }

  return { pre, post, all, trend, averageDrop };
})();
