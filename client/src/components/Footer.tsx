import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contact } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 py-12 mt-16">
      <div className="w-[90%] max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        <div>
          <Link href="/" className="flex items-center gap-2 font-display font-semibold text-lg">
            <span className="h-7 w-7 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 flex items-center justify-center text-black">S</span>
            <span><span className="text-white">SAQLAIN</span><span className="text-fuchsia-400">AP</span></span>
          </Link>
          <p className="mt-3 text-sm text-white/60 max-w-xs">
            Portfolio v3 · built with React, Vite, Three.js and a lot of espresso. Hosted on GitHub Pages.
          </p>
        </div>

        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">Elsewhere</div>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            <a href={contact.github}   target="_blank" rel="noopener noreferrer" className="hover:text-white inline-flex items-center gap-2"><FaGithub /> github/SAQLAINAP</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white inline-flex items-center gap-2"><FaLinkedin /> linkedin/saqlain-ahmed-p</a>
            <a href={`mailto:${contact.email}`} className="hover:text-white inline-flex items-center gap-2"><i className="fa-regular fa-envelope" /> {contact.email}</a>
          </div>
        </div>

        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-3">Navigate</div>
          <div className="flex flex-col gap-2 text-sm text-white/70">
            {[
              { href: '#home',     label: 'Home' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact',  label: 'Contact' },
            ].map((l) => (
              <motion.a
                key={l.href}
                href={l.href}
                className="hover:text-white"
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {l.label}
              </motion.a>
            ))}
            <Link href="/arena" className="text-cyan-300 hover:text-cyan-200">/arena — project deep-dives</Link>
          </div>
        </div>
      </div>

      <div className="w-[90%] max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40 font-mono">
        <span>© {new Date().getFullYear()} Saqlain Ahmed P — SAQLAINAP</span>
        <span>made in bangalore · v3.0 · aurora edition</span>
      </div>
    </footer>
  );
};

export default Footer;
