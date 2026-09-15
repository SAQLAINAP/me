import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import { contact } from '@/lib/data';

/**
 * Contact section — the SAQLAINAP site is static (hosted on GitHub Pages),
 * so we removed the API-backed form and let visitors reach out directly via
 * email / socials. The mailto link pre-fills subject + body so it's still one
 * tap on mobile.
 */
const ContactSection = () => {
  const mailto =
    `mailto:${contact.email}` +
    `?subject=${encodeURIComponent('Hey Saqlain — reaching out via saqlainap.github.io')}` +
    `&body=${encodeURIComponent('Hi Saqlain,\n\n')}`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="w-[90%] max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="h-eyebrow">// contact</div>
          <h2 className="h-display">
            Let's <span className="text-aurora">build</span> something.
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl">
            I'm always up for a chat about voice AI, agents, quantum-ML, or
            anything cloud-native. The fastest way to reach me is email.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Primary CTA card */}
          <motion.a
            href={mailto}
            className="glass-strong p-8 flex flex-col justify-between h-full card-hover"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="pill mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                open to collaborations
              </div>
              <div className="text-3xl md:text-4xl font-display font-semibold text-white leading-tight">
                {contact.email}
              </div>
              <p className="mt-3 text-white/60 text-sm">
                Click to open a pre-drafted email. I usually reply within a day.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-cyan-300">
              <FaEnvelope /> send email <span aria-hidden>→</span>
            </div>
          </motion.a>

          {/* Socials card */}
          <motion.div
            className="glass-strong p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
              elsewhere on the web
            </div>
            <ul className="space-y-4">
              <SocialRow
                icon={<FaGithub />}
                title="GitHub"
                handle={contact.githubHandle}
                href={contact.github}
              />
              <SocialRow
                icon={<FaLinkedin />}
                title="LinkedIn"
                handle={contact.linkedinHandle}
                href={contact.linkedin}
              />
              <SocialRow
                icon={<SiLinktree />}
                title="Linktree"
                handle="linktr.ee/saqlainap"
                href={contact.linktree}
              />
            </ul>

            <div className="mt-8 pt-6 border-t border-white/5 text-xs text-white/40 font-mono">
              this site is SAQLAINAP — my personal handle. work / plivo enquiries welcome via email.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function SocialRow({
  icon,
  title,
  handle,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  handle: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
      >
        <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-white/5 text-white/80 group-hover:text-white group-hover:bg-white/10 text-lg">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-sm text-white/60">{title}</div>
          <div className="text-white font-mono text-sm">{handle}</div>
        </div>
        <span className="text-white/30 group-hover:text-white/80 transition-colors">↗</span>
      </a>
    </li>
  );
}

export default ContactSection;
