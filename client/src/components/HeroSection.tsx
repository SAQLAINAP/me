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

/**
 * Hero — Montgomery-inspired.
 *
 * Layout:
 *  ┌───────────────────────────────────────────────┐
 *  │  // eyebrow                                    │
 *  │  SAQLAIN                              [ ◯ ]   │
 *  │  AHMED P.                                      │
 *  │  building at the [mark]edge[/mark].            │
 *  │                                                │
 *  │  short bio                                     │
 *  │  [ pill ] [ pill ] [ pill ]                    │
 *  │                                                │
 *  │  stat strip                                    │
 *  └───────────────────────────────────────────────┘
 */
const HeroSection = () => {
  const [frameIdx, setFrameIdx] = useState(0);
  useEffect(() => {
    const id = window.setInterval(
      () => setFrameIdx((i) => (i + 1) % PIXEL_FRAMES.length),
      2600,
    );
    return () => window.clearInterval(id);
  }, []);
  const frame = PIXEL_FRAMES[frameIdx];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-14 pb-24 md:pt-20 md:pb-32"
    >
      <div className="wrap-lg">
        {/* eyebrow ------------------------------------------------------- */}
        <div className="flex items-baseline gap-3 mb-8 font-mono text-xs uppercase tracking-widest text-ink/60">
          <span>// saqlainap · portfolio v3</span>
          <span className="hidden md:inline">— based in bangalore, IST</span>
        </div>

        {/* main giant heading + circle badge --------------------------- */}
        <div className="relative">
          {/* On mobile, render the pair of discs above the heading so they
              stay visible; on md+ they float top-right of the h1. */}
          <div className="flex md:hidden items-center justify-center gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="breathe-circle w-24 h-24"
            >
              <div className="text-center leading-none">
                <div className="text-[8px] font-mono tracking-widest opacity-70">STATUS</div>
                <div className="mt-0.5 text-base font-condensed">OPEN</div>
                <div className="text-[8px] font-mono tracking-widest opacity-70">TO&nbsp;WORK</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.35, type: 'spring', stiffness: 180 }}
              className="pixel-avatar-disc w-24 h-24 rounded-full border-4 border-ink bg-mint overflow-hidden relative"
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
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex gap-0.5">
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

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="h-hero"
          >
            <span className="block">SAQLAIN</span>
            <span className="block">
              AHMED&nbsp;<span className="mk mk--lime">P.</span>
            </span>
          </motion.h1>

          {/* breathing circular badge + pixel-art avatar — stacked on right */}
          <div className="hidden md:flex flex-col items-center gap-4 absolute top-2 right-2 md:right-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="breathe-circle w-[clamp(120px,15vw,220px)]"
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
              className="pixel-avatar-disc w-[clamp(120px,15vw,220px)] aspect-square rounded-full border-[clamp(4px,0.6vw,8px)] border-ink bg-mint overflow-hidden relative"
              aria-label="Pixel-art slideshow of Saqlain"
              role="img"
            >
              {/* crossfade slideshow of pixel-art frames */}
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

              {/* frame label chip — swaps in sync with the image */}
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

              {/* progress dots */}
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
          </div>
        </div>

        {/* sub tagline --------------------------------------------------- */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-3xl text-2xl md:text-3xl font-condensed uppercase tracking-tight text-ink leading-tight"
        >
          Voice AI · agentic systems · <span className="mk mk--mint">cloud-native</span> ·
          <span className="mk mk--gold"> quantum-ML</span>.
        </motion.p>

        {/* short bio ---------------------------------------------------- */}
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

        {/* CTAs ---------------------------------------------------------- */}
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

        {/* socials + locale --------------------------------------------- */}
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

        {/* stat strip --------------------------------------------------- */}
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-2xl">
          {[
            { k: 'Projects',       v: '18+',  tint: 'card-proj--lime' },
            { k: 'Hackathon wins', v: '8',    tint: 'card-proj--mint' },
            { k: 'CGPA',           v: '9.25', tint: 'card-proj--gold' },
          ].map((s) => (
            <div key={s.k} className={`card-proj ${s.tint} !min-h-0 !p-5 text-center`}>
              <div className="font-condensed text-4xl md:text-5xl leading-none text-ink">{s.v}</div>
              <div className="text-[11px] uppercase tracking-widest text-ink/70 font-mono mt-2">
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
