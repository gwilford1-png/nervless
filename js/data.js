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
      `<h3>Your brain can't tell the difference</h3><p>A tiger in the wild. A room full of colleagues watching you present. To your brain, both are threats — and it responds the same way: heart racing, palms sweating, mind going blank.</p><p>This is the <strong>fight-or-flight response</strong>. It evolved to keep us alive. The problem? It fires in situations that aren't actually dangerous.</p>`,
      `<h3>What those symptoms really mean</h3><p>Dry mouth. Trembling voice. Racing heart. Sweaty palms.</p><p>These aren't signs that something is wrong with you. They're your body doing <strong>exactly what it was designed to do</strong> — preparing you to fight or flee from a threat.</p><div class="highlight-box">The symptoms are the alarm system. Not the problem itself.</div>`,
      `<h3>You're not broken — you're human</h3><p>Public speaking anxiety affects roughly <strong>75% of people</strong>. It's one of the most common fears in the world — more common than fear of death in most surveys.</p><p>The goal of this programme isn't to eliminate the response. It's to stop it from running the show.</p>`,
      `<h3>What this programme does</h3><p>Through <strong>graduated exposure</strong> — speaking in progressively more challenging situations — your brain learns that speaking is survivable. Even manageable.</p><p>Each session you complete rewires your threat register. You're not fighting your biology. You're updating it.</p><div class="highlight-box">You don't need to feel ready to start. Waiting until you feel ready is the thing that keeps you stuck.</div>`
    ],
    quiz: [
      { q: "Why does your body react physically when you have to speak publicly?", options: ["You haven't practised enough","Your brain treats social threat the same as physical danger","You lack confidence","Anxiety is a sign of poor preparation"], correct: 1, explanation: "The fight-or-flight response evolved for physical danger — but your brain fires it in social situations too. It's the same system, wrong context." },
      { q: "What does a racing heart and dry mouth before speaking actually mean?", options: ["Something is seriously wrong with you","You're not cut out for public speaking","Your body is doing exactly what it was designed to do","You need more experience before trying"], correct: 2, explanation: "These symptoms are your biology working as intended — not evidence of inadequacy. The goal is learning to work with the system, not fight it." }
    ]
  },
  2: {
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
      { q: "What is the amygdala's primary role?", options: ["Controlling speech and language","Storing long-term memories","Scanning for threat and triggering alarm responses","Managing social relationships"], correct: 2, explanation: "The amygdala is your brain's alarm system — fast, powerful, and not very nuanced. It fires first, asks questions later." },
      { q: "Why do physical symptoms of anxiety appear before you've 'decided' to be nervous?", options: ["Because anxiety is irrational","Because the amygdala acts faster than your conscious mind","Because your body is weaker than your mind","Because you haven't trained yourself enough yet"], correct: 1, explanation: "The amygdala bypasses your rational prefrontal cortex — it's a faster circuit. Your hands are shaking before you've consciously processed the situation." }
    ]
  },
  3: {
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
      { q: "What does avoidance teach your brain about the feared situation?", options: ["That you need more preparation next time","That the situation was genuinely dangerous","That your anxiety is improving","That speaking isn't important to you"], correct: 1, explanation: "When you avoid a feared situation, your brain registers: 'We escaped danger.' This confirms the threat and makes the anxiety stronger next time." },
      { q: "What is the proven way to reduce speaking anxiety over time?", options: ["Avoiding all high-pressure situations until you feel ready","Thinking positively about speaking","Gradual, repeated exposure to speaking situations","Watching other confident speakers and copying them"], correct: 2, explanation: "Exposure therapy — starting with low-anxiety situations and gradually increasing — is the gold standard treatment for anxiety. Each session you do here is exactly that." }
    ],
    reframe: { label: "Your avoidance pattern", prompt: "What's one speaking situation you've avoided recently? It could be speaking up in a meeting, turning down a presentation, or staying quiet when you had something to say. What did avoiding it cost you?" }
  },
  4: {
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
      { q: "What is the most useful way to think about speaking anxiety?", options: ["As a sign you're not ready","As a character weakness to overcome","As a misguided protector with a positive intention","As something that will disappear with enough experience"], correct: 2, explanation: "Anxiety evolved to protect us. Understanding what yours is protecting against — specifically — transforms your relationship with it from enemy to something you can work with." },
      { q: "What does anxiety typically do with the probability of the feared outcome?", options: ["Estimates it accurately","Underestimates it","Overestimates it significantly","Ignores it completely"], correct: 2, explanation: "Anxiety almost always overestimates both the likelihood and the severity of the feared outcome. The feared humiliation rarely happens — and even when things go imperfectly, it's rarely as catastrophic as feared." }
    ]
  },
  5: {
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
      { q: "Why is understanding your specific anxiety pattern more useful than general anxiety advice?", options: ["It isn't — general advice works for everyone","Because it lets you avoid your specific triggers","Because targeted work on your actual pattern is more efficient than generic approaches","Because it helps you explain your anxiety to others"], correct: 2, explanation: "General advice addresses average patterns. Your anxiety has a specific shape — specific triggers, specific fears, specific history. Working with that specificity is far more powerful." },
      { q: "What is the purpose of mapping your anxiety profile in detail?", options: ["To prove how anxious you are","To diagnose the problem precisely so you can work on it accurately","To find excuses to avoid certain situations","To compare yourself to other speakers"], correct: 1, explanation: "The anxiety profile is diagnostic, not self-critical. The clearer you can see the pattern, the more precisely we can target the work. It's information, not judgement." }
    ]
  },
  28: {
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
    quiz: [
      { q: "What are interviewers actually assessing when they ask 'Tell me about yourself'?", options: ["How impressive your CV is","Whether you can recite your work history accurately","Clarity, relevance, and whether you can hold a coherent story under pressure","How confident and polished you sound"], correct: 2, explanation: "The question is an invitation to demonstrate structured thinking and self-awareness under mild pressure. Interviewers know it triggers anxiety. They're watching for coherence and relevance — not perfection." },
      { q: "Why is having a prepared structure more useful than memorising answers?", options: ["Because memorised answers sound robotic","Structures are flexible frames that hold answers together when anxiety empties the mind","Because structures are easier to remember than specific answers","Because every interview question is different"], correct: 1, explanation: "Memorised answers fail when you get a slightly different question — you have nowhere to go. Structures (situation-action-result, who-what-why-offer) are frameworks you can fill in real time, giving you direction even when anxiety is high." }
    ]
  },
  29: {
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
      { q: "What is the 'authority trap' in speaking?", options: ["Being too aggressive when speaking to people above you","Shrinking — hedging, over-explaining, pre-emptively apologising — in response to a felt status difference","Trying to impress senior people with technical knowledge","Speaking too formally in hierarchical situations"], correct: 1, explanation: "The authority trap is the instinctive shrinking that happens when status anxiety activates. It shows up in language — hedges, apologies, qualifications — that signals uncertainty rather than the confidence the speaker actually has." },
      { q: "What is the difference between intellectual integrity and capitulation when handling pushback?", options: ["Capitulation is faster","Intellectual integrity means always holding your position","Changing your view because of a good argument is integrity; changing it because of a question or authority is capitulation","There is no meaningful difference"], correct: 2, explanation: "Immediately conceding when a senior person questions you isn't humility — it's anxiety-driven capitulation. Genuinely updating your view when presented with better evidence or reasoning is intellectual integrity. The distinction matters for credibility." }
    ]
  },
  30: {
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
    quiz: [
      { q: "Why is the pause before answering a difficult question so important?", options: ["To show you're taking the question seriously","It signals composure, gives your rational brain time to engage, and is itself a confidence signal","To buy time to think of a deflection","Because silence makes the questioner uncomfortable"], correct: 1, explanation: "The pause does multiple things simultaneously: it prevents a defensive reflex, allows the prefrontal cortex to re-engage after the amygdala spike, and signals to the room that you are not rattled. Most people rush because silence feels dangerous — which is why taking it signals the opposite." },
      { q: "Why should you never begin a response to a difficult question with an apology?", options: ["Because apologies are unprofessional","Apologising signals that the challenge was accurate before you've even answered it","Because it wastes valuable answer time","Because senior people find it irritating"], correct: 1, explanation: "An opening apology — 'I'm sorry, I should have...' — concedes the questioner's implicit criticism before you've addressed it. It signals that the attack landed. A direct answer without apology signals that you're engaging with the substance, not the subtext." }
    ]
  },
  31: {
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
    quiz: [
      { q: "What is the four-part structure for effective crisis communication?", options: ["Apologise, explain, reassure, close","What happened, impact, action, prevention","Context, problem, blame, solution","Acknowledge, justify, minimise, move on"], correct: 1, explanation: "What happened (facts), impact (consequences), action (what you're doing), prevention (what stops this recurring). This structure answers the four questions the listener needs before they can regulate their response. It signals accountability and control simultaneously." },
      { q: "Why does over-explaining during crisis communication make things worse?", options: ["Because it wastes time","It signals that you are trying to manage the listener's reaction rather than inform them — which looks like panic, not control","Because listeners don't have time for detail","Because it reveals more problems than necessary"], correct: 1, explanation: "Over-explanation is an anxiety response — filling silence to avoid the discomfort of the listener's reaction. But listeners read it as loss of control. State the facts, the impact, the plan, and stop. Silence after delivering difficult news is a sign of steadiness, not weakness." }
    ]
  },
  32: {
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
    quiz: [
      { q: "What is the 'anchor effect' in negotiation and why does it matter?", options: ["The feeling of being stuck in a negotiation","The first number stated has disproportionate influence on the final outcome","The technique of repeating your position multiple times","When both sides refuse to move"], correct: 1, explanation: "Anchoring is a well-documented cognitive bias — the first number mentioned in a negotiation sets a reference point that all subsequent discussion orbits around. If you anchor high (with justification), you'll settle higher. If you anchor low or let the other side anchor first, you'll typically settle lower." },
      { q: "What does immediately retreating after pushback signal to the other party?", options: ["That you're reasonable and flexible","That you didn't believe in your original position — which undermines your credibility","That you understand their constraints","That you're eager to reach an agreement"], correct: 1, explanation: "Immediate retreat after 'That's too much' signals that your opening position was inflated — which the other side will remember. Holding your position, acknowledging their constraint, and asking what flexibility exists is both more credible and more likely to result in a better outcome." }
    ]
  },
  33: {
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
    quiz: [
      { q: "What are the five elements of a well-structured presentation?", options: ["Introduction, background, content, summary, conclusion","Hook, problem, evidence, solution, call to action","Opening, body, examples, argument, close","Context, issue, analysis, recommendation, next steps"], correct: 1, explanation: "Hook (earns attention), Problem (creates stakes), Evidence (builds credibility), Solution (answers the problem), Call to action (gives the listener something to do). This structure works because each element answers a specific question in the listener's mind." },
      { q: "Why do most presentations fail to hook the audience at the start?", options: ["Because they don't practise the opening enough","They start with context ('Today I want to talk about...') which gives the audience no reason to lean in","Because audiences have short attention spans","Because the opening is the hardest part to prepare"], correct: 1, explanation: "Context-first openings ('Today I'll be covering...') are the default because they feel safe. But they give the audience no reason to pay attention. A hook starts with something surprising, provocative, or immediately relevant to the listener's situation — earning their attention rather than assuming it." }
    ]
  },
  21: {
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
    quiz: [
      { q: "Why does trying to sound like a 'good speaker' often backfire?", options: ["Because audiences prefer informal speech","It produces generic confidence that is forgettable rather than distinctive and memorable","Because it requires too much preparation","Good speakers are intimidating to listen to"], correct: 1, explanation: "Generic polish sounds like everyone else who has tried to improve their speaking. What makes speakers memorable is specificity — the particular details, perspectives, and stories that only they could deliver. Trying to sound impressive often erases exactly what makes someone worth listening to." },
      { q: "What is the engine of memorable communication?", options: ["Volume and projection","Confidence and authority","Specificity — the particular details that only you could provide","Polish and preparation"], correct: 2, explanation: "Specific details — the exact place, the precise feeling, the particular story — are what lodge in memory. Generalities wash over listeners. The more specific you are, the more real and human you become to your audience." }
    ]
  },
  22: {
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
    quiz: [
      { q: "What is 'neural coupling' and why does it matter for storytelling?", options: ["A technique for memorising stories","When the listener's brain mirrors the storyteller's, creating shared experience","The connection between emotion and memory","How the brain stores narrative information"], correct: 1, explanation: "Neural coupling means the listener's brain activates as if experiencing the events of the story directly. This is why stories bypass analytical evaluation — they create experience rather than just transmitting information. It's the neurological basis of why stories are so persuasive." },
      { q: "What is the most common storytelling mistake?", options: ["Making the story too personal","Too much detail in the complication","Spending too long on the situation and rushing the complication and action — where the interest lives","Not having a clear beginning"], correct: 2, explanation: "People instinctively over-explain the setup and rush what actually matters — the problem, the tension, the choice. The complication and action are where listener engagement peaks. The situation should be brief; the complication should breathe." }
    ]
  },
  23: {
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
      { q: "What is the difference between performed emotion and genuine emotion in speaking?", options: ["There is no difference — all emotion in speaking is performance","Performed emotion feels manipulative; genuine emotion that's been allowed to surface feels human","Performed emotion is more effective because it's controlled","Genuine emotion is only appropriate in personal conversations"], correct: 1, explanation: "Audiences are extremely sensitive to authenticity. Performed emotion — laid on top of neutral delivery — reads as manipulation. Genuine emotion that the speaker has given themselves permission to feel reads as human and trustworthy. The difference is felt, not analysed." }
    ]
  },
  24: {
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
      { q: "Why does trying to be funny usually make speaking less funny?", options: ["Because audiences don't appreciate humour in professional contexts","When you can see someone trying to be funny, the comedy dies — performed humour lacks authenticity","Because humour requires rehearsal to land properly","Because funny people are naturally funny and it can't be learned"], correct: 1, explanation: "Performed humour — where the intention to be funny is visible — creates distance. The audience becomes a judge rather than a participant. Genuine humour emerges naturally from honest observation of real situations. You can't perform your way to funny; you can notice your way there." },
      { q: "What makes self-deprecating humour effective for speakers?", options: ["It makes the speaker seem less threatening","It signals both confidence and humanity — and disarms the evaluative stance of listeners","It gets a guaranteed laugh","It shifts attention away from the speaker's weaknesses"], correct: 1, explanation: "Self-deprecation works on multiple levels: it signals that you're secure enough to laugh at yourself (confidence), that you're human and imperfect (relatability), and that you're not performing a polished persona (authenticity). All of these reduce the distance between speaker and listener." }
    ]
  },
  25: {
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
      { q: "What is the most persistent myth about improving as a speaker?", options: ["That practice makes perfect","That there's an ideal speaking style to move toward — when actually the goal is to develop your own","That confidence is the most important quality","That preparation eliminates anxiety"], correct: 1, explanation: "The idea that there's a correct speaking style causes enormous damage — it makes people try to speak like someone else, which erases specificity and authenticity. The goal is never to speak like a great speaker in general. It's to speak like the most developed version of yourself specifically." },
      { q: "What does 'developing your voice' actually involve?", options: ["Adding new techniques and frameworks","Copying successful communicators you admire","Removing the anxiety, performance, and self-consciousness that interfere with your natural voice","Practising until speaking feels effortless"], correct: 2, explanation: "Your natural voice — the one that emerges when you're relaxed, engaged, and not performing — is already good. The work isn't about adding a better voice on top of it. It's about removing the interference that suppresses it: the anxiety, the self-monitoring, the performance." }
    ]
  },
  26: {
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
    quiz: [
      { q: "What is the difference between 'performance orientation' and 'connection orientation'?", options: ["Performance orientation is more professional; connection is more casual","Performance orientation focuses on how you're coming across; connection orientation focuses on whether it's landing for the listener","Connection orientation is less prepared","Performance orientation requires an audience; connection orientation works one-on-one"], correct: 1, explanation: "Performance orientation keeps attention on the self — being evaluated, being judged. Connection orientation shifts attention to the other person — their understanding, their response, their needs. This shift resolves much of the self-consciousness that drives anxiety." },
      { q: "Why does speaking to 'one person' rather than 'the room' reduce anxiety?", options: ["Because individuals are less intimidating than groups","It transforms performance into conversation — a context where most people are naturally comfortable","Because you can make eye contact with one person","Because one person gives more feedback than a group"], correct: 1, explanation: "Most people who struggle with public speaking are comfortable in conversation. Speaking to one real person — even imagined — activates the same neural and emotional systems as conversation rather than performance. The anxiety of 'audience' disappears when it becomes 'person'." }
    ]
  },
  27: {
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
    quiz: [
      { q: "What makes a signature story 'signature'?", options: ["It's your most impressive achievement","It's dramatic and emotionally powerful","It's specific, true, reveals character, and only you could tell it","It's rehearsed until it's perfectly delivered"], correct: 2, explanation: "A signature story isn't defined by its drama or impressiveness. It's defined by specificity and character — it reveals something genuine about who you are and what you've learned. Its value is that it's unrepeatable by anyone else." },
      { q: "Why do the most powerful signature stories end with insight rather than triumph?", options: ["Because audiences are cynical about success stories","Because insight is more relatable than triumph — everyone has struggled, not everyone has succeeded","Because triumph sounds arrogant","Because insight is more memorable than outcomes"], correct: 1, explanation: "Triumph creates distance — not everyone relates to winning. Insight — something genuinely learned from difficulty, failure, or unexpected experience — creates connection. It signals honesty and self-awareness, which are far more compelling than achievement." }
    ]
  },
  6: {
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
      { q: "Why does shallow, fast breathing make anxiety worse rather than better?", options: ["It doesn't — fast breathing always helps calm you down","It signals danger to the brain, which releases more adrenaline","It reduces oxygen to the brain","It makes your voice sound nervous"], correct: 1, explanation: "Shallow breathing is part of the fight-or-flight response. It signals to your brain that you're in danger, which triggers more adrenaline — creating a feedback loop that escalates anxiety." },
      { q: "What specifically makes box breathing effective at reducing anxiety?", options: ["It distracts your mind from being nervous","The exhale activates the vagus nerve, slowing the heart rate","It increases oxygen levels in the blood","It gives you something to count instead of worrying"], correct: 1, explanation: "The exhale phase activates the vagus nerve — the main pathway of the parasympathetic nervous system. This directly signals the heart to slow down. It's a physiological response, not just distraction." }
    ]
  },
  7: {
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
      </div>`,
    quiz: [
      { q: "Why is jaw tension particularly important for speakers to address?", options: ["Because it causes headaches","Because jaw tension directly affects voice quality and resonance","Because it makes you look nervous","Because it affects how clearly you pronounce words"], correct: 1, explanation: "The jaw is directly connected to vocal resonance. A tense jaw produces a tighter, less resonant voice. Releasing it opens your natural vocal range and lowers your register — making you sound more calm and authoritative." },
      { q: "What is the relationship between physical tension and the feeling of anxiety?", options: ["Tension is just a symptom — it doesn't affect anxiety itself","They reinforce each other — releasing tension reduces anxiety, not just its symptoms","Tension is always caused by anxiety, never the other way around","Physical relaxation only affects the body, not the mind"], correct: 1, explanation: "The body-mind connection runs both ways. Just as anxiety creates tension, releasing tension signals safety to the nervous system — directly reducing the experience of anxiety, not just its physical symptoms." }
    ]
  },
  8: {
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
    quiz: [
      { q: "Why do filler words like 'um' and 'like' appear when we speak?", options: ["Because we haven't prepared enough","As a nervous reflex to fill silence that feels uncomfortable","Because our vocabulary isn't strong enough","Because we're speaking too quickly"], correct: 1, explanation: "Filler words are a comfort reflex — silence feels threatening, so we fill it automatically. It's not about vocabulary or preparation. It's about your relationship with silence." },
      { q: "What is the most effective way to reduce filler words?", options: ["Think hard about not saying them","Prepare more thoroughly before speaking","Get comfortable with silence so your brain stops treating it as a threat","Speak faster so there's less time for fillers"], correct: 2, explanation: "Telling yourself 'don't say um' creates self-consciousness that makes things worse. The real fix is practising silence — letting gaps exist and breathe — until your nervous system stops treating silence as dangerous." }
    ]
  },
  9: {
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
      { q: "What is an 'amygdala hijack' and why does it cause mind blanks?", options: ["When you forget what you were going to say","When the threat system fires so strongly it temporarily takes the thinking brain offline","When you speak too fast and lose your train of thought","When physical anxiety symptoms become too distracting"], correct: 1, explanation: "An amygdala hijack is when the fear response is so intense it overrides the prefrontal cortex — your thinking brain. This is why mind blanks feel sudden and total. The rational mind has literally been taken offline by the survival system." },
      { q: "Why must the 5-4-3-2-1 technique be done slowly and genuinely?", options: ["To make it last long enough to work","Because rushing it signals more anxiety to the brain","It works through genuine sensory attention, not just recitation","To give yourself time to remember the next step"], correct: 2, explanation: "The technique works by genuinely engaging the senses — which activates different neural pathways to the anxiety loop. Rushing through it as a checklist doesn't engage the senses. You need to actually see, feel, and hear each item." }
    ]
  },
  10: {
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
    quiz: [
      { q: "Why does speaking quietly when anxious tend to make anxiety worse?", options: ["Because people ask you to repeat yourself, which is embarrassing","Your brain interprets your own quiet voice as evidence of low confidence, increasing anxiety","Because you can't hear your own mistakes","Because quiet speaking uses more energy"], correct: 1, explanation: "The feedback loop runs both ways. Just as anxiety makes you speak quietly, speaking quietly sends a 'I'm not confident' signal to your own brain — which increases the anxiety. Deliberately projecting breaks this loop." },
      { q: "What is the difference between projecting and shouting?", options: ["There is no real difference — both are just louder","Projection is about direction and resonance, not raw volume","Shouting is for large rooms, projection is for small ones","Projection uses the chest voice, shouting uses the throat voice"], correct: 1, explanation: "Projection is intentional — directing your voice with energy and resonance toward your audience. Shouting is just increased volume without control. Projected speech comes from the chest and feels grounded; shouting feels forced and tight." }
    ]
  },
  11: {
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
      { q: "Why do elite performers use pre-performance routines?", options: ["To pass the time before performing","Because predictability signals safety to the nervous system — 'we've done this before'","To show the audience they take it seriously","To physically warm up their body"], correct: 1, explanation: "Routines work through neural conditioning. Repeating the same sequence before a high-stakes moment teaches the nervous system to associate that sequence with safety and readiness. Over time, starting the routine triggers an automatic calm response." },
      { q: "What are the three elements of an effective pre-speaking routine?", options: ["Preparation, rehearsal, and review","Breathing, physical tension release, and a grounding moment","Visualisation, affirmation, and movement","Warm-up, practice, and recovery"], correct: 1, explanation: "These three elements address the three levels of the anxiety response: breathing addresses the physiological (heart rate, breath); tension release addresses the physical (muscle tension); grounding addresses the mental (pulling attention to the present)." }
    ]
  },
  12: {
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
      { q: "What did Harvard research find about reframing anxiety as excitement?", options: ["It made people more anxious because they were pretending","It had no effect compared to calming techniques","People who said 'I am excited' performed measurably better","It only works for mild anxiety, not severe cases"], correct: 2, explanation: "Alison Wood Brooks' research showed that saying 'I am excited' out loud — compared to trying to calm down — improved performance on public speaking, math tests, and singing. The reframe works because it uses the arousal rather than fighting it." },
      { q: "Why is 'I'm excited' more effective than 'calm down' as a pre-speech strategy?", options: ["Because excitement is always better than calmness","Reframing works with the body's arousal state; trying to calm down fights it","Because saying it out loud makes you believe it","Because 'calm down' is too negative a phrase"], correct: 1, explanation: "Trying to calm down is trying to reduce physiological arousal — which is very difficult in the moment. Reframing to excitement keeps the same arousal level but channels it into a positive, approach-oriented emotion. You're working with your biology, not against it." }
    ]
  },
  13: {
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
      </div>`,
    quiz: [
      { q: "What is the critical rule when working through an anxiety hierarchy?", options: ["Move up as quickly as possible to build momentum","Skip rungs that seem too similar","Never skip rungs — work each level until anxiety drops before moving up","Always start at the most feared situation for maximum impact"], correct: 2, explanation: "Moving too fast defeats the purpose. You need to stay at each rung long enough for your nervous system to habituate — to learn that this level is safe. Only when your anxiety at that level has significantly reduced should you move up." },
      { q: "Why is a specific fear more useful than a general one in exposure therapy?", options: ["Because specific fears are less serious","General fears can't be treated","Specificity gives you something concrete to practice and measure progress against","Because specific fears are easier to avoid"], correct: 2, explanation: "Vague fears ('public speaking') are hard to address because there's nothing concrete to practise. Specific fears ('answering an unexpected question in a team meeting') give you an exact situation to rehearse, approach gradually, and measure your response to." }
    ]
  },
  14: {
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
      { q: "Why do most people dislike the sound of their recorded voice?", options: ["Because recording equipment distorts the voice","Because the recorded voice is different from the internally-heard voice, which has added bass and resonance","Because anxious people have objectively worse voices","Because we're more self-critical when we can't change what's happening"], correct: 1, explanation: "You hear your own voice through bone conduction as well as air — which adds lower frequencies. Others only hear the air-conducted version. Your recorded voice is actually what everyone hears; the internal version is a distortion." },
      { q: "Why is 'speaking to yourself with a recording' a meaningful first step even though there's no audience?", options: ["It isn't — you need an audience for real exposure practice","For many people with anxiety, even this step produces anxiety — making it real exposure work","It's mainly useful for getting used to the sound of your voice","It's a warm-up before the real practice begins"], correct: 1, explanation: "The anxiety hierarchy starts where anxiety actually exists — and for many people, even speaking alone with a microphone produces measurable anxiety. This is real exposure, not a warm-up. The nervous system is being trained from the very first recording." }
    ]
  },
  15: {
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
      { q: "Why do filler words and anxiety symptoms reduce when people talk about something they love?", options: ["Because they've rehearsed those topics more","Passion shifts attention from self-monitoring to subject, reducing the anxiety feedback loop","Because passion topics are always simpler to explain","Because the brain relaxes when talking about positive things"], correct: 1, explanation: "Speaking anxiety is partly maintained by self-focused attention — monitoring your own performance. Passion shifts attention outward to the topic and the ideas. This reduces the self-monitoring that fuels anxiety, allowing natural speaking to emerge." },
      { q: "What is the purpose of an 'easy' passion session early in the exposure phase?", options: ["To give you a break from challenging work","To experience what your natural voice feels like — giving you something concrete to aim for","To build confidence before the hard sessions","Because passion topics are the only safe starting point"], correct: 1, explanation: "You need to know what you're working toward. Experiencing your natural, unguarded voice — the one that emerges when you're talking about something you love — gives you a felt sense of the goal. That embodied reference point is essential." }
    ]
  },
  16: {
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
    quiz: [
      { q: "What is the specific anxiety that makes introductions harder than other speaking situations?", options: ["They're usually unplanned","The length is hard to judge","You are the subject — people are forming first impressions with nowhere to hide behind a topic","They happen in front of strangers"], correct: 2, explanation: "In most speaking situations, attention is on a topic or task. In an introduction, attention is on you. This activates evaluation anxiety — the fear of being judged — more directly than almost any other speaking scenario." },
      { q: "What is the difference between sounding 'rehearsed' and sounding 'ready'?", options: ["There is no real difference","Rehearsed sounds stilted and robotic; ready sounds confident, clear, and warm","Ready means you've practised more times","Rehearsed is for formal situations; ready is for casual ones"], correct: 1, explanation: "Over-rehearsal can produce mechanical delivery — because you're reciting rather than communicating. The goal of practice is to internalise the structure and content so you can deliver it naturally. Prepared but flexible, not scripted." }
    ]
  },
  17: {
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
    quiz: [
      { q: "What is the most effective thing to do in the first 2-3 seconds when called on unexpectedly?", options: ["Start speaking immediately to show confidence","Apologise for not being prepared","Take a visible breath and buy yourself a moment with a composure phrase","Ask someone else to answer instead"], correct: 2, explanation: "An immediate pause — a visible breath, a brief composure phrase — signals calm rather than panic. It buys your prefrontal cortex time to come back online after the initial amygdala spike. Jumping in immediately without thinking often produces the rambling answer you were trying to avoid." },
      { q: "What is the Position → Reason → Example structure?", options: ["A way to extend your answer when you don't know enough","A structure that organises spontaneous answers — state your view, give one reason, give one example","A formal debate technique only useful in presentations","A way to sound more academic and credible"], correct: 1, explanation: "PRE (Position-Reason-Example) is the skeleton of clear verbal communication. It works in interviews, unexpected questions, meetings, and presentations. Because it has a natural endpoint, it prevents the rambling that comes from answering without structure." }
    ]
  },
  18: {
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
    quiz: [
      { q: "What is 'competence anxiety' and how is it different from general speaking anxiety?", options: ["It's the same thing — just a different name","Competence anxiety is the fear of being judged for your thinking, not just your delivery","Competence anxiety only affects experts","General anxiety is about physical symptoms; competence anxiety is about not having enough to say"], correct: 1, explanation: "General speaking anxiety is often about performance — voice, delivery, forgetting. Competence anxiety is specifically about content — being judged naive, uninformed, or intellectually inadequate. These often coexist but require different work." },
      { q: "Why does acknowledging a counterargument make your position stronger, not weaker?", options: ["It doesn't — admitting doubt always reduces credibility","It shows you've considered multiple perspectives, signalling careful thinking rather than defensiveness","It gives you more to talk about","It makes the audience feel you're being fair"], correct: 1, explanation: "Refusing to acknowledge counterarguments looks defensive or naive. Engaging with the strongest objection to your view — and explaining why you still hold it — demonstrates intellectual confidence and careful reasoning. This is what credible thinking looks like." }
    ]
  },
  19: {
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
    quiz: [
      { q: "What is the most common structural mistake in verbal communication?", options: ["Using too many examples","Speaking for too long","Burying the point — giving context and reasoning before stating the conclusion","Not using formal enough language"], correct: 2, explanation: "People naturally deliver ideas in the order they thought of them — which is often background first, conclusion last. But listeners need the point first to make sense of everything that follows. Burying the conclusion makes even good thinking sound disorganised." },
      { q: "Why does leading with your point feel counterintuitive but work better?", options: ["Because it's shorter","Because audiences have short attention spans","We instinctively build up to conclusions, but listeners need the destination first to follow the journey","Because it's the formal academic convention"], correct: 2, explanation: "Verbally, we tend to work our way toward a conclusion the same way we reasoned toward it. But listeners haven't done that reasoning — they need the conclusion first so they know what they're listening for. PRE restructures delivery for the listener, not the speaker." }
    ]
  },
  20: {
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
      { q: "Why does imaginal exposure work as a therapeutic technique?", options: ["Because it's safer than real exposure","Because the brain processes vivid imagination similarly to direct experience, activating the same neural pathways","Because it's easier than real practice","Because it allows unlimited repetition without consequences"], correct: 1, explanation: "Neuroscience shows that vivid imagination activates overlapping brain regions to direct experience. This is why athletes use visualisation, and why imaginal exposure therapy is effective for anxiety — the nervous system is still being trained, even without a real audience." },
      { q: "What does completing 20 sessions represent in terms of the exposure process?", options: ["The end of the programme — you're done","A checkpoint to assess whether to continue","The bridge between safe practice and real-world speaking — foundations built, ready for live exposure","Proof that the anxiety is cured"], correct: 2, explanation: "Phase 3 completes the foundation: you understand your anxiety, you have body regulation tools, and you've built exposure experience in safe conditions. The next phase takes these skills into real-world situations — which is where permanent change happens." }
    ]
  }
};

