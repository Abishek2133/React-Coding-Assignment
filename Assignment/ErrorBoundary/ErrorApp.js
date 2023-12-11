import React from 'react';
import ErrorBoundary from './ErrorBoundary';

const ErrorApp = () => {
  return (
    <div>
      <h1>Your App</h1>
      <ErrorBoundary>
        {/* Component tree where you want to catch errors */}
      </ErrorBoundary>
    </div>
  );
};

export default ErrorApp;
