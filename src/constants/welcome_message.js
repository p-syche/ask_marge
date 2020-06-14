import avatar from "../assets/marge_avatars/avatar.png";
import avatar1 from "../assets/marge_avatars/avatar1.png";
import avatar2 from "../assets/marge_avatars/avatar2.png";
import avatar3 from "../assets/marge_avatars/avatar3.png";
import avatar5 from "../assets/marge_avatars/avatar5.png";
import avatar6 from "../assets/marge_avatars/avatar6.png";
import avatar7 from "../assets/marge_avatars/avatar7.png";
import avatar9 from "../assets/marge_avatars/avatar9.png";


export const welcomeSpeechBubble = {
  intro: {
    p1: "Hi! My name is Marge!",
    p2: "If you know what you are looking for, feel free to click Skip at the bottom of this speech bubble",
    p3: "If you want to find out what the shucks is going on here, click Continue",
  },
  continueFirst: {
    p1: "Let me explain a little bit then!",
    p2: "One day I was curious about some intimate topics, like what is a schlong...?",
    p3: "I heard words thrown around but I didn't know how to check what they mean."
  },
  continueSecond: {
    p1: "I didn't want to just google stuff, because my mom is pretty protective of her computer...",
    p2: "and my school computer doesn't even have access to google.",
    p3: "I think... I mean... I don't know if it has google. But I sure didn't want to get caught googling something weird.",
  },
  continueThird: {
    p1: "What if I google 'what is a schlong' and a bunch of images of boobs show up?",
    p2: "I wouldn't know how to explain it to our librarian!",
    p3: "So I thought: there must be a better way! I should be able to check this stuff without getting spied on, right?"
  },
  continueFourth: {
    p1: "That's when I found this website. It's connected to a Machine Learning Algorythm.",
    p2: "What is that you ask? Well... As far as I can tell it's a thing that understands what you ask.",
    p3: "But it doesn't care who you are and why you are asking what you are asking.",
  },
  continueFifth: {
    p1: "Here's what I think it looks like!",
    p2: "I called it MLARGE. Cute, huh?",
    p3: "Mlarge will not ask anything about you, no cookies, no cache, no localized informations.",
  },
  continueSixth: {
    p1: "The only thing it wants to know is your question.",
    p2: "You can ask things like: 'what are boobs?', or maybe 'where do babies come from?'.",
    p3: "Mlarge is trained to try and answer intimate and sex-related questions.",
  },
  continueSeventh: {
    p1: "Mlarge is (so far) a pretty simple algorythm, but it's trained every day.",
    p2: "If you ask a question that Mlarge doesn't know how to answer, I'd recommend coming back in a few days and asking it again.",
    p3: "In the meantime a human will look at your question and try to train Mlarge some more."
  },
  continueEight: {
    p1: "Noone will know WHO asked any particular question.",
    p2: "Which means that you will NOT be notified in any shape or form about an existing answer to anything you asked.",
    p3: "But try to come back in a few days, maybe Mlarge will know something more!"
  },
  continueNinth: {
    p1: "Mlarge is ready!",
    p2: "Go ahead and ask it a question, or you can just say 'hello!'",
    p3: "Whenever you want to go back to the explanation about this website you can click me! Now go and learn some stuff! And don't forget to have fun!"
  }
};

export const manageWelcomeMessage = (currentText, setCurrentText, setCurrentAvatar) => {
  switch(currentText) {
    case "intro":
      setCurrentText("continueFirst");
      setCurrentAvatar(avatar1);
      break;
    case "continueFirst":
      setCurrentText("continueSecond");
      setCurrentAvatar(avatar9);
      break;
    case "continueSecond":
      setCurrentText("continueThird");
      setCurrentAvatar(avatar3);
      break;
    case "continueThird":
      setCurrentText("continueFourth");
      setCurrentAvatar(avatar2);
      break;
    case "continueFourth":
      setCurrentText("continueFifth");
      setCurrentAvatar(avatar5);
      break;
    case "continueFifth":
      setCurrentText("continueSixth");
      setCurrentAvatar(avatar7);
      break;
    case "continueSixth":
      setCurrentText("continueSeventh");
      setCurrentAvatar(avatar);
      break;
    case "continueSeventh":
      setCurrentText("continueEight");
      setCurrentAvatar(avatar5);
      break;
    case "continueEight":
      setCurrentText("continueNinth");
      setCurrentAvatar(avatar6);   
      break;
    default:
      return "intro";
  }
};
