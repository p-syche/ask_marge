import invert from "lodash/invert";
import mapValues from "lodash/mapValues";
import includes from "lodash/includes";

const KEYCODE_LOOKUP = {
  9: "tab",
  27: "esc",
  8: "delete",
  13: "enter",
  32: "space",

  37: "arrowLeft",
  38: "arrowUp",
  39: "arrowRight",
  40: "arrowDown",

  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z"
};

const upperCaseKeyCodes = invert(mapValues(KEYCODE_LOOKUP, key => key.toUpperCase()));
const KEYCODES = mapValues(upperCaseKeyCodes, code => parseInt(code, 10));

export default KEYCODES;

const keyEventMap = {
  ESCAPE: {
    key: "Escape",
    keyCode: 27
  },
  BACKSPACE: {
    key: "Backspace",
    keyCode: 8
  },
  ENTER: {
    key: "Enter",
    keyCode: 13
  }
};

export const handleKeyEvent = (keyName, handler) => event => {
  const keyCodeObject = keyEventMap[keyName];
  if (keyCodeObject && (event.key === keyCodeObject.key || event.keyCode === keyCodeObject.keyCode)) {
    handler(event);
  }
};

export const onlyOnNamedKeys = namedKeys => handler => {
  console.log("am i even here?", namedKeys, handler);
  return event => {
    if (includes(namedKeys, event.key)) handler(event);
  };
};

export const onlyOnSpaceOrEnter = onlyOnNamedKeys(["Enter", " "]);

export const onEnter = onlyOnNamedKeys(["Enter"]);
