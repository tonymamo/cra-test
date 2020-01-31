import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { brandPrimary, white } from '../colors';
import { baseSpacer, doubleSpacer} from '../sizes';

const StyledFooter = styled.footer`
  background-color: ${brandPrimary};
  padding: ${baseSpacer};
  color: ${white};
  margin-top: ${baseSpacer};
  width: calc(100% - ${doubleSpacer});
  display: flex;
  justify-content: space-between;
`;

const Footer = () => (
  <StyledFooter>
    <span>&copy; { new Date().getFullYear() }</span>
    <div>
      <Link to="/about">About</Link>
      &nbsp;&nbsp;
      <Link to="/contact">Contact Us</Link>
    </div>
  </StyledFooter>
);

export default Footer;
