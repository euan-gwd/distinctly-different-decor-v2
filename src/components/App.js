import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon, Label, Menu } from 'semantic-ui-react';
import logo from './logo.svg';
import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';

class App extends Component {
  state = { orders: {} };

  addToOrder = orderItem => {
    let orders = {};
    this.state.orders ? (orders = { ...this.state.orders }) : (orders = {});
    const timestamp = Date.now();
    orders[`order-${timestamp}`] = orderItem;
    this.setState({ orders });
  };

  render() {
    const totalItemsInCart = Object.keys(this.state.orders).length;

    return (
      <AppContainer>
        <AppHeader>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <Title>Welcome to Distinctly Different Decor</Title>
          <Menu secondary>
            <Menu.Item as="a">
              <Icon size="big" name="shopping basket" color="violet" />
              {totalItemsInCart > 0 && (
                <Label color="red" attached="top right">
                  {totalItemsInCart}
                </Label>
              )}
            </Menu.Item>
          </Menu>
        </AppHeader>
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route path="/products/:id" render={props => <ProductDetail {...props} addToOrder={this.addToOrder} />} />
        </Switch>
        <AppFooter>&copy;2017 Distinctly Different Decor All Rights Reserved</AppFooter>
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  text-align: center;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 255, 0.3));
  min-height: 100vh;
`;

const AppHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 80px;
  padding: 0 20px;
  color: #131313;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;
const AppFooter = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 20px;
  padding: 0 20px;
  color: #131313;
  text-align: right;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Logo = styled.img`
  height: 65px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin: 0;
  flex-grow: 1;
`;
