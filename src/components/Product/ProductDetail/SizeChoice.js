import React from "react";
import styled from "styled-components";
// import { colors } from "../../helpers";
import Ribbon from "../../Elements/Ribbon";
import RadioButton from "../../Elements/RadioButton";
import RequiredLabel from "../../Elements/RequiredLabel";

const SizeChoice = ({ handleSizeChange, orderSize, sizeFieldError }) => {
  return (
    <SizeContainer>
      <Ribbon primary>Choose Size:</Ribbon>
      {sizeFieldError && <RequiredLabel>Size is Required!</RequiredLabel>}
      <SizeSelectGroup>
        <RadioButton
          id="Small"
          name="size"
          value="Small"
          checked={orderSize === "Small"}
          onChange={handleSizeChange}
          validate={sizeFieldError ? "error" : null}
        />
        <RadioButton
          id="Medium"
          name="size"
          value="Medium"
          checked={orderSize === "Medium"}
          onChange={handleSizeChange}
          validate={sizeFieldError ? "error" : null}
        />
        <RadioButton
          id="Large"
          name="size"
          value="Large"
          checked={orderSize === "Large"}
          onChange={handleSizeChange}
          validate={sizeFieldError ? "error" : null}
        />
      </SizeSelectGroup>
    </SizeContainer>
  );
};

export default SizeChoice;

const SizeContainer = styled.div`
  margin: 0 0 0.25rem 1rem;
  width: 300px;
`;

const SizeSelectGroup = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 80px);
  grid-column-gap: 0.5rem;
`;
