import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile/Profile';
import Button from './components/Button';
import Heading from './components/Heading';

import data from './data.json';

// used to be `function App()`, but now since we want to use "state" we need a "class Component".
// class basically means "function", and Component is something built into React to handle a bunch
// of stuff behind the scenes for us. 
class App extends Component {
  // the constructor and super(props) parts are basically inheriting all the props from the Component
  // we dont really need to know about them, so you can just copy and paste these parts when you
  // need to use state in another file
  constructor(props) {
    super(props);
    // this is the part that sets the initial state, or "global to this file" variables.
    // the word "this" in javascript is a special word to mean "this file", so here we are creating
    // that "global to this file" variables called "state", which inside of it has two variables
    this.state = {
      isLoggedIn: false,
      userName: '',
    };
  }

  // this is a function that is called from the Button component's onClick property
  login = () => {
    this.setState({
      // here, we are switching the value of isLoggedIn by setting it to the opposite (notice 
      // the ! at the beginning) every time this function runs, or every click on the Button.
      // it goes from false to true to false to true, etc
      isLoggedIn: !this.state.isLoggedIn,
      // for the userName, we are seeing if this.state.userName exists already or not.
      // The initial value is '', which is a null or falsey value
      // so if it isn't falsey, then it sets it to 'tonymamo', otherwise it goes back to ''
      userName: this.state.userName ? '' : 'tonymamo',
    });
  }
  
  // render is part of the class Component, so you need this line around the "return ()" section
  render() {
    return (
      <div className="App">
        {/* below, the console.log is logging the state variable and you should see it change
          each time you click the Button that fires off the login function */}
        {console.log(this.state)}
        <header className="App-header">
          {/* in the Heading, we are looking at the state.userName variable and dynamically 
            showing either "Hello, username" or "welcome" depending on what the state.userName is*/}
          <Heading>{this.state.userName ? `Hello, ${this.state.userName}` : 'Welcome'}</Heading>
          <img src={logo} className="App-logo" alt="logo" />
          <Heading>My First React App</Heading>
          <div className="profiles">
            {
              data.map((person) => (
                <Profile person={person} key={person.userName} />
              ))
            }
          </div>
          {/* Here we've added a this.login() to the onClick of the Button. Also, we had to pass down
           the onClick prop to the Button.js file so it knew what onClick meant, which in turn is firing
           off our login() function.
           Also, we are changing the text (aka the "children" prop) of the Button by looking at the 
           state.isLoggedIn variable, which can be true or false.
           */}
          <Button size="large" color="red" onClick={() => this.login()}>{this.state.isLoggedIn ? 'Logout' : 'Login'}</Button>
        </header>
      </div>
    );
  }
}

export default App;
