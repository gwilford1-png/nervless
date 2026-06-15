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

// ════════════════════════════════════════════════════════════
//  JOURNAL EVIDENCE — stats, before/after slope graph,
//  prepped-vs-impromptu split. Gated by N like grades:
//  raw points show early; averaged CLAIMS wait for 3+.
// ════════════════════════════════════════════════════════════

// Group logs into moments (by event_id, else normalised title) and classify
// each as prepped (has a 'before' log) or impromptu (logged after the fact).
function _evMoments() {
  if (typeof Journal === 'undefined' || !Journal.logs) return [];
  const groups = {};
  const order = [];
  Journal.logs().forEach(l => {
    const key = l.event_id || ('t:' + ((l.title || '').trim().toLowerCase())) || l.id;
    if (!groups[key]) { groups[key] = { key, title: l.title || 'A moment', logs: [], firstAt: l.created_at }; order.push(key); }
    groups[key].logs.push(l);
  });
  const avg = a => a.length ? a.reduce((x, y) => x + y, 0) / a.length : null;
  return order.map(k => {
    const g = groups[k];
    const hasPre = g.logs.some(l => l.kind === 'pre');
    // anticipated rating: predicted_anxiety on non-debrief logs (debrief carries a copy)
    const antVals = g.logs.filter(l => l.kind !== 'debrief' && typeof l.predicted_anxiety === 'number').map(l => l.predicted_anxiety);
    // felt rating: actual_anxiety where present and not bailed
    let feltVals = g.logs.filter(l => typeof l.actual_anxiety === 'number' && !l.bailed).map(l => l.actual_anxiety);
    // impromptu logged after the fact may carry a single rating as predicted_anxiety — that IS the felt level
    if (!feltVals.length && !hasPre) {
      feltVals = g.logs.filter(l => l.kind === 'spontaneous' && typeof l.predicted_anxiety === 'number' && !l.bailed).map(l => l.predicted_anxiety);
    }
    const outcomes = g.logs.filter(l => l.outcome && !l.bailed);
    return {
      title: g.title,
      type: hasPre ? 'prepped' : 'impromptu',
      anticipated: hasPre ? avg(antVals) : null,
      felt: avg(feltVals),
      firstAt: g.firstAt,
      notHappened: outcomes.filter(l => l.outcome === 'no').length,
      outcomeN: outcomes.length
    };
  });
}

function _evRound(n) { return n === null ? null : Math.round(n * 10) / 10; }
function _evFmt(n) { return n === null ? '–' : (Number.isInteger(n) ? n : n.toFixed(1)); }

function renderJournalEvidence() {
  const box = document.getElementById('jr-dash');
  if (!box || typeof Journal === 'undefined') return;
  const s = Journal.stats();
  if (s.total === 0) { box.style.display = 'none'; return; }
  box.style.display = 'block';

  const moments = _evMoments();
  const prepped = moments.filter(m => m.type === 'prepped' && m.anticipated !== null && m.felt !== null);
  const impromptu = moments.filter(m => m.type === 'impromptu' && m.felt !== null);

  // ── Headline: % less scary (averaged claim — needs 3+ prepped) ──
  const headEl = document.getElementById('jr-dash-headline');
  if (headEl) {
    if (prepped.length >= 3) {
      const avgAnt = _evRound(prepped.reduce((a, m) => a + m.anticipated, 0) / prepped.length);
      const avgFelt = _evRound(prepped.reduce((a, m) => a + m.felt, 0) / prepped.length);
      const pct = avgAnt > 0 ? Math.round(((avgAnt - avgFelt) / avgAnt) * 100) : 0;
      if (pct >= 5) {
        headEl.innerHTML = `On average you brace for <strong>${_evFmt(avgAnt)}</strong>, it lands at <strong>${_evFmt(avgFelt)}</strong> — <strong class="jr-ev-pct">${pct}% less scary</strong> than you predicted.`;
      } else if (pct <= -5) {
        headEl.innerHTML = `On average it's landed a little harder than you predicted (<strong>${_evFmt(avgAnt)}</strong> → <strong>${_evFmt(avgFelt)}</strong>). That happens — the honest record still counts.`;
      } else {
        headEl.innerHTML = `On average it lands about where you predict (<strong>${_evFmt(avgAnt)}</strong> → <strong>${_evFmt(avgFelt)}</strong>). Keep logging — the gap usually opens up over time.`;
      }
      headEl.style.display = 'block';
    } else {
      headEl.style.display = 'none';
    }
  }

  // ── Stat tiles (raw counts — always) ──
  const statsEl = document.getElementById('jr-dash-stats');
  if (statsEl) {
    statsEl.innerHTML = `
      <div class="jr-dash-stat"><div class="jr-dash-num">${s.total}</div><div class="jr-dash-lbl">moments logged</div></div>
      <div class="jr-dash-stat"><div class="jr-dash-num">${s.withOutcome ? s.fearedNotHappened + '/' + s.withOutcome : '–'}</div><div class="jr-dash-lbl">fears that didn't land</div></div>
      <div class="jr-dash-stat"><div class="jr-dash-num">${s.missions}</div><div class="jr-dash-lbl">missions taken</div></div>`;
  }

  // ── Before/after slope graph (raw points — show at 2+ prepped) ──
  _renderEvSlope(prepped);

  // ── Recent moments list (existing) ──
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

  // ── Prepped vs impromptu split (comparison claim — needs 3+ of EACH) ──
  _renderEvSplit(prepped, impromptu);
}

