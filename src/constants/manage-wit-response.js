export const manageWitResponse = ( data, setInputValue, setWitMessage ) => {
  if (data && data.intents && data.intents.length > 0) {
    switch(data.intents[0].name) {
      case "greeting":
        setWitMessage("Well hello there!");
        break;
      case "bye":
        setWitMessage("Buh bye now!");
        break;
      case "learn_about_porn":
        setWitMessage("I can tell you what porn is");
        break;
      case "learn_masturbation":
        setWitMessage("Don't worry, it does not cause blindness!");
        break;
      case "learn_sperm":
        setWitMessage("Produced by all males");
        break;
      case "learn_erection":
        setWitMessage("Happens to all males");
        break;
      case "learn_general":
        setWitMessage("I'm not too sure, maybe you want to know what sex is?");
        break;
      case "learn_penis":
        setWitMessage("A penis is a penis");
        break;
      case "learn_sex":
        setWitMessage("That's how you make babies!");
        break;
      case "learn_scrotum":
        setWitMessage("That's a body part");
        break;
      case "learn_penis_synonym":
        setWitMessage("That's a different word for penis, do you want to lear about penises?");
        break;
      case "learn_foreskin":
        setWitMessage("part of a penis");
        break;
      case "more_info":
        setWitMessage("ok, you want to know something more");
        break;
      case "learn_about_body_parts":
        setWitMessage("You want to learn about body parts");
        break;
      case "learn_vagina":
        setWitMessage("I can tell you what porn is");
        break;
      case "learn_sperm_synonym":
        setWitMessage("That's a different word for sperm");
        break;
      case "learn_vagina_synonym":
        setWitMessage("That's a different word for vagina");
        break;
      default:
        setWitMessage("Unfortunately I'm not sure what you want to lear about");
    }
  }
  setInputValue("")
};
