import React, { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";
function ChatScreen() {
    const [input ,setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      name: "renan",
      image: "...",
      message: "aisdjiasdjoasjdi",
    },
    {
      name: "renan",
      image: "...",
      message: "aisdjiasdjoasjdi",
    },
    {
      name: "renan",
      image: "...",
      message: "aisdjiasdjoasjdi",
    },
  ]);


  const handleSend = e => {
      e.preventDefault();
      setMessages([...messages, {message:input}])
      setInput('')
  }
  return (
    <div className="chatScreen">
      <p>HELLO WORKING</p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>{" "}
          </div>
        )
      )}
      <div className="chatScreen__input">
          <form>
              <input type="text" className="chatScreen_inputfield" value={input} onChange={e=>setInput(e.target.value)} placeholder="type a message"/>
              <button type="submit" className="chatScreen__inputButton" onClick={handleSend}>Send</button>
          </form>
      </div>
    </div>
  );
}

export default ChatScreen;
