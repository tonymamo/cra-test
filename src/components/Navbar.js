import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { brandPrimary, white } from '../colors';
import { halfSpacer, doubleSpacer, baseSpacer } from '../sizes';
import logo from '../logo.svg';
import Container from './Container';

const StyledLogo = styled.img`
  width: ${doubleSpacer};
  &:hover,
  &:focus {
    outline: dotted 1px white;
  }
`;

const StyledNavbar = styled.div`
  padding: ${halfSpacer} 0;
  background-color: ${brandPrimary};
  color: ${white};
  position: sticky;
  width: 100%;
  margin-bottom: ${baseSpacer};
`;

const Navbar = () => (
  <StyledNavbar>
    <Container>
      <Link to="/">
        <StyledLogo src={logo} alt="logo" />
      </Link>
    </Container>
  </StyledNavbar>
);

export default Navbar;
