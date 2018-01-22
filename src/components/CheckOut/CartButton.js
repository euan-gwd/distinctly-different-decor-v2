import React, { Component } from "react";
import { database } from "../../firebase/firebase";
import styled from "styled-components";
import { colors } from "../helpers";
import { ShoppingCart } from "react-feather";

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
      <Button>
        <CartCount>{this.state.totalItemsInCart}</CartCount>
        <ShoppingCart size={35} />
      </Button>
    );
  }
}

export default CartButton;

const Button = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const CartCount = styled.span`
  color: ${colors.primary};
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  top: 0.95rem;
  right: 2rem;
  z-index: 2;
  font-size: 0.6rem;
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);
`;
