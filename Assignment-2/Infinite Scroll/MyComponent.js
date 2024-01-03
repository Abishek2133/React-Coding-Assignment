import React, { useState } from 'react';
import InfiniteScroll from './InfiniteScroll';

const MyComponent = () => {
  const [data, setData] = useState([]); // Data fetched and displayed

  const fetchData = () => {
    // Simulate fetching more data (replace with your API call)
    // For example, appending additional items to the existing data
    const newData = Array.from({ length: 10 }, (_, index) => ({
      id: data.length + index + 1,
      name: `Item ${data.length + index + 1}`,
    }));

    setData(prevData => [...prevData, ...newData]);
  };

  return (
    <div>
      <h1>Infinite Scrolling Example</h1>
      <InfiniteScroll fetchData={fetchData}>
        {/* Render your data */}
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default MyComponent;
