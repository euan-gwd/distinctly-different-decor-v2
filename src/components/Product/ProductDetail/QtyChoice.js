import React from "react";
import styled from "styled-components";
import { colors } from "../../helpers";
import { SelectError } from "./SizeChoice";
import Input from "../../Elements/Input";
import Ribbon from "../../Elements/Ribbon";
import Button from "../../Elements/Button";
import ButtonGroup from "../../Elements/ButtonGroup";

const QtyChoice = ({ qtyFieldError, orderQty, handleQtyChange }) => {
  return (
    <QtyContainer>
      <Ribbon primary>Choose Quantity:</Ribbon>
      {qtyFieldError && <SelectError>Quantity is Required!</SelectError>}
      <ButtonGroup>
        <QtyButton>-</QtyButton>
        <Input placeholder="0" />
        <QtyButton>+</QtyButton>
      </ButtonGroup>
    </QtyContainer>
  );
};

export default QtyChoice;

const QtyContainer = styled.div`
  margin: 0 0 0.25rem 1rem;
  width: 300px;
`;

const QtyButton = styled(Button)`
  cursor: pointer;
  display: inline-block;
  min-height: 1rem;
  min-width: 80px;
  outline: none;
  border: none;
  vertical-align: baseline;
  background-color: ${props =>
    props.validate
      ? `${colors.errorBackground}`
      : `${colors.defaultBackground}`};
  color: ${props => (props.validate ? `${colors.error}` : `${colors.default}`)};
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
  box-shadow: 1px 1px 1px 1px
    ${props => (props.validate ? `${colors.error}` : `${colors.defaultBorder}`)}
    inset;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease;
  will-change: "";
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: black;
    background: #f6f7f6 none;
    box-shadow: 1px 1px 1px 1px rgba(34, 36, 38, 0.35) inset;
  }

  &:active {
    color: white;
    background: ${colors.primary} none;
    box-shadow: 0px 0px 0px 1px ${colors.primary} inset;
  }
`;

// const SelectError = styled.span`
//   display: inline-block;
//   margin-left: 1rem;
//   color: ${colors.error};
// `;
