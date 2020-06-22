import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types"
import { welcomeChat } from "./constants/welcome_message";

import './assets/message-list.scss';

const propTypes = {}

function ExplanationMessageList(props) {
  const [ isLoading, setIsLoading ] = useState(true);

  const animationCondition = useCallback(itemIndex => {
    if (itemIndex === 0 && isLoading === true) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, []);

  return (
    <div className="list-of-messages relative flex flex-col h-full w-full">
      {welcomeChat.map((msgBlock, index) => {
        return (
          <div key={index} className={`flex animated-message justify-end ${animationCondition(index) === true ? "animate-in" : ""} `}>
            <div className={`single-message wit`}>
              <span>{msgBlock.p1}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

ExplanationMessageList.propTypes = propTypes;

export default ExplanationMessageList;
