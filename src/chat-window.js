import React, { useState, useEffect } from 'react';
import { ChatRoom } from "./chat-app";
import { InputField } from "./input-field";

import './App.css';
import './assets/chat-window.css';

const ChatWindow = () => {
  const [ isAnimatingIn, setIsAnimatingIn ] = useState(false);
  const [ isDoneLoading, setIsDoneLoading] = useState(false);

  useEffect(() => {
    setIsAnimatingIn(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsDoneLoading(true);
    }, 300);
  }, []);
 
  return (
    <div className={`${isAnimatingIn === true ? "animate-in" : null} chat-window`}>
      <section id="chatApp" className="chatApp">
      {isDoneLoading ? <InputField /> : (
        <div className="chatApp__loaderWrapper">
          <div className="chatApp__loaderText">Loading...</div>
          <div className="chatApp__loader"></div>
        </div>
      )}
      </section>
    </div>
  );
}

export { ChatWindow };
