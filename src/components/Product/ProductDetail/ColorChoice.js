import React from "react";
import styled from "styled-components";
import { colors } from "../../helpers";
import Ribbon from "../../Elements/Ribbon";
import RadioButton from "../../Elements/RadioButton";
import RequiredLabel from "../../Elements/RequiredLabel";

const ColorChoice = ({ handleColorChange, orderColor, colorFieldError }) => {
  return (
    <ColorContainer>
      <Ribbon primary>Choose Color:</Ribbon>
      {colorFieldError && <RequiredLabel>Color is Required!</RequiredLabel>}
      <ColorSelectGroup>
        <RadioButton
          id="Red"
          name="Color"
          type="radio"
          value="Red"
          checked={orderColor === "Red"}
          onChange={handleColorChange}
          validate={colorFieldError ? "error" : null}
        />
        <RadioButton
          id="Green"
          name="Color"
          type="radio"
          value="Green"
          checked={orderColor === "Green"}
          onChange={handleColorChange}
          validate={colorFieldError ? "error" : null}
        />
        <RadioButton
          id="Blue"
          name="Color"
          type="radio"
          value="Blue"
          checked={orderColor === "Blue"}
          onChange={handleColorChange}
          validate={colorFieldError ? "error" : null}
        />
        <RadioButton
          id="Yellow"
          name="Color"
          type="radio"
          value="Yellow"
          checked={orderColor === "Yellow"}
          onChange={handleColorChange}
          validate={colorFieldError ? "error" : null}
        />
        <RadioButton
          id="Black"
          name="Color"
          type="radio"
          value="Black"
          checked={orderColor === "Black"}
          onChange={handleColorChange}
          validate={colorFieldError ? "error" : null}
        />
        <RadioButton
          id="White"
          name="Color"
          type="radio"
          value="White"
          checked={orderColor === "White"}
          onChange={handleColorChange}
          validate={colorFieldError ? "error" : null}
        />
      </ColorSelectGroup>
    </ColorContainer>
  );
};

export default ColorChoice;

const ColorContainer = styled.div`
  margin: 0 0 0.25rem 1rem;
  width: 300px;
`;

const ColorSelectGroup = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 80px);
  grid-gap: 0.5rem;
`;

const ColorSelect = styled.div`
  > input[type="radio"] {
    opacity: 0;
    width: 0;
    margin: 0;
    padding: 0;
    display: none;
  }

  > input[type="radio"] ~ label {
    cursor: pointer;
    display: inline-block;
    min-height: 1rem;
    min-width: 80px;
    outline: none;
    border: none;
    vertical-align: baseline;
    background-color: ${props =>
      props.validate
        ? `${colors.errorBackground}`
        : `${colors.defaultBackground}`};
    color: ${props =>
      props.validate ? `${colors.error}` : `${colors.default}`};
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
    box-shadow: 0px 0px 0px 1px
      ${props =>
        props.validate ? `${colors.error}` : `${colors.defaultBorder}`}
      inset;
    user-select: none;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
      box-shadow 0.1s ease, background 0.1s ease;
    will-change: "";
    -webkit-tap-highlight-color: transparent;
  }

  > input[type="radio"]:hover ~ label {
    color: black;
    background: #f6f7f6 none;
    box-shadow: 1px 1px 1px 1px rgba(34, 36, 38, 0.35) inset;
  }

  > input[type="radio"]:checked ~ label {
    color: white;
    background: ${colors.primary} none;
    box-shadow: 0px 0px 0px 1px ${colors.primary} inset;
  }
`;
