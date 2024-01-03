import React, { useState } from 'react';

const DynamicComponent = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  const LazyComponent = React.lazy(() => import('./LazyComponent'));

  return (
    <div>
      <button onClick={handleClick}>Load Component</button>
      {showComponent && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </React.Suspense>
      )}
    </div>
  );
};

export default DynamicComponent;
