import React from 'react';
import styled from 'styled-components';
import { colors } from '../../helpers';
import Label from '../../Elements/Label/Label';

const ColorChoice = ({ handleColorChange, orderColor, colorFieldError }) => {
  return (
    <ColorContainer>
      <Label>
        Pick a Color:
        {colorFieldError && <SelectError>Color is Required!</SelectError>}
      </Label>
      <ColorSelectGroup>
        <ColorSelect validate={colorFieldError ? 'error' : null}>
          <input
            id="Red"
            name="Color"
            type="radio"
            value="Red"
            checked={orderColor === 'Red'}
            onChange={handleColorChange}
          />
          <label htmlFor="Red">Red</label>
        </ColorSelect>
        <ColorSelect validate={colorFieldError ? 'error' : null}>
          <input
            id="Green"
            name="Color"
            type="radio"
            value="Green"
            checked={orderColor === 'Green'}
            onChange={handleColorChange}
          />
          <label htmlFor="Green">Green</label>
        </ColorSelect>
        <ColorSelect validate={colorFieldError ? 'error' : null}>
          <input
            id="Blue"
            name="Color"
            type="radio"
            value="Blue"
            checked={orderColor === 'Blue'}
            onChange={handleColorChange}
          />
          <label htmlFor="Blue">Blue</label>
        </ColorSelect>
        <ColorSelect validate={colorFieldError ? 'error' : null}>
          <input
            id="Yellow"
            name="Color"
            type="radio"
            value="Yellow"
            checked={orderColor === 'Yellow'}
            onChange={handleColorChange}
          />
          <label htmlFor="Yellow">Yellow</label>
        </ColorSelect>
        <ColorSelect validate={colorFieldError ? 'error' : null}>
          <input
            id="Black"
            name="Color"
            type="radio"
            value="Black"
            checked={orderColor === 'Black'}
            onChange={handleColorChange}
          />
          <label htmlFor="Black">Black</label>
        </ColorSelect>
        <ColorSelect validate={colorFieldError ? 'error' : null}>
          <input
            id="White"
            name="Color"
            type="radio"
            value="White"
            checked={orderColor === 'White'}
            onChange={handleColorChange}
          />
          <label htmlFor="White">White</label>
        </ColorSelect>
      </ColorSelectGroup>
    </ColorContainer>
  );
};

export default ColorChoice;

const ColorContainer = styled.div`
  margin: 0 0 1rem;
  width: 300px;
`;

const ColorSelectGroup = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
`;

const ColorSelect = styled.div`
  > input[type='radio'] {
    opacity: 0;
    width: 0;
    margin: 0;
    padding: 0;
    display: none;
  }

  > input[type='radio'] ~ label {
    cursor: pointer;
    display: inline-block;
    min-height: 1rem;
    min-width: 75px;
    outline: none;
    border: none;
    vertical-align: baseline;
    background-color: ${props => (props.validate ? `${colors.errorBackground}` : `${colors.defaultBackground}`)};
    color: ${props => (props.validate ? `${colors.error}` : `${colors.defaultText}`)};
    font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
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
    box-shadow: 0px 0px 0px 1px ${props => (props.validate ? `${colors.error}` : `${colors.defaultBorder}`)} inset;
    user-select: none;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease,
      background 0.1s ease;
    will-change: '';
    -webkit-tap-highlight-color: transparent;
  }

  > input[type='radio']:hover ~ label {
    color: black;
    background: #f6f7f6 none;
    box-shadow: 0px 0px 0px 1px rgba(34, 36, 38, 0.35) inset;
  }

  > input[type='radio']:checked ~ label {
    color: white;
    background: ${colors.primary} none;
    box-shadow: 0px 0px 0px 1px ${colors.primary} inset;
  }
`;

const SelectError = styled.span`
  align-self: end;
  color: ${colors.error};
`;
