import React from 'react';
import styled from 'styled-components';
import { colors } from '../helpers';

const Input = (props) => {
  return <InputField {...props} />;
};

export default Input;

const InputField = styled.input`
  display: block;
  min-height: 1rem;
  min-width: min-content;
  outline: none;
  border: none;
  background-color: ${(props) => (props.validate ? `${colors.errorBackground}` : `${colors.defaultBackground}`)};
  color: ${(props) => (props.validate ? `${colors.error}` : `${colors.default}`)};
  margin: 0;
  padding: 0.78571429rem 1rem;
  text-transform: none;
  text-shadow: none;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1rem;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  box-shadow: 0px 0px 0px 1px ${(props) => (props.validate ? `${colors.error}` : `${colors.defaultBorder}`)} inset;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
  will-change: '';
  -webkit-tap-highlight-color: transparent;
`;
