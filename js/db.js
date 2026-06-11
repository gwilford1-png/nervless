/* ============================================================
   Nervless — DB / AUTH  (js/db.js)
   Supabase magic-link auth + cloud persistence.
   Loads after data.js, logic.js, ui.js. Non-blocking: UI never waits for Supabase.
   ============================================================ */

const SUPABASE_URL = 'https://nvdcshmonsbwiiwsteme.supabase.co';
const SUPABASE_KEY = 'sb_publishable_cXwhARZl6LPGYMopstQ6vA_jHdtnmNt';

const DB = (function () {

  let _sb = null;
  let _session = null;
  let _bannerDismissed = localStorage.getItem('nervless_banner_dismissed') === '1';
  const _migratedKey = 'nervless_migrated_v1';

  // ── Init ──
  async function init() {
    try {
      _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
        auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true }
      });
    } catch (e) { console.warn('[DB] init failed:', e); return; }

    _sb.auth.onAuthStateChange(async (event, session) => {
      const wasSignedIn = !!_session;
      _session = session;
      _updateAuthUI();
      if (event === 'SIGNED_IN' && !wasSignedIn) {
        _showAuthState('done');
        await _onFirstSignIn();
      }
      if (event === 'SIGNED_OUT') _updateAuthUI();
    });

    const { data } = await _sb.auth.getSession();
    _session = data.session;
    _updateAuthUI();
    if (_session) await _loadUserData();
  }

  function _showAuthState(s) {
    ['idle','sent','done'].forEach(k => {
      const el = document.getElementById('auth-state-' + k);
      if (el) el.style.display = k === s ? 'block' : 'none';
    });
  }

  function _updateAuthUI() {
    const signedIn = !!_session;
    const emailEl   = document.getElementById('menu-auth-email');
    const signinBtn = document.getElementById('menu-auth-signin');
    const signoutBtn= document.getElementById('menu-auth-signout');
    if (emailEl)   { emailEl.style.display   = signedIn ? 'block' : 'none'; if (signedIn) emailEl.textContent = _session.user.email; }
    if (signinBtn) signinBtn.style.display   = signedIn ? 'none'  : 'block';
    if (signoutBtn) signoutBtn.style.display = signedIn ? 'block' : 'none';
  }

  async function _onFirstSignIn() {
    if (localStorage.getItem(_migratedKey)) { await _loadUserData(); return; }
    try {
      const uid = _session.user.id;
      const level = parseInt(localStorage.getItem('nervless_level') || '2');
      const cur   = parseInt(localStorage.getItem('nervless_current_session') || '1');
      await _sb.from('user_profiles').upsert({ id: uid, level, current_session_id: cur, updated_at: new Date().toISOString() });

      const passed    = JSON.parse(localStorage.getItem('nervless_passed')    || '[]');
      const completed = JSON.parse(localStorage.getItem('nervless_completed') || '[]');
      const allDone   = [...new Set([...passed, ...completed])];
      const sessions  = JSON.parse(localStorage.getItem('nervless_sessions')  || '[]');

      if (allDone.length) {
        const rows = allDone.map(sid => {
          const rec = sessions.find(s => s.sessionId === sid);
          return { user_id: uid, session_id: sid, passed: true, score: rec ? rec.score : null, completed_at: new Date().toISOString() };
        });
        for (let i = 0; i < rows.length; i += 50)
          await _sb.from('session_progress').upsert(rows.slice(i, i + 50), { onConflict: 'user_id,session_id' });
      }
      localStorage.setItem(_migratedKey, '1');
      console.log('[DB] Migration done:', allDone.length, 'sessions');
    } catch (e) { console.warn('[DB] Migration failed (non-critical):', e); }
  }

  async function _loadUserData() {
    if (!_session) return;
    try {
      const uid = _session.user.id;
      const { data: profile } = await _sb.from('user_profiles').select('level,current_session_id').eq('id', uid).single();
      if (profile) {
        localStorage.setItem('nervless_level', profile.level);
        localStorage.setItem('nervless_current_session', profile.current_session_id);
        if (typeof state !== 'undefined') { state.level = profile.level; state.currentSessionId = profile.current_session_id; }
      }
      const { data: progress } = await _sb.from('session_progress').select('session_id,score').eq('user_id', uid).eq('passed', true);
      if (progress && progress.length) {
        const ids = progress.map(r => r.session_id);
        localStorage.setItem('nervless_passed', JSON.stringify(ids));
        localStorage.setItem('nervless_completed', JSON.stringify(ids));
        if (typeof state !== 'undefined') state.completedSessions = ids;
      }
    } catch (e) { console.warn('[DB] load failed (using cache):', e); }
  }

  async function saveCompletedSession(sessionId, score) {
    if (!_session || !_sb) return;
    try {
      await _sb.from('session_progress').upsert(
        { user_id: _session.user.id, session_id: sessionId, passed: true, score: score || null, completed_at: new Date().toISOString() },
        { onConflict: 'user_id,session_id' }
      );
    } catch (e) { console.warn('[DB] saveCompletedSession failed:', e); }
  }

  async function saveProfile(level, currentSessionId) {
    if (!_session || !_sb) return;
    try {
      await _sb.from('user_profiles').upsert({
        id: _session.user.id,
        level: level || (typeof state !== 'undefined' ? state.level : 2),
        current_session_id: currentSessionId || (typeof state !== 'undefined' ? state.currentSessionId : 1),
        updated_at: new Date().toISOString()
      });
    } catch (e) { console.warn('[DB] saveProfile failed:', e); }
  }

  async function saveSuds(rec) {
    if (!_session || !_sb) return;
    try {
      await _sb.from('suds_ratings').insert({
        user_id: _session.user.id,
        context: rec.context,
        ref_id: rec.refId,
        pre_rating: rec.pre,
        post_rating: rec.post,
        created_at: rec.date
      });
    } catch (e) { console.warn('[DB] saveSuds failed:', e); }
  }

  async function saveJournalEvent(ev) {
    if (!_session || !_sb) return;
    try {
      await _sb.from('journal_events').insert({
        id: ev.id.startsWith('je_') ? undefined : ev.id,
        user_id: _session.user.id,
        title: ev.title,
        event_date: ev.event_date || null,
        status: ev.status || 'upcoming'
      });
    } catch (e) { console.warn('[DB] saveJournalEvent failed:', e); }
  }

  async function saveJournalLog(log) {
    if (!_session || !_sb) return;
    try {
      await _sb.from('journal_logs').insert({
        user_id: _session.user.id,
        event_id: (log.event_id && !String(log.event_id).startsWith('je_')) ? log.event_id : null,
        kind: log.kind,
        title: log.title || null,
        phase: log.phase || null,
        mission_id: log.mission_id || null,
        predicted_anxiety: typeof log.predicted_anxiety === 'number' ? log.predicted_anxiety : null,
        actual_anxiety: typeof log.actual_anxiety === 'number' ? log.actual_anxiety : null,
        feared_text: log.feared_text || null,
        happened_text: log.happened_text || null,
        outcome: log.outcome || null,
        bailed: !!log.bailed,
        transcript: log.transcript || null,
        ai_feedback: log.ai_feedback || null
      });
    } catch (e) { console.warn('[DB] saveJournalLog failed:', e); }
  }

  async function loadJournal() {
    if (!_session || !_sb) return null;
    try {
      const uid = _session.user.id;
      const [ev, lg] = await Promise.all([
        _sb.from('journal_events').select('*').eq('user_id', uid).order('created_at', { ascending: false }),
        _sb.from('journal_logs').select('*').eq('user_id', uid).order('created_at', { ascending: false })
      ]);
      return {
        events: (ev.data || []).map(e => ({ id: e.id, title: e.title, event_date: e.event_date, status: e.status, created_at: e.created_at })),
        logs: (lg.data || []).map(l => ({
          id: l.id, event_id: l.event_id, kind: l.kind, title: l.title, phase: l.phase, mission_id: l.mission_id,
          predicted_anxiety: l.predicted_anxiety, actual_anxiety: l.actual_anxiety,
          feared_text: l.feared_text, happened_text: l.happened_text, outcome: l.outcome,
          bailed: l.bailed, transcript: l.transcript, ai_feedback: l.ai_feedback, created_at: l.created_at
        }))
      };
    } catch (e) { console.warn('[DB] loadJournal failed:', e); return null; }
  }

  function maybeShowSaveBanner() {
    if (_session || _bannerDismissed) return;
    const el = document.getElementById('db-save-banner');
    if (el) el.style.display = 'flex';
  }

  function dismissSaveBanner() {
    _bannerDismissed = true;
    localStorage.setItem('nervless_banner_dismissed', '1');
    const el = document.getElementById('db-save-banner');
    if (el) el.style.display = 'none';
  }

  async function signOut() {
    if (_sb) await _sb.auth.signOut();
    _session = null;
    _updateAuthUI();
    if (typeof showCurriculum === 'function') showCurriculum();
  }

  return { init, isSignedIn: () => !!_session, getUser: () => _session ? _session.user : null, getClient: () => _sb, saveCompletedSession, saveProfile, saveSuds, saveJournalEvent, saveJournalLog, loadJournal, maybeShowSaveBanner, dismissSaveBanner, signOut };
})();

