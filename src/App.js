import React from 'react';
import './tailwind.generated.scss';
import './assets/app.scss';

import unicornDab from "./assets/marge_avatars/unicorn_dab.png";
import morty from "./assets/user_avatars/no_face_fb.jpg";

import ChatWrapper from "./chat-wrapper";
import ControlArrow from "./control-arrow";

function App() {
  return (
    <div className="container mx-auto h-full">
      <div className="w-full h-full flex flex-row items-end pb-24 max-w-screen-lg mx-auto">
        <div className="w-1/4 relative flex justify-center">
          <ControlArrow direction="up" />
          <div className="avatar-container flex items-center">
            <img src={morty} className="avatar" alt="Marge" />
          </div>
          <ControlArrow direction="down" />
        </div>
        <div className="w-1/2 flex justify-center">
          <ChatWrapper />
        </div>
        <div className="w-1/4 relative flex justify-center">
          <ControlArrow direction="up" />
          <img src={unicornDab} className="avatar" alt="Marge" />
          <ControlArrow direction="down" />
        </div>
      </div>
    </div>
  );
}

export default App;
