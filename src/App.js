import React from 'react';
import './tailwind.generated.scss';

import unicornDab from "./assets/marge_avatars/unicorn_dab.png";

import ChatWrapper from "./chat-wrapper";
import ControlArrow from "./control-arrow";

function App() {
  return (
    <div className="container mx-auto h-full">
      <div className="w-full h-full flex flex-row items-end pb-24 max-w-screen-lg">
        <div className="w-1/4">This is the left-side avatar placeholder place</div>
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
