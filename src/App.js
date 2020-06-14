import React, { useState } from 'react';
import { welcomeSpeechBubble, manageWelcomeMessage } from "./constants/welcome_message";

import './App.css';
import avatar6 from "./assets/marge_avatars/avatar6.png";
import avatar1 from "./assets/marge_avatars/avatar1.png";

function App() {
  const [ currentText, setCurrentText ] = useState("intro");
  const [ currentAvatar, setCurrentAvatar ] = useState(avatar6);
  const skipAction = () => {
    console.log('will skip');
  };

  const continueAction = () => {
    manageWelcomeMessage(currentText, setCurrentText, setCurrentAvatar);
  }
 
  return (
    <div className="App">
      <div className="avatar-container">
        <img src={currentAvatar} className="avatar" alt="Marge" />
      </div>
      <div className="speech-bubble speech-bubble-triangle">
        <p>{welcomeSpeechBubble[currentText].p1}</p>
        <p>{welcomeSpeechBubble[currentText].p2}</p>
        <p>{welcomeSpeechBubble[currentText].p3}</p>
        <div className="buttons">
          <button className="skip-btn" onClick={() => skipAction()}>Skip</button>
          <button className="continue-btn" onClick={() => continueAction()}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
