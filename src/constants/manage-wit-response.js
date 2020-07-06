import { allGreetings } from "./intent-responses/greetings";
import { allGoodbyes } from "./intent-responses/byes";
import { allPornAnswers } from "./intent-responses/porn";
import { allMasturbationAnswers } from "./intent-responses/masturbation";
import { allSpermAnswers } from "./intent-responses/sperm";
import { generalAnswers } from "./intent-responses/general";
import { allPenisAnswers } from "./intent-responses/penis";
import { allOrgasmAnswers } from "./intent-responses/orgasm";
import { allClitorisAnswers } from "./intent-responses/clitoris";
import { allSexAnswers } from "./intent-responses/sex";
import { allForeskinAnswers } from "./intent-responses/foreskin";
import { allSexToyAnswers } from "./intent-responses/sex-toy";
import { allVulvaAnswers } from "./intent-responses/vulva";
import { allProstituteAnswers } from "./intent-responses/prostitute";

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
      const greeting = allGreetings[Math.floor(Math.random() * allGreetings.length)];
      
      messagesList.unshift({messageBody: greeting, messageAuthor: "wit"});     
      return messagesList;
    case "bye":
      const bye = allGoodbyes[Math.floor(Math.random() * allGoodbyes.length)];
      
      messagesList.unshift({messageBody: bye, messageAuthor: "wit"});     
      return messagesList;
    case "learn_about_porn":
      const porn = allPornAnswers[Math.floor(Math.random() * allPornAnswers.length)];

      messagesList.unshift({messageBody: porn, messageAuthor: "wit"});     
      return messagesList;
    case "learn_masturbation":
      const masturbation = allMasturbationAnswers[Math.floor(Math.random() * allMasturbationAnswers.length)];

      messagesList.unshift({messageBody: masturbation, messageAuthor: "wit"});     
      return messagesList;
    case "learn_sperm":
      const sperm = allSpermAnswers[Math.floor(Math.random() * allSpermAnswers.length)];

      messagesList.unshift({messageBody: sperm, messageAuthor: "wit"});     
      return messagesList;
    case "learn_erection":
      const erection = "An erection (pronounced ee-REK-shən) of a body part such as a man's penis, a woman's clitoris or a nipple refers to it becoming larger and harder. The term erection is most often used to refer to an erection of the penis. In a healthy male, an erection will usually occur if the man is sexually aroused (made sexually excited) or stimulated. This can happen if he is touched sexually, or even if he is not touched – for example, if he sees a naked person or thinks about having sex with someone else. Erections can also occur without thinking about sex or being touched. Most boy teenagers have unexpected erections. This is normal. Erections happen several times during the night. This happens to all healthy adult males of all ages. This also happens when a man wakes up. That is normal too."

      messagesList.unshift({messageBody: erection, messageAuthor: "wit"});     
      return messagesList;
    case "learn_general":
      const general = generalAnswers[Math.floor(Math.random() * generalAnswers.length)];

      messagesList.unshift({messageBody: general, messageAuthor: "wit"});     
      return messagesList;
    case "learn_penis":
      const penis = allPenisAnswers[Math.floor(Math.random() * allPenisAnswers.length)];

      messagesList.unshift({messageBody: penis, messageAuthor: "wit"});     
      return messagesList;
    case "learn_orgasm":
      const orgasm = allOrgasmAnswers[Math.floor(Math.random() * allOrgasmAnswers.length)];

      messagesList.unshift({messageBody: orgasm, messageAuthor: "wit"});     
      return messagesList;
    case "learn_clitoris":
      const clitoris = allClitorisAnswers[Math.floor(Math.random() * allClitorisAnswers.length)];

      messagesList.unshift({messageBody: clitoris, messageAuthor: "wit"});     
      return messagesList;
    case "learn_sex":
      const sex = allSexAnswers[Math.floor(Math.random() * allSexAnswers.length)];

      messagesList.unshift({messageBody: sex, messageAuthor: "wit"});     
      return messagesList;
    case "learn_sex_synonym":
      const sex_synonym = "That's another word for sex."

      messagesList.unshift({messageBody: sex_synonym, messageAuthor: "wit"});     
      return messagesList;
    case "learn_scrotum":
      const scrotum = "The scrotum is the bag that holds the testicles (commonly called balls) in male mammals. It is made of skin and muscle and is found between the penis and anus. It is often covered in pubic hair and becomes tight when the male is aroused.";
      messagesList.unshift({messageBody: scrotum, messageAuthor: "wit"});     
      return messagesList;
    case "learn_penis_synonym":
      const synonym = "As far as I know, that's a different word for a penis."
      
      messagesList.unshift({messageBody: synonym, messageAuthor: "wit"});     
      return messagesList;
    case "learn_foreskin":
      const foreskin = allForeskinAnswers[Math.floor(Math.random() * allForeskinAnswers.length)];

      messagesList.unshift({messageBody: foreskin, messageAuthor: "wit"});     
      return messagesList;
    case "learn_sex_toy":
      const sex_toy = allSexToyAnswers[Math.floor(Math.random() * allSexToyAnswers.length)];

      messagesList.unshift({messageBody: sex_toy, messageAuthor: "wit"});     
      return messagesList;
    case "learn_vagina":
      const vagina = "The human vagina is a part of the female body. It is between the perineum and the urethra. Menstrual fluid (red, blood-filled liquid lost during menstruation) leaves the body through the vagina. During sexual intercourse, a penis is put into the vagina. During birth, the vagina opens to let the baby come out from the uterus."
      
      messagesList.unshift({messageBody: vagina, messageAuthor: "wit"});     
      return messagesList;
    case "learn_vulva":
      const vulva = allVulvaAnswers[Math.floor(Math.random() * allVulvaAnswers.length)];

      messagesList.unshift({messageBody: vulva, messageAuthor: "wit"});     
      return messagesList;
    case "learn_sperm_synonym":
      const sperm_synonym = "I think that's a different word for sperm."
      
      messagesList.unshift({messageBody: sperm_synonym, messageAuthor: "wit"});     
      return messagesList;
    case "learn_vagina_synonym":
      const vagina_synonym = "I believe that might be a different word for vagina."
      
      messagesList.unshift({messageBody: vagina_synonym, messageAuthor: "wit"});     
      return messagesList;
    case "thanks":
      const thanks = "No problem!";
      
      messagesList.unshift({messageBody: thanks, messageAuthor: "wit"});     
      return messagesList;
    case "about_me":
      const about_me = "I'm a Chat Bot connected with a Machine Learning Algorythm. I try to answer simple questions about sex and sex-related questions. That's all! :)";
      
      messagesList.unshift({messageBody: about_me, messageAuthor: "wit"});     
      return messagesList;
    case "make_babies":
      const make_babies = "Adults make babies when they have sex. Sexual intercourse (or simply called sex) is the insertion and thrusting of a male's penis into a female's vagina. People and animals that sexually reproduce use sexual intercourse to have babies.";

      messagesList.unshift({messageBody: make_babies, messageAuthor: "wit"});     
      return messagesList;
    case "sex_duration":
      const sex_duration = "According to surveys, vaginal sex that lasts one to two minutes is “too short.” Vaginal sex that lasts 10 to 30 minutes is considered “too long.” So how long should vaginal sex actually last? The sex therapists say that anywhere from 7 to 13 minutes is “desirable.”"

      messagesList.unshift({messageBody: sex_duration, messageAuthor: "wit"});     
      return messagesList;
    case "penis_size":
      const penis_size = "Men everywhere worry that their penis is smaller than it should be or that it won't satisfy a lover. But research suggests that most men underestimate the size of their pride and joy. Most men's penises are somewhere around 9cm (3.75in) long when not erect, but it's normal for them to be shorter or longer than this. Some things can make your penis temporarily smaller, such as swimming or being cold.";

      messagesList.unshift({messageBody: penis_size, messageAuthor: "wit"});     
      return messagesList;

    case "learn_anal":
      const anal_sex = "Anal sex is a sex act performed on the anus. Anal sex can involve a penis inserted in the anus, oral stimulation of the anus, using fingers for penetration and using different objects for stimulation."
      
      messagesList.unshift({messageBody: anal_sex, messageAuthor: "wit"});     
      return messagesList;

    case "learn_prostitute":
      const prostitute = allProstituteAnswers[Math.floor(Math.random() * allProstituteAnswers.length)];

      messagesList.unshift({messageBody: prostitute, messageAuthor: "wit"});     
      return messagesList;

    case "learn_prostitute_synonym":
      const prostitute_synonym = "That's most probably a different word for a prostitute."
      
      messagesList.unshift({messageBody: prostitute_synonym, messageAuthor: "wit"});     
      return messagesList;

    case "learn_swear_word":
      //check ROLES!
      const swear_word = "That sounds like a swear word. I'm not sure yet what it means, but I'll try to find out!"
      
      messagesList.unshift({messageBody: swear_word, messageAuthor: "wit"});     
      return messagesList;

    default:
      messagesList.unshift({messageBody: "Unfortunately I'm not sure what you want to learn about", messageAuthor: "wit"});     
    }
}

export const manageWitResponse = ( data, messagesList ) => {
  const messageIntents = firstIntentValue(data);
  if (messageIntents) {
    detectedIntent(data.intents[0].name, messagesList);
  } else {
    messagesList.unshift({messageBody: "Unfortunately I'm not sure what you want to learn about", messageAuthor: "wit"});     
  }
};
