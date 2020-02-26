import React from 'react';
import styled from 'styled-components';

import { brandPrimary } from '../colors';

// we are applying styling (aka css) to an html <a> element
const StyledButton = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${props => props.color ? props.color : brandPrimary};
  display: inline-block;
  
  ${props => props.size === 'large' && `padding: 16px 32px;border-radius: 32px;`};

  ${props => props.size === 'small' && `padding: 4px;border-radius: 2px;`};

  width: ${props => props.block ? '100%' : 'initial'};

  ${props => props.disabled && `opacity: .1; cursor: not-allowed`}
  
  &:hover {
    filter: brightness(115%);
  }
  
`;

const Button = ({ children, color, size, block, disabled, onClick }) => (
  <StyledButton size={size} color={color} block={block} disabled={disabled} onClick={onClick}>{children}</StyledButton>
);

export default Button;
