import React from "react";
import styled from "styled-components";
import { colors } from "../helpers";

const RequiredLabel = props => {
  return <RadioError>{props.children}</RadioError>;
};

export default RequiredLabel;

export const RadioError = styled.span`
  display: inline-block;
  margin-left: 1rem;
  color: ${colors.error};
`;
