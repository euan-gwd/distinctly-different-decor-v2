import React from 'react';
import styled from 'styled-components';
import { colors } from '../helpers';

const Button = props => {
  return <Btn>{props.children}</Btn>;
};

export default Button;

const Btn = styled.button`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: none;
  border: none;
  vertical-align: baseline;
  background: transparent none;
  color: ${props => (props.primary ? `${colors.primary}` : '#00000099')};
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0.78571429em 1.5em 0.78571429em;
  box-sizing: border-box;
  text-transform: none;
  text-shadow: none;
  font-weight: normal;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  box-shadow: 0px 0px 0px 1px ${colors.primary} inset;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
  will-change: '';
  -webkit-tap-highlight-color: transparent;
`;
