import React, { useState, useEffect } from 'react';
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
    }, 10000);
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