// ── LESSON CONTENT: PHASES 7-9 (Sessions 34-53) ──
Object.assign(LESSON_CONTENT, {
  34: {
    read: `<div class="lesson-content"><h3>The fastest reset you'll ever learn</h3><p>The extended exhale is a single-breath technique that reduces heart rate within seconds. Inhale for 4 counts. Exhale for 8. The longer exhale activates the vagus nerve and shifts your nervous system from fight-or-flight to rest-and-digest.</p><div class="highlight-box">This works because the exhale phase stimulates the parasympathetic nervous system. A 2:1 exhale-to-inhale ratio is the sweet spot. It's invisible to any audience.</div><p>You can do this mid-sentence. Between slides. While someone else is asking a question. Nobody sees it. But your body feels it immediately.</p></div><div class="key-insight"><div class="key-insight-icon">🫁</div><div class="key-insight-text"><strong>Key insight:</strong> One extended exhale can measurably lower your heart rate. It's the fastest in-the-moment tool in the programme — and nobody can see you doing it.</div></div>`,
    quiz: [
      { q: "Why does the extended exhale work so quickly?", options: ["It distracts your mind from anxiety","The longer exhale activates the parasympathetic nervous system via the vagus nerve","It increases oxygen to the brain","It slows your speaking pace"], correct: 1, explanation: "The vagus nerve is the body's brake pedal for fight-or-flight. A longer exhale than inhale directly stimulates it, shifting the nervous system toward calm. The effect is measurable within a single breath." },
      { q: "What is the ideal exhale-to-inhale ratio?", options: ["1:1 — equal length","1:2 — inhale twice as long","2:1 — exhale twice as long as inhale","3:1 — exhale three times as long"], correct: 2, explanation: "A 2:1 ratio (e.g. 4 counts in, 8 counts out) is the sweet spot — long enough to activate the parasympathetic response, short enough to do discreetly." }
    ]
  },
  35: {
    read: `<div class="lesson-content"><h3>The blank is never as long as it feels</h3><p>Going blank is the number one fear. And it does happen. But here's what actually occurs: you pause for 2-3 seconds while your brain reloads. To you, it feels like an eternity. To the audience, it looks like a confident pause.</p><div class="highlight-box">Recovery techniques: (1) Repeat your last sentence — it gives your brain a runway. (2) Say "Let me come back to that" — it buys time without apology. (3) Take one extended exhale and start a new thought.</div><p>In this session, you'll deliberately stop mid-sentence and practise all three recovery techniques. The goal is to prove to yourself that a blank is survivable.</p></div><div class="key-insight"><div class="key-insight-icon">💭</div><div class="key-insight-text"><strong>Key insight:</strong> The audience doesn't know your script. They don't know you've gone blank. They just see someone pausing — which looks like confidence.</div></div>`,
    quiz: [
      { q: "Why does 'going blank' feel worse than it actually is?", options: ["Because you lose your train of thought permanently","Your internal experience of the pause is far longer than what the audience perceives","Because the audience starts judging you immediately","Because it means you're underprepared"], correct: 1, explanation: "Time distortion under anxiety is well-documented. A 2-second pause feels like 10 seconds to the speaker. The audience perceives it as a natural, confident pause — they have no idea you've lost your thread." }
    ]
  },
  36: {
    read: `<div class="lesson-content"><h3>Slower and lower</h3><p>When anxiety hits, your voice does two things: it speeds up and it rises in pitch. Both are caused by tension in the larynx — the muscles around your voice box tighten, producing a thinner, faster, higher sound.</p><p>The counterintuitive fix: deliberately slow down and drop your pitch. Not dramatically — just 10-15%. Speak from your chest rather than your throat. This reduces the physical tension that causes the shake.</p><div class="highlight-box">A shaking voice is not a sign of weakness. It's a sign of laryngeal tension caused by adrenaline. It's muscular, not emotional — and muscular problems have muscular solutions.</div></div><div class="key-insight"><div class="key-insight-icon">🎙️</div><div class="key-insight-text"><strong>Key insight:</strong> Slowing down and dropping pitch by 10-15% counteracts the laryngeal tension that makes your voice shake. It's a physical fix for a physical symptom.</div></div>`,
    quiz: [
      { q: "What causes a shaking voice during anxiety?", options: ["Emotional weakness","Lack of preparation","Laryngeal tension — the muscles around the voice box tightening due to adrenaline","Breathing too deeply"], correct: 2, explanation: "Voice shaking is a muscular response to adrenaline, not an emotional one. The larynx tightens, producing a thinner, faster, higher sound. Knowing it's physical — not a character flaw — means you can address it with physical techniques." }
    ]
  },
  37: {
    read: `<div class="lesson-content"><h3>PREP under pressure</h3><p>The PREP framework — Position, Reason, Example, Position — gives you a skeleton for any answer. Under pressure, your brain scrambles for structure. PREP provides it automatically once practised enough.</p><div class="highlight-box">Position: state your view. Reason: explain why. Example: make it concrete. Position: restate. This takes any question from "I have no idea what to say" to "I have a clear, structured answer."</div><p>This is a timed session. You'll answer two questions using PREP — one easy, one hard. The timer adds the pressure that makes the framework stick.</p></div><div class="key-insight"><div class="key-insight-icon">⏱️</div><div class="key-insight-text"><strong>Key insight:</strong> PREP works because it removes the "what should I say?" panic. You always know the next move: state it, explain it, prove it, restate it.</div></div>`,
    timedSeconds: 60,
    quiz: [
      { q: "What does PREP stand for?", options: ["Prepare, Rehearse, Execute, Perfect","Position, Reason, Example, Position","Plan, Research, Evidence, Persuade","Point, Rationale, Experience, Point"], correct: 1, explanation: "Position (state your view), Reason (explain why), Example (make it concrete with a specific instance), Position (restate your view). The repetition of Position bookends the answer and creates a sense of completeness." }
    ]
  },
  38: {
    read: `<div class="lesson-content"><h3>Nobody knows your planned sequence</h3><p>One of the biggest fears mid-speech is losing your place. But here's the reality: the audience has never seen your plan. They don't know what comes next. If you skip a point, rearrange your sequence, or start a new thought entirely — they have no idea.</p><div class="highlight-box">The only person who knows you've lost your place is you. To the audience, it looks like you've moved on deliberately.</div><p>In this session, you'll tell a story, deliberately lose your place, then practise two recovery techniques: (1) summarise what you've said so far, and (2) jump to your conclusion. Both work because they sound intentional.</p></div><div class="key-insight"><div class="key-insight-icon">🔄</div><div class="key-insight-text"><strong>Key insight:</strong> Recovery looks like confidence. Summarising or jumping to a conclusion sounds deliberate to the audience — even when it's a rescue move.</div></div>`,
    quiz: [
      { q: "Why is 'losing your place' less catastrophic than it feels?", options: ["Because audiences aren't paying close attention","The audience has never seen your plan — they don't know what was supposed to come next","Because you can always start over","Because most presentations are forgettable anyway"], correct: 1, explanation: "The audience has no script to compare against. They only see what you show them. If you skip a point or change sequence, it looks like a deliberate choice. The catastrophe exists entirely in your head." }
    ]
  },
  39: {
    read: `<div class="lesson-content"><h3>Stop the spiral</h3><p>After speaking, most anxious speakers spend hours replaying every moment — every stumble, every "um," every perceived failure. This post-event processing is a well-documented feature of social anxiety, and it makes the anxiety worse over time.</p><div class="highlight-box">The fix: a structured 90-second debrief immediately after speaking. Answer three questions: (1) What went well? (2) What would I do differently? (3) What did I learn? Then close the file. Done. No more rumination.</div><p>The structured debrief works because it gives the rumination something to do — and then deliberately ends it. Without structure, your brain will loop indefinitely on the worst moments.</p></div><div class="key-insight"><div class="key-insight-icon">📋</div><div class="key-insight-text"><strong>Key insight:</strong> Post-event rumination is anxiety fuel. A 90-second structured debrief replaces hours of spiralling — and builds genuine learning instead.</div></div>`,
    quiz: [
      { q: "Why does post-event rumination make speaking anxiety worse?", options: ["Because you realise how many mistakes you made","It selectively reinforces negative moments and trains the brain to expect failure next time","Because other people tell you what went wrong","Because you lose sleep over it"], correct: 1, explanation: "Rumination is biased — it replays the stumbles and ignores everything that went fine. Over time, this trains the brain to expect failure, increasing anticipatory anxiety. A structured debrief breaks the cycle by forcing balanced reflection." }
    ]
  },
  40: {
    read: `<div class="lesson-content"><h3>Stop monitoring yourself. Start monitoring them.</h3><p>Anxious speakers spend their speaking time monitoring themselves — "How do I sound? Am I going too fast? Can they see my hands shaking?" This self-focused attention is both the symptom and the fuel of speaking anxiety.</p><div class="highlight-box">The single biggest shift between anxious and confident speaking is attention direction. Confident speakers focus outward — on whether the listener understands, on how the message is landing, on the room. Anxious speakers focus inward — on their own symptoms.</div><p>This session practises the shift. You'll speak twice — once monitoring yourself, once focused entirely on whether an imagined listener is following you. The difference is dramatic.</p></div><div class="key-insight"><div class="key-insight-icon">👁️</div><div class="key-insight-text"><strong>Key insight:</strong> Attention is a limited resource. If you're using it to monitor your own anxiety, you can't use it to connect with your audience. The shift outward is the shift to confidence.</div></div>`,
    quiz: [
      { q: "What is the key difference between anxious and confident speakers?", options: ["Confident speakers don't feel anxiety","Anxious speakers focus attention inward on themselves; confident speakers focus outward on the audience","Confident speakers prepare more thoroughly","Anxious speakers care more about the outcome"], correct: 1, explanation: "Both may feel anxiety. The difference is where attention goes. Self-focused attention amplifies every symptom. Audience-focused attention redirects that energy into connection and communication. The anxiety doesn't disappear — it just stops running the show." }
    ]
  },
  41: {
    read: `<div class="lesson-content"><h3>Silence is a weapon</h3><p>Most speakers rush to fill every gap. Anxious speakers fill gaps compulsively — with filler words, with extra sentences, with anything to avoid the terror of silence.</p><p>But silence is one of the most powerful tools in speaking. A 2-second pause before a key point creates anticipation. A pause after a key point lets it land. A pause when you've lost your thread looks like deliberation, not panic.</p><div class="highlight-box">The pause feels 5x longer to you than to the audience. What feels like an agonising silence is, to the listener, a speaker who is measured, confident, and in control.</div></div><div class="key-insight"><div class="key-insight-icon">🤫</div><div class="key-insight-text"><strong>Key insight:</strong> Deliberate silence signals confidence. Filling every gap signals anxiety. The pause is your friend — this session makes you believe it.</div></div>`,
    quiz: [
      { q: "Why do anxious speakers rush to fill silence?", options: ["Because silence is genuinely awkward for the audience","Silence feels threatening — the brain interprets it as loss of control and rushes to fill it","Because faster speaking covers more content","Because they've been taught to avoid pauses"], correct: 1, explanation: "The anxiety brain reads silence as danger — a gap where judgement might rush in. But this is a misperception. The audience reads a pause as confidence and deliberation. The compulsion to fill silence is the anxiety talking, not reality." }
    ]
  },
  42: {
    read: `<div class="lesson-content"><h3>Monotone is the enemy</h3><p>Monotone delivery loses audiences regardless of content quality. The human brain is wired to tune out unchanging stimuli — it's the same reason you stop noticing background noise after a few minutes.</p><p>Vocal variety means three things: pace (faster on connecting phrases, slower on key points), pitch (higher for energy, lower for authority), and volume (louder for emphasis, softer for intimacy).</p><div class="highlight-box">The fix isn't to perform. It's to mean what you say. When you genuinely care about a point, your voice naturally varies. The exercise trains you to notice and amplify what your voice already wants to do.</div></div><div class="key-insight"><div class="key-insight-icon">🎵</div><div class="key-insight-text"><strong>Key insight:</strong> Vocal variety isn't performing — it's caring out loud. When you mean what you say, your voice does the work automatically.</div></div>`,
    quiz: [
      { q: "What are the three dimensions of vocal variety?", options: ["Volume, clarity, and projection","Pace, pitch, and volume","Speed, tone, and emphasis","Rhythm, melody, and dynamics"], correct: 1, explanation: "Pace (speed variation), pitch (high/low), and volume (loud/soft) are the three levers. Using all three makes your delivery feel alive and engaging. Monotone — flat across all three — makes any content forgettable." }
    ]
  },
  43: {
    read: `<div class="lesson-content"><h3>Presence means noticing</h3><p>Reading the room is the skill of noticing what's happening in real time rather than being trapped inside your own head. It requires shifting from self-monitoring to other-monitoring — looking outward at your audience instead of inward at your anxiety.</p><div class="highlight-box">Every audience gives signals: nodding, confusion, distraction, engagement. The question is whether you're available to see them. Most anxious speakers aren't — their attention is consumed by self-monitoring.</div><p>This session practises three specific adaptations: re-engaging a distracted listener, clarifying for a confused one, and capitalising on an engaged decision-maker.</p></div><div class="key-insight"><div class="key-insight-icon">👥</div><div class="key-insight-text"><strong>Key insight:</strong> Reading the room is an attention skill, not a personality trait. It starts with looking outward — and practising specific responses to specific signals.</div></div>`,
    scenario: { description: "You're presenting and notice: one person checking their phone, one looking confused, the decision-maker leaning forward.", options: ["Re-engage the phone-checker with a direct question", "Pause and ask if anything needs clarifying", "Focus your energy on the engaged decision-maker"] },
    quiz: [
      { q: "What prevents most anxious speakers from reading the room?", options: ["They don't know what to look for","Their attention is consumed by self-monitoring — they're focused inward, not outward","They're too focused on their slides","They don't make enough eye contact"], correct: 1, explanation: "Attention is a limited resource. If all of it is directed inward — monitoring your own symptoms, judging your own delivery — none is available for noticing what the audience is doing. The shift to outward attention is what enables presence." }
    ]
  },
  44: {
    read: `<div class="lesson-content"><h3>The arc behind every great speech</h3><p>Situation, Complication, Resolution — this three-part narrative arc is behind every compelling piece of communication. Set the scene, introduce the stakes, show what happened. It's the structure our brains are wired to follow.</p><div class="highlight-box">The complication is where all the interest lives. Without stakes, there is no story — just a sequence of events. "I worked on a project and it went well" is not a story. "The project was about to be cancelled and I had one week to save it" — that's a story.</div><p>If you can tell a structured story under pressure, you can communicate almost anything. This session builds that skill with a real story from your life.</p></div><div class="key-insight"><div class="key-insight-icon">📖</div><div class="key-insight-text"><strong>Key insight:</strong> Data informs. Stories persuade. If you can tell a story with real stakes under pressure, you can communicate anything.</div></div>`,
    quiz: [
      { q: "What makes a story compelling?", options: ["Length and detail","The complication — genuine stakes that create tension","A happy ending","Dramatic delivery"], correct: 1, explanation: "Without complication (stakes, tension, risk), there is no story — just a sequence of events. The complication is what makes the audience lean in and want to know what happens next." }
    ]
  },
  45: {
    read: `<div class="lesson-content"><h3>The big room changes everything</h3><p>Presenting to 200 people requires physical adjustments: more projection, slower pace, broader gestures, and deliberate eye contact across zones — left, centre, right.</p><div class="highlight-box">The instinct when exposed on a big stage is to speed up. The fix is the opposite — slow down by 20%, pause between points, and let your voice fill the space. These adjustments feel wrong until you've practised them.</div><p>This is a timed 2-minute session. Imagine the conference hall. Project your voice. Slow your pace. Fill the room.</p></div><div class="key-insight"><div class="key-insight-icon">🏟️</div><div class="key-insight-text"><strong>Key insight:</strong> Big rooms require bigger delivery — slower, louder, more deliberate. It feels unnatural until you practise it. Then it feels powerful.</div></div>`,
    timedSeconds: 120,
    quiz: [
      { q: "What physical adjustments does a large room require?", options: ["Speaking faster to keep the audience's attention","More projection, slower pace, broader gestures, and deliberate eye contact across zones","Using more slides and visual aids","Speaking louder and more aggressively"], correct: 1, explanation: "Large rooms amplify everything — including mistakes. Slowing down, projecting, and using deliberate eye contact across the room (left, centre, right) ensures you fill the space rather than shrinking in it." }
    ]
  },
  46: {
    read: `<div class="lesson-content"><h3>Think on your feet</h3><p>Improvised speaking feels terrifying because of the illusion that good speakers don't need to think. They do — they just have frameworks that turn thinking time into structure.</p><div class="highlight-box">PREP gives you a skeleton for any answer. The "and" technique — "and another thing..." — buys you time while sounding deliberate. Both work because they turn chaos into something that sounds intentional.</div><p>This is a surprise session. Three questions, 45 seconds each, zero preparation. Use PREP for each.</p></div><div class="key-insight"><div class="key-insight-icon">⚡</div><div class="key-insight-text"><strong>Key insight:</strong> Good improvisers aren't thinking faster. They have frameworks that turn any input into structured output. PREP is that framework.</div></div>`,
    quiz: [
      { q: "Why does improvised speaking feel harder than it actually is?", options: ["Because you genuinely can't think fast enough","The illusion that good speakers don't need to think — when in reality they use frameworks to structure their answers quickly","Because preparation is always better","Because audiences judge spontaneous answers more harshly"], correct: 1, explanation: "Spontaneous-sounding answers are rarely truly spontaneous. Skilled speakers have frameworks (like PREP) that provide instant structure, turning any question into a coherent answer. The framework does the organising so the brain can focus on content." }
    ]
  },
  47: {
    read: `<div class="lesson-content"><h3>Who are you as a speaker?</h3><p>You've been through 46 sessions. You know your fear. You can manage your body. You've practised exposure. You've found your voice. You've handled pressure and built real-time tools.</p><p>Now answer this: who are you as a speaker? Not who you wish you were — who you actually are. What's your natural strength? What makes people listen to you?</p><div class="highlight-box">Authentic speaking beats polished performance every time. The goal was never to become someone else — it was to become a more confident version of yourself.</div></div><div class="key-insight"><div class="key-insight-icon">🌟</div><div class="key-insight-text"><strong>Key insight:</strong> Your speaker identity is the intersection of what you know, what you care about, and how you naturally communicate. This session is about naming it and claiming it.</div></div>`,
    quiz: [
      { q: "What is the ultimate goal of this programme?", options: ["To eliminate anxiety completely","To become a polished, professional speaker","To become a more confident version of yourself as a speaker","To learn advanced presentation techniques"], correct: 2, explanation: "The goal was never to turn you into someone else. It was to remove the barriers — the anxiety, the avoidance, the self-doubt — that were preventing you from being the speaker you already are. Authenticity beats polish every time." }
    ]
  },
  48: {
    read: `<div class="lesson-content"><h3>Progress isn't linear</h3><p>You've completed the main programme. But progress isn't a straight line. Anxiety has a tendency to return when conditions change — a new job, a high-stakes presentation, a period of stress. That's normal and expected.</p><div class="highlight-box">The goal shifts from improvement to sustainability. One session per week is enough to keep the neural pathways active. Without practice, the amygdala slowly recalibrates back toward treating speaking as a threat.</div><p>Reflect: where were you when you started, and where are you now? What situations still trigger anxiety? What's your maintenance plan?</p></div><div class="key-insight"><div class="key-insight-icon">🔄</div><div class="key-insight-text"><strong>Key insight:</strong> Maintenance isn't optional. Without regular practice, avoidance quietly returns. One session per week holds the line.</div></div>`,
  },
  49: {
    read: `<div class="lesson-content"><h3>Your weekly check-in</h3><p>This session is designed to be repeated weekly. The most important question: did I avoid anything this week?</p><div class="highlight-box">Avoidance is the first sign of regression. A missed opportunity to speak up in a meeting. A declined presentation. A moment where you stayed quiet. Noticing these patterns early prevents them from becoming habits again.</div><p>Think about your week. What speaking situations came up? How did you handle them? What techniques did you use? What caught you off guard?</p></div><div class="key-insight"><div class="key-insight-icon">📅</div><div class="key-insight-text"><strong>Key insight:</strong> The question "did I avoid anything?" is the most important weekly check-in. Avoidance creeps back quietly. This session keeps you honest.</div></div>`,
  },
  50: {
    read: `<div class="lesson-content"><h3>How far you've come</h3><p>Back in Phase 3, you built an anxiety ladder — a ranked list of speaking situations from least to most scary. Rebuild it now from memory.</p><div class="highlight-box">The measure of real progress isn't how you feel — it's how the ladder has changed. Situations that were terrifying should now sit lower. New, harder situations may have appeared as your comfort zone expanded. Both are signs of growth.</div><p>Name at least 6 rungs. How has the ladder changed? Which situations moved down? Which are still high? Be honest.</p></div><div class="key-insight"><div class="key-insight-icon">📊</div><div class="key-insight-text"><strong>Key insight:</strong> Comparing your anxiety ladder now to where you started is the most concrete evidence of progress. The numbers don't lie.</div></div>`,
  },
  51: {
    read: `<div class="lesson-content"><h3>Stay in the stretch zone</h3><p>If you only practise what's comfortable, your comfort zone slowly shrinks. The challenge session keeps it expanding.</p><div class="highlight-box">Choose the speaking scenario just above your current comfort level — not your worst fear, but the next rung up. Mild, ongoing challenge is what prevents avoidance from creeping back.</div><p>It might be: giving feedback to your manager, presenting to a new group, speaking up first in a meeting, or making a toast. Simulate it now.</p></div><div class="key-insight"><div class="key-insight-icon">🎯</div><div class="key-insight-text"><strong>Key insight:</strong> Comfort zones shrink when unchallenged. One stretch session per week holds the line — or expands it.</div></div>`,
    quiz: [
      { q: "Why is ongoing mild challenge important for maintenance?", options: ["To keep improving your skills","Without regular challenge, comfort zones shrink and avoidance gradually returns","To prepare for specific upcoming events","To maintain your score averages"], correct: 1, explanation: "The comfort zone is dynamic — it expands with challenge and contracts without it. Regular mild stretch prevents the gradual return of avoidance that happens when you only practise what feels safe." }
    ]
  },
  52: {
    read: `<div class="lesson-content"><h3>Teaching is the deepest learning</h3><p>When you explain a technique to someone else, you deepen your own understanding of it. Teaching forces you to organise, simplify, and make concrete — which are themselves core speaking skills.</p><div class="highlight-box">Pick the one technique from this programme that has helped you most. Now teach it to an imagined friend who is terrified of an upcoming presentation. Explain what it is, why it works, and exactly how to do it.</div></div><div class="key-insight"><div class="key-insight-icon">🎓</div><div class="key-insight-text"><strong>Key insight:</strong> Teaching consolidates learning more than any other method. And it's a real speaking exercise — clear, structured, audience-focused communication.</div></div>`,
    quiz: [
      { q: "Why does teaching consolidate learning?", options: ["Because repetition helps memory","Teaching forces you to organise, simplify, and make knowledge concrete — deepening your own understanding","Because explaining to others is a form of rehearsal","Because it builds confidence through repetition"], correct: 1, explanation: "Teaching requires you to transform implicit knowledge into explicit, structured communication. This process reveals gaps in understanding and strengthens the neural pathways associated with the knowledge. It's why the best way to learn something is to teach it." }
    ]
  },
  53: {
    read: `<div class="lesson-content"><h3>Your review</h3><p>This is the most important session in the programme. Not because of the score — because of what you hear.</p><div class="highlight-box">Answer four questions with full honesty: (1) What was your relationship with speaking when you started? (2) What is it now? (3) What's the single biggest thing that changed? (4) What would you say to someone who is where you were when you started?</div><p>Take your time. This is for you.</p></div><div class="key-insight"><div class="key-insight-icon">🏆</div><div class="key-insight-text"><strong>Key insight:</strong> The difference between your voice in Session 1 and your voice now is the evidence. You built that. It's real.</div></div>`,
  }
});

