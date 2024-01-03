import React from 'react';

const LazyComponent = () => {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Lazy Loaded Component</h2>
      <p>This is a lazy-loaded component!</p>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default LazyComponent;