import React from "react";
import styled from "styled-components";
import { colors } from "../helpers";

const Button = props => <Btn {...props}>{props.children}</Btn>;
export default Button;

const Btn = styled.button`
  cursor: pointer;
  display: inline-block;
  min-height: 1rem;
  outline: none;
  border: none;
  vertical-align: baseline;
  background-color: transparent;
  color: ${props => (props.primary ? `${colors.primary}` : `${colors.black}`)};
  margin: 0;
  padding: 0.78571429rem 1rem;
  box-sizing: border-box;
  text-transform: none;
  text-shadow: none;
  font-size: ${props =>
    (props.size === "mini" ? "0.78571429rem" : "1rem") ||
    (props.size === "small" ? "0.92857143rem" : "1rem") ||
    (props.size === "medium" ? "1rem" : "1rem") ||
    (props.size === "Large" ? "1.14285714rem" : "1rem") ||
    (props.size === "Huge" ? "1.42857143rem" : "1rem") ||
    (props.size === "Massive" ? "1.71428571rem" : "1rem")};
  font-weight: normal;
  line-height: 1rem;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  box-shadow: 0px 0px 0px 1px
    ${props =>
      props.primary ? `${colors.primary}` : `${colors.defaultBorder}`}
    inset;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease;
  will-change: "";
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.primaryBorder};
    box-shadow: 1px 1px 1px 1px rgba(34, 36, 38, 0.35) inset;
  }

  &:active {
    color: white;
    background: ${colors.primary} none;
    box-shadow: 0px 0px 0px 1px ${colors.primary} inset;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  }
`;
