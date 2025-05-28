import React from 'react';
import { Sun, Moon } from 'lucide-react';
import '../styles/theme-toggle.css';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <>
          <Moon className="theme-icon" />
          <span className="theme-label">Dark</span>
        </>
      ) : (
        <>
          <Sun className="theme-icon" />
          <span className="theme-label">Light</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;