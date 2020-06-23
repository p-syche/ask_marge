import blondeGuy from "../assets/marge_avatars/blonde-guy.png";
import bot from "../assets/marge_avatars/bot.png";
import brunette from "../assets/marge_avatars/brunette.png";
import dog from "../assets/marge_avatars/dog.png";
import flyingRobot from "../assets/marge_avatars/flying-robot.png";
import girl2 from "../assets/marge_avatars/girl2.png";
import girl3 from "../assets/marge_avatars/girl3.png";
import girl4 from "../assets/marge_avatars/girl4.png";
import guy from "../assets/marge_avatars/guy.png";
import guy2 from "../assets/marge_avatars/guy2.png";
import guy3 from "../assets/marge_avatars/guy3.png";
import guy4 from "../assets/marge_avatars/guy4.png";
import monster from "../assets/marge_avatars/monster.png";
import monster2 from "../assets/marge_avatars/monster2.png";
import monster3 from "../assets/marge_avatars/monster3.png";
import monsterGreen from "../assets/marge_avatars/monster_green.png";
import monsterPurple from "../assets/marge_avatars/monster_purple.png";
import redhair from "../assets/marge_avatars/redhair.png";

import unicornDab from "../assets/user_avatars/unicorn_dab.png";

const userAvatarList = [
  blondeGuy,
  bot,
  brunette,
  dog,
  flyingRobot,
  girl2,
  girl3,
  girl4,
  guy,
  guy2,
  guy3,
  guy4,
  monster,
  monster2,
  monster3,
  monsterGreen,
  monsterPurple,
  redhair
];

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

const randomizedAvatarArray = shuffleArray(userAvatarList);

const avatarArray = () => {
  let arrayReady = [];
  let topOfArray = [];
  let bottomOfArray = [];
  randomizedAvatarArray.map((item, index) => {
    if (index <= 8) {
      topOfArray.push(item);
    } else {
      bottomOfArray.push(item);
    }
    return (topOfArray, bottomOfArray);
  });
  arrayReady = [...topOfArray, ...bottomOfArray];
  arrayReady.splice(8, 0, unicornDab);

  return arrayReady;
}

export const randomizedMargeAvatar = avatarArray();
