import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="h-eyebrow">// experience</div>
          <h2 className="h-display">
            Places I've <span className="text-aurora">shipped</span> from.
          </h2>
        </div>

        <div className="relative pl-8 md:pl-10 border-l border-white/10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="timeline-item relative mb-10 last:mb-0 pl-4"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="glass-strong p-6 card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-xl text-white">
                    {experience.position}
                  </h3>
                  <span className="pill text-cyan-200 border-cyan-400/30 bg-cyan-400/5 self-start md:self-auto">
                    {experience.period}
                  </span>
                </div>

                <div className="text-sm text-white/70 mb-4 flex items-center gap-2">
                  <span className="font-medium text-white">{experience.company}</span>
                  {experience.location && (
                    <>
                      <span className="text-white/30">·</span>
                      <span>{experience.location}</span>
                    </>
                  )}
                </div>

                <ul className="space-y-2 text-sm text-white/75">
                  {experience.responsibilities.map((r, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-300 mt-1">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: r }} />
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {experience.skills.map((s, i) => (
                    <span key={i} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
