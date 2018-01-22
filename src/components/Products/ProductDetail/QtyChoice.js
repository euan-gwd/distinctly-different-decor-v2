import React from "react";
import styled from "styled-components";
import Input from "../../uiElements/Input";
import Ribbon from "../../uiElements/Ribbon";
import Button from "../../uiElements/Button";
import ButtonGroup from "../../uiElements/ButtonGroup";
import RequiredLabel from "../../uiElements/RequiredLabel";

const QtyChoice = ({ qtyFieldError, orderQty, handleQtyChange }) => {
  return (
    <QtyContainer>
      <Ribbon primary>Choose Quantity:</Ribbon>
      {qtyFieldError && <RequiredLabel>Quantity is Required!</RequiredLabel>}
      <ButtonGroup>
        <Button>-</Button>
        <Input placeholder="0" onChange={handleQtyChange} />
        <Button>+</Button>
      </ButtonGroup>
    </QtyContainer>
  );
};

export default QtyChoice;

const QtyContainer = styled.div`
  margin: 0 0 0.25rem 1rem;
  width: 300px;
`;
