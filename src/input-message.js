import React, { useState } from 'react';
// import { Wit, log } from "node-wit";

/* ========== */
/* InputMessage component - used to type the message */
class InputMessage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleTyping = this.handleTyping.bind(this);
  }
  handleSendMessage(event) {
    event.preventDefault();
    /* Disable sendMessage if the message is empty */
    if( this.messageInput.value.length > 0 ) {
      this.props.sendMessageLoading(this.ownerInput.value, this.ownerAvatarInput.value, this.messageInput.value);
      /* Reset input after send*/
      this.messageInput.value = '';
    }
  }
  handleTyping(event) {
    /* Tell users when another user has at least started to write */
    if( this.messageInput.value.length > 0 ) {
      this.props.typing(this.ownerInput.value);
    }
    else {
      /* When there is no more character, the user no longer writes */
      this.props.resetTyping(this.ownerInput.value);
    }
  }
  render() {
    /* If the chatbox state is loading, loading class for display */
    var loadingClass = this.props.isLoading ? 'chatApp__convButton--loading' : '';
    let sendButtonIcon = <i className={"material-icons"}>send</i>;
    return (
      <form onSubmit={this.handleSendMessage}>
        <input
          type="hidden"
          ref={owner => (this.ownerInput = owner)}
          value={this.props.owner}
        />
        <input
          type="hidden"
          ref={ownerAvatar => (this.ownerAvatarInput = ownerAvatar)}
          value={this.props.ownerAvatar}
        />
        <input
          placeholder="type stuff here"
          value={inputValue}
          onKeyDown={event => setInputValue(event.target.value)}
          onKeyUp={event => setInputValue(event.target.value)}
          onChange={event => setInputValue(event.target.value)}
          type="text"
          autocomplete="off"
          tabIndex="0"
          className={"chatApp__convInput"}
          ref={message => (this.messageInput = message)}
        />
        <div className={'chatApp__convButton ' + loadingClass} onClick={this.handleSendMessage}>
        {sendButtonIcon}
        </div>
      </form>
    );
  }
}
/* end InputMessage component */
/* ========== */