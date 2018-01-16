import React from 'react';
import styled from 'styled-components';
import Select from 'semantic-ui-react/dist/es/addons/Select';

const ColorChoice = ({ colorFieldError, orderColor, handleColorChange }) => {
  return (
    <FormSelectGroup>
      <Label>Color:</Label>
      {colorFieldError ? (
        <Select
          upward
          onChange={handleColorChange}
          options={colorOptions}
          placeholder="Color is Required!"
          value={orderColor}
          error
        />
      ) : (
        <Select
          upward
          onChange={handleColorChange}
          options={colorOptions}
          placeholder="Choose a Color"
          value={orderColor}
          required
        />
      )}
    </FormSelectGroup>
  );
};

export default ColorChoice;

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

const colorOptions = [
  { key: 1, text: 'Red', value: 'Red', label: { color: 'red', empty: true, circular: true } },
  {
    key: 2,
    text: 'Green',
    value: 'Green',
    label: { color: 'green', empty: true, circular: true }
  },
  {
    key: 3,
    text: 'Blue',
    value: 'Blue',
    label: { color: 'blue', empty: true, circular: true }
  },
  {
    key: 4,
    text: 'Yellow',
    value: 'Yellow',
    label: { color: 'yellow', empty: true, circular: true }
  },
  {
    key: 5,
    text: 'Black',
    value: 'Black',
    label: { color: 'black', empty: true, circular: true }
  }
];
