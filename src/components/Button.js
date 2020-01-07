import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;

  background-color: ${props => props.color ? props.color : '#dddddd'};

  ${props => props.size === 'large' && `padding: 16px 32px;border-radius: 32px;`};

  ${props => props.size === 'small' && `padding: 4px;border-radius: 2px;`};

  width: ${props => props.block ? '100%' : 'initial'};

  ${props => props.disabled && `opacity: .1; cursor: not-allowed`}
`;

const Button = ({ children, color, size, block, disabled, onClick }) => (
  <StyledButton size={size} color={color} block={block} disabled={disabled} onClick={onClick}>{children}</StyledButton>
);

export default Button;
