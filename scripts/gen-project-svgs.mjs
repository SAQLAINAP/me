// Generates a unique cover SVG for every project into public/images/projects/.
// Each SVG is a self-contained illustration built from the project's accent
// gradient + a semantic glyph — no external image dependencies.
//
// Usage:  node scripts/gen-project-svgs.mjs

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '..', 'public', 'images', 'projects');
mkdirSync(OUT_DIR, { recursive: true });

// Glyph library — each glyph is an SVG snippet drawn inside a 200x200 viewBox
// centered around (100, 100). All strokes are white with 55–70% opacity so
// they read well on any coloured gradient.
const GLYPHS = {
  atom: `
    <ellipse cx="100" cy="100" rx="70" ry="26" fill="none" stroke="#fff" stroke-width="4" opacity="0.75"/>
    <ellipse cx="100" cy="100" rx="70" ry="26" fill="none" stroke="#fff" stroke-width="4" opacity="0.75" transform="rotate(60 100 100)"/>
    <ellipse cx="100" cy="100" rx="70" ry="26" fill="none" stroke="#fff" stroke-width="4" opacity="0.75" transform="rotate(-60 100 100)"/>
    <circle cx="100" cy="100" r="10" fill="#fff"/>`,
  shield: `
    <path d="M100 25 L160 50 L160 110 Q160 155 100 175 Q40 155 40 110 L40 50 Z"
          fill="none" stroke="#fff" stroke-width="6" opacity="0.85"/>
    <path d="M75 100 L95 120 L130 80" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity="0.95"/>`,
  chip: `
    <rect x="55" y="55" width="90" height="90" rx="14" fill="none" stroke="#fff" stroke-width="6" opacity="0.9"/>
    <rect x="78" y="78" width="44" height="44" rx="4" fill="#fff" opacity="0.85"/>
    ${[0, 90, 180, 270].map(r => `<g transform="rotate(${r} 100 100)">
      <line x1="70" y1="45" x2="70" y2="55" stroke="#fff" stroke-width="4" opacity="0.9"/>
      <line x1="85" y1="45" x2="85" y2="55" stroke="#fff" stroke-width="4" opacity="0.9"/>
      <line x1="100" y1="45" x2="100" y2="55" stroke="#fff" stroke-width="4" opacity="0.9"/>
      <line x1="115" y1="45" x2="115" y2="55" stroke="#fff" stroke-width="4" opacity="0.9"/>
      <line x1="130" y1="45" x2="130" y2="55" stroke="#fff" stroke-width="4" opacity="0.9"/>
    </g>`).join('')}`,
  news: `
    <rect x="40" y="45" width="120" height="110" rx="8" fill="none" stroke="#fff" stroke-width="6" opacity="0.9"/>
    <rect x="55" y="60" width="90" height="20" rx="3" fill="#fff" opacity="0.85"/>
    <rect x="55" y="90" width="90" height="6" rx="2" fill="#fff" opacity="0.7"/>
    <rect x="55" y="102" width="60" height="6" rx="2" fill="#fff" opacity="0.7"/>
    <rect x="55" y="120" width="40" height="26" rx="3" fill="#fff" opacity="0.55"/>
    <rect x="100" y="120" width="45" height="6" rx="2" fill="#fff" opacity="0.7"/>
    <rect x="100" y="132" width="45" height="6" rx="2" fill="#fff" opacity="0.7"/>`,
  brain: `
    <path d="M75 60 Q45 70 55 105 Q40 130 70 140 Q80 165 105 150 Q135 165 140 140 Q170 130 155 105 Q165 70 135 60 Q120 40 105 60 Q90 45 75 60 Z"
          fill="none" stroke="#fff" stroke-width="5" opacity="0.9"/>
    <path d="M105 60 L105 150" stroke="#fff" stroke-width="3" opacity="0.7"/>
    <circle cx="80" cy="90" r="3" fill="#fff" opacity="0.9"/>
    <circle cx="130" cy="95" r="3" fill="#fff" opacity="0.9"/>
    <circle cx="90" cy="125" r="3" fill="#fff" opacity="0.9"/>
    <circle cx="125" cy="130" r="3" fill="#fff" opacity="0.9"/>`,
  blueprint: `
    <rect x="35" y="55" width="130" height="90" rx="6" fill="none" stroke="#fff" stroke-width="5" opacity="0.9"/>
    <line x1="80" y1="55" x2="80" y2="145" stroke="#fff" stroke-width="4" opacity="0.9"/>
    <line x1="80" y1="100" x2="165" y2="100" stroke="#fff" stroke-width="4" opacity="0.9"/>
    <line x1="120" y1="100" x2="120" y2="145" stroke="#fff" stroke-width="4" opacity="0.9"/>
    <circle cx="55" cy="78" r="6" fill="#fff" opacity="0.9"/>
    <text x="95" y="75" fill="#fff" opacity="0.85" font-family="monospace" font-size="12">2BHK</text>`,
  chain: `
    <rect x="35" y="80" width="55" height="40" rx="20" fill="none" stroke="#fff" stroke-width="6" opacity="0.9"/>
    <rect x="110" y="80" width="55" height="40" rx="20" fill="none" stroke="#fff" stroke-width="6" opacity="0.9"/>
    <line x1="85" y1="100" x2="115" y2="100" stroke="#fff" stroke-width="8" opacity="0.95"/>`,
  heart: `
    <path d="M100 165 C60 135 35 110 35 82 C35 62 55 45 75 45 C88 45 96 52 100 62 C104 52 112 45 125 45 C145 45 165 62 165 82 C165 110 140 135 100 165 Z"
          fill="none" stroke="#fff" stroke-width="6" opacity="0.9"/>
    <text x="100" y="108" fill="#fff" opacity="0.95" font-family="monospace" font-weight="bold" font-size="18" text-anchor="middle">NLP</text>`,
  govt: `
    <path d="M35 145 L100 40 L165 145 Z" fill="none" stroke="#fff" stroke-width="5" opacity="0.85"/>
    <rect x="55" y="90" width="10" height="55" fill="#fff" opacity="0.85"/>
    <rect x="80" y="90" width="10" height="55" fill="#fff" opacity="0.85"/>
    <rect x="110" y="90" width="10" height="55" fill="#fff" opacity="0.85"/>
    <rect x="135" y="90" width="10" height="55" fill="#fff" opacity="0.85"/>
    <rect x="35" y="145" width="130" height="10" fill="#fff" opacity="0.9"/>`,
  cursor: `
    <path d="M55 45 L155 100 L110 110 L135 155 L120 165 L95 120 L70 145 Z"
          fill="none" stroke="#fff" stroke-width="5" opacity="0.9"/>
    <circle cx="55" cy="45" r="4" fill="#fff"/>`,
  terminal: `
    <rect x="35" y="50" width="130" height="100" rx="8" fill="none" stroke="#fff" stroke-width="5" opacity="0.9"/>
    <line x1="35" y1="72" x2="165" y2="72" stroke="#fff" stroke-width="3" opacity="0.6"/>
    <circle cx="48" cy="61" r="3.5" fill="#fff" opacity="0.75"/>
    <circle cx="60" cy="61" r="3.5" fill="#fff" opacity="0.75"/>
    <circle cx="72" cy="61" r="3.5" fill="#fff" opacity="0.75"/>
    <text x="50" y="115" fill="#fff" opacity="0.95" font-family="monospace" font-size="18">$ ls</text>
    <rect x="86" y="102" width="10" height="18" fill="#fff" opacity="0.85"/>`,
  fuel: `
    <rect x="45" y="55" width="60" height="100" rx="6" fill="none" stroke="#fff" stroke-width="5" opacity="0.9"/>
    <path d="M105 80 L125 80 L125 130 Q125 145 140 145 Q155 145 155 130 L155 75 L145 65"
          fill="none" stroke="#fff" stroke-width="5" opacity="0.9"/>
    <rect x="55" y="70" width="40" height="30" fill="#fff" opacity="0.75"/>
    <text x="75" y="140" fill="#fff" opacity="0.95" font-family="monospace" font-size="18" text-anchor="middle">98</text>`,
  gavel: `
    <rect x="70" y="35" width="70" height="30" rx="4" fill="#fff" opacity="0.85" transform="rotate(35 105 50)"/>
    <line x1="115" y1="80" x2="60" y2="140" stroke="#fff" stroke-width="8" opacity="0.9"/>
    <rect x="30" y="150" width="80" height="15" fill="#fff" opacity="0.85"/>`,
  waveform: `
    ${Array.from({ length: 14 }).map((_, i) => {
      const x = 35 + i * 10;
      const heights = [30, 50, 70, 90, 60, 40, 80, 100, 65, 45, 30, 60, 40, 25];
      const h = heights[i];
      return `<rect x="${x}" y="${100 - h / 2}" width="6" height="${h}" rx="3" fill="#fff" opacity="0.9"/>`;
    }).join('')}`,
  map: `
    <path d="M35 55 L75 45 L125 60 L165 50 L165 155 L125 165 L75 150 L35 160 Z"
          fill="none" stroke="#fff" stroke-width="5" opacity="0.9"/>
    <path d="M75 45 L75 150" stroke="#fff" stroke-width="3" opacity="0.7"/>
    <path d="M125 60 L125 165" stroke="#fff" stroke-width="3" opacity="0.7"/>
    <circle cx="100" cy="105" r="8" fill="#fff" opacity="0.95"/>
    <circle cx="100" cy="105" r="3" fill="hsl(0 0 15%)" opacity="0.9"/>`,
};

