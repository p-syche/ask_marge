import bigHat from "../assets/user_avatars/big_hat_guy.jpg";
import boy from "../assets/user_avatars/boy.png";
import brawlStarsSandy3 from "../assets/user_avatars/brawl-stars_sandy3.png";
import brawlStarsBear from "../assets/user_avatars/brawl_stars_bear.png";
import brawlStarsLeon from "../assets/user_avatars/brawl_stars_leon.png";
import brawlStarsSandy from "../assets/user_avatars/brawl_stars_sandy.png";
import brawlStarsSandy2 from "../assets/user_avatars/brawl_stars_sandy2.png";
import brawlStarsTara from "../assets/user_avatars/brawl_stars_tara.png";
import dumbRick from "../assets/user_avatars/dumb_rick.png";
import dustin from "../assets/user_avatars/dustin.png";
import girl from "../assets/user_avatars/girl.png";
import jerry from "../assets/user_avatars/jerry.png";
import morty from "../assets/user_avatars/morty.png";
import noPicBoy from "../assets/user_avatars/no-pic-boy.jpg";
import mortysDog from "../assets/user_avatars/rick-and-morty-dog.png";
import sharkLeon from "../assets/user_avatars/shark-leon.png";
import steve from "../assets/user_avatars/steve.png";
import unicornDab from "../assets/user_avatars/unicorn_dab.png";

const userAvatarList = [
  bigHat,
  boy,
  brawlStarsSandy3,
  brawlStarsBear,
  brawlStarsLeon,
  brawlStarsSandy,
  brawlStarsSandy2,
  brawlStarsTara,
  dumbRick,
  dustin,
  girl,
  jerry,
  morty,
  noPicBoy,
  mortysDog,
  sharkLeon,
  steve,
  unicornDab
];

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export const randomizedAvatar = shuffleArray(userAvatarList);

