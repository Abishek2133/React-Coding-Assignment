import React from 'react';
import { useTheme , ThemeComponent } from './ThemeProvider';

const ExampleComponent = () => {
  const { theme } = useTheme(); // Use the useTheme hook to access the theme

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      {/* Your component content */}
      <ThemeComponent />
    </div>
  );
};

export default ExampleComponent;
