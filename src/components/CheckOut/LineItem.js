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
          <Image src={details.thumbnail} alt={details.title} size="mini" />
        </LineItemImage>
        <LineItemCell>{details.title}</LineItemCell>
        <LineItemCell>{details.orderSize}</LineItemCell>
        <LineItemCell>{details.orderColor}</LineItemCell>
        <LineItemCell>{details.orderQty}</LineItemCell>
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
  grid-template-columns: auto 15px auto 15px auto 50px;
  grid-gap: 0.5rem 0.5rem;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid ${colors.primaryBorder};

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    grid-template-columns: repeat(7, minmax(35px, 1fr));
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
    justify-content: center;
    align-items: center;
  }
`;

const LineItemCell = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  align-items: center;
`;
