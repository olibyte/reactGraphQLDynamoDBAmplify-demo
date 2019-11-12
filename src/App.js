import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from 'aws-amplify';
import awsConfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
Auth.configure(awsConfig);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Ok! I get it!
        </p>
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

export default withAuthenticator(App, {includeGreetings: true});
