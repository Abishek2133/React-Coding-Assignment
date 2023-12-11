import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations for different languages
const resources = {
  en: {
    translation: {
      greeting: 'Hello!',
      // Add more translation keys and values for English
    },
  },
  fr: {
    translation: {
      greeting: 'Bonjour!',
      // Add more translation keys and values for French
    },
  },
  // Add more languages as needed
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation not found
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
