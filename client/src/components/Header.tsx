import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <header className={`sticky top-0 w-full bg-light-bg dark:bg-dark-bg z-50 py-4 border-b-4 border-black ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="font-poppins font-bold text-3xl">
          <span className="text-light-primary dark:text-dark-primary">S</span>aqlain
        </h1>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="font-medium hover:text-light-primary dark:hover:text-dark-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="neo-brutal p-2 bg-light-bg dark:bg-dark-bg"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <i className="fas fa-moon"></i>
            ) : (
              <i className="fas fa-sun"></i>
            )}
          </button>
          
          <button 
            className="md:hidden neo-brutal p-2 bg-light-bg dark:bg-dark-bg" 
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-light-bg dark:bg-dark-bg border-t-4 border-black ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="font-medium py-2"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
