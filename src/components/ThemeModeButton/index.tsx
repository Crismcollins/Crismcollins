'use client'
import useAudioStore from '@/app/stores/audio-store';
import useThemeStore from '@/app/stores/theme-store';
import { useEffect } from 'react';

const ThemeModeButton = () => {
  
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);
  const playSound = useAudioStore(state => state.playAudio);

  const handleChangeThemeMode = () => {
    playSound('enter_back');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <button
      onClick={handleChangeThemeMode}
      className={`relative flex items-center p-2 w-14 h-6 border-2 border-separator bg-background rounded-full transition-colors duration-300 shadow-md`}
    >
      <span
        className={`absolute left-0.5 flex items-center justify-center w-4 h-4 rounded-full transition-transform duration-300 ${theme === 'light' ? 'translate-x-0 bg-vibrantcoral' : 'translate-x-8 bg-highlighted'
          }`}
      >
        {theme === 'light' ? (
          <span className="material-icons text-brightamber !text-xs">light_mode</span>
        ) : (
          <span className="material-icons text-brightamber !text-sm">dark_mode</span>
        )}
      </span>
    </button>
  );
};

export default ThemeModeButton;
