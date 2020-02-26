import React from 'react';
import styled from 'styled-components';

import { brandSecondary } from '../colors';

const StyledH1 = styled.h1`
  color: ${props => props.color ? props.color : brandSecondary};
  font-family: Roboto, sans-serif;
  font-weight: 900;
`;

const Heading = ({ children, color }) => (
  <StyledH1 color={color}>{children}</StyledH1>
);

export default Heading;
