import React from "react";
import styled from "styled-components";
import Counter from "../../uiElements/Counter";
import Ribbon from "../../uiElements/Ribbon";
import RequiredLabel from "../../uiElements/RequiredLabel";

const QtyChoice = props => {
  return (
    <QtyContainer>
      <Ribbon primary>Choose Quantity:</Ribbon>
      {props.qtyFieldError && (
        <RequiredLabel>Quantity is Required!</RequiredLabel>
      )}
      <Counter
        orderQty={props.orderQty}
        handleAdd={props.handleQtyAdd}
        handleRemove={props.handleQtyRemove}
        qtyFieldError={props.qtyFieldError}
      />
    </QtyContainer>
  );
};

export default QtyChoice;

const QtyContainer = styled.div`
  margin: 0 0 1rem 1rem;
`;
