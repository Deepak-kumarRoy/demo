import React from "react";
import "./style.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";

export default function  App() {
  if(!localStorage.getItem('username'))return <LoginForm />
  return (
      <ChatEngine 
          height="100vh"
          projectID="47586af5-a2c7-4ffb-8242-2f9020f0f469"
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
  );
}

