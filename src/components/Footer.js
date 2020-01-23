import React from 'react';
import styled from 'styled-components';

import { brandPrimary, white } from '../colors';
import { baseSpacer, doubleSpacer} from '../sizes';

const StyledFooter = styled.footer`
  background-color: ${brandPrimary};
  padding: ${baseSpacer};
  color: ${white};
  margin-top: ${baseSpacer};
  width: calc(100% - ${doubleSpacer});
`;

const Footer = () => (
  <StyledFooter>
    &copy; { new Date().getFullYear() }
  </StyledFooter>
);

export default Footer;
