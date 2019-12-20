import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';
import Button from './components/Button';
import Heading from './components/Heading';

import data from './data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>My First React App</Heading>
        <div className="profiles">
          {
            data.map((person) => (
              <Profile person={person} key={person.userName} />
            ))
          }
        </div>
        <Button size="large" color="red" link="/">Login</Button>
      </header>
    </div>
  );
}

export default App;
