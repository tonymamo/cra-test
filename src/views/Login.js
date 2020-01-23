import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Heading from '../components/Heading';
import Button from '../components/Button';
import { brandPrimary, brandSecondary, textGrey, white, lightGrey, brandPrimaryRGB} from '../colors';
import { doubleSpacer, baseSpacer, quarterSpacer } from '../sizes';

const StyledLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input`
  display: block;
  width: 300px;
  height: ${doubleSpacer};
  padding: ${baseSpacer};
  font-size: ${baseSpacer};
  color: ${textGrey};
  background-color: ${white};
  background-image: none;
  border: 1px solid ${lightGrey};
  border-radius: ${quarterSpacer};
  transition: border-color .2s ease-in-out;
  margin-bottom: ${baseSpacer};
    
  &:focus {
    border-color: ${brandPrimary};
    outline: 0;
    box-shadow: 0 0 0 ${quarterSpacer} rgba(${brandPrimaryRGB},.25);
  }
`;

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
      <StyledLoginWrapper>
        <Heading color={brandPrimary}>Welcome</Heading>
        <Heading color={brandSecondary}>My First React App</Heading>
        <StyledInput type="text" />
        <StyledInput type="password" />
        <Button size="large" color={brandPrimary} onClick={() => this.login()}>Login</Button>
      </StyledLoginWrapper>
    );
  }
}

export default Login;


