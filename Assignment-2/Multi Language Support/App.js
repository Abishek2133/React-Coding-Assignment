import React from 'react';
import { initReactI18next } from 'react-i18next';
import i18n  from 'i18next';
import LanguageSelector from './LanguageSelector'; // Component to switch languages
import MyComponent from './MyComponent';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: require('../Multi Language Support/Translations/en.json') },
      es: { translation: require('./Translations/es.json') },
      fen: { translation: require('./Translations/fen.json') }
      // Add more languages as needed
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

const App = () => (
  <React.StrictMode>
    <LanguageSelector /> {/* Display language switcher */}
    <MyComponent/>
  </React.StrictMode>
);

export default App;