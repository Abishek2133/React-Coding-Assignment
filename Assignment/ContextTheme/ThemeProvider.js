import React, { createContext, useState, useContext } from 'react';

// Creating a ThemeContext
const ThemeContext = createContext();

// Creating a provider to manage the theme state
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the ThemeContext
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Example usage of the theme in a component
const ThemeComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1>Theme Example</h1>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export { ThemeProvider, useTheme, ThemeComponent };
