import { motion } from 'framer-motion';
import { experiences } from '@/lib/data';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-cream">
      <div className="wrap">
        <div className="section-head">
          <span className="section-head__idx">// 02</span>
          <h2 className="section-head__title">
            Places I've <span className="mk mk--mint">shipped</span> from
          </h2>
          <span className="section-head__note">timeline · newest first</span>
        </div>

        <div className="relative pl-8 md:pl-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="timeline-item relative mb-10 last:mb-0 pl-4"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="frame p-6 card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="font-condensed text-2xl text-ink leading-tight">
                    {experience.position}
                  </h3>
                  <span className="tag tag--lime self-start md:self-auto">{experience.period}</span>
                </div>

                <div className="text-sm text-ink/70 mb-4 font-mono uppercase tracking-wide">
                  <span className="font-bold text-ink">{experience.company}</span>
                  {experience.location && (
                    <>
                      <span className="text-ink/40 mx-2">·</span>
                      <span>{experience.location}</span>
                    </>
                  )}
                </div>

                <ul className="space-y-2 text-sm text-ink/80">
                  {experience.responsibilities.map((r, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-ink mt-1">▸</span>
                      <span dangerouslySetInnerHTML={{ __html: r }} />
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {experience.skills.map((s, i) => (
                    <span key={i} className="tag">{s}</span>
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
