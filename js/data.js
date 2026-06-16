/* ============================================================
   Nervless — DATA
   Static content & config only — no logic, no DOM. Curriculum, lesson content, practice modes, scoring thresholds, levels.
   ============================================================ */


// ── STAR THRESHOLDS ──
// 1 star = pass and unlock next. 2 stars = good. 3 stars = mastered.
// Thresholds increase by phase. 1-star is not easy — you still have to genuinely try.
const STAR_THRESHOLDS = {
  1: { star1: 55, star2: 70, star3: 85 },
  2: { star1: 58, star2: 72, star3: 86 },
  3: { star1: 60, star2: 75, star3: 88 },
  4: { star1: 58, star2: 72, star3: 86 },
  5: { star1: 62, star2: 76, star3: 90 },
  6: { star1: 65, star2: 78, star3: 92 },
  7: { star1: 65, star2: 78, star3: 92 },
  8: { star1: 68, star2: 80, star3: 94 },
  9: { star1: 65, star2: 78, star3: 92 },
};

// ── LESSON CONTENT ──
const LESSON_CONTENT = {
  54: {
    read: '',
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><h2 class="rc-head rc-anim">Your brain is a catastrophe machine</h2><p class="rc-body rc-anim">Anxious speakers do two things at once: massively overestimate how <em>likely</em> the disaster is, and massively overestimate how <em>bad</em> it would be. This session reality-tests both.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">This isn&rsquo;t positive thinking. It&rsquo;s accurate thinking.</div><div class="rc-hl-sub">Most feared outcomes never happen — and when they do, the fallout is almost always smaller than your brain predicted.</div></div>`
    ]
  },
  55: {
    read: '',
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div><h2 class="rc-head rc-anim">Name the voice</h2><p class="rc-body rc-anim">You have an inner voice that speaks up before you do — &ldquo;you&rsquo;re going to mess this up&rdquo;, &ldquo;everyone can see you&rsquo;re nervous.&rdquo; Naming it turns it into <em>the voice</em> rather than <em>the truth</em>.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">You stop being the thought and start being the person observing it.</div><div class="rc-hl-sub">The critic doesn&rsquo;t vanish — but once named and held at arm&rsquo;s length, it loses most of its authority.</div></div>`
    ]
  },
  56: {
    read: '',
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><h2 class="rc-head rc-anim">Anxiety keeps a biased highlight reel</h2><p class="rc-body rc-anim">It replays every stumble and quietly deletes every time things went fine. That&rsquo;s confirmation bias — and it leaves you with a record of your speaking that simply isn&rsquo;t accurate.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Build the counter-evidence.</div><div class="rc-hl-sub">The goal isn&rsquo;t to convince yourself you&rsquo;re brilliant. It&rsquo;s to put the forgotten &ldquo;it went OK&rdquo; moments back on the record where they belong.</div></div>`
    ]
  },
  57: {
    read: '',
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><h2 class="rc-head rc-anim">You&rsquo;d never talk to a friend like this</h2><p class="rc-body rc-anim">Most anxious speakers are brutally harsh with themselves in ways they&rsquo;d never dream of being with someone they care about. This exercise closes that gap.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Self-compassion isn&rsquo;t weakness.</div><div class="rc-hl-sub">Research links it to more resilience, not less. You can be completely honest with yourself and kind at the same time.</div></div>`
    ]
  },
  58: {
    read: '',
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h2 class="rc-head rc-anim">The spotlight effect</h2><p class="rc-body rc-anim">We massively overestimate how much attention other people pay to us. The audience you&rsquo;re dreading is mostly sympathetic, a bit distracted, and half-wondering what&rsquo;s for lunch.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">They&rsquo;re far less interested in your performance than your anxiety believes.</div><div class="rc-hl-sub">That isn&rsquo;t dismissive. It&rsquo;s liberating — the harsh courtroom in your head doesn&rsquo;t actually exist.</div></div>`
    ]
  },
  59: {
    read: '',
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg></div><h2 class="rc-head rc-anim">Why most affirmations fail</h2><p class="rc-body rc-anim">Your brain rejects statements it knows aren&rsquo;t true. &ldquo;I am a confident speaker&rdquo; bounces straight off. So this session builds something different — a line grounded in your own evidence.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The best mantra acknowledges the anxiety and reframes it.</div><div class="rc-hl-sub">Not one that pretends the fear isn&rsquo;t there — one accurate enough that you can say it before you speak and actually mean it.</div></div>`
    ]
  },
  1: {
    read: `
      <div class="lesson-content">
        <h3>Why does speaking make us so anxious?</h3>
        <p>Your body can't tell the difference between a tiger and a room full of people. To your brain, both are threats — and it responds the same way: heart racing, palms sweating, mind going blank.</p>
        <p>This is the fight-or-flight response. It evolved to keep us alive in dangerous situations. The problem is it fires in situations that aren't actually dangerous — like being asked to speak in a meeting.</p>
        <div class="highlight-box">"The body doesn't know the difference between physical threat and social threat. It just knows: threat."</div>
        <p>The symptoms you feel — dry mouth, trembling voice, racing heart — aren't signs that something is wrong with you. They're your body doing exactly what it was designed to do. The goal of this programme isn't to eliminate that response. It's to stop it from running the show.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">💡</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Anxiety is not a character flaw or a weakness. It's a biological response that evolved for survival — just misfiring in a modern context.</div>
      </div>`,
    cards: [
      `<div class="rc-card rc-concept"><img class="rc-illus rc-anim" src="/phase1-threat.png" alt="To your brain, a tiger and a roomful of colleagues look the same"><h2 class="rc-head rc-anim">Your brain can't tell the difference</h2><p class="rc-body rc-anim">A tiger in the wild. A room full of colleagues watching you present. To your brain, both are threats — and it responds the same way: heart racing, palms sweating, mind going blank.</p><p class="rc-body rc-anim">This is the <strong>fight-or-flight response</strong>. It kept us alive for millennia. The problem? It fires in situations that aren't actually dangerous.</p></div>`,
      `<div class="rc-card rc-example"><div class="rc-eyebrow rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 2"/></svg>In real life</div><div class="rc-ex-box rc-anim"><div class="rc-ex-quote">"Let's hear your thoughts on this one."</div><p class="rc-ex-beat">Your manager turns to you. Instantly — pulse climbs, mouth dries, the words scatter. <strong>Nothing is actually threatening you.</strong> But your body has already hit the alarm.</p></div></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The symptoms are the alarm system. Not the problem itself.</div><div class="rc-hl-sub">Dry mouth, trembling voice, racing heart — these aren't signs something is wrong with you. They're your body doing exactly what it evolved to do.</div></div>`,
      `<div class="rc-card rc-stat"><div class="rc-stat-num rc-anim">75%</div><div class="rc-stat-label rc-anim">of people fear public speaking — more than fear death, in most surveys.</div><div class="rc-anim"><span class="rc-stat-pill">You're not broken. You're human.</span></div></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg></div><h2 class="rc-head rc-anim">Here's what changes it</h2><p class="rc-body rc-anim">Through <strong>gradual exposure</strong> — speaking in slightly harder situations, over and over — your brain learns that speaking is survivable. Even manageable.</p><p class="rc-body rc-anim">You're not fighting your biology. You're updating it.</p></div>`
    ],
    quiz: [
      { q: "Why does your body react physically when you have to speak publicly?", options: ["You haven't practised enough","Your brain treats social threat the same as physical danger","You lack confidence","Anxiety is a sign of poor preparation"], correct: 1, explanation: "The fight-or-flight response evolved for physical danger — but your brain fires it in social situations too. It's the same system, wrong context." }
    ]
  },
  2: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z"/></svg></div><h2 class="rc-head rc-anim">Meet your amygdala</h2><p class="rc-body rc-anim">Deep in your brain sits a small almond-shaped structure — the amygdala. It is your alarm system, constantly scanning for danger.</p><p class="rc-body rc-anim">It is fast, but crude. It cannot tell <strong>&ldquo;a lion is chasing me&rdquo;</strong> from <strong>&ldquo;twenty people are watching me present.&rdquo;</strong> A crowd of evaluating faces reads as danger.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">It fires before you&rsquo;ve decided to be nervous.</div><div class="rc-hl-sub">The amygdala reacts before your rational brain can step in — which is why your hands start shaking before you consciously choose to feel anxious.</div></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg></div><h2 class="rc-head rc-anim">Your thinking brain can take back control</h2><p class="rc-body rc-anim">The prefrontal cortex — the rational part — can calm the amygdala down. But it needs time and practice to override the alarm.</p><p class="rc-body rc-anim">That is exactly what this programme builds: the pathways that let your rational mind stay in control, even when the alarm fires.</p></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Meet your amygdala</h3>
        <p>Deep inside your brain sits a small almond-shaped structure called the amygdala. It's your brain's alarm system — constantly scanning for danger. When it detects a threat, it hijacks your rational mind and floods your body with adrenaline.</p>
        <p>Here's the problem: the amygdala is fast but crude. It doesn't distinguish between "a lion is chasing me" and "twenty people are watching me present." It sees a crowd of evaluating faces and reads it as danger.</p>
        <div class="highlight-box">The amygdala responds before your rational brain can intervene — which is why your hands start shaking before you even consciously decide to be nervous.</div>
        <p>The prefrontal cortex — the rational, thinking part of your brain — can calm the amygdala down, but it needs time and practice to override the alarm. That's exactly what this programme builds: the neural pathways that let your rational brain stay in control even when the amygdala fires.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🧠</div>
        <div class="key-insight-text"><strong>Key insight:</strong> You can't stop the amygdala from firing — but you can train your brain to recover faster and let the rational mind take back control.</div>
      </div>`,
    quiz: [
      { q: "Why do physical symptoms of anxiety appear before you've 'decided' to be nervous?", options: ["Because anxiety is irrational","Because the amygdala acts faster than your conscious mind","Because your body is weaker than your mind","Because you haven't trained yourself enough yet"], correct: 1, explanation: "The amygdala bypasses your rational prefrontal cortex — it's a faster circuit. Your hands are shaking before you've consciously processed the situation." }
    ]
  },
  3: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg></div><h2 class="rc-head rc-anim">The trap that makes anxiety worse</h2><p class="rc-body rc-anim">When something makes us anxious, the instinct is to avoid it — turn down the talk, stay quiet in the meeting. And it works: the anxiety vanishes instantly. Relief.</p><p class="rc-body rc-anim">But avoidance teaches your brain that the situation was genuinely dangerous. Every time you dodge it, the threat register updates — and next time, the alarm fires louder.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><h2 class="rc-head rc-anim">Short-term relief, long-term cost</h2><p class="rc-body rc-anim">That trade — instant calm now for a louder alarm later — is the single biggest driver of anxiety getting worse over time. The relief is real, and it&rsquo;s a trap.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The only way to reduce anxiety about speaking is to speak.</div><div class="rc-hl-sub">Gradually, safely, repeatedly — until your brain learns through direct experience that it&rsquo;s survivable. That&rsquo;s exposure, and it&rsquo;s what this whole programme is built on.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The trap that makes anxiety worse</h3>
        <p>When something makes us anxious, our instinct is to avoid it. Avoid the presentation. Turn down the speaking opportunity. Stay quiet in the meeting. It works — the anxiety disappears immediately. Relief.</p>
        <p>But here's what avoidance actually teaches your brain: <em>that situation was genuinely dangerous</em>. Every time you avoid, your brain updates its threat register. The next time a similar situation arises, the alarm fires louder.</p>
        <div class="highlight-box">Avoidance provides short-term relief and long-term amplification. It is the single biggest driver of worsening anxiety over time.</div>
        <p>The only way to reduce anxiety about speaking is to speak — gradually, safely, and repeatedly — until your brain learns through direct experience that the situation is not actually dangerous. That's exposure therapy, and it's what this programme is built on.</p>
        <p>Every session you complete is directly rewriting that threat register. You're teaching your nervous system that speaking is survivable.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">⚠️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Avoidance feels like relief but functions like fuel — it feeds the fear. Gradual, repeated exposure is the only proven way to reduce anxiety long-term.</div>
      </div>`,
    quiz: [
      { q: "What does avoidance teach your brain about the feared situation?", options: ["That you need more preparation next time","That the situation was genuinely dangerous","That your anxiety is improving","That speaking isn't important to you"], correct: 1, explanation: "When you avoid a feared situation, your brain registers: 'We escaped danger.' This confirms the threat and makes the anxiety stronger next time." }
    ],
    reframe: { label: "Your avoidance pattern", prompt: "What's one speaking situation you've avoided recently? It could be speaking up in a meeting, turning down a presentation, or staying quiet when you had something to say. What did avoiding it cost you?" }
  },
  4: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h2 class="rc-head rc-anim">Your anxiety is a misguided protector</h2><p class="rc-body rc-anim">Here is a reframe that changes everything: your speaking anxiety isn&rsquo;t an enemy. It is trying to protect you.</p><p class="rc-body rc-anim">It usually guards against one core fear — being seen as incompetent, rejected, humiliated, or judged by people who matter. Real social fears, with deep roots: exclusion from the group was once genuinely dangerous.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">What exactly is my anxiety afraid will happen?</div><div class="rc-hl-sub">Most people have never named it clearly. Naming it is the first step to taking its power back.</div></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><h2 class="rc-head rc-anim">Anxiety is a bad estimator</h2><p class="rc-body rc-anim">When you know <em>what</em> it is protecting against, you can acknowledge the protection while showing it that the feared outcome is unlikely — or survivable even if it happens.</p><p class="rc-body rc-anim">This isn&rsquo;t toxic positivity. It is accuracy: anxiety almost always overestimates both the odds and the severity of what you fear.</p></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Your anxiety is trying to protect you</h3>
        <p>Here's a reframe that changes everything: your speaking anxiety isn't an enemy. It's a misguided protector.</p>
        <p>Anxiety about speaking usually protects against one or more core fears: being seen as incompetent, being rejected or humiliated, being judged negatively by people whose opinion matters to you. These are real social fears with real evolutionary roots — exclusion from the group was once genuinely dangerous.</p>
        <div class="highlight-box">Ask yourself: what exactly is my anxiety afraid will happen? Most people have never actually named it clearly.</div>
        <p>When you understand <em>what</em> your anxiety is protecting against, you can have a different relationship with it. You can acknowledge the protection it's offering while gently showing it that the feared outcome is unlikely — or survivable even if it happens.</p>
        <p>This isn't about toxic positivity. It's about accuracy: your anxiety is almost always overestimating the probability and the severity of the feared outcome.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🛡️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Anxiety protects against something specific — usually rejection, humiliation, or being judged incompetent. Naming the exact fear is the first step to reducing its power.</div>
      </div>`,
    quiz: [
      { q: "What is the most useful way to think about speaking anxiety?", options: ["As a sign you're not ready","As a character weakness to overcome","As a misguided protector with a positive intention","As something that will disappear with enough experience"], correct: 2, explanation: "Anxiety evolved to protect us. Understanding what yours is protecting against — specifically — transforms your relationship with it from enemy to something you can work with." }
    ]
  },
  5: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div><h2 class="rc-head rc-anim">Your anxiety pattern is unique</h2><p class="rc-body rc-anim">Speaking anxiety isn&rsquo;t one thing. It is a pattern — built from your history, your triggers, and the stories your brain tells you about what speaking means.</p></div>`,
      `<div class="rc-card rc-example"><div class="rc-eyebrow rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 2"/></svg>It shows up differently for everyone</div><div class="rc-ex-box rc-anim"><div class="rc-ex-quote">&ldquo;Fine with peers, frozen in front of the boss.&rdquo;</div><p class="rc-ex-beat">Some dread formal presentations but are easy in meetings. Some avoid strangers but present happily to colleagues. <strong>Each pattern makes sense once you see where it came from.</strong></p></div></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg></div><h2 class="rc-head rc-anim">Map it — don&rsquo;t dwell on it</h2><p class="rc-body rc-anim">This session, you will map your profile in detail. It is not dwelling on fear — it is diagnostic. The clearer the map, the more precisely we can work.</p><p class="rc-body rc-anim">Think about where it is worst, where it is manageable, what helps, what makes it worse, and when it started.</p></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Everyone's anxiety pattern is different</h3>
        <p>Speaking anxiety isn't one thing. It's a pattern — unique to you — built from your specific history, your specific triggers, and the specific stories your brain has been telling you about what speaking means.</p>
        <p>Some people freeze in front of authority figures but are fine with peers. Some are terrified of formal presentations but comfortable in meetings. Some avoid speaking to strangers but can present to colleagues. These patterns make sense when you understand their origin.</p>
        <div class="highlight-box">Understanding your specific pattern — not anxiety in general — is what allows targeted, efficient work. Generalised advice rarely shifts deep patterns.</div>
        <p>In this session, you're going to map your anxiety profile in detail. This isn't an exercise in dwelling on fear — it's diagnostic. The clearer the map, the more precisely we can work.</p>
        <p>Think about: where it's worst, where it's manageable, what makes it better, what makes it worse, when it started, and whether there's a specific moment or experience at its root.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🗺️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Your anxiety pattern is specific to you — your triggers, history, and fears. Mapping it precisely is more valuable than generic reassurance.</div>
      </div>`,
    quiz: [
    ]
  },
  28: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div><h2 class="rc-head rc-anim">Why interviews freeze even confident people</h2><p class="rc-body rc-anim">The stakes feel existential — career, income, self-worth all on the line at once, and everything you say is being judged. That&rsquo;s why people who speak comfortably elsewhere still freeze here.</p><p class="rc-body rc-anim">But the interviewer expects nerves. What they&rsquo;re actually looking for isn&rsquo;t polish — it&rsquo;s clarity, relevance, and authenticity.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div><h2 class="rc-head rc-anim">&ldquo;Tell me about yourself&rdquo; isn&rsquo;t a CV recital</h2><p class="rc-body rc-anim">It&rsquo;s an invitation to tell a coherent story: who you are professionally, what you&rsquo;ve built, why you&rsquo;re here, and what you bring. Four beats, not a chronological list.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Prepare structures, not scripts.</div><div class="rc-hl-sub">A frame gives you something to hang your words on when anxiety empties your mind. Memorised answers shatter the moment a question lands slightly differently.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Why interviews feel different — and what to do about it</h3>
        <p>The job interview is one of the most universally feared speaking situations. The stakes feel existential — your career, your income, your self-worth all seem to be on the line simultaneously. This is why even people who speak comfortably in other contexts freeze in interviews.</p>
        <p>The anxiety is compounded by the evaluative nature of the situation: everything you say is being judged. But here's the thing — everyone in the room knows that. The interviewer expects nerves. What they're looking for isn't polish; it's clarity, relevance, and authenticity.</p>
        <div class="highlight-box">The "Tell me about yourself" question isn't an invitation to recite your CV. It's an invitation to tell a coherent story: who you are professionally, what you've built, why you're here, what you bring.</div>
        <p>The most effective interview preparation isn't memorising answers — it's developing structures you can deploy flexibly. A prepared structure gives you a frame to hang your words on when anxiety empties your mind. Structure is the scaffold that holds the answer together when pressure bears down.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">💼</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Interviewers expect nerves. What they're assessing is clarity, relevance, and whether you can hold a coherent thought under pressure — not whether you're perfectly calm.</div>
      </div>`,
    scenario: { description: "The interviewer asks: 'Tell me about yourself.' You have about 2 minutes.", options: ["Chronological: education, career path, where you are now", "Problem-solver: focus on a challenge you solved and what it shows about you", "Future-focused: where you're headed and why this role fits"] },
    reminder: "Hold a structure, not a script — frames survive pressure; memorised answers don't.",
    quiz: [
    ]
  },
  29: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><h2 class="rc-head rc-anim">The authority trap</h2><p class="rc-body rc-anim">Speaking to senior people triggers a felt status gap, and the instinct is to shrink — more hedging, more over-explaining, a pre-emptive apology for having a view at all. It&rsquo;s counterproductive.</p><p class="rc-body rc-anim">The reframe: you were invited because your perspective is valued. The invitation itself is the signal that you belong in the room.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div><h2 class="rc-head rc-anim">Hedges don&rsquo;t sound humble</h2><p class="rc-body rc-anim">&ldquo;I might be wrong, but&hellip;&rdquo; &ldquo;This is just my opinion&hellip;&rdquo; — these don&rsquo;t read as modest, they read as unsure of yourself. Say the thing plainly.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Changing your view because of a question is capitulation, not humility.</div><div class="rc-hl-sub">Acknowledge the concern, hold your position if you believe it&rsquo;s right, and explain your reasoning.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The authority trap — and how to escape it</h3>
        <p>Speaking to senior people triggers a specific anxiety response: a felt status difference. The instinct is to shrink — to use more hedging language, to over-explain, to pre-emptively apologise for your view. This is the authority trap, and it's counterproductive.</p>
        <p>Here's the reframe: when you've been invited to speak to senior people, it's because your perspective is valued. You're not asking for permission to have a view — you're being asked to bring one. The invitation itself is the signal that you belong in the room.</p>
        <div class="highlight-box">The authority trap manifests in language: "I might be wrong but...", "I suppose one could argue...", "This is just my opinion...". These phrases don't make you sound humble. They make you sound unsure of yourself.</div>
        <p>Handling pushback from authority figures is its own skill. The instinct is to immediately concede. The more effective response: acknowledge the concern, maintain your position if you believe it's correct, and explain your reasoning. Changing your view because of a question is not humility — it's capitulation. Changing it because of a good argument is intellectual integrity.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">👔</div>
        <div class="key-insight-text"><strong>Key insight:</strong> When you're invited to present to senior people, you've already been granted authority to speak. Shrinking in response to that invitation is what undermines your credibility.</div>
      </div>`,
    scenario: { description: "You're presenting a recommendation to the leadership team. Someone senior pushes back: 'I'm not sure this is the right approach.'", options: ["Acknowledge their concern, then restate your evidence calmly", "Ask what specifically concerns them before responding", "Stand firm and explain why the data supports your position"] },
    quiz: [
      { q: "What is the difference between intellectual integrity and capitulation when handling pushback?", options: ["Capitulation is faster","Intellectual integrity means always holding your position","Changing your view because of a good argument is integrity; changing it because of a question or authority is capitulation","There is no meaningful difference"], correct: 2, explanation: "Immediately conceding when a senior person questions you isn't humility — it's anxiety-driven capitulation. Genuinely updating your view when presented with better evidence or reasoning is intellectual integrity. The distinction matters for credibility." }
    ]
  },
  30: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><h2 class="rc-head rc-anim">When a question feels like an attack</h2><p class="rc-body rc-anim">Critical, sceptical or hostile questions trigger a threat response — freeze, fight back defensively, or collapse into over-explaining. None of those is the right move.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg></div><h2 class="rc-head rc-anim">Pause &rarr; acknowledge &rarr; reframe &rarr; answer</h2><p class="rc-body rc-anim">A visible breath before answering signals composure and gives your thinking brain time to come back online. Never open with an apology — apologising before you answer signals that the attack was accurate.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">A calm, direct answer is the most powerful response to hostility.</div><div class="rc-hl-sub">Defensiveness — explaining too hard, justifying, hitting back — tells the asker the question landed exactly as intended.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>What to do when a question feels like an attack</h3>
        <p>Difficult questions — critical, sceptical, or hostile — trigger a threat response. The brain registers the challenge as social danger and either freezes, fights back defensively, or collapses into over-explanation. None of these are the right response.</p>
        <p>The first and most important move is the pause. A deliberate, visible breath before answering signals composure rather than panic. It also gives your prefrontal cortex time to come back online after the amygdala spike. Most people rush because silence feels dangerous — which is exactly why taking a moment signals confidence.</p>
        <div class="highlight-box">The composure sequence: pause → acknowledge (not agree) → reframe if needed → answer directly. Never begin with an apology. Apologising for your existence before answering signals that the attack was accurate.</div>
        <p>The hardest part is not becoming defensive. Defensive answers — which explain too much, justify too hard, or attack back — tell the asker that the question landed as intended. A calm, direct answer is the most powerful response to hostility: it signals that you're not threatened.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🛡️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> A calm, direct answer to a hostile question is the most powerful response. Defensiveness signals the attack landed. Composure signals it didn't.</div>
      </div>`,
    scenario: { description: "After your presentation, someone asks a pointed question designed to expose a weakness in your argument.", options: ["Pause, acknowledge the valid part, then answer directly", "Redirect to the strengths of your overall argument", "Be honest that you don't have a complete answer yet"] },
    reminder: "Pause before you answer — and never open with an apology.",
    quiz: [
    ]
  },
  31: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><h2 class="rc-head rc-anim">How to deliver bad news well</h2><p class="rc-body rc-anim">Something&rsquo;s gone wrong and you have to say so. The instinct is to bury it — in context, hedges, passive language, endless apology. It&rsquo;s understandable, and it almost always makes things worse. People need the information first, not protection from it.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div><h2 class="rc-head rc-anim">What happened &rarr; impact &rarr; what you&rsquo;re doing &rarr; prevention</h2><p class="rc-body rc-anim">Those four answer everything the listener needs before they can regulate their own reaction. State it once, clearly, then stop talking.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Over-explaining looks like panic, not control.</div><div class="rc-hl-sub">A steady, measured voice — not flat, but controlled — signals you have the situation in hand, even when the news is bad.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>How to deliver bad news well</h3>
        <p>Something has gone wrong. You need to tell someone. The instinct is to bury it — in context, in hedges, in passive language, in excessive apology. This instinct is understandable and almost always makes things worse. The person receiving the news needs information first, not protection from the truth.</p>
        <p>Clear crisis communication follows a simple four-part structure: what happened, what the impact is, what you're doing about it, and what will prevent it recurring. This structure works because it answers the four questions the listener needs answered before they can regulate their own response.</p>
        <div class="highlight-box">State it once, clearly, then stop talking. The most common crisis communication mistake is over-explaining — filling silence with more words in an attempt to manage the listener's reaction. This makes you look less in control, not more.</div>
        <p>The voice matters as much as the words. A steady, measured tone — not flat, but controlled — signals that you have the situation in hand. A wavering, accelerating voice signals panic even when the words are saying the opposite. Breathing before you speak, slowing your pace, and projecting from the chest rather than the throat are all techniques that work here.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🚨</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Bad news delivered clearly with a plan is respected. Bad news buried in hedges and apology is alarming. Structure and directness are acts of respect for the listener.</div>
      </div>`,
    timedSeconds: 90,
    reminder: "What happened → impact → action → prevention.",
    quiz: [
    ]
  },
  32: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg></div><h2 class="rc-head rc-anim">Why asking is so hard</h2><p class="rc-body rc-anim">Negotiation means stating your own worth and needs out loud, which feels exposing and presumptuous — the fear is of seeming greedy or unrealistic. So most people either don&rsquo;t ask, or ask and instantly retreat the moment they meet pushback.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg></div><h2 class="rc-head rc-anim">Anchor, then go quiet</h2><p class="rc-body rc-anim">The first number stated has outsized pull — anchor low and you&rsquo;ll settle low. The most powerful move is also the simplest: make your ask clearly and specifically, give one reason, then stop. Silence after an ask isn&rsquo;t awkward — it&rsquo;s pressure on the other side.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">&ldquo;That&rsquo;s above our budget&rdquo; is an invitation, not a rejection.</div><div class="rc-hl-sub">Acknowledge the constraint, hold your position, and keep the conversation going rather than folding.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Why asking for what you want is so hard</h3>
        <p>Negotiation is one of the most anxiety-provoking speaking situations precisely because it requires stating your own worth and needs clearly — which feels exposing and presumptuous. The fear is of being judged as greedy, difficult, or unrealistic. This fear causes most people to either avoid negotiating entirely or to undermine their own position the moment pushback arrives.</p>
        <p>The research on negotiation is consistent: most people leave significant value on the table because they never ask, or they ask and then immediately retreat. The first number stated in a negotiation has disproportionate influence — the anchor effect. If you anchor low, you'll settle low.</p>
        <div class="highlight-box">The most powerful negotiation technique is also the simplest: make your ask clearly and specifically, give one reason, then stop talking. Silence after an ask is not awkward — it's pressure on the other side.</div>
        <p>Handling pushback is where anxiety-driven speakers fail. "That's above our budget" is an invitation to negotiate, not a rejection. The composed response: acknowledge the constraint, restate your reasoning, and ask what flexibility exists. Don't retreat to a lower number immediately — that signals you didn't believe your original ask.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🤝</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Negotiating is professional and expected. The most powerful move is to make a clear, specific ask and then stay silent. Retreating immediately after pushback signals you didn't believe in your own position.</div>
      </div>`,
    scenario: { description: "You're asking for a raise. Your manager says: 'That's above our budget for this cycle.'", options: ["Acknowledge the constraint, then ask what flexibility exists", "Restate your value and the market data supporting your ask", "Suggest a phased approach — partial now, remainder at next review"] },
    reminder: "Don't retreat at the first pushback — hold your position, or trade. Never fold.",
    quiz: [
    ]
  },
  33: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></div><h2 class="rc-head rc-anim">Putting it all together</h2><p class="rc-body rc-anim">By now you have every tool: the neuroscience of your anxiety, ways to regulate your body, structures for answers and stories and arguments, and a ladder of practice behind you. This session is integration — using all of it at once, under genuine pressure.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div><h2 class="rc-head rc-anim">Hook &rarr; Problem &rarr; Evidence &rarr; Solution &rarr; Call to action</h2><p class="rc-body rc-anim">These five sit inside almost every effective talk. The hook is the most underused — skip the &ldquo;Today I want to talk about&hellip;&rdquo; opening and start with something surprising or immediately relevant.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The measure isn&rsquo;t perfection. It&rsquo;s coherence under stress.</div><div class="rc-hl-sub">Can you hold a clear structure while anxious? Can you stay on the point when the pressure is real? That&rsquo;s the skill.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Putting it all together under pressure</h3>
        <p>By this session, you have every tool you need. You understand the neuroscience of your anxiety. You can regulate your body before and during speaking. You have structural frameworks for answers, stories, and arguments. You've practised gradually escalating situations. This session is about integration — using all of it at once, under genuine pressure.</p>
        <p>A well-structured presentation has five elements: a hook that earns attention, a problem that creates stakes, evidence that builds credibility, a solution that answers the problem, and a call to action that gives the listener something to do. These five elements are present in almost every effective piece of public communication.</p>
        <div class="highlight-box">The hook is the most underused element. Most presentations start with context — "Today I want to talk about..." — which gives the audience no reason to lean in. A hook starts with something surprising, provocative, or immediately relevant.</div>
        <p>The measure of this session isn't perfection. It's coherence under stress. Can you hold a clear structure while anxious? Can you stay on your main point when you lose your thread? Can you project and pause when your body wants to rush and fill? These are the real skills being developed here — and they get better every time you practise them.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🎯</div>
        <div class="key-insight-text"><strong>Key insight:</strong> The measure of a good presentation isn't perfection — it's coherence under stress. Can you hold your structure when anxiety peaks? That's the real skill.</div>
      </div>`,
    timedSeconds: 180,
    reminder: "Hook → problem → evidence → solution → call to action.",
    quiz: [
    ]
  },
  21: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/></svg></div><h2 class="rc-head rc-anim">Generic is forgettable. Specific is memorable.</h2><p class="rc-body rc-anim">The most common mistake is trying to sound like a &ldquo;good speaker&rdquo; — polished, authoritative, impressive. The result is a generic confidence that washes over people without leaving a mark.</p><p class="rc-body rc-anim">The speakers you actually remember are the ones who are most specifically themselves: the unusual detail, the unexpected angle, the story nobody else could tell.</p></div>`,
      `<div class="rc-card rc-example"><div class="rc-eyebrow rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 2"/></svg>Specific beats polished</div><div class="rc-ex-box rc-anim"><div class="rc-ex-quote">&ldquo;I grew up in a flat above a chip shop in Glasgow.&rdquo;</div><p class="rc-ex-beat">More interesting than &ldquo;I had an ordinary childhood.&rdquo; Both might be true — only one is worth listening to.</p></div></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The goal isn&rsquo;t a better voice. It&rsquo;s your voice.</div><div class="rc-hl-sub">What do you notice that others miss? What do you care about that most people don&rsquo;t? What stories can only you tell?</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Generic is forgettable. Specific is memorable.</h3>
        <p>The most common mistake people make when trying to become better speakers is trying to sound more like a "good speaker" — polished, authoritative, impressive. The result is a kind of generic confidence that washes over listeners without leaving a mark.</p>
        <p>The speakers people actually remember are the ones who are most specifically themselves. The unusual detail. The unexpected perspective. The personal story nobody else could tell. These are what lodge in memory.</p>
        <div class="highlight-box">Specificity is the engine of memorable communication. "I grew up in a flat above a chip shop in Glasgow" is more interesting than "I had an ordinary childhood." Both might be true. Only one is worth listening to.</div>
        <p>This phase is about finding your voice — not a better voice, your voice. The goal is to identify what is distinctively you as a communicator, and then develop it deliberately. What do you notice that others miss? What do you care about that most people don't? What stories can only you tell?</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">💬</div>
        <div class="key-insight-text"><strong>Key insight:</strong> The goal is never to sound like a good speaker in general. It's to sound like the most fully developed version of yourself as a speaker specifically.</div>
      </div>`,
    reminder: "Specificity is the engine — the details only you could give.",
    quiz: [
    ]
  },
  22: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div><h2 class="rc-head rc-anim">Why stories work on the brain</h2><p class="rc-body rc-anim">Present information and the listener&rsquo;s brain processes it analytically — evaluating, judging. Tell a story and the brain activates as if it&rsquo;s living the events. That mirroring is called neural coupling.</p><p class="rc-body rc-anim">It&rsquo;s why stories are the most powerful tool we have: they bypass evaluation and create shared experience.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div><h2 class="rc-head rc-anim">Situation &rarr; Complication &rarr; Action &rarr; Result</h2><p class="rc-body rc-anim">Set the scene, then what went wrong or was at stake, then what you did, then what happened. The most common mistake is dwelling on the situation and rushing the complication — which is where all the interest lives. The second is no clear ending.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Without complication, there&rsquo;s no story — just a sequence of events.</div><div class="rc-hl-sub">The power lives in what was at stake. The result doesn&rsquo;t need to be triumphant. It just needs to be there.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Why stories work on the brain</h3>
        <p>When you present information, the listener's brain processes it analytically — evaluating, categorising, judging. When you tell a story, something different happens. The brain activates as if it's experiencing the events directly. This is called neural coupling — the listener's brain begins to mirror the storyteller's.</p>
        <p>This is why stories are the most powerful communication tool humans have. They bypass evaluation and create shared experience. A well-told story doesn't just inform — it transports.</p>
        <div class="highlight-box">The four-part story structure: Situation (set the scene) → Complication (what went wrong or what was at stake) → Action (what you did) → Result (what happened). Every compelling story follows some version of this arc.</div>
        <p>The most common storytelling mistake is spending too long on the situation and rushing the complication and action — which is where all the interest lives. The other common mistake is no clear ending. A story without a result trails off. The result doesn't need to be triumphant — it just needs to be there.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">📖</div>
        <div class="key-insight-text"><strong>Key insight:</strong> A story's power comes from the complication — what was at stake, what went wrong, what had to be navigated. Without complication, there is no story, just a sequence of events.</div>
      </div>`,
    reminder: "Don't linger on the setup. The complication and the action are where the interest lives.",
    quiz: [
    ]
  },
  23: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><h2 class="rc-head rc-anim">Why emotion makes words land</h2><p class="rc-body rc-anim">Anxious speakers strip feeling from the voice as a control mechanism — if I don&rsquo;t show it, I can&rsquo;t lose it. It feels safe, but words without feeling are heard and not felt.</p><p class="rc-body rc-anim">Charged information is processed differently and remembered longer: feeling activates the listener&rsquo;s emotional brain alongside the rational one.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg></div><h2 class="rc-head rc-anim">Permission, not performance</h2><p class="rc-body rc-anim">Performed emotion feels manipulative; genuine feeling that&rsquo;s allowed to surface feels human. The work is permission — letting yourself feel something while you speak, rather than managing it out of the experience. That isn&rsquo;t losing control. It&rsquo;s trusting that your emotion is appropriate.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The most influential speakers aren&rsquo;t the calmest.</div><div class="rc-hl-sub">They&rsquo;re the ones who let genuine feeling be heard.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Why emotion makes words land</h3>
        <p>Anxious speakers develop a habit of emotional neutrality — stripping feeling from their voice as a control mechanism. If I don't show emotion, I can't lose control of it. This feels safe. But it has a cost: words without feeling don't land. They're heard but not felt.</p>
        <p>The neuroscience is clear: emotionally charged information is processed differently and remembered longer. When you speak with genuine feeling, you activate the listener's limbic system — the emotional brain — alongside their cortex. Information delivered with feeling is significantly more persuasive and more memorable.</p>
        <div class="highlight-box">The goal isn't to perform emotion. It's to let genuine feeling be audible. There's a crucial difference: performed emotion feels manipulative. Genuine emotion that's been allowed to surface feels human.</div>
        <p>The key is permission — giving yourself permission to feel something while speaking, rather than managing feeling out of the experience. This doesn't mean losing control. It means trusting that your emotion is appropriate and that showing it will connect you to your listener rather than expose you to risk.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">❤️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Emotional neutrality feels safe but costs connection. The most influential speakers aren't the calmest — they're the ones who let genuine feeling be heard.</div>
      </div>`,
    quiz: [
      { q: "Why do anxious speakers tend to strip emotion from their voice?", options: ["Because emotion makes them sound less credible","As a control mechanism — if I don't show emotion, I can't lose control of it","Because audiences prefer neutral delivery","Because emotional speaking uses more cognitive resources"], correct: 1, explanation: "Emotional neutrality is a coping strategy for anxiety — it feels like control. But the cost is connection. Words without feeling don't land in the same way. The listener can hear that something is being withheld, even if they can't name it." },
    ]
  },
  24: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div><h2 class="rc-head rc-anim">Trying to be funny makes you unfunny</h2><p class="rc-body rc-anim">When people can see you reaching for a laugh, the comedy dies. Genuine humour comes from the same place as genuine emotion: specificity, truth, and permission — an honest observation about something that actually happened.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M12 3 L22 20 L2 20 Z"/></svg></div><h2 class="rc-head rc-anim">The comedy triangle</h2><p class="rc-body rc-anim">Specificity + Truth + Timing. The more specific and true the observation, the funnier it is. Timing is simply giving people space to respond — pausing after the funny thing instead of rushing past it.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Laughing at yourself signals confidence and humanity.</div><div class="rc-hl-sub">Self-deprecation disarms the evaluative stance listeners bring — &ldquo;I&rsquo;m secure enough to laugh at myself, and I&rsquo;m not pretending to be perfect.&rdquo;</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Why trying to be funny makes you unfunny</h3>
        <p>Humour in speaking is almost always counterproductive when it's performed — when you can see someone trying to be funny, the comedy dies. Genuine humour emerges from the same place as genuine emotion: specificity, truth, and permission.</p>
        <p>The funniest spoken moments are almost always observations about real situations — the absurdity of something that actually happened, the gap between what was expected and what occurred, the uncomfortable truth everyone recognises but nobody says. This kind of humour requires no setup, no punchline, just honesty.</p>
        <div class="highlight-box">The comedy triangle: Specificity + Truth + Timing. The more specific and true the observation, the funnier it is. Timing is simply giving the listener space to respond — pausing after the funny thing rather than rushing past it.</div>
        <p>Self-deprecating humour — laughing at your own mistakes or limitations — is one of the fastest ways to connect with an audience. It signals confidence (I'm secure enough to laugh at myself) and humanity (I'm not trying to be perfect). It also disarms the evaluative stance listeners sometimes bring to speakers.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">😄</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Genuine humour comes from truth and specificity, not from trying to be funny. The more honest and specific the observation, the more naturally the comedy emerges.</div>
      </div>`,
    quiz: [
    ]
  },
  25: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/></svg></div><h2 class="rc-head rc-anim">There&rsquo;s no correct speaking style</h2><p class="rc-body rc-anim">One of the most persistent myths is that there&rsquo;s an ideal style — measured, authoritative, warm — and that improving means moving toward it. It&rsquo;s wrong, and it&rsquo;s damaging: trying to speak like someone else erases the very thing that makes you worth listening to.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div><h2 class="rc-head rc-anim">Style emerges from who you are</h2><p class="rc-body rc-anim">Some of the most influential speakers are quiet. Some are intense, some funny, some rigorous. None are imitating anyone. Your style at its best is simply who you are, communicated clearly and without apology.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The work is removing the interference.</div><div class="rc-hl-sub">The anxiety, the performance, the self-consciousness that gets in the way. What&rsquo;s left underneath is your natural voice — and this session maps it.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>There is no correct speaking style</h3>
        <p>One of the most persistent myths about public speaking is that there's an ideal style — measured, authoritative, energetic, warm — and that the goal of improving is to move toward it. This is wrong and it's damaging. Trying to speak like someone else erases what makes you worth listening to.</p>
        <p>Every effective communicator has a distinct style that emerges from who they actually are: their background, their thinking patterns, their emotional register, their natural pace. Some of the most influential speakers are quiet. Some are intense. Some are funny. Some are rigorous. None of them are trying to be someone else.</p>
        <div class="highlight-box">Your speaking style at its best is simply who you are, communicated clearly and without apology. The work of developing it is the work of removing the interference — the anxiety, the performance, the self-consciousness — that gets in the way.</div>
        <p>This session is diagnostic. You're mapping your natural communication style — not what you think it should be, but what it actually is. That map is the foundation for everything that follows.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🪞</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Developing your voice isn't about adding things — it's about removing the interference that stops your natural voice from coming through clearly.</div>
      </div>`,
    quiz: [
    ]
  },
  26: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div><h2 class="rc-head rc-anim">Performing vs connecting</h2><p class="rc-body rc-anim">Most speaking anxiety runs on audience-orientation: what do they think of me? How am I coming across? The more you monitor their reaction, the more anxious you get — and the more your delivery degrades.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><h2 class="rc-head rc-anim">Speak to one person</h2><p class="rc-body rc-anim">The antidote is connection-orientation — not &ldquo;how am I doing?&rdquo; but &ldquo;is this landing for them?&rdquo; The simplest way in: pick one real person whose understanding you care about and speak to them. It turns performance into conversation.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">From &lsquo;how am I doing?&rsquo; to &lsquo;is this landing for them?&rsquo;</div><div class="rc-hl-sub">Pace slows, fillers drop, eye contact warms — not as techniques you apply, but automatically, once the goal shifts from impressing to connecting.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The shift from performing to connecting</h3>
        <p>Most speaking anxiety is driven by an audience-orientation: What do they think of me? How am I coming across? Am I making sense? This focus on audience evaluation is self-perpetuating — the more you monitor their response, the more anxious you become, and the more your performance degrades.</p>
        <p>Connection orientation is the antidote. Instead of "how am I doing?", the question becomes "is this landing for them?" — a subtle but profound shift in attention. You're still aware of your audience, but you're focusing on them rather than on yourself being watched by them.</p>
        <div class="highlight-box">The simplest connection technique: speak to one person. Not the room, not the camera, not a vague audience — one real person whose understanding you care about. This transforms performance into conversation.</div>
        <p>When you speak to connect rather than to impress, something changes in every measurable dimension: pace slows naturally, filler words drop, eye contact becomes genuine, voice becomes warmer. These aren't techniques you apply — they emerge automatically when the goal shifts from performance to connection.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🤝</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Performance anxiety is self-focused attention. Connection is other-focused attention. Shifting from "how am I doing?" to "is this landing for them?" changes everything downstream.</div>
      </div>`,
    reminder: "Speak to one person, not the room — make it a conversation.",
    quiz: [
    ]
  },
  27: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div><h2 class="rc-head rc-anim">The story that carries you</h2><p class="rc-body rc-anim">Every effective communicator has at least one signature story — a narrative that captures something essential about who they are or what they&rsquo;ve learned. It needn&rsquo;t be dramatic. It&rsquo;s specific, true, and reveals character — and it does the work of introduction better than any list of credentials.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div><h2 class="rc-head rc-anim">Excavation, not invention</h2><p class="rc-body rc-anim">You don&rsquo;t make a signature story up — you dig it out. It&rsquo;s already there, in the experiences that shaped your thinking, the moments that changed direction, the failures that taught more than the wins.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The best signature stories end with insight, not triumph.</div><div class="rc-hl-sub">Insight is more relatable than success — something you genuinely learned, noticed, or had to reckon with.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The story that carries you</h3>
        <p>Every effective communicator has at least one signature story — a narrative that encapsulates something essential about who they are, what they believe, or what they've learned. It's not necessarily dramatic or impressive. It's specific, true, and reveals character.</p>
        <p>A signature story is valuable for several reasons: it's repeatable (you can tell it many times and it gets better), it's distinctive (nobody else has it), and it does the work of introduction more powerfully than any list of credentials could.</p>
        <div class="highlight-box">The most powerful signature stories don't end with triumph. They end with insight — something the speaker genuinely learned, noticed, or had to reckon with. Insight is more relatable than success.</div>
        <p>Finding your signature story is a process of excavation, not invention. It's already there — in the experiences that shaped your thinking, the moments that changed direction, the failures that taught more than the successes. This session is about surfacing it.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">⭐</div>
        <div class="key-insight-text"><strong>Key insight:</strong> A signature story isn't about being impressive — it's about being specific and true. The best ones end with insight, not triumph. Insight is more relatable than success.</div>
      </div>`,
    reminder: "Signature means specific, true and revealing — a story only you could tell.",
    quiz: [
    ]
  },
  6: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg></div><h2 class="rc-head rc-anim">Your breath is your remote control</h2><p class="rc-body rc-anim">When anxiety hits, your breathing goes shallow and fast — which feeds it. Short breaths signal danger, your brain sends more adrenaline, you breathe faster. A loop.</p><p class="rc-body rc-anim">Slow, controlled breathing flips the switch — it activates the parasympathetic nervous system, your body&rsquo;s built-in calm signal. Not a metaphor. Physiology.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><h2 class="rc-head rc-anim">Box breathing</h2><p class="rc-body rc-anim">Inhale 4 counts, hold 4, exhale 4, hold 4. One cycle is 16 seconds; three cycles takes under a minute and measurably lowers your heart rate.</p><p class="rc-body rc-anim">The exhale activates the vagus nerve, which tells your heart to slow. The holds give your nervous system time to register the change.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Breathing is the only part of this you can consciously control.</div><div class="rc-hl-sub">That makes it the fastest, most accessible tool you have for steadying yourself in real time.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Your breath is your remote control</h3>
        <p>When anxiety hits, your breathing becomes shallow and fast — which actually makes the anxiety worse. Short breaths signal danger to your brain, which releases more adrenaline, which makes you breathe faster. It's a loop.</p>
        <p>The good news: you can break that loop deliberately. Slow, controlled breathing directly activates your parasympathetic nervous system — the biological "calm down" signal. It's not a metaphor. It's physiology.</p>
        <div class="highlight-box">Box breathing: inhale 4 counts, hold 4, exhale 4, hold 4. One cycle takes 16 seconds. Three cycles takes under a minute — and measurably lowers your heart rate.</div>
        <p>This works because the exhale activates the vagus nerve, which tells your heart to slow down. The "hold" phases give your nervous system time to register the change. Four counts in, hold, four counts out, hold — repeat until you feel the shift.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🫁</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Breathing is the only autonomic function you can consciously control — making it the fastest, most accessible tool for managing anxiety in real time.</div>
      </div>`,
    quiz: [
    ]
  },
  7: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="3" y1="12" x2="21" y2="12"/></svg></div><h2 class="rc-head rc-anim">Where anxiety hides in your body</h2><p class="rc-body rc-anim">Most people carry tension without noticing — and by the time they do, it has already tightened their voice. A 60-second body scan heads it off.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><h2 class="rc-head rc-anim">The usual suspects</h2><p class="rc-body rc-anim">Jaw, shoulders, chest, stomach, hands. Scan top to bottom, name where you&rsquo;re holding, breathe into it, and let go. Two or three passes is enough — don&rsquo;t try to relax everything at once.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Tight jaw, tight voice.</div><div class="rc-hl-sub">Release it even slightly and your resonance opens and your register drops. The body and the voice are the same system.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Where anxiety hides in your body</h3>
        <p>Most people carry physical tension without realising it. By the time they're aware of it, it's already affecting their voice — making it tighter, higher, or less resonant. A pre-speaking body scan takes 60 seconds and addresses this before it becomes a problem.</p>
        <p>The most common tension points for speaking anxiety: the jaw (clenched or held), the shoulders (raised or pulled forward), the chest (tight or shallow), the stomach (knotted), and the hands (gripped or fidgeting).</p>
        <div class="highlight-box">Jaw tension directly affects voice quality. If your jaw is tight, your voice will be too. Releasing it — even slightly — opens resonance and lowers your register.</div>
        <p>The technique is simple: scan from top to bottom, notice where you're holding tension, and consciously release it. Don't try to relax everything at once. Name each area, breathe into it, and let it go. Two or three passes is usually enough.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🧘</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Physical tension and anxiety reinforce each other. Releasing tension in the body directly reduces the feeling of anxiety — not just the symptoms of it.</div>
      </div>`
  },
  8: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg></div><h2 class="rc-head rc-anim">The power of saying nothing</h2><p class="rc-body rc-anim">Filler words — um, uh, like — are a nervous reflex. They exist to fill silence, because silence feels dangerous. But to a listener, a pause sounds like confidence.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">A two-second pause feels like an eternity to you.</div><div class="rc-hl-sub">To the room it sounds like authority. What people actually notice is the opposite — rushing, and never letting a point land.</div></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><h2 class="rc-head rc-anim">Get comfortable with silence</h2><p class="rc-body rc-anim">The fix isn&rsquo;t thinking &ldquo;don&rsquo;t say um&rdquo; — that just adds pressure. It&rsquo;s letting gaps exist. Pause mid-sentence, breathe into it, and let your brain stop treating silence as a threat.</p></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The power of saying nothing</h3>
        <p>Filler words — um, uh, like, basically, you know — are a nervous reflex. They exist to fill silence because silence feels dangerous. But to your listener, a pause sounds like confidence. To you, it feels like an eternity. That gap between perception and reality is what this session trains.</p>
        <p>Here's the counterintuitive truth: a two-second pause is almost never noticed by the listener. But it is noticed when you don't pause — when you rush, fill every gap, and never give your words room to land.</p>
        <div class="highlight-box">The most powerful speakers use silence deliberately. A pause before an important point signals: what I'm about to say matters. Listen.</div>
        <p>The fix isn't to think "don't say um" — that creates more anxiety. The fix is to get comfortable with silence. Practice pausing mid-sentence. Let gaps exist. Breathe into them. Over time, your brain stops treating silence as a threat that needs to be filled.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🤫</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Silence feels much longer to the speaker than to the listener. A 2-second pause that feels uncomfortable to you sounds like authority to the room.</div>
      </div>`,
    reminder: "A pause beats an 'um' every time. Silence isn't a threat — let it sit.",
    quiz: [
    ]
  },
  9: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/></svg></div><h2 class="rc-head rc-anim">When panic hits mid-speech</h2><p class="rc-body rc-anim">Sometimes anxiety doesn&rsquo;t build — it spikes. Mind blank, heart racing, completely derailed. That&rsquo;s an amygdala hijack: the threat system fires so hard the thinking brain briefly goes offline.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div><h2 class="rc-head rc-anim">5 &middot; 4 &middot; 3 &middot; 2 &middot; 1</h2><p class="rc-body rc-anim">Five things you can see. Four you can feel. Three you can hear. Two you can smell. One you can taste. Each step pulls your brain out of the spiral and back into the room.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Anxiety lives in the future. Grounding drags you into now.</div><div class="rc-hl-sub">And the present is the one place it can&rsquo;t survive.</div></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><h2 class="rc-head rc-anim">Do it slowly — and mean it</h2><p class="rc-body rc-anim">Really look at what you can see. Really feel your feet on the floor. It works through genuine sensory attention, not rattling through a list.</p></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>When panic hits mid-speech</h3>
        <p>Sometimes anxiety doesn't build gradually — it spikes suddenly. Your mind goes blank, your heart races, and you feel completely derailed. This is an amygdala hijack: your threat system has fired so strongly that your prefrontal cortex — the thinking brain — temporarily goes offline.</p>
        <p>The 5-4-3-2-1 grounding technique works by forcing your brain to engage the senses, which pulls attention out of the anxious thought loop and back into the present moment. It's not a magic trick — it's neuroscience.</p>
        <div class="highlight-box">5 things you can see. 4 you can physically feel. 3 you can hear. 2 you can smell. 1 you can taste. Each step pulls your brain further from the anxiety spiral and deeper into right now.</div>
        <p>The key is doing it slowly and genuinely — not rattling through it. Really look at what you can see. Really feel the weight of your feet on the floor. The technique works through genuine sensory attention, not just recitation.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">⚓</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Anxiety lives in anticipation of the future or rumination about the past. Sensory grounding forces the brain into the present — where anxiety cannot survive.</div>
      </div>`,
    quiz: [
    ]
  },
  10: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg></div><h2 class="rc-head rc-anim">Volume is confidence made audible</h2><p class="rc-body rc-anim">Quiet speakers read as less confident — not because they&rsquo;re less able, but because volume is a primary signal humans use to judge certainty. Unfair, but consistent.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></div><h2 class="rc-head rc-anim">Project — don&rsquo;t shout</h2><p class="rc-body rc-anim">Speaking quietly when anxious makes you <em>feel</em> more anxious; your brain takes your own thin voice as proof. Projection is direction and energy, not loudness — speak to the back of the room, resonating in your chest, not your throat.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Your voice isn&rsquo;t only talking to them. It&rsquo;s talking to you.</div><div class="rc-hl-sub">A grounded, chest-resonant voice signals confidence straight to your own nervous system.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Volume is confidence made audible</h3>
        <p>Quiet speakers are perceived as less confident — not because they're less capable, but because volume is one of the primary signals humans use to assess certainty and authority. This isn't fair, but it is consistent.</p>
        <p>Here's what most people don't realise: speaking more quietly when anxious makes you feel more anxious. Your brain interprets your own quiet voice as evidence that you're not confident — and responds accordingly. It's another feedback loop.</p>
        <div class="highlight-box">Projection is not about being loud. It's about speaking to the back of the room with intention. The difference is direction and energy, not volume.</div>
        <p>The technique: imagine your voice needs to reach the furthest person in the room. Not shout — project. Feel it resonating in your chest rather than just your throat. A chest voice is richer, calmer, and carries more authority than a throat voice. Anxiety typically pushes the voice upward — into the throat, then the head. Grounding it back in the chest is a learnable skill.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🎙️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Your voice isn't just communicating to others — it's communicating to you. A projected, chest-resonant voice signals confidence to your own nervous system.</div>
      </div>`,
    reminder: "Project, don't shout — it's direction and resonance, not raw volume.",
    quiz: [
    ]
  },
  11: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><h2 class="rc-head rc-anim">Build your pre-speech routine</h2><p class="rc-body rc-anim">Elite performers — athletes, surgeons, musicians — use pre-performance routines because predictability calms the nervous system. A routine says: we&rsquo;ve done this before. This is safe.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Simpler is better.</div><div class="rc-hl-sub">Something you can do in 60 seconds anywhere — outside a room, before a meeting. It only works through repetition, until the calm becomes automatic.</div></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div><h2 class="rc-head rc-anim">Three moves, made yours</h2><p class="rc-body rc-anim">An effective routine combines a breathing technique to settle the body, a physical release to drop tension, and a grounding moment to land in the present. You&rsquo;ve learned all three — this session makes them one routine that&rsquo;s yours.</p></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Building your pre-speech routine</h3>
        <p>Elite performers — athletes, surgeons, musicians — use pre-performance routines not because they're superstitious but because predictability calms the nervous system. A routine signals: we've done this before. This is safe. We know what happens next.</p>
        <p>The routine doesn't need to be elaborate. In fact, simpler is better — something you can do in 60 seconds anywhere: before a meeting, in a bathroom before a presentation, standing outside a room. The key is consistency.</p>
        <div class="highlight-box">A routine only works if you repeat it enough times to create an association. The more you use it, the stronger the conditioned calm response becomes.</div>
        <p>An effective pre-speaking routine typically combines three elements: a breathing technique to physiologically calm the body, a physical release to drop tension, and a grounding or focusing moment to bring your attention to the present. You've now learned all three. This session is about combining them into something that's yours.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🎯</div>
        <div class="key-insight-text"><strong>Key insight:</strong> A pre-speech routine works through conditioned association — the more consistently you use it, the stronger the automatic calm response becomes.</div>
      </div>`,
    quiz: [
    ]
  },
  12: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><h2 class="rc-head rc-anim">Anxiety and excitement are the same body</h2><p class="rc-body rc-anim">Racing heart, tight chest, dry mouth, heightened alertness — physically, these are identical to excitement. The difference isn&rsquo;t in the body at all. It&rsquo;s in the label your brain puts on the sensations.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div><h2 class="rc-head rc-anim">Reframe, don&rsquo;t fight</h2><p class="rc-body rc-anim">Harvard&rsquo;s Alison Wood Brooks found that people who say &ldquo;I am excited&rdquo; out loud perform measurably better than those who try to calm down. Calming fights your biology; reframing channels the same arousal into something useful. It&rsquo;s cognitive reappraisal — changing the meaning, not the situation.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Your body is already charged. The only question is what you call it.</div><div class="rc-hl-sub">Threat, or readiness. The charge is the same either way.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Rewriting the story your body tells</h3>
        <p>Racing heart. Tight chest. Dry mouth. Heightened alertness. These are the physical symptoms of anxiety — but they are physiologically identical to excitement. The difference isn't in the body. It's in the label your brain puts on those sensations.</p>
        <p>Psychologist Alison Wood Brooks at Harvard found that people who reframe pre-performance anxiety as excitement — out loud, saying "I am excited" — perform measurably better than those who try to calm down or those who say nothing.</p>
        <div class="highlight-box">Trying to calm down is fighting your biology. Reframing anxiety as excitement works with it — channelling the same arousal state into a different, more useful emotion.</div>
        <p>This isn't positive thinking. It's cognitive reappraisal — a well-studied psychological technique where you change the meaning of a situation rather than trying to change the situation itself. Your body is already charged. The question is whether you interpret that charge as threat or as readiness.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">⚡</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Anxiety and excitement are physiologically identical. The only difference is the label. Saying "I'm excited" out loud shifts the interpretation — and measurably improves performance.</div>
      </div>`,
    quiz: [
      { q: "Why is 'I'm excited' more effective than 'calm down' as a pre-speech strategy?", options: ["Because excitement is always better than calmness","Reframing works with the body's arousal state; trying to calm down fights it","Because saying it out loud makes you believe it","Because 'calm down' is too negative a phrase"], correct: 1, explanation: "Trying to calm down is trying to reduce physiological arousal — which is very difficult in the moment. Reframing to excitement keeps the same arousal level but channels it into a positive, approach-oriented emotion. You're working with your biology, not against it." }
    ]
  },
  13: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="6" y1="20" x2="6" y2="4"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="8" x2="18" y2="8"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="6" y1="16" x2="18" y2="16"/></svg></div><h2 class="rc-head rc-anim">The ladder that changes everything</h2><p class="rc-body rc-anim">Exposure is the most evidence-based treatment for anxiety: approach what you fear, gradually and repeatedly, until your nervous system learns through experience that it&rsquo;s survivable — even manageable.</p><p class="rc-body rc-anim">The anxiety ladder is the map. It lists feared situations from least to most frightening, giving you a path from where you are to where you want to be.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><h2 class="rc-head rc-anim">Never skip rungs</h2><p class="rc-body rc-anim">Work a level until your anxiety there drops to about half its original intensity before moving up. Your ladder is personal — a vague fear of &ldquo;public speaking&rdquo; is hard to work with; &ldquo;being asked a question in a board meeting&rdquo; gives you something to grip.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg></div><h2 class="rc-head rc-anim">Predict, then check</h2><p class="rc-body rc-anim">Before each rung, predict what you fear — &ldquo;I&rsquo;ll freeze&rdquo;, &ldquo;my voice will shake&rdquo;. Afterwards, compare it to what actually happened. Your brain updates fastest not when it calms down, but when it&rsquo;s proven wrong.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Your brain doesn&rsquo;t update its threat register through reassurance.</div><div class="rc-hl-sub">Only through doing. That&rsquo;s the whole reason the ladder works.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The ladder that changes everything</h3>
        <p>Exposure therapy is the most evidence-based treatment for anxiety disorders. The core principle is simple: you approach what you fear, gradually and repeatedly, until your nervous system learns through direct experience that the feared situation is survivable — even manageable.</p>
        <p>The anxiety hierarchy — sometimes called an anxiety ladder — is the map for that process. It lists feared situations from least to most frightening, giving you a structured path from where you are to where you want to be.</p>
        <div class="highlight-box">The critical rule: you never skip rungs. You work a level until your anxiety response drops to a manageable level — typically 50% of its original intensity — before moving up.</div>
        <p>Your hierarchy is personal. What's terrifying for one person is trivial for another. There's no right or wrong list — there's only your list. The value is in the specificity: a vague fear of "public speaking" is hard to address. A specific fear of "being asked a question in a board meeting" gives you something to work with.</p>         <p>One thing makes each rung more powerful: before you start, predict what you fear will happen — "I'll freeze", "my voice will shake". Afterwards, check what actually happened against your prediction. Your brain updates fastest not when it calms down, but when it's proven wrong. You'll do this formally with the catastrophe checklist later — start the habit here.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🪜</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Exposure therapy works by teaching the nervous system through experience, not logic. Your brain doesn't update its threat register through reassurance — only through doing.</div>
      </div>`
  },
  14: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg></div><h2 class="rc-head rc-anim">The most underused practice</h2><p class="rc-body rc-anim">Recording yourself and listening back is one of the highest-leverage things you can do — research shows it accelerates improvement faster than almost anything else. And almost nobody does it, because most people can&rsquo;t stand hearing their own voice.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></div><h2 class="rc-head rc-anim">Why the discomfort is the point</h2><p class="rc-body rc-anim">The voice in your head has more bass; your recorded voice sounds thin and strange. But that&rsquo;s the voice everyone else hears every time you speak. Getting comfortable with it means getting accurate about how you actually come across.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Played back, you almost always look calmer than you felt.</div><div class="rc-hl-sub">That gap — between how it felt and how it landed — is some of the most useful evidence you&rsquo;ll ever gather about your speaking.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The most underused speaking practice</h3>
        <p>Recording yourself and listening back is one of the highest-leverage things you can do to improve your speaking. Research consistently shows it accelerates improvement faster than almost any other single practice. And almost nobody does it.</p>
        <p>Why? Because most people can't stand hearing their own voice. The voice you hear in your head is different from what others hear — it has more bass, more resonance. Your recorded voice sounds thin and strange. This discomfort is the exact reason listening back is so powerful.</p>
        <div class="highlight-box">Your listeners hear your recorded voice every time you speak. Getting comfortable  with it means getting accurate about how you actually come across — rather than how you imagine you do.</div>         <p>There's a deeper reason this matters. When you're anxious, your read on how you came across is badly distorted — it feels like your nerves were obvious and your delivery fell apart. Played back, the recording almost always shows someone far calmer and more capable than you felt. That gap is some of the most useful evidence you'll gather about your speaking.</p>
        <p>This session starts at the very bottom of the hierarchy: speaking with no social audience at all. Just you and a recording. It sounds trivial. It isn't. For many people with speaking anxiety, even this first step produces measurable anxiety. That's important data — and important work.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🎧</div>
        <div class="key-insight-text"><strong>Key insight:</strong> The discomfort of hearing your recorded voice is itself exposure work. Getting comfortable with how you sound is a prerequisite for getting comfortable with how others hear you.</div>
      </div>`,
    quiz: [
      { q: "Why is 'speaking to yourself with a recording' a meaningful first step even though there's no audience?", options: ["It isn't — you need an audience for real exposure practice","For many people with anxiety, even this step produces anxiety — making it real exposure work","It's mainly useful for getting used to the sound of your voice","It's a warm-up before the real practice begins"], correct: 1, explanation: "The anxiety hierarchy starts where anxiety actually exists — and for many people, even speaking alone with a microphone produces measurable anxiety. This is real exposure, not a warm-up. The nervous system is being trained from the very first recording." }
    ]
  },
  15: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><h2 class="rc-head rc-anim">Passion unlocks your best voice</h2><p class="rc-body rc-anim">When people talk about something they love, the voice warms, the pace settles, the fillers drop. That isn&rsquo;t performance — it&rsquo;s what happens when the brain steps out of threat mode.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></div><h2 class="rc-head rc-anim">It points your attention outward</h2><p class="rc-body rc-anim">Anxiety narrows attention onto the self — how am I coming across? Passion shifts it onto the topic, the ideas, the other person. That outward shift is one of the fastest ways to drop performance anxiety.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The voice you use about what you love is your natural voice.</div><div class="rc-hl-sub">The whole goal of this programme is to make it available everywhere — not just on the easy topics.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Why passion unlocks your best voice</h3>
        <p>When people talk about things they genuinely love, something changes. The voice becomes warmer. The pace becomes more natural. Filler words drop. Eye contact (if there's an audience) increases. The speaker leans forward. This isn't performance — it's what happens when the brain shifts out of threat mode.</p>
        <p>Anxiety narrows attention onto the self — how am I coming across? What do they think of me? Am I making sense? Passion shifts attention outward — onto the topic, the ideas, the other person. That shift is one of the fastest ways to reduce performance anxiety.</p>
        <div class="highlight-box">The voice you use when talking about your favourite subject is your natural speaking voice. The goal of this programme is to make that voice available in every situation.</div>
        <p>This session is deliberately easy. There's a reason it comes early in Phase 3 — you need to experience what good speaking feels like in your body, so you have something to aim for. Notice the difference. That difference is important data.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">❤️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Passion shifts attention from self-monitoring to subject — which is the same mental shift that reduces performance anxiety. Talking about what you love is the clearest window into your natural speaking voice.</div>
      </div>`,
    quiz: [
    ]
  },
  16: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><h2 class="rc-head rc-anim">The 60-second introduction</h2><p class="rc-body rc-anim">The self-introduction is the most universally required — and feared — speaking moment. Interviews, networking, first days, team meetings: it&rsquo;s everywhere, and almost nobody has actually practised it. The anxiety is pure evaluation: you&rsquo;re the subject, with nowhere to hide behind a topic.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div><h2 class="rc-head rc-anim">Ready, not rehearsed</h2><p class="rc-body rc-anim">There&rsquo;s a difference between sounding stilted and sounding ready. A good 60&ndash;90 second intro is simple: name and role, a little context, one thing you&rsquo;re genuinely interested in, one human detail. Prepared isn&rsquo;t inauthentic.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Connection comes from specificity and warmth — not impressive credentials.</div><div class="rc-hl-sub">The goal of an introduction was never to impress. It&rsquo;s to connect.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The 60-second introduction</h3>
        <p>The self-introduction is the most universally required and most universally feared speaking situation. Job interviews, networking events, first days, team meetings — it appears constantly. And yet most people have never deliberately practised it.</p>
        <p>The anxiety around introductions is usually about evaluation: people are forming their first impression, and you know it. There's nowhere to hide behind a topic or a task. You are the subject.</p>
        <div class="highlight-box">A practised introduction isn't inauthentic — it's prepared. There's a difference between sounding rehearsed (stilted, robotic) and sounding ready (confident, clear, warm).</div>
        <p>A good 60-90 second introduction follows a simple structure: name and role, context (where you're from, what you do), one thing you're genuinely interested in or excited about, one personal detail that makes you human. The goal isn't to impress — it's to connect. And connection comes from specificity and warmth, not from impressive credentials.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🤝</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Most people fear introductions because they've never practised them. Preparation doesn't make you sound fake — it makes you sound ready.</div>
      </div>`,
    scenario: { description: "You've just joined a new team. The manager says: 'Let\'s go around the room — name, role, and one interesting thing about you.'", options: ["Keep it brief and professional", "Lead with something personal or funny", "Focus on what you bring to the team"] },
    reminder: "Aim for ready, not rehearsed: confident, clear, warm.",
    quiz: [
    ]
  },
  17: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div><h2 class="rc-head rc-anim">Thinking on your feet</h2><p class="rc-body rc-anim">Being called on unexpectedly is one of the most common speaking fears. It isn&rsquo;t really about speaking — it&rsquo;s the feeling of being put on the spot, which your brain reads as threat. The good news: it&rsquo;s a skill, and skills improve with practice.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg></div><h2 class="rc-head rc-anim">Buy yourself a beat</h2><p class="rc-body rc-anim">You don&rsquo;t need an instant perfect answer. Take a visible breath and say &ldquo;let me think about that for a second.&rdquo; That&rsquo;s not weakness — it reads as composure, and it buys you the few seconds you need.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Position. Reason. Example.</div><div class="rc-hl-sub">State your view, give one reason, give one example. A 30-second answer built this way beats a two-minute ramble every time.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The skill of thinking on your feet</h3>
        <p>Being called on unexpectedly is one of the most commonly cited speaking fears. The anxiety isn't really about speaking — it's about the feeling of being put on the spot without preparation. Your brain interprets the sudden spotlight as threat, not opportunity.</p>
        <p>The good news: spontaneous speaking is a skill, and skills improve with practice. The key isn't to have an instant perfect answer — it's to have a reliable structure that buys you 2-3 seconds to think and then organises your response.</p>
        <div class="highlight-box">The most effective pause technique: take a visible breath and say "that's a good question" or simply "let me think about that for a second." This is not weakness — it's composure.</div>
        <p>After the pause, the simplest structure for spontaneous answers is: state your position immediately, give one clear reason, give one brief example. Position → Reason → Example. Even a 30-second answer organised this way sounds more confident and credible than a 2-minute ramble.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">💭</div>
        <div class="key-insight-text"><strong>Key insight:</strong> You don't need to have an instant perfect answer. You need a reliable structure that organises your thinking under pressure. Position → Reason → Example works in almost any situation.</div>
      </div>`,
    reminder: "Caught off guard? Take a visible breath, buy a moment with a composure phrase, then: Position → Reason → Example.",
    quiz: [
    ]
  },
  18: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg></div><h2 class="rc-head rc-anim">The fear behind sharing an opinion</h2><p class="rc-body rc-anim">For many people, an opinion feels riskier than information. Information is right or wrong; an opinion can be judged, dismissed, or make you look naive or out of your depth. That&rsquo;s competence anxiety — the fear of being evaluated for your <em>thinking</em>, not your delivery.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div><h2 class="rc-head rc-anim">Hedging is its signature</h2><p class="rc-body rc-anim">&ldquo;I suppose&hellip;&rdquo; &ldquo;maybe&hellip;&rdquo; &ldquo;I&rsquo;m not sure, but&hellip;&rdquo; — these reduce your authority even when the content is strong. The fix isn&rsquo;t faking a certainty you don&rsquo;t have.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Claim, reasoning, counterargument.</div><div class="rc-hl-sub">State your position, support it, and engage the strongest objection honestly. That&rsquo;s the hallmark of credible thinking — confidence not from eliminating doubt, but from facing it.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The fear behind sharing opinions</h3>
        <p>For many people, sharing an opinion feels riskier than sharing information. Information can be right or wrong. Opinions can be judged, disagreed with, dismissed — or worse, can make you look naive, arrogant, or out of your depth.</p>
        <p>This is competence anxiety — the specific fear of being evaluated not for your delivery but for your thinking. It's distinct from general speaking anxiety and requires its own work.</p>
        <div class="highlight-box">Hedging language — "I suppose," "maybe," "I'm not sure but..." — is the verbal signature of competence anxiety. It reduces perceived authority even when the content is strong.</div>
        <p>The antidote isn't to pretend certainty you don't have. It's to state your position clearly, support it with reasoning, and acknowledge the strongest counterargument. This structure — claim, reasoning, counterargument — is the hallmark of credible thinking. It signals confidence not by eliminating doubt but by engaging with it honestly.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">💡</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Acknowledging a counterargument doesn't weaken your position — it strengthens it. It signals that you've thought carefully, not that you're unsure.</div>
      </div>`,
    scenario: { description: "In a team meeting, your manager asks: 'What does everyone think about this new approach?' The room goes quiet.", options: ["State your position directly with one clear reason", "Acknowledge both sides before giving your view", "Ask a clarifying question first to buy time"] },
    reminder: "Acknowledge the counterargument — it makes your position stronger, not weaker.",
    quiz: [
    ]
  },
  19: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div><h2 class="rc-head rc-anim">Most problems are structure problems</h2><p class="rc-body rc-anim">People usually know what they want to say — they just deliver it in the order it occurred to them, not the order that makes sense to the listener. Strong content still ends up sounding disorganised.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></div><h2 class="rc-head rc-anim">Point. Reason. Example.</h2><p class="rc-body rc-anim">State your point first — not your background, not your caveats. Then why. Then one specific example. Done. It has a built-in ending, which stops the rambling before it starts.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Lead with your point. Always.</div><div class="rc-hl-sub">Burying it is the most common mistake — by the time you arrive at the conclusion, the listener has lost the thread. Context can come after.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The structure that works everywhere</h3>
        <p>Most communication problems aren't knowledge problems. They're structure problems. People know what they want to say but deliver it in the order it occurred to them rather than the order that makes sense to the listener. The result sounds disorganised even when the content is strong.</p>
        <p>Point-Reason-Example (PRE) is the most versatile spoken structure there is. It works in interviews, presentations, meetings, networking conversations, and unexpected questions. It has a natural beginning, middle, and end — which means it has a natural stopping point, preventing rambling.</p>
        <div class="highlight-box">State your point first. Always. Not your background, not your caveats, not your qualifications. Your point. Then explain why. Then give a specific example. Done.</div>
        <p>The most common mistake is burying the point. People give context and reasoning and then arrive at their conclusion — by which time the listener has often lost the thread. Leading with your point is counterintuitive but it's what good verbal communicators do. You can always add context after the point is clear.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🗂️</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Most communication problems are structure problems. PRE — Point, Reason, Example — works in almost every spoken context because it leads with the conclusion and then explains it.</div>
      </div>`,
    reminder: "Lead with your point. Destination first, then the journey.",
    quiz: [
    ]
  },
  20: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></div><h2 class="rc-head rc-anim">You&rsquo;ve come further than you think</h2><p class="rc-body rc-anim">This is session 20 — register what that means before you record. You&rsquo;ve sat with hard material about your own anxiety, learned how your brain fires and why, and recorded yourself repeatedly, which most people with speaking anxiety never do.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z"/></svg></div><h2 class="rc-head rc-anim">Imaginal exposure</h2><p class="rc-body rc-anim">Vividly imagining a feared situation activates many of the same neural pathways as the real thing — it&rsquo;s used in CBT and EMDR for exactly that reason. In this session you&rsquo;ll speak as if presenting to a room of 20. The more vividly you picture them, the more the exposure works.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">This is the bridge between safe practice and the real world.</div><div class="rc-hl-sub">You&rsquo;ve built the foundations — body regulation, structure, exposure. The next phase carries them outside.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>You've come further than you think</h3>
        <p>This is session 20. Before you record, take a moment to register what that means. You've sat with difficult material about your own anxiety. You've read about how your brain works, why it fires the way it does, and what it takes to change it. You've recorded yourself — repeatedly — which most people with speaking anxiety never do.</p>
        <p>Imaginal exposure — vividly imagining a feared situation in detail — activates many of the same neural pathways as real exposure. It's used in CBT and EMDR precisely because the brain processes vivid imagination similarly to direct experience.</p>
        <div class="highlight-box">This session uses imaginal exposure: you'll speak as if presenting to a room of 20 people. The more vividly you imagine the room, the more effective the exposure.</div>
        <p>This is the bridge between safe practice and real-world speaking. You've built the foundations — body regulation, structural tools, exposure experience. The next phase takes it into the real world. But first: notice that you're still here. You kept going. That, more than any score, is what changes the pattern.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🌉</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Imaginal exposure works because the brain processes vivid imagination similarly to direct experience. The more real you make the imagined room, the more effective this session is.</div>
      </div>`,
    scenario: { description: "You're presenting a project update to a group that includes your skip-level manager. You have 2 minutes.", options: ["Lead with the headline result, then fill in context", "Walk through the timeline chronologically", "Start with what's at risk and what you need from them"] },
    quiz: [
    ]
  }
};

