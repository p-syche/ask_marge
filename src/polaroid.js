import React from 'react';

import './assets/polaroid.css';

const Polaroid = ({ currentText }) => {
  const currentTextCheck = () => {
    if (currentText === "intro" ||
      currentText === "continueFirst" ||
      currentText === "continueSecond" ||
      currentText === "continueThird" ||
      currentText === "continueFourth"
    ) {
      return "hide-pic";
    }
  }
 
  return (
    <div className={`${currentTextCheck() === "hide-pic" ? "hidden" : null} polaroid-wrapper wrapper`}>
      <div className="item">
        <div className="polaroid">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/dXAhQuT.jpg" />
          <div className="caption">
            By Joshua Sortino
          </div>
        </div>
      </div>
    </div>
  );
}

export { Polaroid };
