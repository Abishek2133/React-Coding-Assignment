import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <p>{t('intro')}</p>
      <p>{t('language')}</p>
    </div>
  );
};

export default MyComponent;
