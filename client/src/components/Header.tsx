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
          ? 'bg-ivory/95 dark:bg-[var(--ivory)]/95 backdrop-blur-md border-b-2 border-ink'
          : 'bg-transparent border-b-2 border-transparent'
      }`}
    >
      <div className="wrap-lg flex justify-between items-center py-4">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="inline-flex items-center justify-center h-9 w-9 rounded-md bg-ink text-lime font-condensed font-bold text-lg leading-none border-2 border-ink">
            S
          </span>
          <span className="font-mono text-sm font-bold uppercase tracking-widest text-ink">
            SAQLAIN<span className="bg-lime px-1">AP</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-ink/80">
          {anchorLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative hover:text-ink transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-ink hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/arena"
            className={onArena ? 'pill pill--lime pill--sm' : 'pill pill--ghost pill--sm'}
          >
            /arena
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="h-9 w-9 rounded-md border-2 border-ink bg-ivory dark:bg-[var(--cream)] text-ink flex items-center justify-center transition hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[3px_3px_0_var(--ink)]"
            aria-label="Toggle theme"
            title={isDarkMode ? 'switch to light' : 'switch to dark'}
          >
            {isDarkMode ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
          </button>

          <button
            onClick={() => setIsMenuOpen((s) => !s)}
            className="md:hidden h-9 w-9 rounded-md border-2 border-ink bg-ivory dark:bg-[var(--cream)] text-ink flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 border-t-2 border-ink bg-ivory dark:bg-[var(--cream)] ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="wrap-lg py-4 flex flex-col gap-3 font-mono text-sm uppercase tracking-widest text-ink">
          {anchorLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className="py-1 hover:text-ink/60"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/arena"
            onClick={() => setIsMenuOpen(false)}
            className="py-1 text-ink bg-lime inline-block px-2 rounded-sm w-max"
          >
            /arena
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
