import React from 'react';
import './assets/dots_animation.scss';

function TypingIndicator() {
  return (
    <div id="wave" className="self-end rounded-lg text-center">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  )
}

export default TypingIndicator;
