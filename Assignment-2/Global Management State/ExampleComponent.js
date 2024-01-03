import React from 'react';
import { useStateValue } from './StateContext';

const ExampleComponent = () => {
  const { state, setState } = useStateValue();

  const handleStateChange = () => {
    // Update the global state
    setState({ ...state, newKey: 'newValue' });
  };

  return (
    <div>
      <p>State data: {JSON.stringify(state)}</p>
      <button onClick={handleStateChange}>Update State</button>
    </div>
  );
};

export default ExampleComponent;