// ── LESSON CONTENT: PHASES 7-9 (Sessions 34-53) ──
Object.assign(LESSON_CONTENT, {
  34: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg></div><h2 class="rc-head rc-anim">The fastest reset you&rsquo;ll learn</h2><p class="rc-body rc-anim">The extended exhale lowers your heart rate within seconds. Inhale for 4, exhale for 8 — the longer exhale activates the vagus nerve and shifts you from fight-or-flight to rest-and-digest. A 2:1 exhale-to-inhale ratio is the sweet spot.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg></div><h2 class="rc-head rc-anim">Invisible, and instant</h2><p class="rc-body rc-anim">You can do it mid-sentence, between slides, while someone else is asking a question. Nobody sees a thing — but your body feels it immediately.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">One extended exhale measurably lowers your heart rate.</div><div class="rc-hl-sub">It&rsquo;s the fastest in-the-moment tool in the whole programme, and no one can tell you&rsquo;re doing it.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>The fastest reset you'll ever learn</h3><p>The extended exhale is a single-breath technique that reduces heart rate within seconds. Inhale for 4 counts. Exhale for 8. The longer exhale activates the vagus nerve and shifts your nervous system from fight-or-flight to rest-and-digest.</p><div class="highlight-box">This works because the exhale phase stimulates the parasympathetic nervous system. A 2:1 exhale-to-inhale ratio is the sweet spot. It's invisible to any audience.</div><p>You can do this mid-sentence. Between slides. While someone else is asking a question. Nobody sees it. But your body feels it immediately.</p></div><div class="key-insight"><div class="key-insight-icon">🫁</div><div class="key-insight-text"><strong>Key insight:</strong> One extended exhale can measurably lower your heart rate. It's the fastest in-the-moment tool in the programme — and nobody can see you doing it.</div></div>`,
    reminder: "Exhale twice as long as you inhale — 2:1.",
    quiz: [
    ]
  },
  35: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.14Z"/></svg></div><h2 class="rc-head rc-anim">The blank is never as long as it feels</h2><p class="rc-body rc-anim">Going blank is the number-one fear — and it does happen. What actually occurs: you pause for two or three seconds while your brain reloads. To you it&rsquo;s an eternity. To the audience it looks like a confident pause.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div><h2 class="rc-head rc-anim">Three ways back</h2><p class="rc-body rc-anim">Repeat your last sentence — it gives your brain a runway. Or say &ldquo;let me come back to that&rdquo; — time, with no apology. Or take one extended exhale and start a fresh thought. In a moment you&rsquo;ll practise all three.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The audience doesn&rsquo;t know your script.</div><div class="rc-hl-sub">They don&rsquo;t know you&rsquo;ve gone blank. They just see someone pausing — which reads as confidence.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>The blank is never as long as it feels</h3><p>Going blank is the number one fear. And it does happen. But here's what actually occurs: you pause for 2-3 seconds while your brain reloads. To you, it feels like an eternity. To the audience, it looks like a confident pause.</p><div class="highlight-box">Recovery techniques: (1) Repeat your last sentence — it gives your brain a runway. (2) Say "Let me come back to that" — it buys time without apology. (3) Take one extended exhale and start a new thought.</div><p>In this session, you'll deliberately stop mid-sentence and practise all three recovery techniques. The goal is to prove to yourself that a blank is survivable.</p></div><div class="key-insight"><div class="key-insight-icon">💭</div><div class="key-insight-text"><strong>Key insight:</strong> The audience doesn't know your script. They don't know you've gone blank. They just see someone pausing — which looks like confidence.</div></div>`,
    quiz: [
      { q: "Why does 'going blank' feel worse than it actually is?", options: ["Because you lose your train of thought permanently","Your internal experience of the pause is far longer than what the audience perceives","Because the audience starts judging you immediately","Because it means you're underprepared"], correct: 1, explanation: "Time distortion under anxiety is well-documented. A 2-second pause feels like 10 seconds to the speaker. The audience perceives it as a natural, confident pause — they have no idea you've lost your thread." }
    ]
  },
  36: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></div><h2 class="rc-head rc-anim">Why your voice shakes</h2><p class="rc-body rc-anim">When anxiety hits, your voice speeds up and rises in pitch. Both come from the same place: the muscles around your voice box tighten, producing a thinner, faster, higher sound.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg></div><h2 class="rc-head rc-anim">Slower and lower</h2><p class="rc-body rc-anim">The counterintuitive fix is to deliberately slow down and drop your pitch — not dramatically, just 10&ndash;15%, speaking from your chest rather than your throat. That eases the tension causing the shake.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Your voice shaking is muscular, not emotional.</div><div class="rc-hl-sub">It&rsquo;s laryngeal tension from adrenaline — and muscular problems have muscular solutions.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Slower and lower</h3><p>When anxiety hits, your voice does two things: it speeds up and it rises in pitch. Both are caused by tension in the larynx — the muscles around your voice box tighten, producing a thinner, faster, higher sound.</p><p>The counterintuitive fix: deliberately slow down and drop your pitch. Not dramatically — just 10-15%. Speak from your chest rather than your throat. This reduces the physical tension that causes the shake.</p><div class="highlight-box">A shaking voice is not a sign of weakness. It's a sign of laryngeal tension caused by adrenaline. It's muscular, not emotional — and muscular problems have muscular solutions.</div></div><div class="key-insight"><div class="key-insight-icon">🎙️</div><div class="key-insight-text"><strong>Key insight:</strong> Slowing down and dropping pitch by 10-15% counteracts the laryngeal tension that makes your voice shake. It's a physical fix for a physical symptom.</div></div>`,
    quiz: [
    ]
  },
  37: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div><h2 class="rc-head rc-anim">PREP under pressure</h2><p class="rc-body rc-anim">Position, Reason, Example, Position. Under pressure your brain scrambles for structure — PREP hands it to you automatically once it&rsquo;s practised. It turns &ldquo;I have no idea what to say&rdquo; into a clear, structured answer.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><h2 class="rc-head rc-anim">The four moves</h2><p class="rc-body rc-anim">State your view. Explain why. Make it concrete with one example. Then restate your view. That&rsquo;s the whole skeleton — and it fits almost any question you&rsquo;ll be asked.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">You always know the next move.</div><div class="rc-hl-sub">State it, explain it, prove it, restate it. That&rsquo;s what removes the &ldquo;what should I say?&rdquo; panic.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>PREP under pressure</h3><p>The PREP framework — Position, Reason, Example, Position — gives you a skeleton for any answer. Under pressure, your brain scrambles for structure. PREP provides it automatically once practised enough.</p><div class="highlight-box">Position: state your view. Reason: explain why. Example: make it concrete. Position: restate. This takes any question from "I have no idea what to say" to "I have a clear, structured answer."</div><p>This is a timed session. You'll answer two questions using PREP — one easy, one hard. The timer adds the pressure that makes the framework stick.</p></div><div class="key-insight"><div class="key-insight-icon">⏱️</div><div class="key-insight-text"><strong>Key insight:</strong> PREP works because it removes the "what should I say?" panic. You always know the next move: state it, explain it, prove it, restate it.</div></div>`,
    timedSeconds: 60,
    reminder: "PREP: Position, Reason, Example, Position.",
    quiz: [
    ]
  },
  38: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div><h2 class="rc-head rc-anim">Nobody knows your planned sequence</h2><p class="rc-body rc-anim">Losing your place feels like a disaster — but the audience never saw your plan. Skip a point, rearrange the order, start a new thought entirely, and they have no idea. The only person who knows is you.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div><h2 class="rc-head rc-anim">Two recovery moves</h2><p class="rc-body rc-anim">Summarise what you&rsquo;ve said so far, or jump straight to your conclusion. Both buy you a moment to find your footing — and both sound completely intentional.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Recovery looks like confidence.</div><div class="rc-hl-sub">Summarising or jumping to a conclusion reads as deliberate to the audience, even when it&rsquo;s a rescue move.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Nobody knows your planned sequence</h3><p>One of the biggest fears mid-speech is losing your place. But here's the reality: the audience has never seen your plan. They don't know what comes next. If you skip a point, rearrange your sequence, or start a new thought entirely — they have no idea.</p><div class="highlight-box">The only person who knows you've lost your place is you. To the audience, it looks like you've moved on deliberately.</div><p>In this session, you'll tell a story, deliberately lose your place, then practise two recovery techniques: (1) summarise what you've said so far, and (2) jump to your conclusion. Both work because they sound intentional.</p></div><div class="key-insight"><div class="key-insight-icon">🔄</div><div class="key-insight-text"><strong>Key insight:</strong> Recovery looks like confidence. Summarising or jumping to a conclusion sounds deliberate to the audience — even when it's a rescue move.</div></div>`,
    quiz: [
      { q: "Why is 'losing your place' less catastrophic than it feels?", options: ["Because audiences aren't paying close attention","The audience has never seen your plan — they don't know what was supposed to come next","Because you can always start over","Because most presentations are forgettable anyway"], correct: 1, explanation: "The audience has no script to compare against. They only see what you show them. If you skip a point or change sequence, it looks like a deliberate choice. The catastrophe exists entirely in your head." }
    ]
  },
  39: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div><h2 class="rc-head rc-anim">Stop the spiral</h2><p class="rc-body rc-anim">After speaking, most anxious people replay every moment for hours — every stumble, every &ldquo;um&rdquo;, every imagined failure. This post-event processing is a well-documented part of social anxiety, and it makes the fear worse over time.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="m9 14 2 2 4-4"/></svg></div><h2 class="rc-head rc-anim">The 90-second debrief</h2><p class="rc-body rc-anim">Right after you speak, answer three questions: what went well? What would I do differently? What did I learn? Then close the file. Without that structure, your brain will loop on the worst moments indefinitely.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">A 90-second debrief replaces hours of spiralling.</div><div class="rc-hl-sub">It gives the rumination something to do, then deliberately ends it — and builds genuine learning instead of dread.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Stop the spiral</h3><p>After speaking, most anxious speakers spend hours replaying every moment — every stumble, every "um," every perceived failure. This post-event processing is a well-documented feature of social anxiety, and it makes the anxiety worse over time.</p><div class="highlight-box">The fix: a structured 90-second debrief immediately after speaking. Answer three questions: (1) What went well? (2) What would I do differently? (3) What did I learn? Then close the file. Done. No more rumination.</div><p>The structured debrief works because it gives the rumination something to do — and then deliberately ends it. Without structure, your brain will loop indefinitely on the worst moments.</p></div><div class="key-insight"><div class="key-insight-icon">📋</div><div class="key-insight-text"><strong>Key insight:</strong> Post-event rumination is anxiety fuel. A 90-second structured debrief replaces hours of spiralling — and builds genuine learning instead.</div></div>`,
    quiz: [
      { q: "Why does post-event rumination make speaking anxiety worse?", options: ["Because you realise how many mistakes you made","It selectively reinforces negative moments and trains the brain to expect failure next time","Because other people tell you what went wrong","Because you lose sleep over it"], correct: 1, explanation: "Rumination is biased — it replays the stumbles and ignores everything that went fine. Over time, this trains the brain to expect failure, increasing anticipatory anxiety. A structured debrief breaks the cycle by forcing balanced reflection." }
    ]
  },
  40: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div><h2 class="rc-head rc-anim">Stop monitoring yourself. Start monitoring them.</h2><p class="rc-body rc-anim">Anxious speakers spend the whole time watching themselves — &ldquo;how do I sound? Am I going too fast? Can they see my hands?&rdquo; That self-focused attention is both the symptom and the fuel of the anxiety.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg></div><h2 class="rc-head rc-anim">The single biggest shift</h2><p class="rc-body rc-anim">Confident speakers point their attention outward — at whether the listener understands, at how the message is landing. This session has you speak twice: once monitoring yourself, once focused entirely on whether someone is following you. The difference is dramatic.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Attention is a limited resource.</div><div class="rc-hl-sub">Spend it monitoring your own anxiety and you can&rsquo;t spend it connecting with the room. The shift outward is the shift to confidence.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Stop monitoring yourself. Start monitoring them.</h3><p>Anxious speakers spend their speaking time monitoring themselves — "How do I sound? Am I going too fast? Can they see my hands shaking?" This self-focused attention is both the symptom and the fuel of speaking anxiety.</p><div class="highlight-box">The single biggest shift between anxious and confident speaking is attention direction. Confident speakers focus outward — on whether the listener understands, on how the message is landing, on the room. Anxious speakers focus inward — on their own symptoms.</div><p>This session practises the shift. You'll speak twice — once monitoring yourself, once focused entirely on whether an imagined listener is following you. The difference is dramatic.</p></div><div class="key-insight"><div class="key-insight-icon">👁️</div><div class="key-insight-text"><strong>Key insight:</strong> Attention is a limited resource. If you're using it to monitor your own anxiety, you can't use it to connect with your audience. The shift outward is the shift to confidence.</div></div>`,
    quiz: [
    ]
  },
  41: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg></div><h2 class="rc-head rc-anim">Silence is a weapon</h2><p class="rc-body rc-anim">Most speakers rush to fill every gap; anxious speakers fill them compulsively, with fillers and extra sentences, to avoid the terror of the pause. But silence is one of the most powerful tools you have.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><h2 class="rc-head rc-anim">Three places to use it</h2><p class="rc-body rc-anim">A pause before a key point creates anticipation. A pause after it lets the point land. A pause when you&rsquo;ve lost your thread looks like deliberation, not panic.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">A pause feels five times longer to you than to the audience.</div><div class="rc-hl-sub">What feels like an agonising silence reads, to them, as a speaker who is measured, confident, and in control.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Silence is a weapon</h3><p>Most speakers rush to fill every gap. Anxious speakers fill gaps compulsively — with filler words, with extra sentences, with anything to avoid the terror of silence.</p><p>But silence is one of the most powerful tools in speaking. A 2-second pause before a key point creates anticipation. A pause after a key point lets it land. A pause when you've lost your thread looks like deliberation, not panic.</p><div class="highlight-box">The pause feels 5x longer to you than to the audience. What feels like an agonising silence is, to the listener, a speaker who is measured, confident, and in control.</div></div><div class="key-insight"><div class="key-insight-icon">🤫</div><div class="key-insight-text"><strong>Key insight:</strong> Deliberate silence signals confidence. Filling every gap signals anxiety. The pause is your friend — this session makes you believe it.</div></div>`,
    quiz: [
    ]
  },
  42: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></div><h2 class="rc-head rc-anim">Monotone is the enemy</h2><p class="rc-body rc-anim">The brain is wired to tune out anything unchanging — the same reason you stop hearing background noise. A monotone loses people no matter how good the content is.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></div><h2 class="rc-head rc-anim">Pace, pitch, volume</h2><p class="rc-body rc-anim">Faster on connecting phrases, slower on key points. Higher for energy, lower for authority. Louder for emphasis, softer for intimacy. The fix isn&rsquo;t to perform — it&rsquo;s to amplify what your voice already wants to do.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Vocal variety isn&rsquo;t performing — it&rsquo;s caring out loud.</div><div class="rc-hl-sub">When you genuinely mean what you say, your voice does the work automatically.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Monotone is the enemy</h3><p>Monotone delivery loses audiences regardless of content quality. The human brain is wired to tune out unchanging stimuli — it's the same reason you stop noticing background noise after a few minutes.</p><p>Vocal variety means three things: pace (faster on connecting phrases, slower on key points), pitch (higher for energy, lower for authority), and volume (louder for emphasis, softer for intimacy).</p><div class="highlight-box">The fix isn't to perform. It's to mean what you say. When you genuinely care about a point, your voice naturally varies. The exercise trains you to notice and amplify what your voice already wants to do.</div></div><div class="key-insight"><div class="key-insight-icon">🎵</div><div class="key-insight-text"><strong>Key insight:</strong> Vocal variety isn't performing — it's caring out loud. When you mean what you say, your voice does the work automatically.</div></div>`,
    reminder: "Three dials: pace, pitch, volume. Use all of them.",
    quiz: [
    ]
  },
  43: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h2 class="rc-head rc-anim">Presence means noticing</h2><p class="rc-body rc-anim">Reading the room is noticing what&rsquo;s happening in real time instead of being trapped inside your own head. It takes the same shift as everything else in this phase — from self-monitoring to looking outward.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div><h2 class="rc-head rc-anim">Every audience gives signals</h2><p class="rc-body rc-anim">Nodding, confusion, distraction, engagement. The question is whether you&rsquo;re available to see them — most anxious speakers aren&rsquo;t, because their attention is consumed by themselves. You&rsquo;ll practise three specific responses.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Reading the room is an attention skill, not a personality trait.</div><div class="rc-hl-sub">It starts with looking outward, and with practising specific responses to specific signals.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Presence means noticing</h3><p>Reading the room is the skill of noticing what's happening in real time rather than being trapped inside your own head. It requires shifting from self-monitoring to other-monitoring — looking outward at your audience instead of inward at your anxiety.</p><div class="highlight-box">Every audience gives signals: nodding, confusion, distraction, engagement. The question is whether you're available to see them. Most anxious speakers aren't — their attention is consumed by self-monitoring.</div><p>This session practises three specific adaptations: re-engaging a distracted listener, clarifying for a confused one, and capitalising on an engaged decision-maker.</p></div><div class="key-insight"><div class="key-insight-icon">👥</div><div class="key-insight-text"><strong>Key insight:</strong> Reading the room is an attention skill, not a personality trait. It starts with looking outward — and practising specific responses to specific signals.</div></div>`,
    scenario: { description: "You're presenting and notice: one person checking their phone, one looking confused, the decision-maker leaning forward.", options: ["Re-engage the phone-checker with a direct question", "Pause and ask if anything needs clarifying", "Focus your energy on the engaged decision-maker"] },
    quiz: [
    ]
  },
  44: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div><h2 class="rc-head rc-anim">The arc behind every great speech</h2><p class="rc-body rc-anim">Situation, Complication, Resolution. Set the scene, introduce the stakes, show what happened. It&rsquo;s the structure our brains are wired to follow — and the complication is where all the interest lives.</p></div>`,
      `<div class="rc-card rc-example"><div class="rc-eyebrow rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 2"/></svg>Which one is a story?</div><div class="rc-ex-box rc-anim"><div class="rc-ex-quote">&ldquo;The project was about to be cancelled and I had one week to save it.&rdquo;</div><p class="rc-ex-beat">Compare it to &ldquo;I worked on a project and it went well.&rdquo; Without stakes there&rsquo;s no story — just a sequence of events.</p></div></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Data informs. Stories persuade.</div><div class="rc-hl-sub">If you can tell a story with real stakes while under pressure, you can communicate almost anything.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>The arc behind every great speech</h3><p>Situation, Complication, Resolution — this three-part narrative arc is behind every compelling piece of communication. Set the scene, introduce the stakes, show what happened. It's the structure our brains are wired to follow.</p><div class="highlight-box">The complication is where all the interest lives. Without stakes, there is no story — just a sequence of events. "I worked on a project and it went well" is not a story. "The project was about to be cancelled and I had one week to save it" — that's a story.</div><p>If you can tell a structured story under pressure, you can communicate almost anything. This session builds that skill with a real story from your life.</p></div><div class="key-insight"><div class="key-insight-icon">📖</div><div class="key-insight-text"><strong>Key insight:</strong> Data informs. Stories persuade. If you can tell a story with real stakes under pressure, you can communicate anything.</div></div>`,
    reminder: "The complication carries the story — give it genuine stakes.",
    quiz: [
    ]
  },
  45: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></div><h2 class="rc-head rc-anim">The big room changes everything</h2><p class="rc-body rc-anim">Presenting to 200 people needs physical adjustments: more projection, slower pace, broader gestures, and deliberate eye contact across zones — left, centre, right.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg></div><h2 class="rc-head rc-anim">Slow down — don&rsquo;t speed up</h2><p class="rc-body rc-anim">The instinct when exposed on a big stage is to rush. The fix is the opposite: slow by 20%, pause between points, and let your voice fill the space. It feels wrong until you&rsquo;ve practised it.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Big rooms require bigger delivery.</div><div class="rc-hl-sub">Slower, louder, more deliberate. It feels unnatural — and then, once practised, it feels powerful.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>The big room changes everything</h3><p>Presenting to 200 people requires physical adjustments: more projection, slower pace, broader gestures, and deliberate eye contact across zones — left, centre, right.</p><div class="highlight-box">The instinct when exposed on a big stage is to speed up. The fix is the opposite — slow down by 20%, pause between points, and let your voice fill the space. These adjustments feel wrong until you've practised them.</div><p>This is a timed 2-minute session. Imagine the conference hall. Project your voice. Slow your pace. Fill the room.</p></div><div class="key-insight"><div class="key-insight-icon">🏟️</div><div class="key-insight-text"><strong>Key insight:</strong> Big rooms require bigger delivery — slower, louder, more deliberate. It feels unnatural until you practise it. Then it feels powerful.</div></div>`,
    timedSeconds: 120,
    reminder: "Big room: more projection, slower pace, broader gestures, eye contact zone by zone.",
    quiz: [
    ]
  },
  46: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div><h2 class="rc-head rc-anim">Think on your feet</h2><p class="rc-body rc-anim">Improvising feels terrifying because of the illusion that good speakers don&rsquo;t need to think. They do — they just have frameworks that turn thinking time into structure.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div><h2 class="rc-head rc-anim">Two frameworks</h2><p class="rc-body rc-anim">PREP gives you a skeleton for any answer. The &ldquo;and&rdquo; technique — &ldquo;and another thing&hellip;&rdquo; — buys you a beat while sounding deliberate. Both turn chaos into something that sounds intentional.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Good improvisers aren&rsquo;t thinking faster.</div><div class="rc-hl-sub">They have frameworks that turn any input into structured output. PREP is that framework — and in a moment you&rsquo;ll use it cold.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Think on your feet</h3><p>Improvised speaking feels terrifying because of the illusion that good speakers don't need to think. They do — they just have frameworks that turn thinking time into structure.</p><div class="highlight-box">PREP gives you a skeleton for any answer. The "and" technique — "and another thing..." — buys you time while sounding deliberate. Both work because they turn chaos into something that sounds intentional.</div><p>This is a surprise session. Three questions, 45 seconds each, zero preparation. Use PREP for each.</p></div><div class="key-insight"><div class="key-insight-icon">⚡</div><div class="key-insight-text"><strong>Key insight:</strong> Good improvisers aren't thinking faster. They have frameworks that turn any input into structured output. PREP is that framework.</div></div>`,
    quiz: [
    ]
  },
  47: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div><h2 class="rc-head rc-anim">Who are you as a speaker?</h2><p class="rc-body rc-anim">Forty-six sessions in: you know your fear, you can manage your body, you&rsquo;ve practised exposure, found your voice, and built in-the-moment tools. Now the question — who are you as a speaker? Not who you wish you were. Who you actually are.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><h2 class="rc-head rc-anim">Authentic beats polished</h2><p class="rc-body rc-anim">The goal was never to become someone else — it was to become a more confident version of yourself. What&rsquo;s your natural strength? What makes people listen to you?</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Your identity is where what you know, what you care about, and how you naturally speak meet.</div><div class="rc-hl-sub">This session is about naming it and claiming it.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Who are you as a speaker?</h3><p>You've been through 46 sessions. You know your fear. You can manage your body. You've practised exposure. You've found your voice. You've handled pressure and built real-time tools.</p><p>Now answer this: who are you as a speaker? Not who you wish you were — who you actually are. What's your natural strength? What makes people listen to you?</p><div class="highlight-box">Authentic speaking beats polished performance every time. The goal was never to become someone else — it was to become a more confident version of yourself.</div></div><div class="key-insight"><div class="key-insight-icon">🌟</div><div class="key-insight-text"><strong>Key insight:</strong> Your speaker identity is the intersection of what you know, what you care about, and how you naturally communicate. This session is about naming it and claiming it.</div></div>`,
    quiz: [
    ]
  },
  48: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div><h2 class="rc-head rc-anim">Progress isn&rsquo;t linear</h2><p class="rc-body rc-anim">You&rsquo;ve completed the main programme — but progress isn&rsquo;t a straight line. Anxiety tends to return when conditions change: a new job, a high-stakes presentation, a stretch of stress. That&rsquo;s normal and expected.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div><h2 class="rc-head rc-anim">One session a week holds the line</h2><p class="rc-body rc-anim">The goal shifts from improvement to sustainability. Without practice, the amygdala slowly recalibrates back toward treating speaking as a threat. A single weekly session is enough to keep the pathways active.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Maintenance isn&rsquo;t optional.</div><div class="rc-hl-sub">Without regular practice, avoidance quietly returns. One session a week holds the line.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Progress isn't linear</h3><p>You've completed the main programme. But progress isn't a straight line. Anxiety has a tendency to return when conditions change — a new job, a high-stakes presentation, a period of stress. That's normal and expected.</p><div class="highlight-box">The goal shifts from improvement to sustainability. One session per week is enough to keep the neural pathways active. Without practice, the amygdala slowly recalibrates back toward treating speaking as a threat.</div><p>Reflect: where were you when you started, and where are you now? What situations still trigger anxiety? What's your maintenance plan?</p></div><div class="key-insight"><div class="key-insight-icon">🔄</div><div class="key-insight-text"><strong>Key insight:</strong> Maintenance isn't optional. Without regular practice, avoidance quietly returns. One session per week holds the line.</div></div>`,
  },
  49: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div><h2 class="rc-head rc-anim">Your weekly check-in</h2><p class="rc-body rc-anim">This session is built to be repeated every week. The most important question it asks is a simple one: did I avoid anything this week?</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg></div><h2 class="rc-head rc-anim">Avoidance is the first sign</h2><p class="rc-body rc-anim">A missed chance to speak up in a meeting. A declined presentation. A moment you stayed quiet. Noticing these early — before they harden into habits — is what keeps the progress you&rsquo;ve built.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">&ldquo;Did I avoid anything?&rdquo; is the question that keeps you honest.</div><div class="rc-hl-sub">Avoidance creeps back quietly. This check-in catches it while it&rsquo;s still small.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Your weekly check-in</h3><p>This session is designed to be repeated weekly. The most important question: did I avoid anything this week?</p><div class="highlight-box">Avoidance is the first sign of regression. A missed opportunity to speak up in a meeting. A declined presentation. A moment where you stayed quiet. Noticing these patterns early prevents them from becoming habits again.</div><p>Think about your week. What speaking situations came up? How did you handle them? What techniques did you use? What caught you off guard?</p></div><div class="key-insight"><div class="key-insight-icon">📅</div><div class="key-insight-text"><strong>Key insight:</strong> The question "did I avoid anything?" is the most important weekly check-in. Avoidance creeps back quietly. This session keeps you honest.</div></div>`,
  },
  50: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="6" y1="20" x2="6" y2="4"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="8" x2="18" y2="8"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="6" y1="16" x2="18" y2="16"/></svg></div><h2 class="rc-head rc-anim">How far you&rsquo;ve come</h2><p class="rc-body rc-anim">Back in Phase 3 you built an anxiety ladder — speaking situations ranked from least to most frightening. Rebuild it now, from memory, and see what&rsquo;s moved.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><h2 class="rc-head rc-anim">The ladder is the measure</h2><p class="rc-body rc-anim">Real progress isn&rsquo;t how you feel — it&rsquo;s how the ladder has changed. Situations that once terrified you should sit lower now. New, harder rungs may have appeared as your comfort zone expanded. Both are growth.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The numbers don&rsquo;t lie.</div><div class="rc-hl-sub">Comparing your ladder now to where you started is the most concrete evidence of progress you have.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>How far you've come</h3><p>Back in Phase 3, you built an anxiety ladder — a ranked list of speaking situations from least to most scary. Rebuild it now from memory.</p><div class="highlight-box">The measure of real progress isn't how you feel — it's how the ladder has changed. Situations that were terrifying should now sit lower. New, harder situations may have appeared as your comfort zone expanded. Both are signs of growth.</div><p>Name at least 6 rungs. How has the ladder changed? Which situations moved down? Which are still high? Be honest.</p></div><div class="key-insight"><div class="key-insight-icon">📊</div><div class="key-insight-text"><strong>Key insight:</strong> Comparing your anxiety ladder now to where you started is the most concrete evidence of progress. The numbers don't lie.</div></div>`,
  },
  51: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><h2 class="rc-head rc-anim">Stay in the stretch zone</h2><p class="rc-body rc-anim">If you only ever practise what&rsquo;s comfortable, your comfort zone quietly shrinks. The challenge session is what keeps it expanding instead.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><h2 class="rc-head rc-anim">The next rung — not your worst fear</h2><p class="rc-body rc-anim">Pick the scenario just above your current comfort level: giving feedback to your manager, presenting to a new group, speaking up first, making a toast. Mild, ongoing challenge is what stops avoidance creeping back.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Comfort zones shrink when unchallenged.</div><div class="rc-hl-sub">One stretch session a week holds the line — or expands it.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Stay in the stretch zone</h3><p>If you only practise what's comfortable, your comfort zone slowly shrinks. The challenge session keeps it expanding.</p><div class="highlight-box">Choose the speaking scenario just above your current comfort level — not your worst fear, but the next rung up. Mild, ongoing challenge is what prevents avoidance from creeping back.</div><p>It might be: giving feedback to your manager, presenting to a new group, speaking up first in a meeting, or making a toast. Simulate it now.</p></div><div class="key-insight"><div class="key-insight-icon">🎯</div><div class="key-insight-text"><strong>Key insight:</strong> Comfort zones shrink when unchallenged. One stretch session per week holds the line — or expands it.</div></div>`,
    quiz: [
      { q: "Why is ongoing mild challenge important for maintenance?", options: ["To keep improving your skills","Without regular challenge, comfort zones shrink and avoidance gradually returns","To prepare for specific upcoming events","To maintain your score averages"], correct: 1, explanation: "The comfort zone is dynamic — it expands with challenge and contracts without it. Regular mild stretch prevents the gradual return of avoidance that happens when you only practise what feels safe." }
    ]
  },
  52: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div><h2 class="rc-head rc-anim">Teaching is the deepest learning</h2><p class="rc-body rc-anim">When you explain a technique to someone else, you deepen your own grasp of it. Teaching forces you to organise, simplify, and make concrete — which are themselves core speaking skills.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><h2 class="rc-head rc-anim">Teach the one that helped most</h2><p class="rc-body rc-anim">Pick the single technique from this programme that helped you most, and teach it to an imagined friend who&rsquo;s terrified of an upcoming presentation. What it is, why it works, exactly how to do it.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Teaching consolidates learning more than any other method.</div><div class="rc-hl-sub">And it&rsquo;s a real speaking exercise in itself: clear, structured, audience-focused communication.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Teaching is the deepest learning</h3><p>When you explain a technique to someone else, you deepen your own understanding of it. Teaching forces you to organise, simplify, and make concrete — which are themselves core speaking skills.</p><div class="highlight-box">Pick the one technique from this programme that has helped you most. Now teach it to an imagined friend who is terrified of an upcoming presentation. Explain what it is, why it works, and exactly how to do it.</div></div><div class="key-insight"><div class="key-insight-icon">🎓</div><div class="key-insight-text"><strong>Key insight:</strong> Teaching consolidates learning more than any other method. And it's a real speaking exercise — clear, structured, audience-focused communication.</div></div>`,
    quiz: [
    ]
  },
  53: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg></div><h2 class="rc-head rc-anim">Your review</h2><p class="rc-body rc-anim">This is the most important session in the programme — not because of the score, but because of what you&rsquo;ll hear yourself say. Four questions, answered with full honesty.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></div><h2 class="rc-head rc-anim">The four questions</h2><p class="rc-body rc-anim">What was your relationship with speaking when you started? What is it now? What&rsquo;s the single biggest thing that changed? And what would you say to someone who&rsquo;s where you were at the beginning?</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The difference between your voice in session one and your voice now is the evidence.</div><div class="rc-hl-sub">You built that. It&rsquo;s real.</div></div>`
    ],
    read: `<div class="lesson-content"><h3>Your review</h3><p>This is the most important session in the programme. Not because of the score — because of what you hear.</p><div class="highlight-box">Answer four questions with full honesty: (1) What was your relationship with speaking when you started? (2) What is it now? (3) What's the single biggest thing that changed? (4) What would you say to someone who is where you were when you started?</div><p>Take your time. This is for you.</p></div><div class="key-insight"><div class="key-insight-icon">🏆</div><div class="key-insight-text"><strong>Key insight:</strong> The difference between your voice in Session 1 and your voice now is the evidence. You built that. It's real.</div></div>`,
  }
});

Object.assign(LESSON_CONTENT, {
  60: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg></div><h2 class="rc-head rc-anim">The avoidance you can&rsquo;t see</h2><p class="rc-body rc-anim">You already know that avoiding speaking makes the fear stronger. There&rsquo;s a subtler version: the small things you do <em>while</em> speaking to feel safe — scripting every word, gripping the lectern, never pausing, dodging eye contact, rushing to get it over with.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><h2 class="rc-head rc-anim">Two quiet harms</h2><p class="rc-body rc-anim">These safety behaviours stop your brain learning the situation is survivable on its own — and they burn attention that could go into actually connecting with people. They feel protective. They keep the fear exactly where it is.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Am I doing this to communicate — or just to feel less exposed?</div><div class="rc-hl-sub">That&rsquo;s the test. Dropping a crutch feels risky, and that&rsquo;s the point — it&rsquo;s how your brain finally gets the evidence that it&rsquo;s safe.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The avoidance you can't see</h3>
        <p>Earlier you learned that avoiding speaking altogether makes the fear stronger. But there's a subtler form of avoidance — the small things you do <em>while</em> speaking to feel safe. Scripting every word. Gripping the lectern. Never pausing. Avoiding eye contact. Rushing to get it over with. Clutching notes you don't really use.</p>
        <p>These are called safety behaviours. They do two quiet kinds of harm: they stop your brain from learning the situation is survivable on its own, and they burn attention that could go into actually connecting with people.</p>
        <div class="highlight-box">A safety behaviour is anything you do to prevent a feared disaster that you never actually test. It feels protective. It keeps the fear exactly where it is.</div>
        <p>The breathing and grounding from Phase 2 are different — those are tools for regulating yourself, not for hiding. The test: am I doing this to communicate better, or just to feel less exposed? Dropping a safety behaviour feels risky, and that's the point — it's how your brain finally gets the evidence that it's safe.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🩼</div>
        <div class="key-insight-text"><strong>Key insight:</strong> A technique used to communicate better is a tool. The same technique used to avoid feeling exposed is a crutch. The difference is the why — and your brain learns most when you let go of the crutch.</div>
      </div>`,
    quiz: [
      { q: "How do you tell a useful tool from a safety behaviour?", options: ["Tools are taught; crutches are not","By the reason — to communicate better, or just to feel less exposed","Tools are physical; crutches are mental","There's no real difference"], correct: 1, explanation: "The same action can be either. Breathing to settle yourself so you can communicate is a tool. The same breathing done only to dodge the discomfort of feeling exposed is a crutch that keeps the fear alive." }
    ]
  },
  61: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg></div><h2 class="rc-head rc-anim">What this is — and isn&rsquo;t</h2><p class="rc-body rc-anim">Nervless is built on the same principles a good therapist uses for speaking anxiety: understanding the fear, regulating the body, and facing situations gradually.</p><p class="rc-body rc-anim">It works for the everyday fear of speaking up, presenting, and being put on the spot.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div><h2 class="rc-head rc-anim">When to get extra support</h2><p class="rc-body rc-anim">It isn&rsquo;t a replacement for professional care. If your anxiety runs well beyond speaking — across many parts of your life, with panic attacks, or stopping you doing things that matter — that is worth taking to a GP or therapist.</p><p class="rc-body rc-anim">They can offer things an app can&rsquo;t. You can do both at once.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Not either/or. Plenty of people do both.</div><div class="rc-hl-sub">The same way you&rsquo;d see a physio for an injury while still training.</div></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/></svg></div><h2 class="rc-head rc-anim">If you&rsquo;re in crisis</h2><p class="rc-body rc-anim">If you ever feel genuinely unsafe, please reach out to a doctor or a local crisis line rather than working through an app. Asking for help is a strength.</p></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>What this programme is — and isn't</h3>
        <p>Nervless is built on the same principles a good therapist would use for speaking anxiety: understanding your fear, regulating your body, and facing situations gradually. It works for the everyday fear of speaking up, presenting, and being put on the spot.</p>
        <p>What it isn't is a replacement for professional care. If your anxiety runs well beyond speaking — if it shows up across many parts of your life, comes with panic attacks, or stops you doing things that matter to you — that's worth talking to a GP or therapist about. They can offer things an app can't, and you can do both at once.</p>
        <div class="highlight-box">Using this programme and getting professional support are not either/or. Plenty of people do both — the same way you'd see a physio for an injury while still training.</div>
        <p>And if you ever feel genuinely unsafe or in crisis, please reach out to a doctor or a local crisis line rather than working through an app. Asking for help is a strength.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🧭</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Reaching for professional help isn't a sign this won't work — it's a sensible step that sits alongside everything you'll do here.</div>
      </div>`
  },
  62: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg></div><h2 class="rc-head rc-anim">The camera changes the rules</h2><p class="rc-body rc-anim">More and more speaking happens on video, and it carries an anxiety in-person doesn&rsquo;t. The biggest culprit is your own face in the corner — in a real meeting you never watch yourself; on a call you stare at yourself the whole time, feeding the self-monitoring that drives the anxiety.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><h2 class="rc-head rc-anim">Hide self-view</h2><p class="rc-body rc-anim">The grid of faces feels like constant evaluation, and the slight audio lag makes pauses feel longer than they are. The camera also flattens energy — what feels normal reads as flat on screen.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">Look at the lens, leave a beat, bring more energy than feels natural.</div><div class="rc-hl-sub">Those three moves do more for how you land on a call than anything you actually say.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The camera changes the rules</h3>
        <p>Most speaking advice assumes a room. But more and more speaking happens on video — and video calls carry their own anxiety that in-person speaking doesn't.</p>
        <p>The biggest culprit is your own face in the corner. In a real meeting you don't watch yourself; on a call you stare at yourself the whole time, which feeds exactly the self-monitoring that drives anxiety. The fix is simple: hide self-view. The grid of faces feels like constant evaluation, and the slight audio lag breaks turn-taking — pauses feel longer than they are. The camera also flattens energy, so what feels normal reads as low-energy on screen.</p>
        <div class="highlight-box">Your own face in the corner is a self-monitoring machine. Hide self-view — you wouldn't watch yourself in a real meeting.</div>
        <p>The practical moves: hide self-view, look at the camera lens (not the faces) when you want to connect, leave a clear beat for the lag, and bring slightly more energy than feels natural.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">💻</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Hiding self-view, looking at the lens, and leaving a beat for the lag do more for how you land than anything you say.</div>
      </div>`,
    scenario: { description: "You're on a video call about to give an update. You can see your own face in the corner, six faces in a grid, and there's a slight audio delay.", options: ["Hide your self-view and look at the camera lens as you speak","Leave a deliberate beat before and after others speak to handle the lag","Bring a bit more energy than feels natural so you don't read as flat"] },
    reminder: "Leave a beat before and after others speak — absorb the lag."
  },
  63: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M17 18a5 5 0 0 0-10 0"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/><line x1="1" y1="18" x2="3" y2="18"/><line x1="21" y1="18" x2="23" y2="18"/><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/><line x1="23" y1="22" x2="1" y2="22"/><polyline points="8 6 12 2 16 6"/></svg></div><h2 class="rc-head rc-anim">The day starts before you speak</h2><p class="rc-body rc-anim">You can do everything right in the moment and still fight uphill — because the conditions for anxiety are often set hours earlier, by how you slept and what you put in your body.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg></div><h2 class="rc-head rc-anim">Caffeine borrows tomorrow&rsquo;s adrenaline</h2><p class="rc-body rc-anim">It doesn&rsquo;t make you calm and sharp — it makes you wired, raising your heart rate and priming the exact jittery feeling you&rsquo;re learning to quiet. Poor sleep lowers the threshold your threat response fires at; alcohol the night before rebounds into more anxiety.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">The easiest win is the night before and the morning of.</div><div class="rc-hl-sub">Easing off caffeine, protecting your sleep, staying hydrated — easy wins most people never use.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>The day starts before you speak</h3>
        <p>You can do everything right in the moment and still be fighting uphill — because the conditions for anxiety are often set hours earlier, by how you slept and what you put in your body.</p>
        <p>Caffeine is the big one. It doesn't make you calm and sharp; it makes you wired. It raises your heart rate and primes the jittery, racing feeling you've been learning to quiet. On a day that matters, a strong coffee can hand your nervous system the exact symptoms you're trying to avoid. Poor sleep lowers the threshold at which your threat response fires. Alcohol the night before disrupts sleep and rebounds into more anxiety the next day.</p>
        <div class="highlight-box">Caffeine borrows tomorrow's adrenaline. Before a high-stakes speaking situation, it amplifies the very feelings you're working to settle.</div>
        <p>None of this is about strict rules. It's about awareness — not unknowingly stacking the deck against yourself. On a day you're speaking, easing off caffeine, protecting your sleep, and staying hydrated are easy wins most people never use.</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">☕</div>
        <div class="key-insight-text"><strong>Key insight:</strong> The easiest anxiety win is often the night before and the morning of — not the moment itself.</div>
      </div>`,
    quiz: [
    ]
  },
  64: {
    cards: [
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg></div><h2 class="rc-head rc-anim">Attention is a spotlight</h2><p class="rc-body rc-anim">When you&rsquo;re anxious it pulls inward — onto your thumping heart, your shaking hands, the running question &ldquo;how am I coming across?&rdquo; The more you monitor yourself, the more anxious you get, and the less you have left for what you&rsquo;re actually doing.</p></div>`,
      `<div class="rc-card rc-concept"><div class="rc-icon rc-anim"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg></div><h2 class="rc-head rc-anim">There&rsquo;s only one spotlight</h2><p class="rc-body rc-anim">Attention is limited. Every bit spent watching yourself is taken from communicating — you can&rsquo;t be fully focused on your listener and on monitoring yourself at once. Confident speakers simply aim it outward: at the listener, at whether the idea is landing.</p></div>`,
      `<div class="rc-card rc-highlight rc-anim"><div class="rc-hl-mark">&ldquo;</div><div class="rc-hl-quote">From &lsquo;how am I doing?&rsquo; to &lsquo;are they following me?&rsquo;</div><div class="rc-hl-sub">Aiming attention outward doesn&rsquo;t remove the anxiety. It just stops it running the show — the single biggest shift from anxious to confident.</div></div>`
    ],
    read: `
      <div class="lesson-content">
        <h3>Attention is a spotlight — you choose where it points</h3>
        <p>When you're anxious, attention pulls inward: onto your thumping heart, your shaking hands, the script in your head, and the running question "how am I coming across?" The more you monitor yourself, the more anxious you get — and the less you have left for what you're actually trying to do.</p>
        <p>Confident speakers aren't fearless. They've learned to aim attention outward — at the listener, at whether the idea is landing, at the room. Attention is a limited resource. Every bit spent watching yourself is taken from communicating.</p>
        <div class="highlight-box">You can't be fully focused on your listener and fully focused on monitoring yourself at the same time. There's one spotlight — where you point it changes everything downstream.</div>
        <p>This is the thread running through the rest of the programme, and it's a skill, not a personality trait. Starting it early makes every later session easier. The shift: from "how am I doing?" to "are they following me?"</p>
      </div>
      <div class="key-insight">
        <div class="key-insight-icon">🔦</div>
        <div class="key-insight-text"><strong>Key insight:</strong> Aiming attention outward doesn't remove the anxiety — it just stops it running the show. It's the single biggest shift from anxious to confident speaking.</div>
      </div>`,
    quiz: [
      { q: "Why does monitoring yourself while speaking make anxiety worse?", options: ["It doesn't — self-awareness always helps","Attention is limited; watching yourself feeds the anxiety loop and leaves less for communicating","Because you notice more mistakes","Because the audience can tell you're concentrating"], correct: 1, explanation: "Self-focused attention amplifies every symptom and starves communicating. Pointing attention outward — at the listener and the message — breaks the loop." }
    ]
  }
});

