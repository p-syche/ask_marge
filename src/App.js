import React from 'react';
import './App.css';
import avatar from "./assets/marge_avatars/avatar6.png";

function App() {
 
  return (
    <div className="App">
      <div className="speech-bubble speech-bubble-triangle">I'm speech bubble</div>
      <div className="avatar-container">
        <img src={avatar} className="avatar" alt="Marge" />
      </div>
    </div>
  );
}

export default App;
