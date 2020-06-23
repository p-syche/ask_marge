import React, { useState } from 'react';
import './tailwind.generated.scss';
import './assets/app.scss';

import unicornDab from "./assets/marge_avatars/unicorn_dab.png";

import ExplanationWrapper from "./explanation-wrapper";
import ChatWrapper from "./chat-wrapper";
import ControlArrow from "./control-arrow";
import Avatar from "./avatar";

function App() {
  const [isExplaining, setIsExplaining] = useState(true);
  return (
    <div className="container mx-auto h-full">
      <div className="w-full h-full flex flex-row items-end pb-24 max-w-screen-lg mx-auto">
        <Avatar />
        <div className="w-1/2 flex justify-center">
          {isExplaining ? <ExplanationWrapper setIsExplaining={setIsExplaining} /> : <ChatWrapper />}
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