// ── FREE PRACTICE ──────────────────────────────────────────────
const FREE_MODES = {
  hotseat: {
    iconKey:'flame', color:'#DB6098', light:'#F7D9E6', title: 'Hot Seat',
    desc: 'A question lands. You answer. Then it comes back sharper.',
    tagline: 'Answer, then face the follow-up.',
    why: 'The closest thing to real pressure. You answer, then a follow-up comes back — built from exactly what you just said. It\'s the interview, the panel, the difficult question, simulated. If you can hold steady here, the real thing feels lighter.'
  },
  debate: {
    iconKey:'zap', color:'#3B82C4', light:'#D6E6F6', title: 'Debate It',
    desc: 'Pick a motion, take a side, then survive the counter-argument.',
    tagline: 'Argue a motion. Survive the counter.',
    why: 'Holding a position out loud is the muscle behind speaking up in meetings and standing your ground. You make your case, the counter comes back, and you defend it — which trains you to commit to an argument instead of hedging.'
  },
  scenarios: {
    iconKey:'briefcase', color:'#1FA98F', light:'#C9EDE5', title: 'Real Life',
    desc: 'Interview, big meeting, wedding speech — rehearse the actual moment.',
    tagline: 'Rehearse the moments that matter.',
    why: 'The fastest way to take the fear out of a real event is to have already lived it. Pick the situation you\'re facing, set the difficulty, and rehearse it out loud before the day.'
  },
  open: {
    iconKey:'mic', color:'#D89B25', light:'#F6E6BE', title: 'Open Mic',
    desc: 'No prompt, no structure. Just talk for two minutes.',
    tagline: 'No prompt — just talk freely.',
    why: 'A blank page for your voice. Two minutes, no prompt, nowhere to hide and nothing to react to — just sustained speaking. It builds stamina and proves you can fill the space on your own.',
    prompts: [
      'No prompt. Just talk. Whatever is on your mind right now — start speaking and keep going for 2 minutes.',
    ]
  }
};

