import React, { Component, Fragment } from 'react';
import * as firebase from 'firebase';
import config from '../firebase.config';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';
import logo from './logo.svg';
import ProductsList from './Product/ProductsList';
import ProductDetail from './Product/ProductDetail';
import Cart from './CheckOut/CheckOutCart';

firebase.initializeApp(config);

class App extends Component {
  state = { orders: {} };

  addToOrder = orderItem => {
    let orders = {};
    this.state.orders ? (orders = { ...this.state.orders }) : (orders = {});
    const timestamp = Date.now();
    orders[`order-${timestamp}`] = orderItem;
    localStorage.setItem(`CurrentOrder`, JSON.stringify(orders));
    this.setState({ orders });
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
    const totalItemsInCart = Object.keys(this.state.orders).length;

    return (
      <Fragment>
        <AppHeader>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <Link to="/cart">
            <Button basic animated="vertical" color="violet">
              <Button.Content hidden>Check Out</Button.Content>
              <Button.Content visible>
                <Icon name="shop" size="large" />
                {totalItemsInCart > 0 ? <CartItems>{totalItemsInCart}</CartItems> : 'Cart'}
              </Button.Content>
            </Button>
          </Link>
        </AppHeader>
        <Switch>
          <Route exact path="/" render={props => <ProductsList />} />
          <Route path="/products/:id" render={props => <ProductDetail {...props} addToOrder={this.addToOrder} />} />
          <Route
            path="/cart"
            render={props => <Cart {...props} Orders={this.state.orders} removeFromOrder={this.removeFromOrder} />}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default App;

const AppHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  height: 80px;
  padding: 0 20px;
  color: #131313;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const Logo = styled.img`
  height: 65px;
  text-align: left;
`;

const CartItems = styled.span`
  color: red;
`;
