import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaTrophy, FaMedal, FaAtom, FaRobot, FaLightbulb } from 'react-icons/fa';
import { entrepreneurialAchievements, technicalAchievements, scholarships } from '@/lib/data';

type Tab = 'technical' | 'entrepreneurial' | 'scholarships';

const TABS: { id: Tab; label: string; icon: JSX.Element }[] = [
  { id: 'technical',        label: 'Technical',        icon: <FaTrophy /> },
  { id: 'entrepreneurial',  label: 'Entrepreneurial',  icon: <FaLightbulb /> },
  { id: 'scholarships',     label: 'Scholarships',     icon: <FaAward /> },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};
const item = {
  hidden: { y: 12, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.25 } },
};

const AchievementsSection = () => {
  const [active, setActive] = useState<Tab>('scholarships');

  return (
    <section id="achievements" className="py-24 relative">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="h-eyebrow">// awards</div>
          <h2 className="h-display">
            Wins, <span className="text-aurora">scholarships</span> & shiny things.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono uppercase tracking-widest border transition-colors ${
                active === t.id
                  ? 'bg-white text-black border-white'
                  : 'text-white/70 border-white/15 hover:border-white/40 hover:text-white'
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={container}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {active === 'technical' &&
              technicalAchievements.map((a, i) => (
                <motion.div key={i} variants={item} className="glass-strong p-5 card-hover relative">
                  <span className="absolute top-3 right-3 pill text-emerald-300 border-emerald-400/30 bg-emerald-400/10">
                    {a.status}
                  </span>
                  <h4 className="font-display text-lg font-semibold text-white pr-16">{a.title}</h4>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed">{a.description}</p>
                  {a.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {a.tags.map((t, ti) => <span key={ti} className="chip">{t}</span>)}
                    </div>
                  )}
                </motion.div>
              ))}

            {active === 'entrepreneurial' &&
              entrepreneurialAchievements.map((a, i) => (
                <motion.div key={i} variants={item} className="glass-strong p-5 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center bg-fuchsia-500/15 text-fuchsia-300 text-lg">
                      <FaLightbulb />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-display text-lg font-semibold text-white">{a.title}</h4>
                        <span className="chip-rose">{a.status}</span>
                      </div>
                      {(a as any).date && (
                        <div className="text-xs font-mono text-white/40 mt-1">{(a as any).date}</div>
                      )}
                      <p className="mt-2 text-sm text-white/65 leading-relaxed">{a.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

            {active === 'scholarships' &&
              scholarships.map((s, i) => (
                <motion.div key={i} variants={item} className="glass-strong p-5 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center bg-cyan-400/15 text-cyan-300 text-lg">
                      {s.icon === 'medal' && <FaMedal />}
                      {s.icon === 'atom'  && <FaAtom />}
                      {s.icon === 'robot' && <FaRobot />}
                      {!['medal', 'atom', 'robot'].includes(s.icon || '') && <FaAward />}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display text-lg font-semibold text-white leading-tight">{s.title}</h4>
                      <div className="text-xs font-mono text-white/40 mt-1">{s.date}</div>
                      <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AchievementsSection;
