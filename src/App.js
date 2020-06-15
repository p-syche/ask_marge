import React, { useState } from 'react';
import { welcomeSpeechBubble, manageWelcomeMessage } from "./constants/welcome_message";
import { Polaroid } from "./polaroid";
import { ChatWindow } from "./chat-window";

import './App.css';
import avatar6 from "./assets/marge_avatars/avatar6.png";

function App() {
  const [ currentText, setCurrentText ] = useState("intro");
  const [ currentAvatar, setCurrentAvatar ] = useState(avatar6);
  const [ introIsDone, setIntroIsDone ] = useState(false);

  const skipAction = () => {
    setIntroIsDone(true);
  };

  const continueAction = () => {
    manageWelcomeMessage(currentText, setCurrentText, setCurrentAvatar, setIntroIsDone);
  }
 
  return (
    <div className="App">
      <div className={`${introIsDone === true ? "intro-done" : null} avatar-container`}>
        <img src={currentAvatar} className="avatar" alt="Marge" />
      </div>
      <Polaroid currentText={currentText} introIsDone={introIsDone} />
      <div className={`${introIsDone === true ? "intro-done" : null} speech-bubble speech-bubble-triangle`}>
        <p>{welcomeSpeechBubble[currentText].p1}</p>
        <p>{welcomeSpeechBubble[currentText].p2}</p>
        <p>{welcomeSpeechBubble[currentText].p3}</p>
        <div className="buttons">
          <button className="skip-btn" onClick={() => skipAction()}>Skip</button>
          <button className="continue-btn" onClick={() => continueAction()}>Continue</button>
        </div>
        {introIsDone ? <ChatWindow /> : null}
      </div>
    </div>
  );
}

export default App;
