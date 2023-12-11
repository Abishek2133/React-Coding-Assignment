import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import the i18n configuration

const I18nApp = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>French</button>
      {/* Add more language buttons as needed */}
    </div>
  );
};

export default I18nApp;
