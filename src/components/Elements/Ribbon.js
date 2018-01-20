import React from "react";
import styled from "styled-components";
import { colors } from "../helpers";

const Ribbon = props => {
  return <Label {...props}>{props.children}</Label>;
};

export default Ribbon;

const Label = styled.div`
  position: relative;
  display: inline-block;
  line-height: 1;
  font-size: 0.75rem;
  margin: 1rem 0 0.125rem -1.17rem;
  background-color: ${props =>
    props.primary ? `${colors.primary}` : `${colors.default}`};
  background-image: none;
  padding: calc(0.5rem/2) calc(0.8rem/2);
  color: ${props => (props.primary ? `${colors.white}` : `${colors.black}`)};
  text-transform: none;
  font-weight: bold;
  border: 0px solid #00000060;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  &:after {
    position: absolute;
    content: "";
    top: 100%;
    left: 0;
    background-color: transparent;
    border-style: solid;
    border-width: 0em 1.2rem 1.2rem 0em;
    border-color: transparent;
    border-right-color: inherit;
    width: 0;
    height: 0;
  }
`;
