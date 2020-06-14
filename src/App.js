import React from 'react';
import './App.css';
import avatar from "./assets/marge_avatars/avatar6.png";

function App() {
  const skipAction = () => {
    console.log('will skip');
  };

  const continueAction = () => {
    console.log('will continue!');
  }
 
  return (
    <div className="App">
      <div className="avatar-container">
        <img src={avatar} className="avatar" alt="Marge" />
      </div>
      <div className="speech-bubble speech-bubble-triangle">
        <p>Hi! My name is Marge!</p>
        <p>If you know what you are looking for, feel free to click Skip at the bottom of this speech bubble</p>
        <p>If you want to find out what the shucks is going on here, click Continue</p>
        <div className="buttons">
          <button className="skip-btn" onClick={() => skipAction()}>Skip</button>
          <button className="continue-btn" onClick={() => continueAction()}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default App;
