import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chat.css";

const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const currentUser = localStorage.getItem("user"); // Reemplazar con el usuario actual

  const fetchData = async () => {
    const result = await axios.get("http://localhost:3001/chat/messages", {
      headers: {
        Authorization: `Bearer ${props.sessionToken}`,
      },
    });

    setMessages(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postMessage = async () => {
    await axios.post(
      "http://localhost:3001/chat/messages",
      {
        message: newMessage,
      },
      {
        headers: {
          Authorization: `Bearer ${props.sessionToken}`,
        },
      }
    );

    setNewMessage("");
    fetchData();
  };

  return (
    <div className="chat-container p-3">
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            className={`chat-message ${
              message.user.nickname === currentUser ? "right" : "left"
            }`}
            key={message.id}
          >
            <img
              className="profile-pic"
              src={message.user.profilePic}
              alt={message.user.nickname}
            />
            <div className="message-content">
              <p>{message.message}</p>
              <small>{new Date(message.createdAt).toLocaleString()}</small>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={postMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
