import React from 'react';
import styled from 'styled-components';
import { colors } from '../../helpers';

const Button = props => <Btn {...props}>{props.children}</Btn>;
export default Button;

const Btn = styled.button`
  cursor: pointer;
  display: inline-block;
  min-height: 1rem;
  min-width: 140px;
  outline: none;
  border: none;
  vertical-align: baseline;
  background: transparent none;
  color: ${props => (props.primary ? `${colors.primary}` : `${colors.defaultBtnText}`)};
  font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  margin-top: 0;
  margin-right: 1rem;
  margin-bottom: 0;
  margin-left: 0;
  padding: 0.78571429rem 1rem;
  box-sizing: border-box;
  text-transform: none;
  text-shadow: none;
  font-weight: normal;
  line-height: 1rem;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  box-shadow: 0px 0px 0px 1px ${props => (props.primary ? `${colors.primary}` : `${colors.defaultBorder}`)} inset;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
  will-change: '';
  -webkit-tap-highlight-color: transparent;
`;
