import React, { Component } from 'react';
import { database } from '../../firebase/firebase';
import styled from 'styled-components';
import Icon from '../Elements/Icon';

class CartButton extends Component {
  state = { totalItemsInCart: 0 };

  async componentDidMount() {
    try {
      //retrieve cart contents from firebase
      await database.ref(`cart`).on('value', res => {
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
        {this.state.totalItemsInCart > 0 ? <CartCount>{this.state.totalItemsInCart}</CartCount> : null}
        <Icon name="shop" size="big" color="violet" />
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
  color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  position: absolute;
  top: 0.95rem;
  right: 1.45rem;
  z-index: 2;
  font-size: 0.75rem;

  @media screen and (min-width: 768px) {
    top: 0.95rem;
    right: 2.45rem;
  }
`;
