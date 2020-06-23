import React from 'react';
import './assets/app.scss';

import noFace from "./assets/user_avatars/no_face_fb.jpg";
import { randomizedAvatar } from "./constants/user-avatars";

import ControlArrow from "./control-arrow";

function Avatar() {
  return (
    <div className="w-1/4 relative flex justify-center">
      <div className="flex flex-col">
        {randomizedAvatar.map((item, index) => {
          if (index <= 9) {
            return (
              <img src={item} className="avatar" alt="avatar" />
            )
          }
          return null;
        })}
      </div>
      <ControlArrow direction="up" />
      <div className="avatar-container flex items-center">
        <img src={noFace} className="avatar" alt="avatar" />
      </div>
      <ControlArrow direction="down" />
      <div className="flex flex-col">
        {randomizedAvatar.map((item, index) => {
          if (index > 9) {
            return (
              <img src={item} className="avatar" alt="avatar" />
            )
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default Avatar;
