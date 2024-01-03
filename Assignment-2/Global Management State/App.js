import React from 'react';
import { StateProvider } from './StateContext';
import ExampleComponent from './ExampleComponent';

const App = () => {
  return (
    <StateProvider>
      <div>
        <h1>My App</h1>
        <ExampleComponent />
        {/* Other components */}
      </div>
    </StateProvider>
  );
};

export default App;
