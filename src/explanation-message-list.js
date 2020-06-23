import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { welcomeChat } from "./constants/welcome_message";

import './assets/message-list.scss';

const propTypes = {
  setIsExplaining: PropTypes.func.isRequired
}

function ExplanationMessageList({ setIsExplaining }) {
  const [ showMessageOne, setShowMessageOne ] = useState(true);
  const [ showMessageTwo, setShowMessageTwo ] = useState(false);
  const [ showMessageThree, setShowMessageThree ] = useState(false);
  const [ showButtons, setShowButtons ] = useState(false);
  const [ messageIndex, updateMessageIndex ] = useState(0);

  useEffect(() => {
    setShowMessageOne(true);
    setTimeout(() => {
      setShowMessageTwo(true);
    }, 1000)
    setTimeout(() => {
      setShowMessageThree(true);
    }, 2000)
    setTimeout(() => {
      setShowButtons(true);
    }, 3000)
  }, [messageIndex, showMessageOne]);

  const goToNextMessage = msgIndex => {
    if (msgIndex !== 8) {
      setShowMessageOne(false);
      setShowMessageTwo(false);
      setShowMessageThree(false);
      updateMessageIndex(messageIndex + 1);
    } else {
      setIsExplaining(false);
    }
  }

  return (
    <div className="list-of-messages relative flex flex-col-reverse h-full w-full">
        {showButtons ? (
          <div className={`flex mb-3 ${messageIndex !== 8 ? "justify-between" : "justify-end"}`}>
            {messageIndex !== 8 ? (
              <button className="explanation-button" onClick={() => setIsExplaining(false)}>Skip</button>
            ) : null}
            <button className="explanation-button" onClick={() => goToNextMessage(messageIndex)}>Continue</button>
          </div>
        ) : null}
        {showMessageThree ? (
          <div className={`flex animated-message justify-end animate-in`}>
            <div className={`single-message wit`}>
              <span>{welcomeChat[messageIndex].p3}</span>
            </div>
          </div>
        ) : null}
        {showMessageTwo ? (
          <div className={`flex animated-message justify-end animate-in`}>
            <div className={`single-message wit`}>
              <span>{welcomeChat[messageIndex].p2}</span>
            </div>
          </div>
        ) : null}
        {showMessageOne ? (
          <div className={`flex animated-message justify-end animate-in`}>
            <div className={`single-message wit`}>
              <span>{welcomeChat[messageIndex].p1}</span>
            </div>
          </div>
        ) : null}
    </div>
  )
}

ExplanationMessageList.propTypes = propTypes;

export default ExplanationMessageList;
