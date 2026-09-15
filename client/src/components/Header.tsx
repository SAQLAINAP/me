import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'wouter';
import { ThemeContext } from '@/context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [location] = useLocation();

  const onArena = location.startsWith('/arena');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const anchorLinks = onArena
    ? []
    : [
        { href: '#about',          label: 'About' },
        { href: '#experience',     label: 'Experience' },
        { href: '#projects',       label: 'Projects' },
        { href: '#certifications', label: 'Certs' },
        { href: '#achievements',   label: 'Awards' },
        { href: '#contact',        label: 'Contact' },
      ];

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[hsl(var(--background))]/70 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-[90%] max-w-7xl mx-auto flex justify-between items-center py-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-semibold text-xl group"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative inline-flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-black font-bold shadow-neon">
            S
          </span>
          <span className="tracking-tight">
            <span className="text-white">SAQLAIN</span>
            <span className="text-fuchsia-400">AP</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
          {anchorLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <Link
            href="/arena"
            className={`font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-md border transition-colors ${
              onArena
                ? 'text-white bg-fuchsia-500/20 border-fuchsia-500/40'
                : 'text-cyan-300 border-cyan-400/30 hover:bg-cyan-400/10'
            }`}
          >
            /arena
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="glass w-9 h-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <i className="fas fa-moon" /> : <i className="fas fa-sun" />}
          </button>

          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden glass w-9 h-9 rounded-lg flex items-center justify-center text-white/70 hover:text-white"
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 border-t border-white/5 bg-[hsl(var(--background))]/90 backdrop-blur-md ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="w-[90%] max-w-7xl mx-auto py-4 flex flex-col gap-2">
          {anchorLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-2 text-white/80 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/arena"
            onClick={() => setIsMenuOpen(false)}
            className="py-2 text-cyan-300 font-mono uppercase tracking-widest text-sm"
          >
            /arena
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
