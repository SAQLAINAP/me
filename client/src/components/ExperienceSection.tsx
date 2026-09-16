import { motion } from 'framer-motion';
import type { JSX } from 'react';
import {
  FaMicrophoneAlt, FaBrain, FaBolt, FaCode, FaRocket, FaBullseye,
} from 'react-icons/fa';
import { experiences } from '@/lib/data';

/* Per-company visual: icon + card tint. Falls back to a neutral cream card
   with a code icon if the company key isn't in the map. */
const COMPANY_ICON: Record<string, JSX.Element> = {
  'Plivo':                        <FaMicrophoneAlt />,
  'Kroolo AI':                    <FaBrain />,
  'GetCreatr AI':                 <FaBolt />,
  'Coding Ninjas & GeeksforGeeks':<FaCode />,
  'Spawn Labs':                   <FaRocket />,
  'PointBlank':                   <FaBullseye />,
};
const COMPANY_TINT: Record<string, string> = {
  'Plivo':                        'bg-lime',
  'Kroolo AI':                    'bg-mint',
  'GetCreatr AI':                 'bg-gold',
  'Coding Ninjas & GeeksforGeeks':'bg-cream',
  'Spawn Labs':                   'bg-mint',
  'PointBlank':                   'bg-lime',
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-cream">
      <div className="wrap-lg">
        <div className="section-head">
          <span className="section-head__idx">// 02</span>
          <h2 className="section-head__title">
            Places I've <span className="mk mk--mint">shipped</span> from
          </h2>
          <span className="section-head__note">timeline · newest first</span>
        </div>

        <div className="relative pl-8 md:pl-10">
          {experiences.map((exp, index) => {
            const icon = COMPANY_ICON[exp.company] ?? <FaCode />;
            const tint = COMPANY_TINT[exp.company] ?? 'bg-ivory';
            return (
              <motion.div
                key={index}
                className="timeline-item relative mb-10 last:mb-0 pl-4"
                initial={{ opacity: 0, x: -14, y: 8 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="frame p-6 card-hover">
                  {/* Header row: icon badge + title + period pill */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div className="flex items-start gap-4">
                      <motion.span
                        className={`shrink-0 w-12 h-12 rounded-xl border-2 border-ink ${tint} text-ink text-xl flex items-center justify-center`}
                        whileHover={{ rotate: -6, scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        aria-hidden
                      >
                        {icon}
                      </motion.span>
                      <div>
                        <h3 className="font-condensed text-2xl text-ink leading-tight">
                          {exp.position}
                        </h3>
                        <div className="mt-1 text-xs font-mono uppercase tracking-widest text-ink/70">
                          <span className="font-bold text-ink">{exp.company}</span>
                          {exp.location && (
                            <>
                              <span className="text-ink/40 mx-2">·</span>
                              <span>{exp.location}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className="tag tag--lime self-start md:self-auto whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-ink/80">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-ink mt-1">▸</span>
                        <span dangerouslySetInnerHTML={{ __html: r }} />
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.skills.map((s, i) => (
                      <span key={i} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
