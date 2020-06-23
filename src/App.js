import React, { useState } from 'react';
import './tailwind.generated.scss';
import './assets/app.scss';

import { randomizedAvatar } from "./constants/user-avatars";
import { randomizedMargeAvatar } from "./constants/marge_avatars";

import ExplanationWrapper from "./explanation-wrapper";
import ChatWrapper from "./chat-wrapper";
import Avatar from "./avatar";

function App() {
  const [isExplaining, setIsExplaining] = useState(true);
  return (
    <div className="container mx-auto h-full">
      <div className="w-full h-full flex flex-row items-end pb-24 max-w-screen-lg mx-auto">
        <Avatar array={randomizedAvatar} />
        <div className="w-1/2 flex justify-center">
          {isExplaining ? <ExplanationWrapper setIsExplaining={setIsExplaining} /> : <ChatWrapper />}
        </div>
        <Avatar array={randomizedMargeAvatar} />
      </div>
    </div>
  );
}

export default App;
