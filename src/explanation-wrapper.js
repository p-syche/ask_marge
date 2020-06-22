import React, { useState, useEffect } from 'react';
import SendIcon from '@material-ui/icons/Send';
import './assets/chat-wrapper.scss';
import { manageWitResponse } from "./constants/manage-wit-response";

import ExplanationMessageList from "./explanation-message-list";

function ExplanationWrapper({ setIsExplaining }) {

  const manageSendMessage = message => {
    console.log("please wait for the explanation :)");
  }

  return (
    <div className="flex flex-col items-center w-2/3">
      <div className="message-list-wrap w-full relative">
        <div className="fade-out-wrap absolute top-0" />
        <ExplanationMessageList />
      </div>
      <div className="INPUT CONTAINER w-full p-3 bg-white rounded-md opacity-50">
        <form className="flex flex-row">
          <textarea className="textarea chat-input disabled-textarea" disabled />
          <button className="BUTTON CONTAINER disabled_chat_button flex" disabled type="button">
            <SendIcon onClick={() => manageSendMessage()} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExplanationWrapper;
