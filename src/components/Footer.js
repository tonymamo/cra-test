import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Container from './Container';
import { brandPrimary, white } from '../colors';
import { baseSpacer, halfSpacer} from '../sizes';

const StyledFooter = styled.footer`
  background-color: ${brandPrimary};
  color: ${white};
  margin-top: ${baseSpacer};
  width: 100%;
  padding: ${halfSpacer} 0;
`;

const Footer = () => (
  <StyledFooter>
    <Container>
      &copy; { new Date().getFullYear() } <Link to="/about">About</Link> <Link to="/contact">Contact Us</Link>
    </Container>
  </StyledFooter>
);

export default Footer;
