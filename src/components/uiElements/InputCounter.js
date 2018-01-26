import React, { Fragment } from "react";
import styled from "styled-components";
import { colors } from "../helpers.js";

const InputCounter = props => {
  return (
    <Fragment>
      <Input type="number" fieldError={props.qtyFieldError} value={props.orderQty} onChange={props.handleChange} />
    </Fragment>
  );
};

export default InputCounter;

const Input = styled.input`
  outline: none;
  border: none;
  margin: 0;
  padding: 0.78571429rem;
  max-width: 80px;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: ${props => (props.fieldError ? `${colors.errorBackground}` : `transparent`)};
  color: ${props => (props.fieldError ? `${colors.error}` : `${colors.primary}`)};
  text-transform: none;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.07);
  font-size: 1rem;
  font-weight: normal;
  line-height: 1rem;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  border-radius: 0.28571429rem;
  box-shadow: 0px 0px 0px 1px ${colors.primaryBorder} inset;

  &:focus {
    color: ${colors.white};
    background-color: ${colors.primaryBorder};
    box-shadow: 1px 1px 1px 1px rgba(34, 36, 38, 0.35) inset;
  }

  &:checked {
    color: ${colors.primary};
    background: ${colors.defaultBackground} none;
    box-shadow: 0px 0px 0px 1px ${colors.primary} inset;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  }
`;
