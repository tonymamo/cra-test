import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Login from './views/Login';
import Home from './views/Home';
import UserProfile from './views/UserProfile';

import {lightGrey, textGrey, brandDanger } from './colors';
import Heading from './components/Heading';

const StyledBody = styled.div`
  background-color: ${lightGrey};
  color: ${textGrey};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <StyledBody>
        <Navbar />
          <Switch>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/user/:userName">
              <UserProfile />
            </Route>
            <Route path="/user">
              <Redirect to="/" />
            </Route>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route>
              <Heading color={brandDanger}>Oops! Page not found</Heading>
            </Route>
          </Switch>
        <Footer />
      </StyledBody>
    </Router>
  );
}

export default App;
