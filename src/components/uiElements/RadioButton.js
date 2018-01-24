import React from "react";
import styled from "styled-components";
import { colors } from "../helpers";

const RadioButton = props => {
  return (
    <InputGroup validate={props.validate}>
      <input id={props.id} name={props.name} type="radio" {...props} />
      <label htmlFor={props.id}>{props.id}</label>
    </InputGroup>
  );
};

export default RadioButton;

const InputGroup = styled.div`
  > input[type="radio"] {
    opacity: 0;
    width: 0;
    margin: 0;
    padding: 0;
    display: none;
  }

  > input[type="radio"] ~ label {
    cursor: pointer;
    display: inline-block;
    min-height: 1rem;
    min-width: 80px;
    outline: none;
    border: none;
    vertical-align: baseline;
    background-color: ${props =>
      props.validate ? `${colors.errorBackground}` : `transparent`};
    color: ${props =>
      props.validate ? `${colors.error}` : `${colors.default}`};
    margin: 0;
    padding: 0.78571429rem 1rem;
    text-transform: none;
    text-shadow: none;
    font-weight: normal;
    line-height: 1rem;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: 0.28571429rem;
    box-shadow: 0px 0px 0px 1px
      ${props =>
        props.validate ? `${colors.error}` : `${colors.primaryBorder}`}
      inset;
    user-select: none;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
      box-shadow 0.1s ease, background 0.1s ease;
    will-change: "";
    -webkit-tap-highlight-color: transparent;
  }

  > input[type="radio"]:hover ~ label {
    color: ${colors.white};
    background-color: ${colors.primaryBorder};
    box-shadow: 1px 1px 1px 1px rgba(34, 36, 38, 0.35) inset;
  }

  > input[type="radio"]:checked ~ label {
    color: ${colors.primary};
    background: ${colors.defaultBackground} none;
    box-shadow: 0px 0px 0px 1px ${colors.primary} inset;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  }
`;
