import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'wouter';
import { contact } from '@/lib/data';

// Pixel-avatar slideshow frames — each hand-drawn 24x24 SVG matching a
// real photo (ecko jacket, red kurta, purple check, black sweatshirt).
const PIXEL_FRAMES = [
  { src: 'images/saqlain-pixel-1.svg', label: 'ECKO' },
  { src: 'images/saqlain-pixel-2.svg', label: 'KURTA' },
  { src: 'images/saqlain-pixel-3.svg', label: 'STUDIO' },
  { src: 'images/saqlain-pixel-4.svg', label: 'LAKESIDE' },
];

// Multilingual eyebrow — cycles the handle "SAQLAINAP" through
// transliterations of "Saqlain" across the scripts I read/speak or
// grew up around. Kept short so the row height stays constant across
// swaps regardless of Devanagari matras, Tamil descenders, etc.
const NAMES = [
  { text: 'SAQLAINAP', lang: 'en', dir: 'ltr' as const, script: 'LATIN' },
  { text: 'साक़लैन',    lang: 'hi', dir: 'ltr' as const, script: 'देवनागरी' },
  { text: 'ಸಖ್ಲೈನ್',   lang: 'kn', dir: 'ltr' as const, script: 'ಕನ್ನಡ' },
  { text: 'ثاقلین',    lang: 'ur', dir: 'rtl' as const, script: 'اردو' },
  { text: 'ثاقلين',    lang: 'ar', dir: 'rtl' as const, script: 'العربية' },
  { text: 'சக்லைன்',   lang: 'ta', dir: 'ltr' as const, script: 'தமிழ்' },
  { text: 'సఖ్లైన్',    lang: 'te', dir: 'ltr' as const, script: 'తెలుగు' },
];

/**
 * Hero — Montgomery-inspired.
 *
 * Layout (all breakpoints, mobile matches desktop split):
 *  ┌───────────────────────────────────────────────┐
 *  │  // ‹cycling multilingual SAQLAINAP›           │
 *  │  SAQLAIN                              [ ◯ ]   │
 *  │  AHMED P.                             [ ◉ ]   │
 *  │  Voice AI · agentic · cloud · quantum          │
 *  │  short bio                                     │
 *  │  [ pill ] [ pill ] [ pill ]                    │
 *  │  stat strip                                    │
 *  └───────────────────────────────────────────────┘
 */
const STATS = [
  { k: 'Projects',       v: '18+',  tint: 'card-proj--lime' },
  { k: 'Hackathon wins', v: '8',    tint: 'card-proj--mint' },
  { k: 'CGPA',           v: '9.25', tint: 'card-proj--gold' },
];

