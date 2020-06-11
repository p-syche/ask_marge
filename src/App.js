import React from 'react';
import './App.css';
import { Wit, log } from "node-wit";


function App() {
  const client = new Wit({accessToken: 'YQKUWRTVDAGSCNGN46L3QFVD7EQJYQF2'});

  const testWitAction = () => {
    client.message('hi!', {})
    .then((data) => {
      console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
    })
    .catch(console.error);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => testWitAction()}>Send a message</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
