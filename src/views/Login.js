import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Heading from '../components/Heading';
import Button from '../components/Button';
import Input from '../components/Input';
import Row from '../components/Row';
import Column from '../components/Column';
import Box from '../components/Box';

import { brandPrimary, brandSecondary } from '../colors';

class Login extends Component {
  state = {
    isLoggedIn: false,
  }

  login = () => {
    this.setState({
      isLoggedIn: true,
    });
  }
  
  render(props) {
    if (this.state.isLoggedIn) {
      return <Redirect to="/home" />
    }
    return (
      <div>
        <Row>
          <Column md={4}></Column>
          <Column md={4}>
            <Box textAlign="center">
              <Heading color={brandPrimary}>Welcome</Heading>
              <Heading color={brandSecondary}>My First React App</Heading>
              <Input type="text" />
              <Input type="password" />
              <p>
                <Button size="large" color={brandPrimary} onClick={() => this.login()}>Login</Button>
              </p>
            </Box>
          </Column>
        </Row>
      </div>
    );
  }
}

export default Login;


