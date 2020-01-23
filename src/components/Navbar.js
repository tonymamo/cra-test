import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { brandPrimary, white } from '../colors';
import { baseSpacer, doubleSpacer } from '../sizes';
import logo from '../logo.svg';

const StyledLogo = styled.img`
  width: ${doubleSpacer};
  &:hover,
  &:focus {
    outline: dotted 1px white;
  }
`;

const StyledNavbar = styled.div`
  padding: ${baseSpacer};
  background-color: ${brandPrimary};
  color: ${white};
  position: sticky;
  width: calc(100% - ${doubleSpacer});
`;

const Navbar = () => (
  <StyledNavbar>
    <Link to="/">
      <StyledLogo src={logo} alt="logo" />
    </Link>
  </StyledNavbar>
);

export default Navbar;
