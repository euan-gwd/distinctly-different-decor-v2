import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { colors } from './helpers';
import styled from 'styled-components';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import logo from './logo.svg';
import ProductsList from './Product/ProductsList';
import ProductDetail from './Product/ProductDetail/ProductDetail';
import Cart from './CheckOut/CheckOutCart';

class App extends Component {
  state = { orders: {}, totalItemsInCart: 0 };

  addToOrder = orderItem => {
    let orders = {};
    this.state.orders ? (orders = { ...this.state.orders }) : (orders = {});
    const timestamp = Date.now();
    orders[`order-${timestamp}`] = orderItem;
    const totalItemsInCart = Object.keys(orders).length;
    // sessionStorage.setItem(`CurrentOrder`, JSON.stringify(orders));
    this.setState({ orders, totalItemsInCart });
  };

  removeFromOrder = orderItem => {
    const updateOrder = { ...this.state.orders };
    delete updateOrder[orderItem];
    const totalItemsInCart = Object.keys(updateOrder).length;
    // totalItemsInCart === 0
    //   ? sessionStorage.clear()
    //   : sessionStorage.setItem(`CurrentOrder`, JSON.stringify(updateOrder));
    this.setState({ orders: updateOrder, totalItemsInCart });
  };

  render() {
    return (
      <AppContainer>
        <AppHeader>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <Link to="/cart">
            <CartButton>
              {this.state.totalItemsInCart > 0 ? <CartCount>{this.state.totalItemsInCart}</CartCount> : null}
              <Icon name="shop" size="big" color="violet" />
            </CartButton>
          </Link>
        </AppHeader>
        <Route exact path="/" render={props => <ProductsList />} />
        <Route path="/products/:id" render={props => <ProductDetail {...props} addToOrder={this.addToOrder} />} />
        <Route
          path="/cart"
          render={props => <Cart {...props} orders={this.state.orders} removeFromOrder={this.removeFromOrder} />}
        />
        <AppFooter>&copy;2017 Distinctly Different Decor All Rights Reserved</AppFooter>
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 255, 0.3));
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: center center;
  position: relative;
  display: grid;
  grid-template-rows: 50px 1fr 20px;
`;

const AppHeader = styled.div`
  grid-row: 1;
  background: ${colors.background};
  height: 50px;
  padding: 0 5px;
  color: #131313;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  height: 35px;
  text-align: left;
`;

const CartButton = styled.div`
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

const AppFooter = styled.div`
  grid-row: 3;
  height: 20px;
  padding: 0 5px;
  box-sizing: border-box;
  color: grey;
  font-size: 0.75rem;
  text-align: right;
  width: 100vw;
  position: absolute;
  bottom: 0;
`;
