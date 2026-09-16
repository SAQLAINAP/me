import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { JSX } from 'react';
import {
  FaAward, FaTrophy, FaMedal, FaAtom, FaRobot, FaLightbulb,
  FaBrain, FaShieldAlt, FaBolt, FaCode, FaGithub, FaChartLine, FaRocket,
} from 'react-icons/fa';
import { entrepreneurialAchievements, technicalAchievements, scholarships } from '@/lib/data';

type Tab = 'technical' | 'entrepreneurial' | 'scholarships';

const TABS: { id: Tab; label: string; icon: JSX.Element }[] = [
  { id: 'technical',        label: 'Wins',             icon: <FaTrophy /> },
  { id: 'entrepreneurial',  label: 'Entrepreneurial',  icon: <FaLightbulb /> },
  { id: 'scholarships',     label: 'Scholarships',     icon: <FaAward /> },
];

/* Match a title-substring → visual (icon + tint). Keeps the win grid varied
   without forcing every entry to spell out its own icon in data.ts. */
const WIN_VISUALS: { match: RegExp; icon: JSX.Element; tint: string }[] = [
  { match: /kroolo/i,      icon: <FaBrain />,     tint: 'bg-mint'  },
  { match: /kaspersky/i,   icon: <FaShieldAlt />, tint: 'bg-lime'  },
  { match: /vibe/i,        icon: <FaBolt />,      tint: 'bg-gold'  },
  { match: /august|agent/i,icon: <FaRocket />,    tint: 'bg-mint'  },
  { match: /coderush/i,    icon: <FaCode />,      tint: 'bg-lime'  },
  { match: /copilot|nano/i,icon: <FaGithub />,    tint: 'bg-gold'  },
  { match: /case-?study/i, icon: <FaChartLine />, tint: 'bg-mint'  },
];
const winVisual = (title: string) => {
  const hit = WIN_VISUALS.find((v) => v.match.test(title));
  return hit ?? { icon: <FaTrophy />, tint: 'bg-lime' };
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.04 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};
const item = {
  hidden: { y: 10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } },
};

const AchievementsSection = () => {
  const [active, setActive] = useState<Tab>('technical');

  return (
    <section id="achievements" className="py-24 relative bg-ivory">
      <div className="wrap-lg">
        <div className="section-head">
          <span className="section-head__idx">// 05</span>
          <h2 className="section-head__title">
            Wins, <span className="mk mk--gold">scholarships</span> &amp; shiny things
          </h2>
          <span className="section-head__note">
            {technicalAchievements.length} wins · {entrepreneurialAchievements.length} startup nods · {scholarships.length} scholarships
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`inline-flex items-center gap-2 ${active === t.id ? 'tag tag--lime' : 'tag'}`}
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
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {active === 'technical' &&
              technicalAchievements.map((a, i) => {
                const v = winVisual(a.title);
                return (
                  <motion.div
                    key={i}
                    variants={item}
                    whileHover={{ y: -3 }}
                    className="frame p-5 card-hover flex flex-col"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className={`shrink-0 w-11 h-11 rounded-xl border-2 border-ink ${v.tint} text-ink text-lg flex items-center justify-center`}>
                        {v.icon}
                      </div>
                      <span className="tag tag--mint whitespace-nowrap">{a.status}</span>
                    </div>
                    <h4 className="mt-3 font-condensed text-lg text-ink leading-tight">{a.title}</h4>
                    {(a as any).date && (
                      <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-ink/60">
                        {(a as any).date}
                      </div>
                    )}
                    <p className="mt-2 text-xs text-ink/70 leading-relaxed">{a.description}</p>
                    {a.tags && (
                      <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
                        {a.tags.map((t, ti) => <span key={ti} className="tag">{t}</span>)}
                      </div>
                    )}
                  </motion.div>
                );
              })}

            {active === 'entrepreneurial' &&
              entrepreneurialAchievements.map((a, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -3 }}
                  className="frame p-5 card-hover flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="shrink-0 w-11 h-11 rounded-xl border-2 border-ink bg-gold text-ink text-lg flex items-center justify-center">
                      <FaLightbulb />
                    </div>
                    <span className="tag tag--gold whitespace-nowrap">{a.status}</span>
                  </div>
                  <h4 className="mt-3 font-condensed text-lg text-ink leading-tight">{a.title}</h4>
                  {(a as any).date && (
                    <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-ink/60">
                      {(a as any).date}
                    </div>
                  )}
                  <p className="mt-2 text-xs text-ink/70 leading-relaxed">{a.description}</p>
                </motion.div>
              ))}

            {active === 'scholarships' &&
              scholarships.map((s, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ y: -3 }}
                  className="frame p-5 card-hover flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="shrink-0 w-11 h-11 rounded-xl border-2 border-ink bg-mint text-ink text-lg flex items-center justify-center">
                      {s.icon === 'medal' && <FaMedal />}
                      {s.icon === 'atom'  && <FaAtom />}
                      {s.icon === 'robot' && <FaRobot />}
                      {!['medal', 'atom', 'robot'].includes(s.icon || '') && <FaAward />}
                    </div>
                    <span className="tag tag--mint whitespace-nowrap">Scholar</span>
                  </div>
                  <h4 className="mt-3 font-condensed text-lg text-ink leading-tight">{s.title}</h4>
                  <div className="mt-1 text-[10px] font-mono uppercase tracking-widest text-ink/60">
                    {s.date}
                  </div>
                  <p className="mt-2 text-xs text-ink/70 leading-relaxed">{s.description}</p>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AchievementsSection;
