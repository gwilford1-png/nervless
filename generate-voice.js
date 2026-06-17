#!/usr/bin/env node
/**
 * Nervless — pre-generate voice clips for the FIXED practice prompts.
 *
 * Reads the prompt pools straight out of js/data.js (HOTSEAT_BANK,
 * SCENARIOS[*].openers, FREE_MODES.open.prompts), generates one MP3 per
 * unique prompt with OpenAI TTS, and writes them + a manifest into ./audio.
 *
 * Run from the repo root:
 *     OPENAI_API_KEY=sk-... node generate-voice.js
 *
 * Safe to re-run: it skips clips that already exist, so after you add new
 * prompts just run it again and only the new ones get generated.
 *
 * Requires Node 18+ (uses the built-in fetch).
 */
const fs = require('fs');
const path = require('path');

// ── Voice config — KEEP IN SYNC with your /speak proxy endpoint ──
const MODEL        = 'gpt-4o-mini-tts';
const VOICE        = 'nova'; // warm. alternatives: sage, coral, shimmer, alloy, ash
const INSTRUCTIONS = 'Speak in a calm, warm, reassuring tone — like a supportive coach. Unhurried and steady, never theatrical.';

const DATA_FILE = path.resolve(process.argv[2] || 'js/data.js');
const OUT_DIR   = path.resolve('audio');

const KEY = process.env.OPENAI_API_KEY;
if (!KEY) { console.error('Set OPENAI_API_KEY before running.'); process.exit(1); }

// ── Same hash the front-end uses (FNV-1a 32-bit) so filenames match ──
function voiceHash(text){
  const s = (text || '').trim().replace(/\s+/g, ' ');
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(16).padStart(8, '0');
}

// ── Pull the prompt pools out of data.js ──
function loadPrompts(){
  global.window = {};
  let code = fs.readFileSync(DATA_FILE, 'utf8');
  code += `
  ;(function(){
    function push(arr){ if (Array.isArray(arr)) arr.forEach(function(t){ if (typeof t === 'string' && t.trim()) __out.push(t); }); }
    if (typeof HOTSEAT_BANK !== 'undefined') for (var d in HOTSEAT_BANK) push(HOTSEAT_BANK[d]);
    if (typeof SCENARIOS !== 'undefined') for (var k in SCENARIOS){ var o = SCENARIOS[k].openers; if (o) for (var dd in o) push(o[dd]); }
    if (typeof FREE_MODES !== 'undefined' && FREE_MODES.open && FREE_MODES.open.prompts) push(FREE_MODES.open.prompts);
  })();
  `;
  const collected = [];
  // eslint-disable-next-line no-new-func
  new Function('__out', code)(collected);

  const byHash = new Map(); // hash -> text (de-duped)
  for (const t of collected){ const h = voiceHash(t); if (!byHash.has(h)) byHash.set(h, t); }
  return byHash;
}

async function tts(text){
  const res = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: MODEL, voice: VOICE, input: text, instructions: INSTRUCTIONS, response_format: 'mp3' })
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  return Buffer.from(await res.arrayBuffer());
}

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const prompts = loadPrompts();
  console.log(`Found ${prompts.size} unique prompts.`);

  const manifest = [];
  const index = {};
  let made = 0, skipped = 0;

  for (const [h, text] of prompts){
    manifest.push(h);
    index[h] = text;
    const file = path.join(OUT_DIR, `${h}.mp3`);
    if (fs.existsSync(file)) { skipped++; continue; }
    process.stdout.write(`  generating ${h} … `);
    try { fs.writeFileSync(file, await tts(text)); made++; console.log('ok'); }
    catch (e) { console.log('FAILED —', e.message); }
  }

  fs.writeFileSync(path.join(OUT_DIR, 'manifest.json'), JSON.stringify(manifest));
  fs.writeFileSync(path.join(OUT_DIR, '_index.json'), JSON.stringify(index, null, 2)); // human-readable hash→text map
  console.log(`Done. ${made} created, ${skipped} already existed. Manifest lists ${manifest.length} clips.`);
})();
