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
        <Profile imageSource={data[0].imgPath} first={data[0].firstName} last={data[0].lastName} />
        <Profile imageSource={data[1].imgPath} first={data[1].firstName} last={data[1].lastName} />
        <Profile imageSource={data[2].imgPath} first={data[2].firstName} last={data[2].lastName} />
      </header>
    </div>
  );
}

export default App;