const DIFFICULTIES = [
  { key:'low',      label:'Low',       blurb:'Gentle start' },
  { key:'medium',   label:'Medium',    blurb:'Real-world level' },
  { key:'high',     label:'High',      blurb:'Under pressure' },
  { key:'veryhigh', label:'Very high', blurb:'The deep end' },
];

const DIFFICULTY_TONE = {
  low: 'warm, encouraging and gentle — make them feel safe to keep talking',
  medium: 'professional, direct and curious — like a fair colleague',
  high: 'sharp, sceptical and probing — push hard on weak points, but stay professional',
  veryhigh: 'relentless and forensic — pressure-test every claim and concede nothing, while staying professional and never personal or cruel',
};

// Rounds per run (1 round = no follow-up; capped at 3)
const ROUNDS_BY_MODE = {
  hotseat:   { low:1, medium:2, high:2, veryhigh:3 },
  debate:    { low:1, medium:2, high:2, veryhigh:3 },
  interview: { low:1, medium:2, high:2, veryhigh:3 },
  meeting:   { low:1, medium:2, high:2, veryhigh:3 },
  bestman:   { low:1, medium:1, high:1, veryhigh:1 },
};

const HOTSEAT_BANK = {
  low: [
    'What would you do with a completely free day — no obligations, no phone, unlimited money for 24 hours?',
    'Describe a person who has influenced how you think, without saying their name.',
    'If you could master one skill instantly, what would it be and why?',
    'What\'s a belief you used to hold that you\'ve completely changed your mind on?',
    'Describe your perfect Saturday in as much detail as possible.',
    'What\'s the best piece of advice you\'ve ever been given? Did you take it?',
    'If you had to explain your job to a 10-year-old, how would you do it?',
  ],
  medium: [
    'What\'s the biggest challenge your team is facing right now — and what do you think should be done about it?',
    'Tell me about a project you\'re proud of. What was your specific contribution?',
    'What makes you good at your job? Be specific — don\'t be modest.',
    'What\'s one thing your company should change and why hasn\'t it happened yet?',
    'If you had to present your team\'s results to the board in 60 seconds, what would you say?',
    'What\'s a decision you made recently that you\'re not sure was right? Walk me through your thinking.',
  ],
  high: [
    'What\'s a piece of feedback you\'ve received more than once — and why hasn\'t it changed anything yet?',
    'Describe a time you were clearly wrong in front of other people. What did you do next?',
    'What part of your work would fall apart first if you stopped doing it — and what does that say about you?',
    'You\'ve got 90 seconds to convince me you deserve more responsibility. Go.',
    'What do you avoid saying in meetings that you know needs saying?',
  ],
  veryhigh: [
    'Your last big decision — defend it as if your job depends on it. Today it does.',
    'Why should anyone listen to you on this subject? Make the case without leaning on your job title.',
    'Tell me the most uncomfortable truth about how you handle pressure.',
    'You\'ve just been told your role is at risk. You have one minute with the person deciding. Speak.',
    'What\'s the gap between how you present yourself and how you actually are? Be specific.',
  ],
};

