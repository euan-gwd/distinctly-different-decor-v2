import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <AppHeader>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <Link to="/cart">
            <CartButton>
              {this.state.cartTotal > 0 ? <CartCount>{this.state.cartTotal}</CartCount> : null}
              <Icon name="shop" size="huge" color="violet" />
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
      </Fragment>
    );
  }
}

export default App;

const AppHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 80px;
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
  height: 65px;
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
  top: 1.7rem;
  right: 2.5rem;
  z-index: 2;

  @media screen and (min-width: 768px) {
    top: 1.7rem;
    right: 3.5rem;
  }
`;
