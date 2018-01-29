import React, { Component } from "react";
import styled from "styled-components";
import { database } from "../../firebase/firebase";
import { formatPrice, colors } from "../helpers";
import { XSquare } from "react-feather";
import Image from "../uiElements/Image";
import IconButton from "../uiElements/IconButton";
import InputCounter from "../uiElements/InputCounter.js";

class LineItem extends Component {
  state = {
    orderQty: this.props.details.orderQty,
    qtyFieldValid: false,
    qtyFieldError: false
  };

  handleQtyChange = e => {
    const inputValue = e.target.value;
    const { id } = this.props;
    if (inputValue >= 1) {
      this.setState({
        orderQty: inputValue,
        qtyFieldError: false,
        qtyFieldValid: true
      });

      const lineItemRef = database.ref(`/cart/${id}`);
      const updatedOrderQty = parseInt(inputValue, 10);
      const updatedOrderItemTotal = this.props.details.price * updatedOrderQty;

      let updates = {};
      updates["/orderQty"] = updatedOrderQty;
      updates["/orderItemTotal"] = updatedOrderItemTotal;
      lineItemRef.update(updates);

      this.props.updateOrder(inputValue);
    } else {
      this.setState({
        orderQty: 1
      });
    }
  };

  render() {
    const { details, id, removeFromOrder } = this.props;
    const { orderQty, qtyFieldError } = this.state;
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
        <LineItemPrice>{formatPrice(details.price)}</LineItemPrice>
        <LineItemQty>
          <InputCounter orderQty={orderQty} handleChange={this.handleQtyChange} qtyFieldError={qtyFieldError} />
        </LineItemQty>
        <LineItemSubTotal>{formatPrice(details.orderItemTotal)}</LineItemSubTotal>
        <LineItemAction>
          <IconButton
            color="danger"
            onClick={() => {
              removeFromOrder(id);
            }}
          >
            <XSquare />
          </IconButton>
        </LineItemAction>
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
  grid-template-columns: 1fr 1fr 1fr 1fr minmax(50px, auto);
  align-items: center;
  border-bottom: 1px solid ${colors.primaryBorder};

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    grid-template-columns: 100px 1fr minmax(80px, max-content) minmax(80px, max-content) 100px minmax(35px, auto);
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
  display: none;
  @media screen and (min-width: 768px) {
    margin: 0;
    color: ${colors.default};
  }
`;

const ItemOptions = styled.p`
  margin: 0;
  display: grid;
  font-weight: bold;

  & span:first-of-type {
    font-weight: normal;
    color: ${colors.grey};
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    grid-template-columns: max-content max-content max-content;
    grid-column-gap: 1rem;
  }
`;

const LineItemPrice = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

const LineItemQty = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

const LineItemSubTotal = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

const LineItemAction = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;
