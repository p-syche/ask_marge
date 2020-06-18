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
  switch(intent) {
    case "greeting":
      messagesList.push({messageBody: "Well hello there!", messageAuthor: "wit"});     

      // setWitMessage("Well hello there!");
      break;
    case "bye":
      messagesList.push({messageBody: "Buh bye now!", messageAuthor: "wit"});     

      // setWitMessage("Buh bye now!");
      break;
    case "learn_about_porn":
      messagesList.push({messageBody: "Let me explain what porn is", messageAuthor: "wit"});     

      // setWitMessage("I can tell you what porn is");
      break;
    // case "learn_masturbation":
    //   messagesList.push({messageBody: "Don't worry, it does not cause blindness!", messageAuthor: "wit"});     

    //   setWitMessage("Don't worry, it does not cause blindness!");
    //   break;
    // case "learn_sperm":
    //   messagesList.push({messageBody: "Produced by all males", messageAuthor: "wit"});     

    //   setWitMessage("Produced by all males");
    //   break;
    // case "learn_erection":
    //   messagesList.push({messageBody: "Happens to all males", messageAuthor: "wit"});     

    //   setWitMessage("Happens to all males");
    //   break;
    // case "learn_general":
    //   messagesList.push({messageBody: "I'm not too sure, maybe you want to know what sex is?", messageAuthor: "wit"});     

    //   setWitMessage("I'm not too sure, maybe you want to know what sex is?");
    //   break;
    // case "learn_penis":
    //   messagesList.push({messageBody: "A penis is a penis", messageAuthor: "wit"});     

    //   setWitMessage("A penis is a penis");
    //   break;
    // case "learn_sex":
    //   messagesList.push({messageBody: "That's how you make babies!", messageAuthor: "wit"});     

    //   setWitMessage("That's how you make babies!");
    //   break;
    // case "learn_scrotum":
    //   messagesList.push({messageBody: "Let me explain what a scrotum is", messageAuthor: "wit"});     

    //   setWitMessage("That's a body part");
    //   break;
    // case "learn_penis_synonym":
    //   messagesList.push({messageBody: "That's a different word for penis, do you want to lear about penises?", messageAuthor: "wit"});     

    //   setWitMessage("That's a different word for penis, do you want to lear about penises?");
    //   break;
    // case "learn_foreskin":
    //   messagesList.push({messageBody: "part of a penis", messageAuthor: "wit"});     

    //   setWitMessage("part of a penis");
    //   break;
    // case "more_info":
    //   messagesList.push({messageBody: "ok, you want to know something more", messageAuthor: "wit"});     

    //   setWitMessage("ok, you want to know something more");
    //   break;
    // case "learn_about_body_parts":
    //   messagesList.push({messageBody: "You want to learn about body parts", messageAuthor: "wit"});     

    //   setWitMessage("You want to learn about body parts");
    //   break;
    // case "learn_vagina":
    //   messagesList.push({messageBody: "I can tell you what a vagina is", messageAuthor: "wit"});     

    //   setWitMessage("I can tell you what a vagina is");
    //   break;
    // case "learn_sperm_synonym":
    //   messagesList.push({messageBody: "That's a different word for sperm", messageAuthor: "wit"});     

    //   // setWitMessage("That's a different word for sperm");
    //   break;
    // case "learn_vagina_synonym":
    //   messagesList.push({messageBody: "That's a different word for vagina", messageAuthor: "wit"});     

    //   // setWitMessage("That's a different word for vagina");
    //   break;
    default:
      messagesList.push({messageBody: "Unfortunately I'm not sure what you want to learn about", messageAuthor: "wit"});     
      // setWitMessage("Unfortunately I'm not sure what you want to learn about");
    }
}

export const manageWitResponse = ( data, messagesList ) => {
  console.log("the MANAGE WIT RESPONSE IS CALLED WHEN???", messagesList)
  const messageIntents = firstIntentValue(data);
  // const messageEntities = firstEntityValue(data, entities);

  if (messageIntents) {
    detectedIntent(data.intents[0].name, messagesList);
  } else {
    messagesList.push({messageBody: "Unfortunately I'm not sure what you want to learn about", messageAuthor: "wit"});     

    // setWitMessage("Unfortunately I'm not sure what you want to learn about");
  }

  return messagesList;
};