Object.assign(LESSON_CONTENT, {
  60: {
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
      { q: "What is a 'safety behaviour' in speaking?", options: ["Any technique that calms your nerves","Something you do to prevent a feared disaster but never actually put to the test","Preparing thoroughly for a talk","Speaking slowly and clearly"], correct: 1, explanation: "Safety behaviours — scripting every word, never pausing, avoiding eye contact — feel protective but stop your brain from learning the situation is safe. The catastrophe they guard against never gets tested." },
      { q: "How do you tell a useful tool from a safety behaviour?", options: ["Tools are taught; crutches are not","By the reason — to communicate better, or just to feel less exposed","Tools are physical; crutches are mental","There's no real difference"], correct: 1, explanation: "The same action can be either. Breathing to settle yourself so you can communicate is a tool. The same breathing done only to dodge the discomfort of feeling exposed is a crutch that keeps the fear alive." }
    ]
  },
  61: {
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
    quiz: [
      { q: "Why is hiding your self-view on a video call so useful?", options: ["It saves screen space","Watching your own face feeds the self-monitoring that drives anxiety","It makes the call run faster","It stops others seeing you"], correct: 1, explanation: "Your own face in the corner turns a call into constant self-surveillance. Hiding self-view removes it, the same way you'd never watch yourself in a real meeting." },
      { q: "Why leave a deliberate beat before and after others speak on a call?", options: ["To seem more thoughtful","To absorb the audio lag so you don't talk over people or rush","Because pauses are always good","To check your notes"], correct: 1, explanation: "The slight delay breaks natural turn-taking. A clear beat handles the lag, prevents talking over each other, and reads as composure." }
    ]
  },
  63: {
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
      { q: "Why can caffeine work against you before a speaking situation?", options: ["It makes you too relaxed to focus","It raises heart rate and amplifies the jittery, racing symptoms you're trying to manage","It has no real effect on anxiety","It only affects you if you're already nervous"], correct: 1, explanation: "Caffeine produces the same physical arousal — racing heart, jitters — that anxiety does. On a high-stakes day it stacks on top of your nerves." },
      { q: "What's the most useful way to think about sleep and caffeine here?", options: ["Strict rules you must follow","Awareness — not unknowingly stacking the deck against yourself","They don't matter compared to in-the-moment technique","Things to give up permanently"], correct: 1, explanation: "It's about noticing the conditions for anxiety are partly set before you speak — and making one or two small adjustments on the days that matter." }
    ]
  },
  64: {
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
      { q: "Why does monitoring yourself while speaking make anxiety worse?", options: ["It doesn't — self-awareness always helps","Attention is limited; watching yourself feeds the anxiety loop and leaves less for communicating","Because you notice more mistakes","Because the audience can tell you're concentrating"], correct: 1, explanation: "Self-focused attention amplifies every symptom and starves communicating. Pointing attention outward — at the listener and the message — breaks the loop." },
      { q: "What is the core attention shift confident speakers make?", options: ["From the audience to their notes","From 'how am I doing?' to 'are they following me?'","From the message to their delivery","From speaking to listening"], correct: 1, explanation: "The shift is from self-monitoring to audience focus. It doesn't eliminate anxiety, but it stops anxiety from dominating — and it's a trainable skill." }
    ]
  }
});

// ── FREE PRACTICE ──
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

window.FREE_MODES = FREE_MODES;
