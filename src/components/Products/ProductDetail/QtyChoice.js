import React from "react";
import styled from "styled-components";
// import Dropdown from "../../uiElements/Dropdown.js";
import Counter from "../../uiElements/Counter";
import Ribbon from "../../uiElements/Ribbon";
import RequiredLabel from "../../uiElements/RequiredLabel";

const QtyChoice = ({
  qtyFieldError,
  orderQty,
  handleQtyChange,
  handleQtyAdd,
  handleQtyRemove
}) => {
  return (
    <QtyContainer>
      <Ribbon primary>Choose Quantity:</Ribbon>
      {qtyFieldError && <RequiredLabel>Quantity is Required!</RequiredLabel>}
      <Counter
        orderQty={orderQty}
        handleQtyChange={handleQtyChange}
        handleAdd={handleQtyAdd}
        handleRemove={handleQtyRemove}
      />
    </QtyContainer>
  );
};

export default QtyChoice;

const QtyContainer = styled.div`
  margin: 0 0 1rem 1rem;
`;
