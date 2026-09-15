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
    <section id="achievements" className="py-24 relative bg-ivory">
      <div className="wrap-lg">
        <div className="section-head">
          <span className="section-head__idx">// 05</span>
          <h2 className="section-head__title">
            Wins, <span className="mk mk--gold">scholarships</span> &amp; shiny things
          </h2>
          <span className="section-head__note">technical · entrepreneurial · scholarships</span>
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {active === 'technical' &&
              technicalAchievements.map((a, i) => (
                <motion.div key={i} variants={item} className="frame p-5 card-hover relative">
                  <span className="absolute top-3 right-3 tag tag--mint">{a.status}</span>
                  <h4 className="font-condensed text-xl text-ink pr-20 leading-tight">{a.title}</h4>
                  <p className="mt-2 text-sm text-ink/75 leading-relaxed">{a.description}</p>
                  {a.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {a.tags.map((t, ti) => <span key={ti} className="tag">{t}</span>)}
                    </div>
                  )}
                </motion.div>
              ))}

            {active === 'entrepreneurial' &&
              entrepreneurialAchievements.map((a, i) => (
                <motion.div key={i} variants={item} className="frame p-5 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center bg-gold border-2 border-ink text-ink text-lg">
                      <FaLightbulb />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-condensed text-xl text-ink leading-tight">{a.title}</h4>
                        <span className="tag tag--gold">{a.status}</span>
                      </div>
                      {(a as any).date && (
                        <div className="text-xs font-mono uppercase tracking-widest text-ink/50 mt-1">{(a as any).date}</div>
                      )}
                      <p className="mt-2 text-sm text-ink/75 leading-relaxed">{a.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

            {active === 'scholarships' &&
              scholarships.map((s, i) => (
                <motion.div key={i} variants={item} className="frame p-5 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center bg-mint border-2 border-ink text-ink text-lg">
                      {s.icon === 'medal' && <FaMedal />}
                      {s.icon === 'atom'  && <FaAtom />}
                      {s.icon === 'robot' && <FaRobot />}
                      {!['medal', 'atom', 'robot'].includes(s.icon || '') && <FaAward />}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-condensed text-xl text-ink leading-tight">{s.title}</h4>
                      <div className="text-xs font-mono uppercase tracking-widest text-ink/50 mt-1">{s.date}</div>
                      <p className="mt-2 text-sm text-ink/75 leading-relaxed">{s.description}</p>
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
