import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chat.css";

const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userMessagesIds, setUserMessagesIds] = useState([]);
  const currentUser = localStorage.getItem("user");

  const fetchData = async () => {
    const result = await axios.get("http://localhost:3001/chat/messages", {
      headers: {
        Authorization: `Bearer ${props.sessionToken}`,
      },
    });

    setMessages(result.data);
  };

  const fetchUserMessages = async () => {
    const result = await axios.get(
      "http://localhost:3001/chat/getMessagesById",
      {
        headers: {
          Authorization: `Bearer ${props.sessionToken}`,
        },
      }
    );

    const messageIds = result.data.map((message) => message.id);
    setUserMessagesIds(messageIds);
  };

  useEffect(() => {
    fetchData();
    fetchUserMessages();
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
    fetchUserMessages();
  };

  return (
    <div className="chat-container p-3">
      <div className="chat-header">
        <h2>Chat U-Sports</h2>
      </div>
      <hr className="hr2"></hr>
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            className={`chat-message ${
              userMessagesIds.includes(message.id) ? "right" : "left"
            }`}
            key={message.id}
          >
            <img
              className="profile-pic"
              src={message.user.profilePic}
              alt={message.user.nickname}
            />
            <div className="message-content">
              <h5 style={{color:"black"}} className="font-weight-bold ">{message.user.nickname}</h5>
              <p>{message.message}</p>
              <small className="date-right">
                {new Date(message.createdAt).toLocaleString()}
              </small>
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
