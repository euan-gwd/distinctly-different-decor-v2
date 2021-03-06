import React from "react";
import styled from "styled-components";
import InputCounter from "../../uiElements/InputCounter";
import Ribbon from "../../uiElements/Ribbon";
import RequiredLabel from "../../uiElements/RequiredLabel";

const QtyChoice = props => {
  return (
    <QtyContainer>
      <Ribbon primary>Choose Quantity:</Ribbon>
      {props.qtyFieldError && <RequiredLabel>Quantity is Required!</RequiredLabel>}
      <InputCounter
        orderQty={props.orderQty}
        handleChange={props.handleQtyChange}
        qtyFieldError={props.qtyFieldError}
      />
    </QtyContainer>
  );
};

export default QtyChoice;

const QtyContainer = styled.div`
  margin: 0 0 1rem 1rem;
`;
