import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import { certifications } from '../lib/data';

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative bg-cream">
      <div className="wrap-lg">
        <div className="section-head">
          <span className="section-head__idx">// 04</span>
          <h2 className="section-head__title">
            Continuous <span className="mk mk--lime">learning</span> log
          </h2>
          <span className="section-head__note">certs · courses</span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.title}
              className="frame p-6 card-hover flex gap-5 items-start"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-lime border-2 border-ink text-ink text-xl">
                <FaCertificate />
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-condensed text-2xl text-ink leading-tight">{cert.title}</h3>
                  <span className="tag tag--mint">{cert.achievement}</span>
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-ink/50 mb-3">
                  {cert.issuer} · {cert.period}
                </div>
                <p className="text-sm text-ink/75 leading-relaxed">{cert.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
