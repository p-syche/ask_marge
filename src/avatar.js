import React, { useState } from 'react';
import './assets/app.scss';
import './assets/avatar.scss';

import noFace from "./assets/user_avatars/no_face_fb.jpg";
import { randomizedAvatar } from "./constants/user-avatars";

import ControlArrow from "./control-arrow";

function Avatar() {
  const [ fromTopValue, setFromTopValue ] = useState(-217);


  return (
    <div className="relative w-1/4 flex flex-col justify-center transform translate-y-16">
      <ControlArrow direction="up" fromTopValue={fromTopValue} setFromTopValue={setFromTopValue} />
      <div className="avatar-wrapper relative flex flex-col justify-center overflow-hidden">
        <div className="absolute avatar-list" style={{ top: fromTopValue + "rem" }}>
          {randomizedAvatar.map((item, index) => {
            return (
              <div key={index} className="my-40 h-64 flex justify-center">
                <img src={item} className="avatar h-full w-auto" alt="avatar" />
              </div>
            )
          })}
        </div>
      </div>
      <ControlArrow direction="down" fromTopValue={fromTopValue} setFromTopValue={setFromTopValue} />
    </div>
   
  );
}

export default Avatar;
