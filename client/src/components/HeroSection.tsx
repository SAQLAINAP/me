import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'wouter';
import { contact } from '@/lib/data';

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

          {/* breathing circular badge — floats top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden md:flex breathe-circle absolute top-2 right-2 md:right-6 w-[clamp(120px,15vw,220px)]"
          >
            <div className="text-center leading-none">
              <div className="text-[10px] font-mono tracking-widest opacity-70">STATUS</div>
              <div className="mt-1 text-[clamp(1.25rem,2vw,2rem)] font-condensed">OPEN</div>
              <div className="text-[10px] font-mono tracking-widest opacity-70">TO&nbsp;WORK</div>
            </div>
          </motion.div>
        </div>

        {/* sub tagline --------------------------------------------------- */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-3xl text-2xl md:text-3xl font-condensed uppercase tracking-tight text-ink leading-tight"
        >
          Building at the <span className="mk mk--mint">edge</span> — voice AI,
          quantum-ML, cloud-native <span className="mk mk--gold">open source</span>.
        </motion.p>

        {/* short bio ---------------------------------------------------- */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl text-ink/70 leading-relaxed"
        >
          AI engineer @ <span className="font-bold text-ink">Plivo</span>,
          shipping real-time voice AI infrastructure. Two-time CNCF Shubhra Kar
          scholar, four-time hackathon winner, and permanently curious about the
          messy middle where product, model and infra meet.
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
            { k: 'Projects',       v: '14+',  tint: 'card-proj--lime' },
            { k: 'Hackathon wins', v: '4',    tint: 'card-proj--mint' },
            { k: 'CGPA',           v: '9.55', tint: 'card-proj--gold' },
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
