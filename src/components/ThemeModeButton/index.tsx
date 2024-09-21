'use client'
import useThemeStore from '@/app/stores/theme-store';
import { isDarkMode } from '@/helpers/themes';
import { ThemeMode } from '@/types/theme';
import { useEffect, useState } from 'react';

const ThemeModeButton = () => {

  const isDarkModeDefault:ThemeMode = isDarkMode() ? 'dark' : 'light';
  
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleChangeThemeMode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  useEffect(() => {
    setTheme(isDarkModeDefault);
  }, [isDarkModeDefault])

  return (
    <button
      onClick={handleChangeThemeMode}
      className={`relative flex items-center p-2 w-16 h-8 bg-foreground rounded-full transition-colors duration-300`}
    >
      <span
        className={`absolute left-1 flex items-center justify-center w-6 h-6 bg-background rounded-full transition-transform duration-300 ${theme === 'light' ? 'translate-x-0' : 'translate-x-8'
          }`}
      >
        {theme === 'light' ? (
          <span className="material-icons text-secondary">light_mode</span>
        ) : (
          <span className="material-icons text-secondary">dark_mode</span>
        )}
      </span>
    </button>
  );
};

export default ThemeModeButton;
