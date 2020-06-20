import React from "react";
import PropTypes from "prop-types"

import './assets/message-list.scss';

const propTypes = {
  messagesList: PropTypes.array,
}

function MessageList(props) {
  const { messagesList } = props;

  return (
    <div className="list-of-messages flex flex-col w-full">
      {messagesList.map((msg, index) => {
        return (
          <div key={index} className={`single-message ${msg.messageAuthor}`}>
            <span>{msg.messageBody}</span>
          </div>
        )
      })}
    </div>
  )
}

MessageList.propTypes = propTypes;

export default MessageList;