// ── Auth screen ──
async function authSubmit() {
  const emailInput = document.getElementById('auth-email-input');
  const errorEl    = document.getElementById('auth-error');
  const btn        = document.getElementById('auth-submit-btn');
  const email      = (emailInput ? emailInput.value : '').trim();
  if (!email || !email.includes('@')) {
    if (errorEl) { errorEl.textContent = 'Please enter a valid email address.'; errorEl.style.display = 'block'; }
    return;
  }
  if (errorEl) errorEl.style.display = 'none';
  if (btn) { btn.textContent = 'Sending…'; btn.disabled = true; }
  try {
    const _sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    const { error } = await _sb.auth.signInWithOtp({ email, options: { emailRedirectTo: 'https://nervless.app/' } });
    if (error) throw error;
    const sentEmail = document.getElementById('auth-sent-email');
    if (sentEmail) sentEmail.textContent = email;
    document.getElementById('auth-state-idle').style.display = 'none';
    document.getElementById('auth-state-sent').style.display = 'block';
  } catch (e) {
    if (errorEl) { errorEl.textContent = e.message || 'Something went wrong — please try again.'; errorEl.style.display = 'block'; }
    if (btn) { btn.textContent = 'Send magic link →'; btn.disabled = false; }
  }
}

function authReset() {
  document.getElementById('auth-state-idle').style.display = 'block';
  document.getElementById('auth-state-sent').style.display = 'none';
  document.getElementById('auth-state-done').style.display = 'none';
  const btn = document.getElementById('auth-submit-btn');
  const err = document.getElementById('auth-error');
  if (btn) { btn.textContent = 'Send magic link →'; btn.disabled = false; }
  if (err) err.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => { DB.init().catch(e => console.warn('[DB] init error:', e)); });
