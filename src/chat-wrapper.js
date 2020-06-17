import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import './assets/chat-wrapper.css';

import ResizableTextarea from "./expanding-input";
import TypingIndicator from "./typing-indicator";

function ChatWrapper() {
  const [ isLoadingReply, setIsLoadingReply ] = useState(true);

  return (
    <div className="flex flex-col items-center w-2/3">
      <h2>I shall write a chat thingy here!</h2>
      {isLoadingReply ? <TypingIndicator /> : null}
      <div className="INPUT CONTAINER w-full p-3 bg-white rounded-md">
        <form className="flex flex-row">
          <ResizableTextarea />
          <div className="BUTTON CONTAINER chat_button">
            <SendIcon />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatWrapper;
