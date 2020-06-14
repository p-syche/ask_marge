import React, { useState } from 'react';
// import './App.css';
import { Wit, log } from "node-wit";


function InputField() {
  const client = new Wit({accessToken: 'YQKUWRTVDAGSCNGN46L3QFVD7EQJYQF2'});
  const [ inputValue, setInputValue ] = useState("");
  const [ witMessage, setWitMessage ] = useState("");

  const manageWitResponse = data => {
    console.log("I want to check the object!", data, data.intents[0].name )
    if (data && data.intents && data.intents.length > 0) {
      if (data.intents[0].name === "greeting") {
        setWitMessage("Well hello there!");
      } else if (data.intents[0].name === "learn_general") {
        setWitMessage("I can tell you want to learn about some things");
      } else if (data.intents[0].name === "learn_about_body_parts") {
        setWitMessage("You are curious about your body.");
      } else {
        setWitMessage("Unfortunately I'm not sure what you want to lear about");
      }
    }
    setInputValue("")
  };

  const testWitAction = () => {
    client.message(inputValue, {})
    .then((data) => {
      manageWitResponse(data);
      console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
    })
    .catch(console.error);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>the Wit message will appear here</p>
          <p>{witMessage}</p>
        </div>
        <input
          placeholder="input stuff here"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          type="text"
          autocomplete="off"
        />
        <button onClick={() => testWitAction()}>Send a message</button>
      </header>
    </div>
  );
}

export default InputField;
