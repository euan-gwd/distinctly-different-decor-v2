import React, { Fragment } from 'react';
import { colors } from '../../helpers';
import styled from 'styled-components';

const SizeChoice = ({ handleSizeChange, orderSize, sizeFieldError }) => {
  return (
    <Fragment>
      <Label>Size:</Label>
      <SizeSelectGroup>
        <SizeSelect validate={sizeFieldError ? 'error' : null}>
          <input
            id="small"
            name="size"
            type="radio"
            value="Small"
            checked={orderSize === 'Small'}
            onChange={handleSizeChange}
          />
          <label htmlFor="small">Small</label>
        </SizeSelect>
        <SizeSelect validate={sizeFieldError ? 'error' : null}>
          <input
            id="medium"
            name="size"
            type="radio"
            value="Medium"
            checked={orderSize === 'Medium'}
            onChange={handleSizeChange}
          />
          <label htmlFor="medium">Medium</label>
        </SizeSelect>
        <SizeSelect validate={sizeFieldError ? 'error' : null}>
          <input
            id="large"
            name="size"
            type="radio"
            value="Large"
            checked={orderSize === 'Large'}
            onChange={handleSizeChange}
          />
          <label htmlFor="large">Large</label>
        </SizeSelect>
      </SizeSelectGroup>
      {sizeFieldError && <SelectError>Size is Required!</SelectError>}
    </Fragment>
  );
};

export default SizeChoice;

const SizeSelectGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Label = styled.p`
  margin: 0 0 -0.5rem;
  padding: 0;
`;

const SizeSelect = styled.div`
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
    min-height: 1em;
    outline: none;
    border: none;
    vertical-align: baseline;
    background: #fefffe none;
    color: ${props => (props.validate ? `${colors.error}` : `${colors.defaultText}`)};
    font-family: 'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0.78571429em 1em;
    text-transform: none;
    text-shadow: none;
    font-weight: normal;
    line-height: 1em;
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

const SelectError = styled.div`
  margin: 0;
  padding: 0;
  color: ${colors.error};
`;
