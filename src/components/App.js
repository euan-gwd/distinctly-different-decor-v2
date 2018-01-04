import React, { Component } from 'react';
import * as firebase from 'firebase';
import config from '../firebase.config';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, Label, Menu } from 'semantic-ui-react';
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
      <AppContainer>
        <AppHeader>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>

          <Menu secondary>
            <Link to="/cart">
              <Menu.Item>
                <Icon size="large" name="shopping basket" color="violet" />
                {totalItemsInCart > 0 && (
                  <Label color="red" attached="top right">
                    {totalItemsInCart}
                  </Label>
                )}
              </Menu.Item>
            </Link>
          </Menu>
        </AppHeader>
        <Switch>
          <Route exact path="/" render={props => <ProductsList />} />
          <Route path="/products/:id" render={props => <ProductDetail {...props} addToOrder={this.addToOrder} />} />
          <Route
            path="/cart"
            render={props => <Cart {...props} Orders={this.state.orders} removeFromOrder={this.removeFromOrder} />}
          />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  text-align: center;
  height: fit-content;
`;

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
