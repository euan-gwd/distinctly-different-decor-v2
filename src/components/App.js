import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import logo from './logo.svg';
import ProductsList from './Product/ProductsList';
import ProductDetail from './Product/ProductDetail';
import Cart from './CheckOut/CheckOutCart';

class App extends Component {
  state = { orders: {}, cartTotal: 0 };

  addToOrder = orderItem => {
    let orders = {};
    this.state.orders ? (orders = { ...this.state.orders }) : (orders = {});
    const timestamp = Date.now();
    orders[`order-${timestamp}`] = orderItem;
    localStorage.setItem(`CurrentOrder`, JSON.stringify(orders));
    const totalItemsInCart = Object.keys(orders).length;
    localStorage.setItem(`CartTotalItems`, JSON.stringify(totalItemsInCart));
    this.setState({ orders, cartTotal: totalItemsInCart });
  };

  removeFromOrder = orderItem => {
    const updateOrder = { ...this.state.orders };
    delete updateOrder[orderItem];
    this.setState({ orders: updateOrder });
  };

  componentWillUpdate = (nextProps, nextState) => {
    localStorage.setItem(`CurrentOrder`, JSON.stringify(nextState.orders));
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
              {this.state.cartTotal > 0 ? <CartCount>{this.state.cartTotal}</CartCount> : null}
              <Icon name="shop" size="big" color="violet" />
            </CartButton>
          </Link>
        </AppHeader>
        <Switch>
          <Route exact path="/" render={props => <ProductsList />} />
          <Route path="/products/:id" render={props => <ProductDetail {...props} addToOrder={this.addToOrder} />} />
          <Route
            path="/cart"
            render={props => (
              <Cart
                {...props}
                orders={this.state.orders}
                cartTotal={this.state.cartTotal}
                removeFromOrder={this.removeFromOrder}
              />
            )}
          />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 255, 0.3));
  background-size: cover;
  background-repeat: no-repeat;
  display: grid;
  grid-template-rows: 50px auto 20px;
  grid-row-gap: 1rem;
`;

const AppHeader = styled.div`
  grid-row: 1;
  background-color: rgba(255, 255, 255, 0.5);
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
  right: 1.65rem;
  z-index: 2;
  font-size: 0.75rem;

  @media screen and (min-width: 768px) {
    top: 0.85rem;
    right: 2.65rem;
  }
`;
