import React, { createContext, useContext, useState } from 'react';

// Create the context
const StateContext = createContext();

// Create the provider
export const StateProvider = ({ children }) => {
  const [state, setState] = useState({}); // Your initial state

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};

// Create a custom hook for using the state
export const useStateValue = () => useContext(StateContext);
