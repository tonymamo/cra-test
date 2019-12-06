import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile';

import data from './data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          data.map((person) => (
            <Profile imageSource={person.imgPath} first={person.firstName} last={person.lastName} />
          ))
        }
      </header>
    </div>
  );
}

export default App;
