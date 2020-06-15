import React, { useState } from 'react';
import { Wit, log } from "node-wit";
import { manageWitResponse } from "./constants/manage-wit-response";

const InputField = () => {
  const client = new Wit({accessToken: 'YQKUWRTVDAGSCNGN46L3QFVD7EQJYQF2'});
  const [ inputValue, setInputValue ] = useState("");
  const [ witMessage, setWitMessage ] = useState("");

  const testWitAction = () => {
    client.message(inputValue, {})
    .then((data) => {
      manageWitResponse(data, setInputValue, setWitMessage);
    })
    .catch(console.error);
  };

  return (
    <div className="">
      <header className="">
        <div>
          <p>the Wit message will appear here</p>
          <p>{witMessage}</p>
        </div>
        <input
          placeholder="input stuff here"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          type="text"
          autoComplete="off"
        />
        <button onClick={() => testWitAction()}>Send a message</button>
      </header>
    </div>
  );
}

export { InputField };
