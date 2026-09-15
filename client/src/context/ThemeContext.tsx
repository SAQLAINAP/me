import { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Aurora portfolio is a dark-first design. We keep the toggle so the user can
 * flip to light mode, but default is dark unless the user has explicitly
 * opted out and saved that preference.
 */
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const wantsLight = saved === 'light';
    setIsDarkMode(!wantsLight);
    document.documentElement.classList.toggle('dark', !wantsLight);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('dark', next);
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
