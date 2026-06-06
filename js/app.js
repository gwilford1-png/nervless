/* ============================================================
   Nervless — APP / BOOTSTRAP
   Global state, startup redirect, load wiring, window exports. MUST load last (after data.js, logic.js, ui.js).
   ============================================================ */

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
window.addEventListener('load',()=>{
  const l=localStorage.getItem('nervless_level'),s=localStorage.getItem('nervless_current_session');
  if(l)state.level=parseInt(l);if(s)state.currentSessionId=parseInt(s);
  state.completedSessions=JSON.parse(localStorage.getItem('nervless_completed')||'[]');
  const ok=localStorage.getItem('nervless_openai_key');
  const ak=localStorage.getItem('nervless_anthropic_key');
  if(ok && document.getElementById('input-openai-key')) document.getElementById('input-openai-key').value=ok;
  if(ak && document.getElementById('input-anthropic-key')) document.getElementById('input-anthropic-key').value=ak;
});

// ── Global window assignments ──
window.showCurriculum        = showCurriculum;
window.showDashboard         = showDashboard;
window.renderProgressChart   = renderProgressChart;
window.showFreeTab           = showFreeTab;
window.showScreen            = showScreen;
window.loadSession           = loadSession;
window.lessonNext            = lessonNext;
window.cardsPrev             = cardsPrev;
window.cardsNext             = cardsNext;
window.checkReframeInput     = checkReframeInput;
window.submitReframe         = submitReframe;
window.revealSurprise        = revealSurprise;
window.toggleLessonRecording = toggleLessonRecording;
window.toggleRecording       = toggleRecording;
window.completeSession       = completeSession;
window.submitScoreFeedback   = submitScoreFeedback;
window.sendFeedbackDetail    = sendFeedbackDetail;
window.selectFreeMode        = selectFreeMode;
window.toggleFreeRecording   = toggleFreeRecording;
window.selectPickOption      = selectPickOption;
window.selectQuizAnswer      = selectQuizAnswer;
window.toggleMenu            = toggleMenu;
window.v7ToggleCard          = v7ToggleCard;
window.saveApiKeys = window.saveApiKeys || function() {};
