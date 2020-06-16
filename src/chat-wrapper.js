import React from 'react';

import ResizableTextarea from "./expanding-input";

function ChatWrapper() {
  return (
    <div className="flex flex-col items-center">
      <h2>I shall write a chat thingy here!</h2>
      <span>bubbles will float in this placeholder</span>
      <div className="">
        <ResizableTextarea />
      </div>
    </div>
  );
}

export default ChatWrapper;
