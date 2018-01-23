import React from "react";
import styled from "styled-components";

const ButtonGroup = props => <BtnGroup {...props}>{props.children}</BtnGroup>;
export default ButtonGroup;

const BtnGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-gap: 1rem;
  align-items: center;
`;
