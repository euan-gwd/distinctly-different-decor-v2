import React from 'react';
import styled from 'styled-components';
import Select from 'semantic-ui-react/dist/es/addons/Select';

const QtyChoice = ({ qtyFieldError, orderQty, handleQtyChange }) => {
  return (
    <FormSelectGroup>
      <Label>Quantity:</Label>
      {qtyFieldError ? (
        <Select
          upward
          onChange={handleQtyChange}
          options={qtyOptions}
          placeholder="Quantity is Required!"
          value={orderQty}
          error
        />
      ) : (
        <Select
          upward
          onChange={handleQtyChange}
          options={qtyOptions}
          placeholder="Choose a Quantity"
          value={orderQty}
          required
        />
      )}
    </FormSelectGroup>
  );
};

export default QtyChoice;

const FormSelectGroup = styled.div`
  display: grid;
  grid-gap: 1rem 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-gap: 0.5rem 0;
  }
`;

const Label = styled.p`
  margin: 0 0 -0.5rem;
  padding: 0;
`;

const qtyOptions = [
  { key: 1, text: '1', value: '1' },
  { key: 2, text: '2', value: '2' },
  { key: 3, text: '3', value: '3' },
  { key: 4, text: '4', value: '4' },
  { key: 5, text: '5', value: '5' },
  { key: 6, text: '6', value: '6' },
  { key: 7, text: '7', value: '7' },
  { key: 8, text: '8', value: '8' },
  { key: 9, text: '9', value: '9' },
  { key: 10, text: '10', value: '10' },
  { key: 20, text: '20', value: '20' },
  { key: 30, text: '30', value: '30' },
  { key: 40, text: '40', value: '40' },
  { key: 50, text: '50', value: '50' },
  { key: 60, text: '60', value: '60' },
  { key: 70, text: '70', value: '70' },
  { key: 80, text: '80', value: '80' },
  { key: 90, text: '90', value: '90' },
  { key: 100, text: '100', value: '100' }
];