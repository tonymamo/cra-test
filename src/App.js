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
import Heading from './components/Heading';
import Container from './components/Container';

import Login from './views/Login';
import Home from './views/Home';
import UserProfile from './views/UserProfile';
import Contact from './views/Contact';
import About from './views/About';

import { lightGrey, textGrey, brandDanger } from './colors';

import data from './data.json';

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
        <Container>
          <Switch>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/user/:userName">
              <UserProfile data={data} />
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
        </Container>
        <Footer />
      </StyledBody>
    </Router>
  );
}

export default App;
