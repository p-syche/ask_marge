import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"
import { welcomeChat } from "./constants/welcome_message";

import './assets/message-list.scss';

const propTypes = {
  setIsExplaining: PropTypes.func.isRequired
}

function ExplanationMessageList({ setIsExplaining }) {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ showMessageTwo, setShowMessageTwo ] = useState(false);
  const [ showMessageThree, setShowMessageThree ] = useState(false);
  const [ showButtons, setShowButtons ] = useState(false);
  const [ messageIndex, updateMessageIndex ] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setShowMessageTwo(true);
    }, 1000)
    setTimeout(() => {
      setShowMessageThree(true);
    }, 2000)
    setTimeout(() => {
      setShowButtons(true);
    }, 3000)
  }, []);

  return (
    <div className="list-of-messages relative flex flex-col-reverse h-full w-full">
        {showButtons ? (
          <div className="EXPLANATION BUTTONS">
            <button onClick={() => setIsExplaining(false)}>Skip</button>
            <button onClick={() => updateMessageIndex(messageIndex + 1)}>Continue</button>
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
        <div className={`flex animated-message justify-end animate-in`}>
          <div className={`single-message wit`}>
            <span>{welcomeChat[messageIndex].p1}</span>
          </div>
        </div>
    </div>
  )
}

ExplanationMessageList.propTypes = propTypes;

export default ExplanationMessageList;