// Per-project accent stops + chosen glyph. Kept in sync with client/src/lib/data.ts.
const PROJECTS = [
  { id: 'news-pod',                accent: ['#8b5cf6', '#22d3ee'], glyph: 'atom',      title: 'News-Pod',            subtitle: 'quantum-ml news pipeline' },
  { id: 'spam-detection',          accent: ['#f472b6', '#a855f7'], glyph: 'shield',    title: 'DistilBERT Spam',     subtitle: 'transformer classifier' },
  { id: 'densa-app',               accent: ['#22d3ee', '#3b82f6'], glyph: 'news',      title: 'DENSA',               subtitle: 'dockerized news agg' },
  { id: 'architectural-ai-gemini', accent: ['#f59e0b', '#ef4444'], glyph: 'blueprint', title: 'Architectural AI',    subtitle: 'gemini floor-plans' },
  { id: 'refashion-nft',           accent: ['#10b981', '#14b8a6'], glyph: 'chain',     title: 'Refashion NFT',       subtitle: 'sustainable fashion chain' },
  { id: 'sentiment-analysis',      accent: ['#f43f5e', '#f97316'], glyph: 'heart',     title: 'Sentiment Suite',     subtitle: 'nlp benchmark harness' },
  { id: 'poligap',                 accent: ['#3b82f6', '#8b5cf6'], glyph: 'govt',      title: 'Poligap',             subtitle: 'citizens ⇄ policy' },
  { id: 'safeclick',               accent: ['#eab308', '#f97316'], glyph: 'cursor',    title: 'SafeClick',           subtitle: 'anti-phish extension' },
  { id: 'devguardian',             accent: ['#64748b', '#0ea5e9'], glyph: 'terminal',  title: 'DevGuardian',         subtitle: 'secrets & deps scanner' },
  { id: 'fuel-cal',                accent: ['#84cc16', '#22c55e'], glyph: 'fuel',      title: 'Fuel Calc',           subtitle: 'trip cost + co₂' },
  { id: 'bail-reckoner',           accent: ['#f97316', '#facc15'], glyph: 'gavel',     title: 'Bail-Reckoner',       subtitle: 'legal-tech rules engine' },
  { id: 'speech-spam',             accent: ['#a855f7', '#ec4899'], glyph: 'waveform',  title: 'Speech Spam',         subtitle: 'realtime voice classifier' },
  { id: 'bangalore-atlas',         accent: ['#0ea5e9', '#22c55e'], glyph: 'map',       title: 'Bangalore Atlas',     subtitle: 'a living city map' },
];

