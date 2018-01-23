import React from "react";
import styled from "styled-components";

const ButtonGroup = props => <BtnGroup {...props}>{props.children}</BtnGroup>;
export default ButtonGroup;

const BtnGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 5px;
`;
