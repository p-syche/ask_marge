import React, { useState, useEffect } from 'react';
import { mlargePic } from "./constants/mlarge_pic";

import './assets/polaroid.css';

const Polaroid = ({ currentText }) => {
  const [ currentPic, setCurrentPic ] = useState({
    src: "",
    url: "",
    name: ""
  });

  useEffect(() => {
    const randomPic = mlargePic[Math.floor(Math.random() * mlargePic.length)];
    setCurrentPic(randomPic);
  }, []);

  const currentTextCheck = () => {
    if (currentText === "intro" ||
      currentText === "continueFirst" ||
      currentText === "continueSecond" ||
      currentText === "continueThird" ||
      currentText === "continueFourth"
    ) {
      return "hide-pic";
    }
  };
 
  return (
    <div className={`${currentTextCheck() === "hide-pic" ? "hidden" : null} polaroid-wrapper wrapper`}>
      <div className="item">
        <div className="polaroid">
          <img src={currentPic.src} alt="Computers, servers and cables" />
          <div className="caption">{currentPic.name}</div>
        </div>
      </div>
    </div>
  );
}

export { Polaroid };
