import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import './assets/chat-wrapper.css';
import { manageWitResponse } from "./constants/manage-wit-response";

import MessageList from "./message-list";
import ResizableTextarea from "./expanding-input";
import TypingIndicator from "./typing-indicator";

async function asyncFetch(message, messagesList, setMessagesList) {
  const CLIENT_TOKEN = 'YQKUWRTVDAGSCNGN46L3QFVD7EQJYQF2';
  const uri = 'https://api.wit.ai/message?v=20200513&q=' + message;
  const auth = 'Bearer ' + CLIENT_TOKEN;

  const racesResponse = await fetch(uri, {headers: {Authorization: auth}}).then(res => res.json());
  // manageWitResponse(racesResponse, messagesList);
  let oldArray = [];
  oldArray = messagesList.push({messageBody: "call this in the right spot", messageAuthor: "wit"});
  // setMessagesList(oldArray);
  console.log("ASYNC this is supposed to be called when?", oldArray);
}

function ChatWrapper() {
  const [ messageBody, setMessageBody ] = useState("");
  const [ isLoadingReply, setIsLoadingReply ] = useState(false);

  const [ messagesList, setMessagesList ] = useState([]);

  const manageSendMessage = message => {
    messagesList.push({messageBody: message, messageAuthor: "user"});
    console.log("when EXACTLY is this called?", messagesList);
    asyncFetch(message, messagesList, setMessagesList)
    
    setMessageBody("");
  }

  return (
    <div className="flex flex-col items-center w-2/3">
      <MessageList messagesList={messagesList} />
      {isLoadingReply ? <TypingIndicator /> : null}
      <div className="INPUT CONTAINER w-full p-3 bg-white rounded-md">
        <form className="flex flex-row">
          <ResizableTextarea
            manageSendMessage={manageSendMessage}
            messageBody={messageBody}
            setMessageBody={setMessageBody}
          />
          <div className="BUTTON CONTAINER chat_button">
            <SendIcon onClick={() => manageSendMessage(messageBody)} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatWrapper;
