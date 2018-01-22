import React from "react";
import styled from "styled-components";

const IconButton = props => <Button {...props}>{props.children}</Button>;
export default IconButton;

const Button = styled.a`
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  grid-gap: 2.5px;
  cursor: pointer;
  outline: none;
  border: none;
  min-height: 1rem;
  background-color: transparent;
  color: ${props =>
    (props.color === "primary" ? "#6435c9" : null) ||
    (props.color === "success" ? "#21ba45" : null) ||
    (props.color === "danger" ? "#db2828" : null)};
  margin: 0;
  padding: calc(0.78571429rem/2) 0.78571429rem;
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
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease;
  will-change: "";
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: ${props =>
      (props.color === "primary" ? "#6435e9" : null) ||
      (props.color === "success" ? "#16ab39" : null) ||
      (props.color === "danger" ? "#d01919" : null)};
  }

  &:active {
    color: ${props =>
      (props.color === "primary" ? "#6435c9" : null) ||
      (props.color === "success" ? "#21ba45" : null) ||
      (props.color === "danger" ? "#db2828" : null)};
`;
