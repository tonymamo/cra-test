import React from 'react';
import './button.css';

const Button = ({ children, link, color }) => (
  <a href={link} className={`button button-${color}`}>{children}</a>
);

export default Button;
