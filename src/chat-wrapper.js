import React, { useState, useEffect } from 'react';
import SendIcon from '@material-ui/icons/Send';
import './assets/chat-wrapper.scss';
import { manageWitResponse } from "./constants/manage-wit-response";

import MessageList from "./message-list";
import ResizableTextarea from "./expanding-input";
import TypingIndicator from "./typing-indicator";

function ChatWrapper() {
  const [ messageBody, setMessageBody ] = useState("");
  const [ isLoadingReply, setIsLoadingReply ] = useState(false);
  const [ messageReadyToSend, setMessageReadyToSend ] =useState("");
  const [ uriState, setUriState ] = useState('https://api.wit.ai/message?v=20200513&q=' + 'hi!')
  const [ messagesList, setMessagesList ] = useState([]);

  const CLIENT_TOKEN = 'YQKUWRTVDAGSCNGN46L3QFVD7EQJYQF2';
  const auth = 'Bearer ' + CLIENT_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingReply(true);
 
      try {
        const result = await fetch(uriState, {headers: {Authorization: auth}}).then(res => res.json());
        manageWitResponse(result, messagesList);
      } catch (error) {
      }
 
      setIsLoadingReply(false);
    };
 
    fetchData();
  }, [auth, messagesList, uriState]);

  const manageSendMessage = message => {
    messagesList.unshift({messageBody: message, messageAuthor: "user"});

    setMessageReadyToSend(message);
    setIsLoadingReply(true);  
    setMessageBody("");

    setTimeout(() => {
      setUriState('https://api.wit.ai/message?v=20200513&q=' + message)
    }, 3000);
    
  }

  return (
    <div className="flex flex-col items-center w-2/3">
      <div className="message-list-wrap w-full relative">
        <div className="fade-out-wrap absolute top-0" />
        <MessageList messagesList={messagesList} />
      </div>
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