const DEBATE_FALLBACK_TOPICS = [
  'Working from home beats working in an office.',
  'Taking risks is better than playing it safe.',
  'It\'s better to be honest and hurt someone\'s feelings than protect them with a white lie.',
];

const SCENARIOS = {
  interview: {
    title: 'The Job Interview', tagline: 'Face the questions that decide careers.', iconKey: 'briefcase',
    why: 'The most feared one-to-one speaking situation there is. Rehearse it here — real questions, spoken out loud, with follow-ups built from your actual answers — so the real room feels familiar.',
    persona: 'a job interviewer — friendly screener at low difficulty, sceptical panel chair at very high',
    openers: {
      low: [
        'Tell me a little about yourself and what you enjoy doing.',
        'What kind of work brings out your best? Talk me through it.',
      ],
      medium: [
        'Tell me about yourself, why you want this role, and what you\'d bring to it.',
        'Walk me through a recent piece of work you\'re proud of. What was your specific contribution?',
      ],
      high: [
        'Why should we hire you over someone with more experience? Be specific.',
        'Tell me about a time you failed at work. What actually went wrong, and what did you change?',
      ],
      veryhigh: [
        'Your CV says a lot — convince me any of it matters for this role. You have ninety seconds.',
        'We\'ve seen strong candidates already today. What do you have that they don\'t?',
      ],
    }
  },
  meeting: {
    title: 'The Big Meeting', tagline: 'Present your case, then take the pushback.', iconKey: 'users',
    why: 'Speaking up is half the battle — holding your ground when someone pushes back is the other half. Present a recommendation, then handle the challenge that comes back.',
    persona: 'a senior colleague in a meeting who challenges ideas directly',
    openers: {
      low: [
        'Share an idea you\'ve been mulling over at work or in life — what it is and why it appeals to you.',
        'Give the room a short update on something you\'re working on at the moment.',
      ],
      medium: [
        'Present a change you think should happen at your workplace: what, why, and what you\'d do first.',
        'Pitch the room an idea you believe in — the problem, your solution, and what it needs to happen.',
      ],
      high: [
        'Recommend a decision you know some of the room will disagree with. Make the case anyway.',
        'Present an unpopular opinion about how your team works — and argue that it\'s right.',
      ],
      veryhigh: [
        'The budget is being cut and you\'re defending your project. Tell the room why yours survives.',
        'Present a decision you\'d stake your reputation on — knowing the room is looking for reasons to say no.',
      ],
    }
  },
  bestman: {
    title: 'The Wedding Speech', tagline: 'The toast everyone will remember.', iconKey: 'glass',
    why: 'A room full of people, a glass in your hand, every eye on you. Rehearsing out loud is the only way a toast ever gets good — deliver it here first and get feedback on warmth, pace and nerves.',
    openers: {
      low: [
        'Deliver a short, warm toast to someone you care about — a friend, partner or family member. One story, one compliment, raise the glass.',
        'Practise the opening minute of a wedding speech: who you are, how you know them, and one warm line about the couple.',
      ],
      medium: [
        'Deliver a best man or maid of honour speech: how you met, one funny story, one sincere moment, and the toast.',
        'Give a two-minute wedding speech for your closest friend: a story that shows who they are, what their partner brings out in them, then the toast.',
      ],
      high: [
        'Deliver the full wedding speech as if the room has just gone quiet: open strong, land one story with a laugh, turn it sincere, finish on the toast — no notes.',
        'The couple asked you to keep it tight: ninety seconds, one great story, one line that gets everyone\'s eyes wet, the toast. Go.',
      ],
      veryhigh: [
        'The mic is on, dinner ran late, half the room is restless. Win them back: open with your best line, make every sentence earn its place, and land the toast inside two minutes.',
        'Deliver the speech as if it\'s the real day: nerves and all, no restarts. Open, story, sincerity, toast.',
      ],
    }
  },
};

