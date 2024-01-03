import React, { useEffect, useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    setWs(socket);

    socket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    socket.onmessage = (event) => {
      setChatLog(prevLog => [...prevLog, event.data]);
    };

    socket.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && message) {
      ws.send(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {chatLog.map((chat, index) => (
          <div key={index} className="message">
            {chat}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
