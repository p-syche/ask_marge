import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types"

import './assets/message-list.scss';

const propTypes = {
  messagesList: PropTypes.array,
}

function MessageList(props) {
  const { messagesList } = props;
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
  }, [messagesList.length]);

  return (
    <div className="list-of-messages relative flex flex-col-reverse h-full w-full">
      {messagesList.map((msg, index) => {
        return (
          <div key={index} className={`flex animated-message ${animationCondition(index) === true ? "animate-in" : ""} ${msg.messageAuthor === "user" ? "justify-start" : "justify-end"}`}>
            <div className={`${msg.messageAuthor} single-message`}>
              <span>{msg.messageBody}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

MessageList.propTypes = propTypes;

export default MessageList;
