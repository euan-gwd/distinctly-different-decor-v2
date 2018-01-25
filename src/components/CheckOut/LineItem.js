import React, { Component } from "react";
import styled from "styled-components";
import { formatPrice, colors } from "../helpers";
import { XSquare } from "react-feather";
import Image from "../uiElements/Image";
import IconButton from "../uiElements/IconButton";

class LineItem extends Component {
  render() {
    const { details, id, removeFromOrder } = this.props;
    return (
      <LineItemRow>
        <LineItemImage>
          <Image src={details.thumbnail} alt={details.title} size="avatar" />
        </LineItemImage>
        <LineItemDetails>
          <ItemTitle>{details.title}</ItemTitle>
          <ItemDescription>{details.description}</ItemDescription>
          <ItemOptions>
            <span>Option:</span>
            <span>{details.orderSize}</span>
            <span>{details.orderColor}</span>
          </ItemOptions>
        </LineItemDetails>
        <LineItemQty>{details.orderQty}</LineItemQty>
        <LineItemCell>{formatPrice(details.orderItemTotal)}</LineItemCell>
        <LineItemCell>
          <IconButton
            color="danger"
            onClick={() => {
              removeFromOrder(id);
            }}
          >
            <XSquare />
          </IconButton>
        </LineItemCell>
      </LineItemRow>
    );
  }
}

export default LineItem;

const LineItemRow = styled.div`
  margin: 0;
  padding: 0 0.125rem;
  box-sizing: border-box;
  min-height: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr minmax(50px, auto);
  align-items: center;
  /* grid-gap: 0.5rem 0.5rem; */
  border-bottom: 1px solid ${colors.primaryBorder};

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    grid-template-columns: 100px 1fr minmax(80px, max-content) 100px minmax(35px, auto);
    align-items: center;

    &:hover {
      background-color: ghostwhite;
    }
  }
`;

const LineItemImage = styled.div`
  display: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    justify-self: center;
    display: block;
    margin: 0;
    padding: 0.25rem 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    justify-items: center;
    align-items: center;
  }
`;

const LineItemDetails = styled.div`
  grid-column: 1;
  margin: 5px 0 5px 5px;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  align-items: start;

  @media screen and (min-width: 768px) {
    grid-column: 2;
    display: grid;
    align-items: center;
  }
`;

const ItemTitle = styled.h3`
  margin: 0;
  color: ${colors.primary};
`;

const ItemDescription = styled.p`
  margin: 0;
  color: ${colors.default};
`;

const ItemOptions = styled.p`
  margin: 0;
  display: grid;
  grid-template-columns: max-content max-content max-content;
  grid-column-gap: 1rem;
  font-weight: bold;

  & span:first-of-type {
    font-weight: normal;
    color: ${colors.grey};
  }
`;

const LineItemQty = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const LineItemCell = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  justify-items: center;
  align-items: center;
`;
