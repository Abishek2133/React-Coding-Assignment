import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('key_in_translation_file')}</p>
    </div>
  );
};

export default MyComponent;