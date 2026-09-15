import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import { certifications } from '../lib/data';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="h-eyebrow">// certifications</div>
          <h2 className="h-display">
            Continuous <span className="text-aurora">learning</span> log.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.title}
              className="glass-strong p-6 card-hover flex gap-5 items-start"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 text-fuchsia-300 text-xl">
                <FaCertificate />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-display font-semibold text-lg text-white">{cert.title}</h3>
                  <span className="chip-cyan">{cert.achievement}</span>
                </div>
                <div className="text-xs font-mono text-white/40 mb-3">
                  {cert.issuer} · {cert.period}
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{cert.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
