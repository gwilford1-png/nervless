/* ============================================================
   Nervless — PROGRESS extras  (js/progress.js)
   Renders the data captured by SUDS + Journal into the dashboard:
   member-since, anxiety trend chart, practice breakdown.
   Journal evidence (stats + feared-vs-felt chart) is rendered by
   renderJournalEvidence() in journal-ui.js — do NOT redefine it here.
   Loads after journal.js + suds.js, before app.js.
   ============================================================ */

// First-seen timestamp (local) — set once
(function () {
  if (!localStorage.getItem('nervless_member_since')) {
    localStorage.setItem('nervless_member_since', new Date().toISOString());
  }
})();

async function renderProgressExtras() {
  if (typeof Journal !== 'undefined' && Journal.load) {
    try { await Journal.load(); } catch (e) {}
  }
  renderMemberSince();
  renderAnxietyTrend();
  if (typeof renderJournalEvidence === 'function') renderJournalEvidence();
  renderPracticeBreakdown();
}

// ── Member since ──
function renderMemberSince() {
  const el = document.getElementById('prog-member-since');
  if (!el) return;
  const since = localStorage.getItem('nervless_member_since');
  if (!since) { el.style.display = 'none'; return; }
  const d = new Date(since);
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  el.textContent = 'Member since ' + months[d.getMonth()] + ' ' + d.getFullYear();
  el.style.display = 'block';
}

// ── Anxiety trend (SUDS) ──
function renderAnxietyTrend() {
  const wrap = document.getElementById('suds-trend-wrap');
  if (!wrap || typeof SUDS === 'undefined') return;
  const data = SUDS.trend();
  const paired = data.filter(r => typeof r.pre === 'number' && typeof r.post === 'number');

  if (paired.length < 2) { wrap.style.display = 'none'; return; }
  wrap.style.display = 'block';

  const avgDrop = SUDS.averageDrop();
  const headline = document.getElementById('suds-headline');
  if (headline && avgDrop !== null) {
    if (avgDrop > 0) {
      headline.innerHTML = `Your anxiety drops <strong>${avgDrop} points</strong> on average from before to after speaking.`;
    } else {
      headline.innerHTML = `You've logged <strong>${paired.length}</strong> anxiety check-ins. The trend builds with every rep.`;
    }
  }

  const slice = paired.slice(-20);
  const labels = slice.map((r) => new Date(r.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }));

  const style = getComputedStyle(document.documentElement);
  const green = style.getPropertyValue('--green').trim() || '#2E9E7A';
  const faint = style.getPropertyValue('--text-faint').trim() || '#ADA89E';
  const border = style.getPropertyValue('--border').trim() || '#E4E0D8';

  const canvas = document.getElementById('suds-trend-chart');
  if (!canvas) return;
  if (canvas._chart) canvas._chart.destroy();

  canvas._chart = new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: {
      labels,
      datasets: [
        { label: 'Before', data: slice.map(r => r.pre), borderColor: faint, backgroundColor: 'transparent', borderWidth: 2, borderDash: [4, 4], pointRadius: 3, pointBackgroundColor: faint, tension: 0.3 },
        { label: 'After', data: slice.map(r => r.post), borderColor: green, backgroundColor: green + '20', borderWidth: 2.5, pointRadius: 3, pointBackgroundColor: green, tension: 0.3, fill: true }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { min: 0, max: 10, ticks: { stepSize: 2, color: faint, font: { size: 10 } }, grid: { color: border } },
        x: { ticks: { color: faint, font: { size: 9 }, maxRotation: 0, autoSkip: true, maxTicksLimit: 6 }, grid: { display: false } }
      },
      plugins: { legend: { labels: { color: faint, font: { size: 11 }, boxWidth: 12, usePointStyle: true } } }
    }
  });
}

// ── Practice breakdown ──
function renderPracticeBreakdown() {
  const box = document.getElementById('prog-practice');
  if (!box) return;
  const sessions = (state && state.sessions) || [];
  const practice = sessions.filter(s => typeof s.sessionId === 'string' && s.sessionId.startsWith('free-'));
  if (!practice.length) { box.style.display = 'none'; return; }
  box.style.display = 'block';

  const best = Math.max(...practice.map(s => s.score || 0));
  const avg = Math.round(practice.reduce((a, s) => a + (s.score || 0), 0) / practice.length);
  const statsEl = document.getElementById('prog-practice-stats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="jr-dash-stat"><div class="jr-dash-num">${practice.length}</div><div class="jr-dash-lbl">practice reps</div></div>
      <div class="jr-dash-stat"><div class="jr-dash-num">${best}</div><div class="jr-dash-lbl">best score</div></div>
      <div class="jr-dash-stat"><div class="jr-dash-num">${avg}</div><div class="jr-dash-lbl">average</div></div>`;
  }
}

function _pesc(s) { return (s||'').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
