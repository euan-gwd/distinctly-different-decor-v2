import React from 'react';
import styled from 'styled-components';
import { colors } from '../../helpers';
import Select from 'semantic-ui-react/dist/es/addons/Select';
import Label from '../../Elements/Label/Label';

const QtyChoice = ({ qtyFieldError, orderQty, handleQtyChange }) => {
  return (
    <QtyContainer>
      <Label>
        Pick a Quantity:
        {qtyFieldError && <SelectError>Quantity is Required!</SelectError>}
      </Label>
      <Select
        upward
        onChange={handleQtyChange}
        options={qtyOptions}
        placeholder="Choose a Quantity"
        value={orderQty}
        required
        error={qtyFieldError ? 'error' : null}
      />
    </QtyContainer>
  );
};

export default QtyChoice;

const QtyContainer = styled.div`
  margin: 0 0 1rem;
  width: 300px;
`;

const SelectError = styled.span`
  align-self: end;
  color: ${colors.error};
`;

const qtyOptions = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
  { key: 5, text: '5', value: 5 },
  { key: 6, text: '6', value: 6 },
  { key: 7, text: '7', value: 7 },
  { key: 8, text: '8', value: 8 },
  { key: 9, text: '9', value: 9 },
  { key: 10, text: '10', value: 10 },
  { key: 20, text: '20', value: 20 },
  { key: 30, text: '30', value: 30 },
  { key: 40, text: '40', value: 40 },
  { key: 50, text: '50', value: 50 },
  { key: 60, text: '60', value: 60 },
  { key: 70, text: '70', value: 70 },
  { key: 80, text: '80', value: 80 },
  { key: 90, text: '90', value: 90 },
  { key: 100, text: '100', value: 100 }
];
