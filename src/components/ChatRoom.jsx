import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ChatRoom.css'; // Import your CSS for styling

const ChatRoom = () => {
  const { cityName, option } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Load messages from localStorage on component mount
  useEffect(() => {
    const savedMessages = localStorage.getItem(`${cityName}_${option}_messages`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, [cityName, option]);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    localStorage.setItem(`${cityName}_${option}_messages`, JSON.stringify(messages));
  }, [cityName, option, messages]);

  const sendMessage = () => {
    if (input) {
      const newMessage = {
        id: messages.length + 1,
        text: input,
        timestamp: new Date().toISOString(),
        user: 'Anonymous', // Replace with actual user identification
      };
      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  const deleteMessage = (id) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
  };

  const updateMessage = (id, newText) => {
    const updatedMessages = messages.map(msg => {
      if (msg.id === id) {
        return { ...msg, text: newText };
      }
      return msg;
    });
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-room-container">
      <h1>{cityName} - {option}</h1>
      <div className="message-container">
        {messages.map((msg) => (
          <div key={msg.id} className="message-item">
            <div className="message-content">{msg.text}</div>
            <div className="message-info">
              <span className="message-user">{msg.user}</span>
              <span className="message-timestamp">{new Date(msg.timestamp).toLocaleString()}</span>
              <button onClick={() => deleteMessage(msg.id)}>Delete</button>
              <button onClick={() => updateMessage(msg.id, `${msg.text} (Not Available)`)}>Update</button>
            </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type a message" 
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
