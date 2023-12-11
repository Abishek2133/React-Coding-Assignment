import React, { useEffect, useState } from 'react';
import WebSocketClient from 'websocket';

const RealTimeData = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const client = new WebSocketClient('ws://localhost:8082/websocket'); // Replace with your WebSocket endpoint

    client.onopen = () => {
      console.log('WebSocket connection opened');
    };

    client.onmessage = (message) => {
      // Handle incoming messages
      setData(message.data);
    };

    client.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      client.close(); // Close WebSocket connection on unmounting
    };
  }, []);

  return (
    <div>
      <h2>Real-Time Data Updates</h2>
      <p>Data: {data}</p>
    </div>
  );
};

export default RealTimeData;
