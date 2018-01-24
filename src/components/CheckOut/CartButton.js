import React, { Component } from "react";
import { database } from "../../firebase/firebase";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../helpers";
import { ShoppingCart } from "react-feather";
import IconButton from "../uiElements/IconButton";

class CartButton extends Component {
  state = { totalItemsInCart: 0 };

  async componentDidMount() {
    try {
      //retrieve cart contents from firebase
      await database.ref(`cart`).on("value", res => {
        const orders = res.val() || {};
        const ordersLength = Object.keys(orders).length;
        this.setState({ totalItemsInCart: ordersLength });
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <Route
        render={props => (
          <Button
            color="primary"
            onClick={() => {
              props.history.push(`/cart`);
            }}
          >
            <CartCount>{this.state.totalItemsInCart}</CartCount>
            <ShoppingCart size={32} />
          </Button>
        )}
      />
    );
  }
}

export default CartButton;

const CartCount = styled.span`
  color: ${colors.danger};
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  top: 0.8rem;
  right: 1rem;
  font-size: 0.7rem;
  font-weight: bold;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
`;

const Button = styled(IconButton)`
  padding: calc(0.78571429rem/2);

  &:hover {
    background-color: transparent;
    color: ${colors.primary};
  }
`;
