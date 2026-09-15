import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';
import { contact } from '@/lib/data';

const ContactSection = () => {
  const mailto =
    `mailto:${contact.email}` +
    `?subject=${encodeURIComponent('Hey Saqlain — reaching out via saqlainap.github.io')}` +
    `&body=${encodeURIComponent('Hi Saqlain,\n\n')}`;

  return (
    <section id="contact" className="py-24 relative bg-cream">
      <div className="wrap">
        <div className="section-head">
          <span className="section-head__idx">// 06</span>
          <h2 className="section-head__title">
            Let's <span className="mk mk--lime">build</span> something
          </h2>
          <span className="section-head__note">email · github · linkedin</span>
        </div>

        <p className="text-ink/70 max-w-2xl mb-10">
          I'm always up for a chat about voice AI, agents, quantum-ML, or anything
          cloud-native. The fastest way to reach me is email.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Primary CTA card ------------------------------------------------ */}
          <motion.a
            href={mailto}
            className="card-proj card-proj--lime relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="inline-flex items-center gap-2 tag mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-ink animate-pulse" />
                open to collaborations
              </div>
              <div className="font-condensed text-4xl md:text-5xl uppercase text-ink leading-none">
                {contact.email}
              </div>
              <p className="mt-4 text-ink/70 text-sm">
                Click to open a pre-drafted email. I usually reply within a day.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-ink">
              <FaEnvelope /> send email <span aria-hidden>→</span>
            </div>
          </motion.a>

          {/* Socials card ---------------------------------------------------- */}
          <motion.div
            className="frame p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-ink/50 mb-4">
              elsewhere on the web
            </div>
            <ul className="space-y-4">
              <SocialRow icon={<FaGithub />}   title="GitHub"   handle={contact.githubHandle}   href={contact.github} />
              <SocialRow icon={<FaLinkedin />} title="LinkedIn" handle={contact.linkedinHandle} href={contact.linkedin} />
              <SocialRow icon={<SiLinktree />} title="Linktree" handle="linktr.ee/saqlainap"     href={contact.linktree} />
            </ul>

            <div className="mt-8 pt-6 border-t-2 border-dashed border-sage text-xs text-ink/60 font-mono uppercase tracking-widest">
              this site is SAQLAINAP — my personal handle. work / plivo enquiries welcome via email.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function SocialRow({
  icon, title, handle, href,
}: {
  icon: React.ReactNode; title: string; handle: string; href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-3 rounded-xl border-2 border-transparent hover:border-ink hover:bg-lime/40 transition-colors group"
      >
        <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-ivory border-2 border-ink text-ink text-lg">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-xs font-mono uppercase tracking-widest text-ink/60">{title}</div>
          <div className="text-ink font-mono text-sm">{handle}</div>
        </div>
        <span className="text-ink/40 group-hover:text-ink transition-colors">↗</span>
      </a>
    </li>
  );
}

export default ContactSection;
