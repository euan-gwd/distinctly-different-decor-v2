import React from "react";
import styled from "styled-components";
// import Input from "../../uiElements/Input";
import Ribbon from "../../uiElements/Ribbon";
// import Button from "../../uiElements/Button";
// import ButtonGroup from "../../uiElements/ButtonGroup";
import RequiredLabel from "../../uiElements/RequiredLabel";
import "./QtyChoice";

const QtyChoice = ({ qtyFieldError, orderQty, handleQtyChange }) => {
  return (
    <QtyContainer>
      <Ribbon primary>Choose Quantity:</Ribbon>
      {qtyFieldError && <RequiredLabel>Quantity is Required!</RequiredLabel>}
      <div className="dropdown-el">
        <input
          type="radio"
          name="sortType"
          value="Relevance"
          checked="checked"
          id="sort-relevance"
        >
          <label for="sort-relevance">Relevance</label>
        </input>
        <input type="radio" name="sortType" value="Popularity" id="sort-best">
          <label for="sort-best">Product Popularity</label>
        </input>
        <input
          type="radio"
          name="sortType"
          value="PriceIncreasing"
          id="sort-low"
        >
          <label for="sort-low">Price Low to High</label>
        </input>
        <input
          type="radio"
          name="sortType"
          value="PriceDecreasing"
          id="sort-high"
        >
          <label for="sort-high">Price High to Low</label>
        </input>
        <input
          type="radio"
          name="sortType"
          value="ProductBrand"
          id="sort-brand"
        >
          <label for="sort-brand">Product Brand</label>
        </input>
        <input type="radio" name="sortType" value="ProductName" id="sort-name">
          <label for="sort-name">Product Name</label>
        </input>
      </div>
    </QtyContainer>
  );
};

export default QtyChoice;

const QtyContainer = styled.div`
  margin: 0 0 0.25rem 1rem;
  width: 300px;
`;
