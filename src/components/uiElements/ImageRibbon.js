import React from "react";
import styled from "styled-components";
import { colors } from "../helpers";

const ImageRibbon = props => {
  return <Ribbon {...props}>{props.children}</Ribbon>;
};

export default ImageRibbon;

const Ribbon = styled.div`
  position: absolute;
  display: inline-block;
  line-height: 1;
  margin: 1rem 0 0 -1.17rem;
  background-color: ${props =>
    props.primary ? `${colors.primary}` : `${colors.grey}`};
  background-image: none;
  padding: 0.5rem 0.8rem;
  color: ${props => (props.primary ? `${colors.white}` : `${colors.default}`)};
  text-transform: none;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  font-weight: normal;
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
