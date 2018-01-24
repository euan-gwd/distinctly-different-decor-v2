import React from "react";
import styled from "styled-components";
import Button from "./Button.js";
import { MinusSquare, PlusSquare } from "react-feather";
import { colors } from "../helpers.js";

const Counter = props => {
  return (
    <Container>
      <SubtractQty onClick={() => props.handleRemove()}>
        <MinusSquare />
      </SubtractQty>
      <Input>{props.orderQty}</Input>
      <AddQty onClick={() => props.handleAdd()}>
        <PlusSquare />
      </AddQty>
    </Container>
  );
};

export default Counter;

const Container = styled.div`
  max-width: 255px;
  display: grid;
  grid-template-columns: 80px 95px 80px;
  align-items: center;
`;

const SubtractQty = styled(Button)`
  margin: 0;
  padding: calc(0.78571429rem/2);
  min-width: 50px;
  box-shadow: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top: 1px solid ${colors.primaryBorder};
  border-bottom: 1px solid ${colors.primaryBorder};
  border-left: 1px solid ${colors.primaryBorder};
`;

const AddQty = styled(Button)`
  margin: 0;
  min-width: 50px;
  padding: calc(0.78571429rem/2);
  box-shadow: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top: 1px solid ${colors.primaryBorder};
  border-bottom: 1px solid ${colors.primaryBorder};
  border-right: 1px solid ${colors.primaryBorder};
`;

const Input = styled.div`
  outline: none;
  border: none;
  padding: 0.77571429rem 0.78571429rem;
  background-color: ${props =>
    props.validate
      ? `${colors.errorBackground}`
      : `${colors.defaultBackground}`};
  color: ${props => (props.validate ? `${colors.error}` : `${colors.primary}`)};
  margin: 0;
  text-transform: none;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
  font-size: 1rem;
  font-weight: normal;
  line-height: 1rem;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  box-shadow: 0px 0px 0px 1px ${colors.primaryBorder} inset;
`;