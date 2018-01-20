import React from "react";
import styled from "styled-components";
import { colors } from "../../helpers";
import Ribbon from "../../uiElements/Ribbon";
import RadioButton from "../../uiElements/RadioButton";
import RequiredLabel from "../../uiElements/RequiredLabel";

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
