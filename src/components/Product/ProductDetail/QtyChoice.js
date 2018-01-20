import React from 'react';
import styled from 'styled-components';
import { colors } from '../../helpers';
import Input from '../../Elements/Input';
import Ribbon from '../../Elements/Ribbon';
import Button from '../../Elements/Button';
import ButtonGroup from '../../Elements/ButtonGroup';

const QtyChoice = ({ qtyFieldError, orderQty, handleQtyChange }) => {
  return (
    <QtyContainer>
      <Ribbon primary>
        Choose Quantity:
        {qtyFieldError && <SelectError>Quantity is Required!</SelectError>}
      </Ribbon>
      <QtyButtonGroup>
        <QtyButton>-</QtyButton>
        <Input placeholder="How Many?" />
        <QtyButton>+</QtyButton>
      </QtyButtonGroup>
    </QtyContainer>
  );
};

export default QtyChoice;

const QtyContainer = styled.div`
  margin: 0 0 .25rem 1rem;
  width: 300px;
`;

const SelectError = styled.span`
  align-self: end;
  color: ${colors.error};
`;

const QtyButton = styled(Button)`

`;

const QtyButtonGroup = styled(ButtonGroup)`

`;