const HeroSection = () => {
  const [frameIdx, setFrameIdx] = useState(0);
  const [nameIdx,  setNameIdx]  = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setFrameIdx((i) => (i + 1) % PIXEL_FRAMES.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(
      () => setNameIdx((i) => (i + 1) % NAMES.length),
      3200,
    );
    return () => window.clearInterval(id);
  }, []);

  const frame = PIXEL_FRAMES[frameIdx];
  const name  = NAMES[nameIdx];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-14 pb-24 md:pt-20 md:pb-32"
    >
      <div className="wrap-lg">
        {/* eyebrow — cycling multilingual SAQLAINAP -------------------- */}
        <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-ink/60">
          <span aria-hidden>//</span>
          {/* Fixed min-width + centered baseline so different scripts
              (short Arabic vs long Devanagari) don't jitter the row. */}
          <div className="relative inline-flex items-baseline min-w-[9ch] h-5">
            <AnimatePresence mode="wait">
              <motion.span
                key={name.text}
                lang={name.lang}
                dir={name.dir}
                initial={{ opacity: 0, y: 3, filter: 'blur(3px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{    opacity: 0, y: -3, filter: 'blur(3px)' }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                className="absolute left-0 top-0 text-sm normal-case text-ink font-semibold whitespace-nowrap"
              >
                {name.text}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="opacity-40" aria-hidden>·</span>
          <span className="opacity-70">{name.script}</span>
          <span className="hidden sm:inline opacity-40" aria-hidden>·</span>
          <span className="hidden sm:inline">bangalore, IST</span>
        </div>

        {/* Two-column hero body — left has name+text+CTAs; right column
            (desktop only) holds the two discs and the three stat cards
            stacked vertically so the space beside the tagline/bio never
            reads as dead. On mobile the right-column is collapsed and
            small discs render inline beside the h1, with the stats moved
            to a full-width 3-col strip after the socials. */}
        <div className="md:flex md:items-start md:gap-8 lg:gap-12">
          <div className="md:flex-1 min-w-0">
            {/* Mobile-only inline discs beside the h1 */}
            <div className="flex items-start gap-3 sm:gap-6 md:block">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="h-hero flex-1 min-w-0 md:flex-none"
              >
                <motion.span
                  className="hero-word"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                >
                  SAQLAIN
                </motion.span>
                <motion.span
                  className="hero-word"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                >
                  AHMED&nbsp;<span className="mk mk--lime">P.</span>
                </motion.span>
              </motion.h1>

              {/* Mobile-only compact discs */}
              <div className="flex flex-col items-center gap-3 shrink-0 md:hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="breathe-circle w-[clamp(84px,22vw,120px)]"
                >
                  <div className="text-center leading-none">
                    <div className="text-[8px] font-mono tracking-widest opacity-70">STATUS</div>
                    <div className="mt-1 text-base font-condensed">OPEN</div>
                    <div className="text-[8px] font-mono tracking-widest opacity-70">TO&nbsp;WORK</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.35, type: 'spring', stiffness: 180 }}
                  className="pixel-avatar-disc w-[clamp(84px,22vw,120px)] aspect-square rounded-full border-[3px] border-ink bg-mint overflow-hidden relative"
                  aria-hidden
                >
                  <AnimatePresence mode="sync">
                    <motion.img
                      key={frame.src}
                      src={`${import.meta.env.BASE_URL}${frame.src}`}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover pixel-img"
                      draggable={false}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.94 }}
                      transition={{ duration: 0.7, ease: 'easeInOut' }}
                    />
                  </AnimatePresence>
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex gap-1">
                    {PIXEL_FRAMES.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1 w-1 rounded-full transition-colors ${
                          i === frameIdx ? 'bg-ink' : 'bg-ink/25'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* sub tagline --------------------------------------------- */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 max-w-3xl text-xl sm:text-2xl md:text-3xl font-condensed uppercase tracking-tight text-ink leading-tight"
            >
              Voice AI · agentic systems · <span className="mk mk--mint">cloud-native</span> ·
              <span className="mk mk--gold"> quantum-ML</span>.
            </motion.p>

            {/* short bio ---------------------------------------------- */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 max-w-2xl text-ink/70 leading-relaxed"
            >
              Forward Deployed Engineer intern at <span className="font-bold text-ink">Plivo</span>,
              building AI-driven comms — IVR, agentic chatbots, RAG knowledge systems and voice-vendor
              benchmarking. Previously shipped product &amp; AI features at Kroolo AI and GetCreatr.
              CNCF KCNA · Shubhra Kar scholar.
            </motion.p>

            {/* CTAs -------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link href="/arena" className="pill pill--lime pill--big">
                Enter the arena <span className="arr">→</span>
              </Link>
              <a href="#projects" className="pill pill--ghost">
                Browse projects
              </a>
              <a
                href="Saqlain-resume-25.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill--ink"
              >
                <i className="fa-solid fa-download" /> Resume
              </a>
            </motion.div>

            {/* socials + locale ------------------------------------- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex items-center gap-5 text-ink/70"
            >
              <a href={contact.github}   target="_blank" rel="noopener noreferrer" aria-label="GitHub"   className="hover:text-ink transition-colors"><FaGithub  className="text-xl" /></a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-ink transition-colors"><FaLinkedin className="text-xl" /></a>
              <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="hover:text-ink transition-colors"><SiLeetcode className="text-xl" /></a>
              <span className="mx-2 h-4 w-px bg-ink/30" />
              <span className="font-mono text-xs text-ink/60">bangalore · IST</span>
            </motion.div>
          </div>

          {/* Desktop-only right column — big discs + stat stack.
              Width matches the disc size so cards align with the discs. */}
          <aside
            className="hidden md:flex md:flex-col items-stretch gap-5 shrink-0"
            style={{ width: 'clamp(200px, 20vw, 260px)' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="breathe-circle w-full"
            >
              <div className="text-center leading-none">
                <div className="text-[10px] font-mono tracking-widest opacity-70">STATUS</div>
                <div className="mt-1 text-[clamp(1.25rem,2vw,2rem)] font-condensed">OPEN</div>
                <div className="text-[10px] font-mono tracking-widest opacity-70">TO&nbsp;WORK</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.35, type: 'spring', stiffness: 180 }}
              whileHover={{ rotate: 4, scale: 1.03 }}
              className="pixel-avatar-disc w-full aspect-square rounded-full border-[clamp(4px,0.6vw,8px)] border-ink bg-mint overflow-hidden relative"
              aria-label="Pixel-art slideshow of Saqlain"
              role="img"
            >
              <AnimatePresence mode="sync">
                <motion.img
                  key={frame.src}
                  src={`${import.meta.env.BASE_URL}${frame.src}`}
                  alt={`Pixel-art avatar of Saqlain — ${frame.label}`}
                  className="absolute inset-0 w-full h-full object-cover pixel-img"
                  draggable={false}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                />
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.span
                  key={`${frame.src}-label`}
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-mono tracking-widest bg-ink text-ivory px-2 py-0.5 rounded-full"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.35 }}
                >
                  SAQLAIN.PXL · {frame.label}
                </motion.span>
              </AnimatePresence>

              <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1">
                {PIXEL_FRAMES.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      i === frameIdx ? 'bg-ink' : 'bg-ink/25'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Stat cards stacked in the right column — fills the space
                below the avatar disc that used to read as dead white. */}
            <div className="flex flex-col gap-3 mt-1">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  className={`card-proj ${s.tint} !min-h-0 !p-4 text-center`}
                >
                  <div className="font-condensed text-4xl leading-none text-ink">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-widest text-ink/70 font-mono mt-1.5">
                    {s.k}
                  </div>
                </motion.div>
              ))}
            </div>
          </aside>
        </div>

        {/* Mobile-only stat strip — 3-col grid, hidden on md+ where the
            stats live in the right aside column. */}
        <div className="mt-12 grid grid-cols-3 gap-3 max-w-2xl md:hidden">
          {STATS.map((s) => (
            <div key={s.k} className={`card-proj ${s.tint} !min-h-0 !p-4 text-center`}>
              <div className="font-condensed text-3xl leading-none text-ink">{s.v}</div>
              <div className="text-[10px] uppercase tracking-widest text-ink/70 font-mono mt-1.5">
                {s.k}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
