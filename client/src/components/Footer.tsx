import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contact } from '@/lib/data';

const Footer = () => {
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent("Let's build something")}`;

  return (
    <footer className="relative mt-24 bg-ink text-ivory">
      {/* ============ Giant CTA strip ============ */}
      <div className="wrap pt-20 pb-10">
        <div className="text-xs font-mono uppercase tracking-widest text-ivory/50 mb-6">
          // next
        </div>
        <motion.a
          href={mailto}
          className="block h-mega-xl group"
          style={{ color: 'var(--ivory)' }}
          whileHover={{ x: 6 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span>let's&nbsp;</span>
          <span className="mk mk--lime">ship</span>
          <span>.&nbsp;</span>
          <span
            aria-hidden
            className="inline-block text-lime group-hover:translate-x-3 transition-transform duration-300"
          >→</span>
        </motion.a>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ivory/70 font-mono">
          <a href={mailto} className="hover:text-lime underline underline-offset-4 decoration-ivory/30">
            {contact.email}
          </a>
          <span className="text-ivory/30">·</span>
          <span>reply within 24h · voice AI / agents / quantum welcome</span>
        </div>
      </div>

      <hr className="rule-dashed w-[92%] max-w-[1280px] mx-auto" style={{ borderColor: 'var(--olive)' }} />

      {/* ============ Meta grid ============ */}
      <div className="wrap py-12 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-lime text-ink font-condensed font-bold text-lg leading-none border-2 border-lime">
              S
            </span>
            <span className="font-mono text-sm font-bold uppercase tracking-widest">
              SAQLAIN<span className="bg-lime text-ink px-1">AP</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-ivory/60 max-w-xs leading-relaxed">
            Portfolio v3.3 · built with React, Vite &amp; Tailwind, hosted on GitHub Pages.
            Aesthetic borrowed with love from Montgomery.
          </p>
        </div>

        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-ivory/40 mb-4">Elsewhere</div>
          <div className="flex flex-col gap-3 text-sm text-ivory/80 font-mono">
            <a href={contact.github}   target="_blank" rel="noopener noreferrer" className="hover:text-lime inline-flex items-center gap-3"><FaGithub /> github/SAQLAINAP</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-lime inline-flex items-center gap-3"><FaLinkedin /> linkedin/saqlain-ahmed-p</a>
            <a href={`mailto:${contact.email}`} className="hover:text-lime inline-flex items-center gap-3"><i className="fa-regular fa-envelope" /> {contact.email}</a>
          </div>
        </div>

        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-ivory/40 mb-4">Navigate</div>
          <div className="flex flex-col gap-3 text-sm text-ivory/80 font-mono">
            {[
              { href: '#home',     label: 'Home' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact',  label: 'Contact' },
            ].map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="hover:text-lime"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {l.label}
              </motion.a>
            ))}
            <Link href="/arena" className="text-lime hover:text-mint">/arena — project deep-dives</Link>
          </div>
        </div>
      </div>

      <div className="wrap pb-6 pt-4 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-ivory/40 font-mono">
        <span>© {new Date().getFullYear()} Saqlain Ahmed P — SAQLAINAP</span>
        <span>made in bangalore · v3.3 · brutalist</span>
      </div>
    </footer>
  );
};

export default Footer;
