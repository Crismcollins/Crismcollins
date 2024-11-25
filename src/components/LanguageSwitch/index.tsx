import useLanguage from '@/app/hooks/useLanguage';
import useDataStore from '@/app/stores/data-store';
import React from 'react'

const LanguageSwitch = () => {

  const { language, setLanguage } = useLanguage();
  const setLoading = useDataStore(state => state.setLoading);

  const isEnglish = language === 'en';
  
  const handleLanguageChange = () => {
    const newLanguage = isEnglish ? 'es' : 'en';
    setLanguage(newLanguage);
    setLoading(true);
  };

  return (
    <label
      htmlFor="languageSwitcher"
      className="relative inline-flex cursor-pointer select-none items-center"
    >
      <input
        type="checkbox"
        id="languageSwitcher"
        className="sr-only"
        checked={isEnglish}
        onChange={handleLanguageChange}
      />
      <span className="label flex items-center text-sm font-medium text-gray-800 dark:text-white">
        EN
      </span>
      <span className="slider mx-2 flex h-6 w-[48px] items-center rounded-full p-0.5 duration-200 bg-background border-2 border-separator shadow-md">
        <span
          className={`dot h-4 w-4 rounded-full duration-200 transform ${
            isEnglish ? 'translate-x-0 bg-highlighted' : 'translate-x-6 bg-vibrantcoral'
          }`}
        ></span>
      </span>
      <span className="label flex items-center text-sm font-medium text-gray-800 dark:text-white">
        ES
      </span>
    </label>
  );
}

export default LanguageSwitch;
