/* ============================================================
   Nervless — PROGRESS extras  (js/progress.js)
   Renders the data captured by SUDS + Journal into the dashboard:
   member-since, anxiety trend chart, evidence stats, practice breakdown.
   Loads after journal.js + suds.js, before app.js.
   ============================================================ */

// First-seen timestamp (local) — set once
(function () {
  if (!localStorage.getItem('nervless_member_since')) {
    localStorage.setItem('nervless_member_since', new Date().toISOString());
  }
})();

async function renderProgressExtras() {
  // Ensure journal data is loaded
  if (typeof Journal !== 'undefined' && Journal.load) {
    try { await Journal.load(); } catch (e) {}
  }
  renderMemberSince();
  renderAnxietyTrend();
  renderJournalEvidence();
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
  const data = SUDS.trend();                       // all contexts
  const paired = data.filter(r => typeof r.pre === 'number' && typeof r.post === 'number');

  if (paired.length < 2) {
    wrap.style.display = 'none';
    return;
  }
  wrap.style.display = 'block';

  // Headline: average drop
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
  const labels = slice.map((r, i) => {
    const d = new Date(r.date);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  });

  const style = getComputedStyle(document.documentElement);
  const sc = style.getPropertyValue('--sc').trim() || '#5B4FD9';
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
        {
          label: 'Before',
          data: slice.map(r => r.pre),
          borderColor: faint,
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderDash: [4, 4],
          pointRadius: 3,
          pointBackgroundColor: faint,
          tension: 0.3
        },
        {
          label: 'After',
          data: slice.map(r => r.post),
          borderColor: green,
          backgroundColor: green + '20',
          borderWidth: 2.5,
          pointRadius: 3,
          pointBackgroundColor: green,
          tension: 0.3,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { min: 0, max: 10, ticks: { stepSize: 2, color: faint, font: { size: 10 } }, grid: { color: border } },
        x: { ticks: { color: faint, font: { size: 9 }, maxRotation: 0, autoSkip: true, maxTicksLimit: 6 }, grid: { display: false } }
      },
      plugins: {
        legend: { labels: { color: faint, font: { size: 11 }, boxWidth: 12, usePointStyle: true } }
      }
    }
  });
}

// ── Journal evidence ──
function renderJournalEvidence() {
  const box = document.getElementById('jr-dash');
  if (!box || typeof Journal === 'undefined') return;
  const s = Journal.stats();
  if (s.total === 0) { box.style.display = 'none'; return; }
  box.style.display = 'block';

  const statsEl = document.getElementById('jr-dash-stats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="jr-dash-stat"><div class="jr-dash-num">${s.total}</div><div class="jr-dash-lbl">moments logged</div></div>
      <div class="jr-dash-stat"><div class="jr-dash-num">${s.withOutcome ? s.fearedNotHappened + '/' + s.withOutcome : '–'}</div><div class="jr-dash-lbl">fears that didn't land</div></div>
      <div class="jr-dash-stat"><div class="jr-dash-num">${s.missions}</div><div class="jr-dash-lbl">missions taken</div></div>`;
  }

  // Anticipated-vs-actual: show last few debriefs
  const momentsEl = document.getElementById('jr-dash-moments');
  if (momentsEl) {
    const debriefs = Journal.logs().filter(l =>
      typeof l.predicted_anxiety === 'number' && typeof l.actual_anxiety === 'number'
    ).slice(0, 3);
    if (debriefs.length) {
      momentsEl.innerHTML = debriefs.map(l => {
        const drop = l.predicted_anxiety - l.actual_anxiety;
        return `<div class="jr-dash-moment">
          <div class="jr-dash-moment-title">${_pesc(l.title || 'A moment')}</div>
          <div class="jr-dash-moment-anx">feared ${l.predicted_anxiety} → felt ${l.actual_anxiety}${drop > 0 ? ` <span style="color:var(--green);font-weight:800">↓${drop}</span>` : ''}</div>
        </div>`;
      }).join('');
    } else {
      momentsEl.innerHTML = '';
    }
  }
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
