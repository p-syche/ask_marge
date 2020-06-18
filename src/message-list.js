import React from "react";
import PropTypes from "prop-types"

const propTypes = {
  messagesList: PropTypes.array,
}

function MessageList(props) {
  const { messagesList } = props;
  console.log("when is the messageList COMPONENT called..?");

  return (
    <div>
      <span>List of messages!</span>
      {messagesList.map((msg, index) => {
        return (
          <div key={index}>
            <span>{msg.messageBody}</span>
          </div>
        )
      })}
    </div>
  )
}

MessageList.propTypes = propTypes;

export default MessageList;