/* --- levels & curriculum (verbatim from original data.js) --- */
const LEVELS={1:{title:"Building Foundations"},2:{title:"Finding Your Voice"},3:{title:"Facing the Fear"},4:{title:"Starting Over"}};
const LEVEL_ENTRY={1:13,2:6,3:1,4:1};

const CURRICULUM=[
  {id:1,scored:false,format:"read_only",phase:1,phaseName:"Understanding the Fear",title:"What Is Anxiety, Actually?",what:"Learn why your body reacts the way it does when you speak",prompt:"Describe a recent moment when you felt anxious — not about speaking, just any situation. What did your body do? Walk me through the physical sensations as if explaining them to a doctor.",type:"Psychoeducation",duration:"1-2 min",coaching:"There are no wrong answers here. The goal is simply to notice and describe — not to change anything yet. You are building self-awareness.",aiTips:["Filler words and pace don't matter here — just speak freely","Notice if your voice changes as you describe the anxiety","Describing anxiety out loud is already therapeutic. You're doing the work."]},
   {id:61,scored:false,format:"read_only",phase:1,phaseName:"Understanding the Fear",title:"When to Get Extra Support",what:"Understand what this programme can and can't do — and when to reach for professional help",prompt:"",type:"Orientation",duration:"1-2 min",coaching:"Using this programme and seeing a professional are not either/or. If your anxiety runs deeper than speaking, getting support is a sensible step, not a setback.",aiTips:["This is an orientation session — there's nothing to record","Read it once and keep it in mind as you go","Reaching out for help is a strength, not a failure"]},
  {id:2,scored:true,format:"read_speak",phase:1,phaseName:"Understanding the Fear",title:"Your Brain on Threat",what:"Understand the fight-or-flight response and why it fires when you speak",prompt:"Imagine you're explaining to a friend why the human brain reacts to public speaking the same way it reacts to physical danger. Explain it in your own words — as if you've just read about it and found it fascinating.",type:"Cognitive understanding",duration:"2 min",coaching:"Your amygdala can't tell the difference between a tiger and a room full of people judging you. Both feel like survival situations to your brain.",aiTips:["Focus on articulating ideas clearly — this is about organising thoughts under mild pressure","Don't worry if you don't know the science perfectly — improvising is the point","Notice how it feels to explain something complex. That's a real speaking skill."]},
  {id:3,scored:false,format:"reframe",phase:1,phaseName:"Understanding the Fear",title:"The Avoidance Trap",what:"Understand why avoiding speaking makes anxiety stronger over time",prompt:"Think of something you've avoided doing because of anxiety — speaking up in a meeting, giving a toast, a job interview. Describe what happened. What did you avoid, what did avoidance feel like, and what did it cost you?",type:"Reflection",duration:"2 min",coaching:"Avoidance teaches your brain that the situation is genuinely dangerous. Every time you avoid, the fear grows. The only way out is through — but gradually, not all at once.",aiTips:["Emotional honesty matters more than polish here","Notice if your voice sounds different when talking about something real","This is about insight, not performance. No score matters today."]},
  {id:4,scored:true,format:"read_speak",phase:1,phaseName:"Understanding the Fear",title:"What Your Anxiety Protects",what:"Explore the positive intention behind your fear",prompt:"Speak to your anxiety directly, as if it's a person sitting across from you. Ask it: what are you trying to protect me from? Then answer as your anxiety would answer. What is it afraid will happen if you speak up?",type:"Parts work",duration:"2 min",coaching:"This might feel strange. Do it anyway. Anxiety usually fears embarrassment, rejection, or being seen as incompetent. Naming it reduces its power.",aiTips:["Notice how it feels to speak in an unusual way","Hesitation is completely fine. Pauses are meaningful.","Your voice often reveals more than your words."]},
  {id:5,scored:true,format:"read_speak",phase:1,phaseName:"Understanding the Fear",title:"Your Anxiety Profile",what:"Map your personal anxiety pattern — triggers, symptoms, history",prompt:"Give yourself a full anxiety profile as if describing yourself to a therapist. When does speaking anxiety hit hardest? What triggers it? What does it feel like in your body? How long have you had it?",type:"Self-mapping",duration:"2-3 min",coaching:"The more specific you are, the more useful this is. Recall actual specific moments rather than generalising.",aiTips:["Try to cover triggers, symptoms, and history","Longer and more detailed is better here","This is the foundation everything else builds on — take your time"]},
  {id:6,scored:true,format:"read_speak",phase:2,phaseName:"The Body First",title:"Breathing As Your Anchor",what:"Learn box breathing and use it to regulate your nervous system",prompt:"Walk me through how you currently breathe when you're nervous — then demonstrate box breathing out loud. Breathe in for 4 counts, hold for 4, out for 4, hold for 4. Do three full cycles while narrating what you're doing and how it feels.",type:"Breathwork",duration:"2-3 min",coaching:"Box breathing activates your parasympathetic nervous system — the rest-and-digest counterpart to fight-or-flight. Even one cycle can measurably lower your heart rate.",aiTips:["Listen for changes in vocal tone as breathing regulates","Pace will naturally slow — that's the goal","Narrating while breathing is harder than it sounds — well done for trying"]},
  {id:7,scored:true,format:"read_speak",phase:2,phaseName:"The Body First",title:"The Pre-Talk Body Scan",what:"Learn to identify and release physical tension before you speak",prompt:"Do a body scan from head to toe and describe what you notice as you go. Start at the top of your head and work down — jaw, shoulders, chest, stomach, hands. Where are you holding tension? Describe it specifically, then consciously release each area.",type:"Somatic awareness",duration:"2-3 min",coaching:"Most people hold speaking anxiety in the jaw, shoulders, and stomach. Naming where the tension lives and releasing it is one of the fastest ways to calm the body before speaking.",aiTips:["Voice quality often changes as physical tension releases","Slow deliberate speech is expected here","Notice if your breathing deepens as you work through the scan"]},
  {id:8,scored:true,format:"read_speak",phase:2,phaseName:"The Body First",title:"The Power of the Pause",what:"Learn to use silence deliberately instead of filler words",prompt:"Tell me about the last time you genuinely surprised yourself. Tell the story — but every time you feel the urge to say um, uh, like, or you know, pause instead. Silence instead of filler.",type:"Filler word reduction",duration:"2 min",coaching:"Filler words are a nervous reflex. Silence feels much longer to you than to your listener. A 2-second pause sounds like authority.",aiTips:["Count filler words carefully — this is the core metric","Deliberately slow delivery is the goal","Pauses will feel uncomfortably long — that's correct. Keep going."]},
  {id:9,scored:false,format:"read_only",phase:2,phaseName:"The Body First",title:"Grounding When Panic Hits",what:"Learn the 5-4-3-2-1 grounding technique for anxiety spikes",prompt:"Use the 5-4-3-2-1 technique right now, out loud. Name 5 things you can see, 4 you can physically feel, 3 you can hear, 2 you can smell, 1 you can taste. Then describe how your body feels before and after.",type:"Grounding technique",duration:"2-3 min",coaching:"5-4-3-2-1 pulls your brain out of threat-mode by engaging the senses. Especially useful in the seconds before you're called on unexpectedly.",aiTips:["This session is about presence and calm delivery","Steady deliberate pace is the goal","Listen for whether the voice settles as grounding progresses"]},
  {id:10,scored:true,format:"read_speak",phase:2,phaseName:"The Body First",title:"Your Voice as an Instrument",what:"Discover how volume and tone affect how confident you sound",prompt:"Read this sentence at three volumes: quiet like a library, normal like talking to a friend, and projected like you want the back row to hear. Sentence: I am more capable than I give myself credit for. Then reflect — which felt most natural? Which felt most powerful?",type:"Vocal warm-up",duration:"2 min",coaching:"Volume is one of the strongest confidence signals. A quieter voice signals anxiety — and reinforces it to you. Projection is a learnable skill, not a personality trait.",aiTips:["Note differences in tone between the three volumes","Confidence signals come from projection and pace","A wavering voice is expected — note it but don't penalise it"]},
  {id:11,scored:true,format:"read_speak",phase:2,phaseName:"The Body First",title:"Physical Reset Routine",what:"Build a 60-second pre-speaking routine that calms the body reliably",prompt:"Design and then perform your personal pre-speaking routine out loud, as if teaching it to someone. It must include: a breathing technique, one physical tension release, and a grounding moment. Walk through each step, do it, and say what you're doing and why.",type:"Routine building",duration:"2-3 min",coaching:"Routines work because they're predictable — your nervous system learns to associate the ritual with calm.  Athletes use pre-performance routines for the same reason. One caution: lean on these as tools to settle yourself, not as a ritual you must complete or something bad will happen. A technique used to communicate better is a tool; the same one used to avoid feeling exposed quietly becomes a crutch.",aiTips:["Structure and clarity of explanation matter here","Notice if the voice is calmer by the end","Practise this until it becomes automatic"]},
   {id:63,scored:true,format:"read_speak",phase:2,phaseName:"The Body First",title:"Setting the Stage",what:"How sleep, caffeine, and what you put in your body shape your anxiety on the day",prompt:"Walk me through a typical day before you have to speak — how you slept, what you eat and drink, how much caffeine. Then talk through one realistic change you could make on a day that matters. Not a perfect routine — just one thing you would actually do.",type:"Physical preparation",duration:"2 min",coaching:"This isn't about strict rules or giving things up. It's about not unknowingly stacking the deck against yourself. Caffeine in particular amplifies the exact racing-heart, jittery feeling you're learning to manage — it borrows tomorrow's adrenaline.",aiTips:["Focus on one realistic change, not an overhaul","Notice if you already knew some of this but hadn't acted on it","No judgement — this is about awareness, not discipline"]},
  {id:12,scored:false,format:"reframe",phase:2,phaseName:"The Body First",title:"Reframing Adrenaline",what:"Learn to interpret physical arousal as excitement rather than threat",prompt:"Describe a time you felt genuine excitement — a holiday, good news, falling in love. Describe the physical sensations. Then compare: how similar are those feelings to anxiety? Now say out loud three times: I'm not nervous. I'm excited. Does it shift anything?",type:"Cognitive reframe",duration:"2 min",coaching:"Research shows saying I am excited before an anxiety-inducing event measurably improves performance. Anxiety and excitement have nearly identical physiological signatures — the label is the difference.",aiTips:["Listen for tonal shift between anxiety description and excitement reframe","Authentic delivery of I'm excited matters more than the words","Notice if pace or energy changes through the session"]},
  {id:13,scored:false,format:"read_only",phase:3,phaseName:"Gradual Exposure",title:"Building Your Anxiety Ladder",what:"Map your hierarchy of speaking situations from least to most frightening",prompt:"Create your personal anxiety ladder — a ranked list of speaking situations from least scary at the bottom to most terrifying at the top. Name at least 6 rungs. Start with something that causes almost no anxiety and work up to your worst-case scenario. Explain each rung briefly.",type:"Hierarchy mapping",duration:"2-3 min",coaching:"Exposure therapy works by starting at the bottom of the ladder and working up gradually.  You never jump rungs — you master each step until anxiety drops, then move to the next. The real shift comes from testing predictions: before each attempt, guess what you fear will happen, then check it against what actually did.",aiTips:["Structure and specificity of the ladder matter most","Listen for hesitation on particular rungs — that signals important material","More detail per rung is better than a vague list"]},
   {id:64,scored:true,format:"read_speak",phase:3,phaseName:"Gradual Exposure",title:"Where to Put Your Attention",what:"Aim your attention outward — the single biggest shift from anxious to confident speaking",prompt:"Describe something you know well — your job, a hobby — in two short goes. First, while deliberately monitoring yourself: how do I sound, am I doing OK, do I look nervous? Then again, focused entirely on making one imagined listener understand it. Tell me what felt different between the two.",type:"Attention training",duration:"2-3 min",coaching:"Anxiety pulls your attention inward — onto your heartbeat, your hands, how you're coming across. Confident speakers aren't fearless; they've learned to point attention outward, at the listener and the message. You can't fully do both at once.",aiTips:["Listen for a difference in warmth between the two passes","The second pass usually sounds more natural and less rushed","This is a skill, not a personality trait — it gets easier with reps"]},
  {id:14,scored:true,format:"read_speak",phase:3,phaseName:"Gradual Exposure",title:"Speaking to Yourself",what:"The lowest rung — getting comfortable with the sound of your own voice",prompt:"Describe your journey to work or home today — or if you didn't go anywhere, describe your morning in detail. What did you see, hear, think? Narrate it like a documentary voiceover. You're the only audience.",type:"Comfort exposure",duration:"1-2 min",coaching:"The first step in exposure therapy is the environment with zero social threat. Recording yourself and listening back is one of the most effective speaking exercises — most people never do it.",aiTips:["Naturalness and flow are the primary metrics","Filler words are less important — this is about comfort not polish","Listen for whether the voice sounds natural vs performing"]},
  {id:15,scored:true,format:"read_speak",phase:3,phaseName:"Gradual Exposure",title:"Safe Topics",what:"Speak about something you love — low cognitive load, high comfort",prompt:"Talk about something you're genuinely passionate about — a hobby, a place, a person, a period of history, a food, anything. Pretend you're explaining it to someone who knows nothing about it. Two minutes. Go.",type:"Passion topic",duration:"2 min",coaching:"Talking about things we love is the easiest speaking situation there is. The words come naturally because the knowledge and feeling are already there. Remember this feeling.",aiTips:["Does the voice come alive on a passion topic?","Compare the emotional warmth here vs anxiety-inducing prompts","Notice whether the speaker leans in and becomes more engaged"]},
   {id:60,scored:true,format:"read_speak",phase:3,phaseName:"Gradual Exposure",title:"The Crutches That Keep You Stuck",what:"Spot the subtle safety behaviours that feel protective but quietly keep anxiety alive",prompt:"Think about how you behave during a speaking situation — not whether you show up, but what you do once you're there. What are your safety behaviours: scripting every word, gripping something, avoiding eye contact, rushing to get it over with, over-preparing? Name at least two. Then pick one you could drop next time, and say what you're afraid would happen without it.",type:"Exposure insight",duration:"2-3 min",coaching:"A safety behaviour is anything you do to head off a feared disaster that you never actually put to the test. It feels like it's helping. It quietly keeps the fear intact — and steals attention you could spend communicating. The test: am I doing this to communicate better, or just to feel less exposed?",aiTips:["Listen for whether they name specific behaviours or stay vague","Dropping one should feel a little risky — that's the point","The breathing and grounding from Phase 2 are tools, not crutches — note the difference"]},
  {id:16,scored:true,format:"scenario",phase:3,phaseName:"Gradual Exposure",title:"Introducing Yourself",what:"The most commonly feared situation, practiced in a safe space",prompt:"Introduce yourself as if walking into a room of 10 new colleagues on your first week at a new job. Tell them your name, what you do, where you're from, one thing you're excited about in the new role, and one personal fact. Keep it to 60 to 90 seconds.",type:"Introduction",duration:"60-90 sec",coaching:"The introduction is the most commonly feared and most commonly required speaking scenario. After this session you'll have a practised version ready to deploy in real life.",aiTips:["Clarity, structure, and confidence signals are key","Does the introduction feel natural or rehearsed?","Filler words are significant here — this is high-stakes real-world territory"]},
  {id:17,scored:true,format:"read_speak",phase:3,phaseName:"Gradual Exposure",title:"The Unexpected Question",what:"Practice responding spontaneously to a question you haven't prepared for",prompt:"Answer this question — which you've had no time to prepare for: If you could go back and give your 18-year-old self one piece of advice, what would it be, and why?",type:"Spontaneous response",duration:"1-2 min",coaching:"Being called on unexpectedly is one of the highest-anxiety scenarios. The skill is buying yourself 2 to 3 seconds to think before you speak — a pause, a breath — then structuring your answer on the fly.",aiTips:["How long before the speaker starts? That pause is meaningful.","Does the answer have structure or is it scattered?","Filler words are especially revealing under spontaneous conditions"]},
  {id:18,scored:true,format:"scenario",phase:3,phaseName:"Gradual Exposure",title:"Sharing an Opinion",what:"Target competence anxiety — the fear of being judged for what you think",prompt:"Share a genuine opinion on one of these: remote working versus office working, whether social media has been good or bad for society, or whether it's better to specialise or be a generalist. State your view, give three reasons, and acknowledge the strongest counterargument.",type:"Structured argument",duration:"2-3 min",coaching:"Opinion-sharing activates competence anxiety — not will I forget my words but will people judge my views. The cure is structured argument: point, reasons, counterargument.",aiTips:["Is there a clear position, reasons, and counterargument?","Does confidence increase or decrease as the argument develops?","Listen for hedging language — maybe, I suppose — these are competence anxiety markers"]},
  {id:19,scored:true,format:"read_speak",phase:3,phaseName:"Gradual Exposure",title:"The 3-Point Structure",what:"Master the most powerful speaking framework: Point, Reason, Example",prompt:"Use the Point-Reason-Example framework to answer: What is the most important skill a person can develop in their career? State your point first, then your reason, then a specific example. Then do it again with a second point. Two full PRE structures.",type:"Framework practice",duration:"2-3 min",coaching:"Point-Reason-Example is the skeleton of almost all good verbal communication. Once automatic, you can structure any answer on the fly — in interviews, meetings, presentations.",aiTips:["Are the three elements clearly distinguishable in each structure?","Does the second PRE feel more natural than the first?","Pace and clarity matter more than content quality here"]},
  {id:20,scored:true,format:"scenario",phase:3,phaseName:"Gradual Exposure",title:"Raising the Stakes",what:"First imagined audience exposure — the bridge to real speaking",prompt:"Imagine you're presenting to a room of 20 people — colleagues, your manager, senior leaders. They're watching and forming impressions. Present one career achievement you're proud of: what you did, what the challenge was, what you contributed, and what the outcome was. Two to three minutes.",type:"Imagined exposure",duration:"2-3 min",coaching:"Imaginal exposure — vividly imagining a feared situation — activates many of the same neural pathways as real exposure. This is the bridge between safe practice and real-world speaking. You've done 19 sessions to get here.",aiTips:["Does anxiety show in voice quality compared to earlier sessions?","Confidence markers: pace, projection, structure","Compare to Session 16 — has the baseline shifted?"]},
  {id:54,phase:4,phaseName:"Changing the Narrative",title:"The Catastrophe Checklist",what:"Reality-test the worst-case scenarios your brain invents before speaking",prompt:"Think about an upcoming or recent speaking situation — a meeting, a presentation, even a difficult conversation. Now list every catastrophic outcome your brain predicts: 'I'll freeze', 'They'll think I'm stupid', 'I'll ruin everything', 'Everyone will notice I'm shaking.' Say each one out loud. Then for each one, answer honestly: what is the realistic probability of that actually happening? And if it did happen — what would actually follow? Would your career end? Would people remember next week?",type:"Cognitive restructuring",duration:"2-3 min",coaching:"CBT research shows that anxious speakers massively overestimate the probability of catastrophe and massively overestimate its consequences. This isn't positive thinking — it's accurate thinking. Most feared outcomes never happen. And when they do, the consequences are almost always smaller than predicted.",aiTips:["Does the speaker list specific fears or stay vague? Specific is better.","Listen for the tonal shift between stating the fear and reality-testing it","Does the probability assessment sound honest or are they just saying what they think they should?"]},
  {id:55,phase:4,phaseName:"Changing the Narrative",title:"The Inner Critic",what:"Name the voice that predicts failure — then create distance from it",prompt:"You have an inner voice that speaks up before and during speaking situations. It says things like 'you're going to mess this up' or 'everyone can see you're nervous.' Describe that voice out loud — what does it sound like? What does it typically say? Give it a name — something that makes it feel separate from you, not you. Then respond to it directly: talk back. Challenge its favourite line with evidence from your own experience.",type:"Cognitive defusion",duration:"2 min",coaching:"Naming the inner critic creates psychological distance — it becomes 'the voice' rather than 'the truth.' This is a core technique from Acceptance and Commitment Therapy. The voice doesn't disappear, but once named and externalised, it loses much of its authority. You stop being the thought and start being the person observing the thought.",aiTips:["Does the speaker successfully externalise the voice or do they stay fused with it?","The talk-back section is key — is there genuine pushback or timid agreement?","Listen for humour or irreverence toward the critic — that's a sign of healthy distance"]},
  {id:56,phase:4,phaseName:"Changing the Narrative",title:"Evidence Gathering",what:"Build a counter-narrative from real moments where you didn't fail",prompt:"Your inner critic has a highlight reel of every speaking moment that went badly. It conveniently forgets the times things went fine. Fix that now. List at least five specific occasions where you spoke — in a meeting, a presentation, a social situation, a phone call — and it went OK. Not perfect. Just OK. Describe each one briefly: what was the situation, what did you do, and what actually happened? Build your evidence file.",type:"Cognitive restructuring",duration:"2-3 min",coaching:"Anxiety creates a confirmation bias — you remember every stumble and forget every success. This exercise deliberately builds the counter-evidence. The goal isn't to convince yourself you're amazing. It's to create a more balanced and accurate record of your actual experience.",aiTips:["Are the examples specific and real or vague and generic?","Does confidence build as the list grows? It often does.","Listen for surprise — speakers often realise mid-exercise that they have more evidence than they thought"]},
  {id:57,phase:4,phaseName:"Changing the Narrative",title:"The Compassionate Observer",what:"Speak to yourself the way you'd speak to a friend in the same situation",prompt:"Imagine a close friend came to you and said: 'I have to present tomorrow and I'm terrified. I know I'm going to freeze and everyone will think I'm useless.' What would you say to them? Say it out loud now — the full response, with warmth and honesty. Then flip it: say the same words to yourself. Use 'you' first, then repeat it using 'I.' Notice what shifts.",type:"Self-compassion",duration:"2 min",coaching:"Most anxious speakers are brutally harsh with themselves in ways they'd never be with anyone else. The compassionate observer exercise closes that gap. Self-compassion isn't weakness — research shows it correlates with greater resilience, not less. You can be honest and kind at the same time.",aiTips:["Is there a genuine warmth when speaking to the imagined friend?","Does the tone change when they redirect the words to themselves? That gap is revealing.","Listen for whether 'I' statements feel authentic or forced"]},
  {id:58,phase:4,phaseName:"Changing the Narrative",title:"Reframing the Audience",what:"Challenge the assumption that the audience is judging you harshly",prompt:"When you stand up to speak, what do you assume the audience is thinking? Say it honestly — the actual assumptions. Now challenge each one: when you're in an audience watching someone present, what are you actually thinking? Are you hoping they fail? Are you scrutinising every filler word? Or are you half-checking your phone, thinking about lunch, and vaguely hoping they finish on time? Describe the reality of being in an audience versus the fantasy your anxiety creates.",type:"Perspective shift",duration:"2 min",coaching:"The spotlight effect is one of the most well-documented biases in psychology — we massively overestimate how much attention others pay to us. Audiences are generally sympathetic, distracted, and far less interested in your performance than your anxiety believes. This isn't dismissive — it's liberating.",aiTips:["Does the speaker's honest assumption about the audience sound catastrophic?","Is there a genuine shift when they describe being in the audience themselves?","Listen for relief or surprise — the gap between assumption and reality is often dramatic"]},
  {id:59,phase:4,phaseName:"Changing the Narrative",title:"Your Personal Mantra",what:"Create a grounded, evidence-based statement that you actually believe",prompt:"Based on everything you've worked on in this phase — the catastrophe checklist, the inner critic, the evidence gathering, the compassion, the audience reframe — write your personal speaking mantra. Not an affirmation you don't believe like 'I am a confident speaker.' Something grounded in evidence that you can say before any speaking situation and mean it. Examples: 'I've done this before and survived', 'The audience is not my enemy', 'Nervous is not the same as incapable.' Say yours out loud three times. Does it land?",type:"Synthesis",duration:"2 min",coaching:"Generic affirmations don't work because your brain rejects statements it knows aren't true. Evidence-based mantras work because they're accurate. The best mantra is one that acknowledges the anxiety and reframes it — not one that pretends it doesn't exist.",aiTips:["Is the mantra specific and personal or generic and borrowed?","Does the third repetition sound more grounded than the first?","The best mantras are short, honest, and slightly surprising — listen for that quality"]},
  {id:21,scored:true,format:"read_speak",phase:5,phaseName:"Finding Your Voice",title:"What Makes You Interesting",what:"Discover what makes your speaking voice distinct and memorable",prompt:"Tell me three things about yourself that most people don't know — not impressive things, interesting things. They can be quirky, unexpected, personal. Explain why each one matters to you.",type:"Self-discovery",duration:"2-3 min",coaching:"The most memorable speakers aren't the most polished — they're the most specific. Generic confidence is forgettable. Your specific stories, perspectives, and details are what make you worth listening to.",aiTips:["Specificity is the key metric here","Does the voice change when talking about personal things?","Listen for moments of genuine warmth or animation"]},
  {id:22,scored:true,format:"read_speak",phase:5,phaseName:"Finding Your Voice",title:"Telling a Story That Lands",what:"Learn the structure of a compelling spoken story",prompt:"Tell me about a time things went wrong — at work, in life, anywhere. Not a disaster, just something that didn't go to plan. Use this structure: set the scene, describe the problem, explain what you did, say what happened. Keep it to 2 minutes.",type:"Storytelling",duration:"2 min",coaching:"Stories are the most powerful communication tool humans have. The structure — situation, complication, action, result — works because it mirrors how we naturally process experience.",aiTips:["Is there a clear beginning, middle, and end?","Does the story have a point or does it trail off?","Listen for pacing — stories often rush the interesting parts"]},
  {id:23,scored:true,format:"read_speak",phase:5,phaseName:"Finding Your Voice",title:"Speaking With Emotion",what:"Learn to let feeling into your voice without losing control",prompt:"Tell me about something that genuinely moved you — a piece of music, a book, a moment with someone, a place you visited. Don't describe it analytically. Speak as if you're trying to help me feel what you felt.",type:"Emotional expression",duration:"2 min",coaching:"Most anxious speakers strip emotion from their voice to maintain control. But emotion is what makes words land. The goal isn't to perform emotion — it's to let genuine feeling be audible.",aiTips:["Does the voice carry feeling or is it flat?","Emotional vulnerability often causes hesitation — that's meaningful","Notice if pace and tone change when genuine feeling enters"]},
  {id:24,scored:true,format:"read_speak",phase:5,phaseName:"Finding Your Voice",title:"Using Humour",what:"Learn how to be genuinely funny — not performed",prompt:"Tell me about something absurd, frustrating, or ridiculous that happened to you recently. Not a joke — a real story where the humour comes from the truth of it. Tell it as naturally as you can.",type:"Humour",duration:"2 min",coaching:"Genuine humour in speaking comes from specificity and truth, not from trying to be funny. The funniest moments are usually 'and the absurd thing was...' — a real observation about a real situation.",aiTips:["Forced humour is easy to hear — naturalness is the goal","Timing: does the speaker give space for the punchline to land?","Self-deprecating moments often produce the most warmth"]},
  {id:25,scored:false,format:"reflect",phase:5,phaseName:"Finding Your Voice",title:"Your Signature Style",what:"Identify and articulate the speaking style that is authentically yours",prompt:"Describe your own communication style as honestly as you can — what are your natural strengths as a speaker? What do you default to? What do people respond to when you're at your best? What's your speaking voice when you're relaxed and not performing?",type:"Style mapping",duration:"2-3 min",coaching:"There is no universally correct speaking style. The goal is never to speak like someone else — it's to find the version of speaking that is most fully you, and then develop it deliberately.",aiTips:["Self-awareness and honesty matter more than flattery here","Does the speaker have genuine insight into their own communication?","Listen for the difference between who they are and who they think they should be"]},
  {id:26,scored:true,format:"read_speak",phase:5,phaseName:"Finding Your Voice",title:"Speaking to Connect",what:"Shift from performing to genuinely connecting with your listener",prompt:"Imagine you're talking to one specific person — someone you respect and want to understand you. Explain to them what drives you professionally: what you care about, what frustrates you, what you're trying to build or become. Talk to them, not at them.",type:"Connection",duration:"2-3 min",coaching:"Performance anxiety disappears when you stop trying to impress and start trying to connect. Speaking to one real person — even imagined — is fundamentally different from performing to an audience.",aiTips:["Does the delivery feel like a conversation or a presentation?","Warmth, directness, and specificity are the key markers","Listen for the shift when the speaker stops performing and starts talking"]},
  {id:27,scored:true,format:"read_speak",phase:5,phaseName:"Finding Your Voice",title:"Your Most Powerful Story",what:"Craft and deliver the story that best represents who you are",prompt:"Tell me the story that, if someone heard it, would understand something important about who you are. It doesn't need to be dramatic or impressive. It needs to be true and specific. Take your time setting it up and let it breathe.",type:"Signature story",duration:"3 min",coaching:"Every effective communicator has a signature story — one that captures something essential about their values, perspective, or journey. This session is about finding and telling yours.",aiTips:["Does this story reveal character or just events?","Is there a clear reason this story matters to the teller?","Listen for the emotional core — the moment where something is at stake"]},
  {id:28,scored:true,format:"scenario",phase:6,phaseName:"Raising the Stakes",title:"The Job Interview",what:"Master the highest-stakes one-to-one speaking situation most people face",prompt:"Answer this classic interview question as if you're in a real interview for a role you genuinely want: Tell me about yourself, why you want this role, and what you'd bring to it. Structure it: who you are, what you've done, why this role, what you offer. Two minutes.",type:"Interview practice",duration:"2 min",coaching:"The job interview is one of the most feared speaking situations because the stakes feel existential. The antidote is preparation and structure — not confidence as a feeling, but confidence as a habit of preparation.",aiTips:["Structure and clarity are primary metrics","Does the answer sound prepared but not robotic?","Listen for hedging language under pressure — 'I suppose', 'maybe'"]},
    {id:62,scored:true,format:"scenario",phase:6,phaseName:"Raising the Stakes",title:"Speaking on Camera",what:"Handle the specific anxiety of video calls and on-camera speaking",prompt:"You're about to give a 2-minute update on a video call. Deliver it as if you're on camera: look at the lens rather than the faces, bring slightly more energy than feels natural, and leave a clear beat for the audio lag. Pick a real update from your work and go.",type:"Video call scenario",duration:"2-3 min",coaching:"Video calls have their own anxiety profile. Your own face in the corner is a self-monitoring machine — hide self-view. The grid of faces feels like constant evaluation, and the audio lag makes silences feel longer than they are. Looking at the lens and bringing a little extra energy does more than anything you say.",aiTips:["This is delivery under a specific kind of pressure — judge structure and energy","Did they sound flat (the camera flattens energy) or did they lift it?","Composure with the awkward dynamics matters more than perfect content"]},
  {id:29,scored:true,format:"scenario",phase:6,phaseName:"Raising the Stakes",title:"Presenting to Senior People",what:"Learn to hold your ground when speaking to people with authority over you",what:"Develop the ability to speak confidently to people with authority",prompt:"Imagine you're presenting a recommendation to a panel of senior leaders who will push back on your ideas. Present this: a change you think should happen in your workplace or industry, why it matters, what you'd do, and what the risk of inaction is. Then handle this pushback: 'We've tried something like this before and it didn't work.'",type:"Authority exposure",duration:"3 min",coaching:"Anxiety in front of authority figures is often rooted in a felt status difference. The reframe: you have been invited to speak because your perspective is valued. You are not asking for permission — you are offering expertise.",aiTips:["Does voice quality change when handling the pushback?","Confidence markers: pace, directness, maintenance of position","Listen for whether the speaker collapses or holds their ground"]},
  {id:30,scored:true,format:"scenario",phase:6,phaseName:"Raising the Stakes",title:"The Difficult Question",what:"Handle challenging, critical, or hostile questions without losing composure",prompt:"Answer this question which is deliberately challenging: 'You've been in your role for three years — why haven't you achieved more by now?' Take a breath, don't apologise, and give a composed, honest, direct answer. You have 90 seconds.",type:"Hostile question",duration:"90 sec",coaching:"Difficult questions feel threatening because they imply criticism. The composure technique: pause, acknowledge the question without defensiveness, reframe if needed, answer directly. Never apologise for existing.",aiTips:["Does the speaker pause before answering or rush defensively?","Is the answer direct or does it deflect?","Listen for apologetic opening — 'I mean, I guess...' — these signal anxiety"]},
  {id:31,scored:true,format:"timed",phase:6,phaseName:"Raising the Stakes",title:"Speaking in a Crisis",what:"Communicate clearly and calmly when things go wrong",prompt:"Imagine something has gone wrong in your team or project — something real or plausible. You need to explain to your manager or a client what happened, what the impact is, what you're doing about it, and what will prevent it recurring. Deliver it clearly, without over-explaining or under-explaining.",type:"Crisis communication",duration:"2-3 min",coaching:"Bad news delivered clearly and with a plan is respected. Bad news buried in hedges and apology is alarming. The structure: what happened, impact, action, prevention. State it once, clearly, then stop talking.",aiTips:["Is the structure clear: situation, impact, action, prevention?","Does the voice stay steady or does it waver?","Listen for over-explanation — a sign of anxiety rather than accountability"]},
  {id:32,scored:true,format:"scenario",phase:6,phaseName:"Raising the Stakes",title:"The Negotiation",what:"Hold your position and make your case under pressure",prompt:"You're negotiating your salary in a new role. The offer is below what you need. Make your case: what you're asking for, why you're worth it, and how you'd respond to 'That's above our budget.' Stay calm, stay direct, don't fold on the first pushback.",type:"Negotiation",duration:"2-3 min",coaching:"Negotiation anxiety comes from the fear of being judged as greedy or difficult. The reframe: negotiating is professional, expected, and respected. The technique: anchor high, give a reason, and stay silent after making your ask.",aiTips:["Does the speaker make a clear, specific ask or hedge around it?","How do they handle the pushback — collapse, hold, or find middle ground?","Listen for apologetic framing of the ask itself"]},
  {id:33,scored:true,format:"timed",phase:6,phaseName:"Raising the Stakes",title:"The Presentation That Matters",what:"Deliver a structured, compelling presentation under real pressure",prompt:"Deliver a 3-minute presentation on this topic: a problem in your industry or field that most people underestimate, why it matters more than people think, and what you believe should be done about it. Use a clear structure: hook, problem, evidence, solution, call to action.",type:"Full presentation",duration:"3 min",coaching:"By this session you have all the tools: structure, regulation, connection, story. This is about putting them together under genuine pressure. The measure isn't perfection — it's coherence under stress.",aiTips:["Does the presentation have a clear structure from start to finish?","How does voice quality and pace compare to earlier sessions?","Listen for whether the speaker sounds like they believe what they're saying"]},
  {id:34,scored:true,format:"read_speak",phase:7,phaseName:"In-the-Moment Tools",title:"The 2-Second Reset",what:"Learn the single fastest way to calm your body during a live speaking situation",prompt:"You're mid-presentation and you feel the anxiety spike — heart racing, throat tightening. Describe what's happening in your body. Then demonstrate the 2-second reset: one long, slow exhale through your mouth, twice as long as your inhale. Do three resets, narrating what you feel after each one. Then continue speaking as if you're picking up your presentation.",type:"Real-time regulation",duration:"2 min",coaching:"A single extended exhale activates the vagus nerve and reduces heart rate within seconds. It's completely invisible to an audience. This is the single most useful in-the-moment tool you can have.",aiTips:["Listen for vocal changes after each reset — does the voice settle?","Does the speaker successfully transition back to 'presenting' mode?","The narration of physical sensations shows self-awareness under pressure"]},
  {id:35,scored:true,format:"surprise",phase:7,phaseName:"In-the-Moment Tools",title:"When Your Mind Goes Blank",what:"Practise exactly what to do in the 3 seconds after your mind empties",prompt:"You're presenting and suddenly — nothing. The words are gone. Simulate this: stop talking mid-sentence right now. Sit in the silence for 3 full seconds. Then use one of these recovery techniques: repeat your last sentence, say 'Let me come back to that point', or glance at an imaginary note and pick up a new thread. Do this three times, each with a different recovery method.",type:"Recovery drill",duration:"2-3 min",coaching:"The silence after a blank feels eternal to you but the audience barely notices a 3-second pause. The key is not to panic and fill it with 'um' — instead, pause deliberately, breathe, and use a recovery phrase. The blank is temporary. Your prefrontal cortex comes back online within seconds.",aiTips:["How long does the speaker actually pause? Longer is better here.","Does composure return quickly after each recovery or does anxiety escalate?","Which recovery method sounds most natural for this speaker?"]},
  {id:36,scored:true,format:"read_speak",phase:7,phaseName:"In-the-Moment Tools",title:"When Your Voice Shakes",what:"Learn why your voice shakes and how to steady it in real time",prompt:"Read this sentence at your normal pace: 'I believe this project will deliver significant value to the organisation and I'd like to explain why.' Now read it again, but this time: slow down by 30%, drop your pitch slightly lower than feels natural, and breathe from your belly, not your chest. Do it three times, each time slower and lower. Describe what changes in how your voice feels.",type:"Vocal control",duration:"2 min",coaching:"Your voice shakes because adrenaline causes the muscles around your larynx to tense. The fix isn't to try harder — it's to slow down and lower your pitch. Lower pitch requires less muscular tension. Slower pace gives your diaphragm time to support the sound. Both are counterintuitive under pressure.",aiTips:["Is there a noticeable difference between the first and third reading?","Does the speaker successfully lower pitch or do they stay in their anxious register?","Listen for breath support improving across repetitions"]},
  {id:37,scored:true,format:"timed",phase:7,phaseName:"In-the-Moment Tools",title:"Handling a Difficult Question",what:"Use the PREP framework to answer questions you don't have a prepared answer for",prompt:"Answer this question using the PREP framework — Position, Reason, Example, Position: 'What would you do differently if you could start your career over?' You have 5 seconds to think before you start. Then answer. After that, answer a harder one the same way: 'Why should we trust your judgement on this when you have limited experience in this area?'",type:"Framework under pressure",duration:"2-3 min",coaching:"PREP gives you a structure to lean on when your brain is scrambling. State your position, give one reason, give one example, restate your position. For questions you genuinely can't answer: 'That's a great question — I'd want to give you an accurate answer, so let me come back to you on that.' That's not weakness. That's composure.",aiTips:["Can you hear the PREP structure clearly in each answer?","How long is the pause before the first answer? Measured pauses show control.","Does the second (harder) answer maintain structure or fall apart under pressure?"]},
  {id:38,scored:true,format:"surprise",phase:7,phaseName:"In-the-Moment Tools",title:"When You Lose Your Place",what:"Practise recovering your thread without the audience noticing",prompt:"Tell a story about a challenge you overcame at work — but halfway through, deliberately stop and pretend you've lost your place. Use these techniques to recover: glance at imaginary notes and say 'so, coming back to the key point...', or summarise what you've said so far to find your thread again. Then finish the story. Do this twice with different recovery methods.",type:"Thread recovery",duration:"2 min",coaching:"Glancing at notes is not failure. Pausing is not failure. Summarising what you've said so far is one of the best recovery techniques because it helps you and your audience. Nobody knows your planned sequence — if you skip a section or rearrange, they'll never know.",aiTips:["Does the recovery feel natural or does it draw attention to the stumble?","How quickly does the speaker regain their narrative flow?","Listen for whether composure improves between the first and second attempt"]},
  {id:39,scored:true,format:"read_speak",phase:7,phaseName:"In-the-Moment Tools",title:"The Post-Event Debrief",what:"Build a healthy post-speaking review habit that prevents the anxiety spiral",prompt:"Think about the last time you spoke in front of anyone — a meeting, a call, a presentation, even a conversation that felt exposing. Now do a structured debrief using three questions: What went well? What would I change next time? What did I learn about myself? Answer each one out loud, spending about 30 seconds on each. Then say: 'I'm closing this file now' — and mean it.",type:"Structured reflection",duration:"2 min",coaching:"Most anxious speakers replay their mistakes for hours or days after speaking. The post-event debrief gives that energy somewhere constructive to go. Three questions, answered once, then closed. The 'closing the file' ritual is deliberate — it signals to your brain that the review is complete and rumination is no longer useful.",aiTips:["Is the self-assessment balanced — both positives and improvements?","Does the speaker sound like they're genuinely reflecting or performing?","Listen for the tone on 'closing this file' — does it carry conviction?"]},
  {id:40,scored:true,format:"read_speak",phase:8,phaseName:"Performing Under Pressure",title:"The Performance Mindset",what:"Shift from trying to survive speaking to trying to connect with your audience",prompt:"Think about the last time you spoke and spent the whole time worrying about how you were coming across. Describe that internal monologue out loud. Then reset: imagine you're speaking to help one specific person in the audience understand something important to them. Give a 90-second explanation of something you know well — but this time, focus entirely on whether they're understanding, not on how you sound.",type:"Mindset shift",duration:"3 min",coaching:"The biggest shift in advanced speaking is from self-focus to audience-focus. Anxious speakers spend 90% of their mental energy monitoring themselves. Confident speakers spend it on the audience. This isn't confidence as a feeling — it's attention as a skill.",aiTips:["Is there an audible shift between the self-focused and audience-focused sections?","Does warmth or directness increase when the focus moves to the listener?","Listen for whether the second section sounds more natural and conversational"]},
  {id:41,scored:true,format:"read_speak",phase:8,phaseName:"Performing Under Pressure",title:"Using Silence Deliberately",what:"Learn to use pauses as a tool for emphasis, thinking, and audience engagement",prompt:"Tell a short story — something that happened to you recently that surprised you. But before you start: every time you reach a key moment in the story, pause for a full 2 seconds before delivering it. Use at least three deliberate pauses. After the story, reflect: how did the pauses feel? Did they change the way the story landed?",type:"Strategic silence",duration:"3 min",coaching:"The pause is the most powerful and most underused tool in public speaking. A 2-second silence before a key point creates anticipation. A pause after a key point lets it land. Anxious speakers fill every gap — confident speakers create them.",aiTips:["Count the deliberate pauses — are there at least three?","Do the pauses fall at meaningful moments or random ones?","Does the speaker sound more authoritative with pauses or does anxiety creep in during silence?"]},
  {id:42,scored:true,format:"read_speak",phase:8,phaseName:"Performing Under Pressure",title:"Vocal Variety",what:"Use pace, pitch, and volume deliberately to keep your audience engaged",prompt:"Read this passage three times, each with a different vocal approach. The passage: 'The single biggest problem in communication is the illusion that it has taken place. We assume we've been understood. We rarely check. And the cost of that assumption is enormous.' First time: read it in a flat monotone. Second time: vary your pace — slow on the important words, faster on the connecting ones. Third time: add volume changes — louder on the key phrases, softer on the reflective ones. Which version felt most natural?",type:"Vocal technique",duration:"3 min",coaching:"Monotone delivery loses audiences regardless of content quality. The fix isn't to perform — it's to mean what you say. When you genuinely care about a point, your voice naturally varies. The exercise is training you to notice and amplify what your voice already wants to do.",aiTips:["Is there a clear difference between the three readings?","Which version sounds most natural and least performed?","Does the speaker's own reflection match what you hear in the recordings?"]},
  {id:43,scored:true,format:"scenario",phase:8,phaseName:"Performing Under Pressure",title:"Reading the Room",what:"Practise adapting your delivery in real time based on imagined audience signals",prompt:"You're presenting a proposal to a group and you notice: one person is checking their phone, another looks confused, and the decision-maker is leaning forward with interest. Describe what you see, then demonstrate three adaptations: how would you re-engage the phone-checker? How would you address the confused person without embarrassing them? How would you capitalise on the decision-maker's interest? Role-play each adjustment out loud.",type:"Adaptive delivery",duration:"3 min",coaching:"Reading the room is the skill of presence — noticing what's happening in real time rather than being trapped inside your own head. It requires shifting from self-monitoring to other-monitoring. Every audience gives signals. The question is whether you're available to see them.",aiTips:["Does the speaker offer specific, practical adaptations or vague ones?","Listen for whether the three adjustments sound genuinely different in tone and approach","Does the speaker seem comfortable with the ambiguity of the scenario?"]},
  {id:44,scored:true,format:"read_speak",phase:8,phaseName:"Performing Under Pressure",title:"Storytelling Structure",what:"Master the narrative structure that makes any content memorable",prompt:"Tell a story using this structure: Situation (set the scene — where, when, who), Complication (what went wrong or what was at stake), Resolution (what happened, what you did, what changed). Pick something real from your life — a project that nearly failed, a relationship that shifted, a moment you were tested. Three minutes. Let it breathe.",type:"Narrative mastery",duration:"3-4 min",coaching:"Every great speech is a story. Situation, complication, resolution mirrors the hero's journey and it's the structure our brains are wired to follow. Data informs. Stories persuade. If you can tell a structured story under pressure, you can communicate almost anything.",aiTips:["Are the three structural elements clearly identifiable?","Does the story have genuine stakes or does it feel low-risk?","Listen for emotional arc — does the energy shift between complication and resolution?"]},
  {id:45,scored:true,format:"timed",phase:8,phaseName:"Performing Under Pressure",title:"The Big Room",what:"Adjust your delivery for presenting to a large group",prompt:"Imagine you're standing in front of 200 people in a conference hall. Deliver a 2-minute opening to a talk on this topic: one thing your industry gets completely wrong and what should change. But adjust for the big room: project your voice as if the back row needs to hear you, slow your pace by 20%, and pause between your key points. Speak as if the room is large and the stakes are real.",type:"Large audience practice",duration:"3-4 min",coaching:"The big room requires physical adjustments: more projection, slower pace, broader gestures, and deliberate eye contact across zones — left, centre, right. The mistake is to speed up because you feel exposed. The fix is to slow down because you need to fill the space.",aiTips:["Does the voice sound projected or conversational? Big room requires projection.","Is the pace noticeably slower than their normal delivery?","Listen for whether pauses are used to fill the space or whether the speaker rushes through"]},
  {id:46,scored:true,format:"surprise",phase:8,phaseName:"Performing Under Pressure",title:"Improvised Speaking",what:"Think on your feet using frameworks that turn chaos into structure",prompt:"Answer these three questions with zero preparation — 45 seconds each. Question 1: What's the most underrated skill in your profession? Question 2: If you had to give a TED talk tomorrow, what would it be about? Question 3: Convince me that the last book, film, or show you enjoyed is worth my time. Use the PREP framework for each: Position, Reason, Example, Position. Go.",type:"Spontaneous fluency",duration:"3 min",coaching:"Improvised speaking feels terrifying because of the illusion that good speakers don't need to think. They do — they just have frameworks that turn thinking time into structure. PREP gives you a skeleton for any answer. The AND technique — 'and another thing...' — buys you time while sounding deliberate.",aiTips:["Can you hear the PREP structure in each answer or do they ramble?","Does quality improve across the three questions as the speaker warms up?","Listen for confidence markers: directness, pace control, and lack of hedging language"]},
  {id:47,scored:true,format:"read_speak",phase:8,phaseName:"Performing Under Pressure",title:"Your Speaker Identity",what:"Define and own the speaking style that is authentically yours",prompt:"You've been through 46 sessions. You know your fear, you can manage your body, you've practised exposure, you've found your voice, you've handled pressure, and you've built real-time tools. Now answer this: who are you as a speaker? Not who you wish you were — who are you? What's your natural strength? What makes people listen to you? Describe your speaking identity as if writing your own introduction for a conference. Own it.",type:"Identity synthesis",duration:"3-4 min",coaching:"Authentic speaking beats polished performance every time. The goal was never to become someone else — it was to become a more confident version of yourself. Your speaker identity is the intersection of what you know, what you care about, and how you naturally communicate. This session is about naming it and claiming it.",aiTips:["Does the speaker sound like they believe what they're saying about themselves?","Is the identity specific and personal or generic and aspirational?","Compare the vocal quality here to Session 1 — has the baseline genuinely shifted?"]},
  {id:48,scored:false,format:"reflect",phase:9,phaseName:"Maintenance",title:"The Maintenance Mindset",what:"Understand why progress isn't linear and how to sustain what you've built",prompt:"You've completed the main programme. Reflect on this: where were you when you started, and where are you now? What's changed — not just in your speaking, but in how you think about speaking? Then address this honestly: what situations still trigger anxiety? Name them specifically. Finally, describe your maintenance plan — what will you do each week to keep these skills sharp?",type:"Reflection and planning",duration:"2-3 min",coaching:"Progress is not linear. Anxiety has a tendency to return when conditions change — a new job, a high-stakes presentation, a period of stress. That's normal and expected. The goal shifts from improvement to sustainability. One session per week is enough to keep the neural pathways active.",aiTips:["Is the reflection honest about remaining challenges or overly optimistic?","Does the maintenance plan sound realistic and specific?","Compare vocal confidence here to early sessions — note the shift explicitly in feedback"]},
  {id:49,scored:true,format:"reflect",phase:9,phaseName:"Maintenance",title:"The Weekly Check-In",what:"A short reflection on this week's speaking situations — what worked, what triggered anxiety",prompt:"Think about the past week. Did any speaking situations come up — a meeting, a call, a conversation, a presentation? If yes: describe what happened, how you felt before, during, and after. What techniques did you use? What worked? What caught you off guard? If no speaking situations came up: why not? Was it a quiet week, or did you avoid something?",type:"Weekly reflection",duration:"2 min",coaching:"This session is designed to be repeated weekly. Keeping awareness active is the single most important maintenance habit. The question 'did I avoid anything this week?' is the most important one — because avoidance is the first sign of regression.",aiTips:["Honest self-report matters more than polished delivery here","Listen for avoidance patterns — did the speaker dodge opportunities?","Warmth and self-compassion in the reflection are positive signs"]},
  {id:50,scored:false,format:"reflect",phase:9,phaseName:"Maintenance",title:"Revisiting the Anxiety Ladder",what:"Update your anxiety hierarchy — situations that were frightening should now feel different",prompt:"Back in Phase 3, you built an anxiety ladder — a ranked list of speaking situations from least to most scary. Rebuild it now from memory. Name at least 6 rungs. How has the ladder changed? Which situations have moved down? Which ones are still high? Are there any new situations on the ladder that weren't there before? Be specific and honest.",type:"Progress measurement",duration:"2-3 min",coaching:"Updating the anxiety hierarchy is one of the most powerful ways to see progress concretely. Situations that were terrifying in Phase 3 should now feel manageable. New situations may have appeared as your comfort zone expanded. Both are signs of growth.",aiTips:["Compare the specificity and confidence to the Phase 3 anxiety ladder session","Have situations genuinely moved down the ladder or is the speaker being optimistic?","Notice whether new, harder situations have been added — that signals growth"]},
  {id:51,scored:true,format:"read_speak",phase:9,phaseName:"Maintenance",title:"The Challenge Session",what:"Deliberately push one level above your current comfort zone",prompt:"Choose the speaking scenario that sits just above your current comfort level — not your worst fear, but the next rung up. It might be: giving feedback to your manager, presenting to a new group, speaking up first in a meeting, or making a toast at a gathering. Now simulate it. Deliver the speech, the comment, or the presentation as if you're doing it right now. Push into the discomfort.",type:"Stretch exposure",duration:"3-4 min",coaching:"Maintaining exposure to mild challenge prevents the gradual return of avoidance. If you only practise what's comfortable, your comfort zone slowly shrinks. The challenge session keeps it expanding — or at minimum, holds the line.",aiTips:["Does the speaker choose a genuinely challenging scenario or a safe one?","Listen for signs of real discomfort — that means the challenge is calibrated correctly","Does the delivery hold together under the stretch or does it fragment?"]},
  {id:52,scored:true,format:"read_speak",phase:9,phaseName:"Maintenance",title:"Teaching What You Know",what:"Consolidate your learning by explaining a technique to an imaginary friend",prompt:"Imagine a close friend has just told you they're terrified of an upcoming presentation. They've asked for your help. Pick one technique you've learned during this programme — whichever one has helped you most — and teach it to them. Explain what it is, why it works, and exactly how to do it. Speak as if they're sitting across from you right now.",type:"Teaching",duration:"3 min",coaching:"Teaching consolidates learning more than any other method. When you explain a technique to someone else, you deepen your own understanding of it. This is also a powerful speaking exercise in itself — clear, structured, audience-focused communication.",aiTips:["Is the explanation clear enough that a complete beginner could follow it?","Does the speaker sound confident in their knowledge or uncertain?","Listen for whether this sounds like genuine advice or a rehearsed script"]},
  {id:53,scored:true,format:"reflect",phase:9,phaseName:"Maintenance",title:"The Review",what:"A structured comparison of where you started versus where you are now",prompt:"This is your review session. Answer these four questions with full honesty: 1. What was your relationship with speaking when you started Nervless? 2. What is it now? 3. What's the single biggest thing that changed for you? 4. What would you say to someone who is where you were when you started? Take your time. This is for you.",type:"Full review",duration:"3-4 min",coaching:"Seeing the arc of your own progress is the most powerful retention tool in any programme. This isn't about scores or metrics — it's about hearing the difference in your own voice between Session 1 and now. That difference is real. You built it.",aiTips:["This is the most important feedback of the entire programme — make it count","Compare everything: vocal confidence, pace, filler words, emotional range, structure","The speaker should hear genuine warmth and recognition of how far they've come"]}



];

window.LEVELS = LEVELS;
window.LEVEL_ENTRY = LEVEL_ENTRY;
window.CURRICULUM = CURRICULUM;

window.STAR_THRESHOLDS = STAR_THRESHOLDS;
window.LESSON_CONTENT = LESSON_CONTENT;
window.FREE_MODES = FREE_MODES;
