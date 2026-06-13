/* ============================================================
   Nervless — WEEKLY RING  (js/weekly.js)
   A forgiving weekly target: "X reps this week".
   No daily streaks (they punish anxious users who miss a day).
   A rep = any completed speaking activity: lesson, practice, or
   a logged journal moment. Resets each week. Celebrates, never guilts.
   Loads after ui.js, before app.js.
   ============================================================ */

const WeeklyRing = (function () {

  const TARGET = 3;                          // reps per week
  const LS_KEY = 'nervless_rep_log';         // array of ISO timestamps

  function _log() {
    try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); }
    catch { return []; }
  }
  function _save(arr) {
    // keep ~12 weeks of history max
    localStorage.setItem(LS_KEY, JSON.stringify(arr.slice(-200)));
  }

  // Monday 00:00 of the current week (local time)
  function _weekStart(d) {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    const day = (x.getDay() + 6) % 7;        // Mon=0 .. Sun=6
    x.setDate(x.getDate() - day);
    return x;
  }

  // ── Public: record a rep ──
  function logRep() {
    const arr = _log();
    arr.push(new Date().toISOString());
    _save(arr);
    // refresh any visible ring
    if (typeof renderWeeklyRing === 'function') renderWeeklyRing();
  }

  // ── Count this week's reps ──
  function thisWeek() {
    const start = _weekStart(new Date()).getTime();
    return _log().filter(ts => new Date(ts).getTime() >= start).length;
  }

  // ── Weeks where target was hit (for a gentle, non-streak tally) ──
  function weeksHit() {
    const byWeek = {};
    _log().forEach(ts => {
      const k = _weekStart(new Date(ts)).toISOString().slice(0, 10);
      byWeek[k] = (byWeek[k] || 0) + 1;
    });
    return Object.values(byWeek).filter(n => n >= TARGET).length;
  }

  return { TARGET, logRep, thisWeek, weeksHit };
})();

// ── Render the ring (used on Journey + Progress) ──
function renderWeeklyRing() {
  const els = document.querySelectorAll('.weekly-ring-host');
  if (!els.length) return;

  const done = WeeklyRing.thisWeek();
  const target = WeeklyRing.TARGET;
  const pct = Math.min(1, done / target);
  const hit = done >= target;

  // ring geometry
  const R = 26, C = 2 * Math.PI * R;
  const dash = (pct * C).toFixed(1);

  const style = getComputedStyle(document.documentElement);
  const sc = style.getPropertyValue('--sc').trim() || '#5B4FD9';
  const green = style.getPropertyValue('--green').trim() || '#2E9E7A';
  const ringColour = hit ? green : sc;
  const track = style.getPropertyValue('--border').trim() || '#E4E0D8';

  let label, sub;
  if (done === 0) {
    label = '0/' + target;
    sub = 'reps this week';
  } else if (hit) {
    label = '✓';
    sub = 'week complete — nice';
  } else {
    label = done + '/' + target;
    sub = (target - done) + ' to go this week';
  }

  const svg = `<svg viewBox="0 0 64 64" width="56" height="56">
    <circle cx="32" cy="32" r="${R}" fill="none" stroke="${track}" stroke-width="6"/>
    <circle cx="32" cy="32" r="${R}" fill="none" stroke="${ringColour}" stroke-width="6"
      stroke-linecap="round" stroke-dasharray="${dash} ${C}"
      transform="rotate(-90 32 32)" style="transition:stroke-dasharray 0.5s ease"/>
    <text x="32" y="32" text-anchor="middle" dominant-baseline="central"
      font-family="Nunito, sans-serif" font-weight="900" font-size="${label==='✓'?'22':'16'}"
      fill="${ringColour}">${label}</text>
  </svg>`;

  els.forEach(host => {
    host.innerHTML = `<div class="weekly-ring">
      ${svg}
      <div class="weekly-ring-text">
        <div class="weekly-ring-title">This week</div>
        <div class="weekly-ring-sub">${sub}</div>
      </div>
    </div>`;
    host.style.display = 'block';
  });
}
