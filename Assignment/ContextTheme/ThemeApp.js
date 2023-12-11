import React from 'react';
import { ThemeProvider } from './ThemeProvider';

const ThemeApp = () => {
  return (
    <ThemeProvider>
      {<h1>Hello world</h1>}
    </ThemeProvider>
  );
};

export default ThemeApp;