// Slope chart: each prepped moment is a faint line from Feared → Felt,
// coloured by direction, with a bold Average line on top.
function _renderEvSlope(prepped) {
  const wrap = document.getElementById('jr-dash-chart-wrap');
  const canvas = document.getElementById('jr-dash-chart');
  const cap = document.getElementById('jr-dash-chart-cap');
  if (!wrap || !canvas) return;

  if (prepped.length < 2) {
    wrap.style.display = 'none';
    if (cap) cap.style.display = 'none';
    if (canvas._chart) { canvas._chart.destroy(); canvas._chart = null; }
    return;
  }
  wrap.style.display = 'block';
  if (cap) cap.style.display = 'block';

  const style = getComputedStyle(document.documentElement);
  const accent = style.getPropertyValue('--accent').trim() || '#5B4FD9';
  const green = style.getPropertyValue('--green').trim() || '#2E9E7A';
  const gold = style.getPropertyValue('--gold').trim() || '#C4922A';
  const red = style.getPropertyValue('--red').trim() || '#D95470';
  const faint = style.getPropertyValue('--text-faint').trim() || '#ADA89E';
  const border = style.getPropertyValue('--border').trim() || '#E4E0D8';

  const recent = prepped.slice(0, 12); // newest-first list; cap for legibility
  const datasets = recent.map(m => {
    const drop = m.anticipated - m.felt;
    const col = drop > 0.4 ? green : drop < -0.4 ? red : gold;
    return {
      label: m.title,
      data: [m.anticipated, m.felt],
      borderColor: col + '66',
      backgroundColor: 'transparent',
      borderWidth: 1.5,
      pointRadius: 2.5,
      pointBackgroundColor: col + '99',
      tension: 0
    };
  });
  const avgAnt = recent.reduce((a, m) => a + m.anticipated, 0) / recent.length;
  const avgFelt = recent.reduce((a, m) => a + m.felt, 0) / recent.length;
  datasets.push({
    label: 'Average',
    data: [avgAnt, avgFelt],
    borderColor: accent,
    backgroundColor: 'transparent',
    borderWidth: 3.5,
    pointRadius: 5,
    pointBackgroundColor: accent,
    tension: 0
  });

  if (canvas._chart) canvas._chart.destroy();
  canvas._chart = new Chart(canvas.getContext('2d'), {
    type: 'line',
    data: { labels: ['Feared', 'Felt'], datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 6, bottom: 2 } },
      scales: {
        y: { min: 0, max: 10, ticks: { stepSize: 2, color: faint, font: { size: 10 } }, grid: { color: border } },
        x: { ticks: { color: faint, font: { size: 12, weight: '700' } }, grid: { display: false } }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            title: items => items.length ? (items[0].label) : '',
            label: ctx => `${ctx.dataset.label}: ${ctx.parsed.y}`
          }
        }
      }
    }
  });
}

// Prepped vs impromptu — only claims a comparison once there are 3+ of each.
// Below that, shows progress toward the comparison so it doesn't feel broken.
function _renderEvSplit(prepped, impromptu) {
  const el = document.getElementById('jr-dash-split');
  if (!el) return;
  const avg = a => a.length ? Math.round((a.reduce((x, y) => x + y.felt, 0) / a.length) * 10) / 10 : null;

  // Need a meaningful sample of each to make any comparison
  if (prepped.length < 3 || impromptu.length < 3) {
    // Only nudge toward it if they've at least started logging impromptu moments
    if (impromptu.length >= 1 || prepped.length >= 3) {
      el.innerHTML = `<div class="jr-ev-gate">Prepared vs impromptu comparison unlocks at 3 of each — you have ${prepped.length} prepared, ${impromptu.length} impromptu.</div>`;
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
    return;
  }

  const fp = avg(prepped);
  const fi = avg(impromptu);
  const gap = Math.round((fi - fp) * 10) / 10;

  let insight = '';
  let nudge = '';
  if (gap >= 1) {
    insight = `Being put on the spot runs hotter for you — impromptu moments feel <strong>${_evFmt(fi)}</strong> on average against <strong>${_evFmt(fp)}</strong> when you can prepare.`;
    nudge = `<button class="jr-ev-nudge" onclick="showFreeTab()">Train the spot — open Hot Seat &amp; Open Mic →</button>`;
  } else if (gap <= -1) {
    insight = `Interesting — prepared moments feel as tense or more (<strong>${_evFmt(fp)}</strong>) than impromptu ones (<strong>${_evFmt(fi)}</strong>). Anticipation may be doing some of the work.`;
  } else {
    insight = `Prepared and impromptu moments feel about the same so far (<strong>${_evFmt(fp)}</strong> vs <strong>${_evFmt(fi)}</strong>).`;
  }

  el.innerHTML = `
    <div class="jr-ev-split-row">
      <div class="jr-ev-split-cell"><div class="jr-ev-split-num">${_evFmt(fp)}</div><div class="jr-ev-split-lbl">Prepared · felt avg</div></div>
      <div class="jr-ev-split-cell"><div class="jr-ev-split-num">${_evFmt(fi)}</div><div class="jr-ev-split-lbl">Impromptu · felt avg</div></div>
    </div>
    <div class="jr-ev-insight">${insight}</div>
    ${nudge}`;
  el.style.display = 'block';
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
