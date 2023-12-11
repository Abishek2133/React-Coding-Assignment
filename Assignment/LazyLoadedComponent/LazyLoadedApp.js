// App.js
import React, { Suspense, lazy } from 'react';

const LazyLoadedComponent = lazy(() => import('./LazyLoadedComponent'));

const App = () => {
  return (
    <div>
      <h1>Your App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadedComponent/>
      </Suspense>
    </div>
  );
};

export default App;
