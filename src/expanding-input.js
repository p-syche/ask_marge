import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  messageBody: PropTypes.string,
  setMessageBody: PropTypes.func,
  manageSendMessage: PropTypes.func,
}

function ResizableTextarea(props) {
  const [ rows, setRows ] = useState(1);
  const [ minRows ] = useState(1);
  const [ maxRows ] = useState(15);

  const { messageBody, setMessageBody, manageSendMessage } = props;

  const handleKeyPress = event => {
    if (event.key === "Enter" ) {
      event.preventDefault();
      manageSendMessage(messageBody);
      setMessageBody("");
      setRows(1);
    } else {
      handleChange(event);
    }
  }

  const handleChange = event => {
    const textareaLineHeight = 24;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea 
    
    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    
    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    
    setMessageBody(event.target.value);
    setRows(currentRows < maxRows ? currentRows : maxRows);
  };
  
  return (
    <textarea
      type="text"
      rows={rows}
      value={messageBody}
      placeholder={'Enter your text here...'}
      className="textarea chat-input"
      onChange={event => handleKeyPress(event)}
      onKeyDown={event => handleKeyPress(event)}
    />
  );
}

ResizableTextarea.propTypes = propTypes;

export default ResizableTextarea;
