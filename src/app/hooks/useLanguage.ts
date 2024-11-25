import en from '@/translations/en';
import useLanguageStore from '../stores/language-store';
import es from '@/translations/es';

const useLanguage = () => {
  
  const language = useLanguageStore(state => state.language);
  const setLanguage = useLanguageStore(state => state.setLanguage);

  const translator = language === 'en' ? en : es;

  return {
    language,
    setLanguage,
    translator
  }
}

export default useLanguage;