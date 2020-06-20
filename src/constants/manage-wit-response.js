import { allGreetings } from "./all-greetings";

const firstIntentValue = data => {
  const val =
    data &&
    data.intents &&
    Array.isArray(data.intents) &&
    data.intents.length > 0 &&
    data.intents[0].name;

  if (!val) {
    return null;
  }

  return val;
};

const detectedIntent = (intent, messagesList) => {
  console.log("something wrong here!", intent, messagesList)
  switch(intent) {
    case "greeting":
      const greeting = allGreetings[Math.floor(Math.random() * allGreetings.length)];
      messagesList.push({messageBody: greeting, messageAuthor: "wit"});     
      return messagesList;
    case "bye":
      messagesList.push({messageBody: "Buh bye now!", messageAuthor: "wit"});     

      break;
    case "learn_about_porn":
      messagesList.push({messageBody: "Let me explain what porn is", messageAuthor: "wit"});     

      break;
    case "learn_masturbation":
      messagesList.push({messageBody: "Don't worry, it does not cause blindness!", messageAuthor: "wit"});     

      break;
    case "learn_sperm":
      messagesList.push({messageBody: "Produced by all males", messageAuthor: "wit"});     

      break;
    case "learn_erection":
      messagesList.push({messageBody: "Happens to all males", messageAuthor: "wit"});     

      break;
    case "learn_general":
      messagesList.push({messageBody: "I'm not too sure, maybe you want to know what sex is?", messageAuthor: "wit"});     

      break;
    case "learn_penis":
      messagesList.push({messageBody: "A penis is a penis", messageAuthor: "wit"});     

      break;
    case "learn_sex":
      messagesList.push({messageBody: "That's how you make babies!", messageAuthor: "wit"});     

      break;
    case "learn_scrotum":
      messagesList.push({messageBody: "Let me explain what a scrotum is", messageAuthor: "wit"});     

      break;
    case "learn_penis_synonym":
      messagesList.push({messageBody: "That's a different word for penis, do you want to lear about penises?", messageAuthor: "wit"});     

      break;
    case "learn_foreskin":
      messagesList.push({messageBody: "part of a penis", messageAuthor: "wit"});     

      break;
    case "more_info":
      messagesList.push({messageBody: "ok, you want to know something more", messageAuthor: "wit"});     

      break;
    case "learn_about_body_parts":
      messagesList.push({messageBody: "You want to learn about body parts", messageAuthor: "wit"});     

      break;
    case "learn_vagina":
      messagesList.push({messageBody: "I can tell you what a vagina is", messageAuthor: "wit"});     

      break;
    case "learn_sperm_synonym":
      messagesList.push({messageBody: "That's a different word for sperm", messageAuthor: "wit"});     

      break;
    case "learn_vagina_synonym":
      messagesList.push({messageBody: "That's a different word for vagina", messageAuthor: "wit"});     

      break;
    default:
      messagesList.push({messageBody: "Unfortunately I'm not sure what you want to learn about", messageAuthor: "wit"});     
    }
}

export const manageWitResponse = ( data, messagesList ) => {
  console.log("managing the wit response", data, messagesList)
  const messageIntents = firstIntentValue(data);
  console.log("so this is suppose to have intents", messageIntents)
  if (messageIntents) {
    console.log("I detected an intent!", messageIntents, data.intents[0].name);
    detectedIntent(data.intents[0].name, messagesList);
  } else {
    messagesList.push({messageBody: "Unfortunately I'm not sure what you want to learn about", messageAuthor: "wit"});     
  }

  // return messagesList;
};