function svgFor({ id, accent, glyph, title, subtitle }) {
  const [c1, c2] = accent;
  const glyphBody = GLYPHS[glyph];
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="g-${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0"   stop-color="${c1}"/>
      <stop offset="1"   stop-color="${c2}"/>
    </linearGradient>
    <pattern id="grid-${id}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0 L0 0 0 40" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1"/>
    </pattern>
    <radialGradient id="glow-${id}" cx="50%" cy="45%" r="55%">
      <stop offset="0"   stop-color="#ffffff" stop-opacity="0.35"/>
      <stop offset="1"   stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- background -->
  <rect width="800" height="500" fill="url(#g-${id})"/>
  <rect width="800" height="500" fill="url(#grid-${id})"/>
  <rect width="800" height="500" fill="url(#glow-${id})"/>

  <!-- decorative floating shapes -->
  <circle cx="120" cy="90"  r="60"  fill="#ffffff" opacity="0.06"/>
  <circle cx="720" cy="410" r="90"  fill="#ffffff" opacity="0.05"/>
  <circle cx="680" cy="120" r="30"  fill="#ffffff" opacity="0.10"/>

  <!-- glyph disc, centered on the right -->
  <g transform="translate(500 130) scale(1.35)">
    <circle cx="100" cy="100" r="105" fill="#000" opacity="0.15"/>
    ${glyphBody}
  </g>

  <!-- text plate on the left -->
  <g font-family="'Space Grotesk','Inter',system-ui,sans-serif">
    <text x="60" y="240" fill="#0b0b12" opacity="0.85" font-size="14" letter-spacing="4">SAQLAINAP · ARENA</text>
    <text x="60" y="300" fill="#ffffff" font-size="56" font-weight="700">${escapeXml(title)}</text>
    <text x="60" y="345" fill="#ffffff" opacity="0.85" font-size="22">${escapeXml(subtitle)}</text>
    <rect x="60" y="370" width="80" height="5" rx="2" fill="#ffffff" opacity="0.9"/>
  </g>
</svg>`;
}

function escapeXml(s) {
  return s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[c]));
}

for (const p of PROJECTS) {
  const out = resolve(OUT_DIR, `${p.id}.svg`);
  writeFileSync(out, svgFor(p));
  console.log('wrote', out);
}
console.log(`\nGenerated ${PROJECTS.length} project cover SVGs.`);
