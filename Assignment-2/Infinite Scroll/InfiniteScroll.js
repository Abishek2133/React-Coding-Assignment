import React, { useEffect, useRef } from 'react';

const InfiniteScroll = ({ fetchData }) => {
  const containerRef = useRef(null);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    if (scrollTop + clientHeight >= scrollHeight) {
      fetchData(); // Fetch more data when scrolled to the bottom
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      ref={containerRef}
      style={{ height: '400px', overflowY: 'scroll', border: '1px solid #ccc' }}
    >
      {/* Your scrollable content */}
    </div>
  );
};

export default InfiniteScroll;
