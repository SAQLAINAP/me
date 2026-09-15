import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'wouter';
import { contact } from '@/lib/data';

const AuroraWorld = lazy(() => import('./three/AuroraWorld'));

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center py-16 md:py-24 overflow-hidden">
      <div className="w-[90%] max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT: identity ---------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-eyebrow">// saqlainap · portfolio v3</div>

          <h1 className="font-display font-semibold leading-[1.02] tracking-tight">
            {/* Name — fluid size, always one line */}
            <span className="block whitespace-nowrap text-white text-[clamp(2.25rem,6.2vw,4.75rem)]">
              Saqlain Ahmed P
            </span>
            {/* Tagline — one line, fluid, aurora gradient */}
            <span className="mt-1 block whitespace-nowrap text-aurora text-[clamp(1.75rem,5vw,3.75rem)]">
              building at the edge.
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
            AI engineer @ <span className="text-white font-medium">Plivo</span>,
            working on real-time voice AI. I like <span className="text-white">quantum computing</span>,
            cloud-native <span className="text-white">open source</span>, and
            shipping small things fast.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/arena" className="btn-neon">
              Enter the Arena <span aria-hidden>→</span>
            </Link>
            <a href="#projects" className="btn-ghost">Browse Projects</a>
            <a href="Saqlain-resume-25.pdf" target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <i className="fa-solid fa-download" /> Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-white/70">
            <a href={contact.github}   target="_blank" rel="noopener noreferrer" aria-label="GitHub"   className="hover:text-white transition-colors"><FaGithub  className="text-xl" /></a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors"><FaLinkedin className="text-xl" /></a>
            <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="hover:text-white transition-colors"><SiLeetcode className="text-xl" /></a>
            <span className="mx-2 h-4 w-px bg-white/15" />
            <span className="font-mono text-xs text-white/50">bangalore · IST</span>
          </div>

          {/* stat strip */}
          <div className="mt-10 grid grid-cols-3 gap-3 max-w-lg">
            {[
              { k: 'Projects', v: '14+' },
              { k: 'Hackathon wins', v: '4' },
              { k: 'CGPA', v: '9.55' },
            ].map((s) => (
              <div key={s.k} className="glass p-4 text-center">
                <div className="font-display text-2xl md:text-3xl text-white">{s.v}</div>
                <div className="text-[11px] uppercase tracking-widest text-white/50 font-mono mt-1">{s.k}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT: 3D world -------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-strong overflow-hidden rounded-3xl relative"
        >
          <Suspense
            fallback={(
              <div className="h-[440px] md:h-[520px] w-full flex items-center justify-center text-white/50 font-mono text-sm">
                booting scene…
              </div>
            )}
          >
            <AuroraWorld />
          </Suspense>
        </motion.div>
      </div>

      {/* soft edge fade */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade z-0" />
    </section>
  );
};

export default HeroSection;
