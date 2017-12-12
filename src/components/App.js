import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
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
    return (
      <AppContainer>
        <AppHeader>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <Title>Welcome to Distinctly Different Decor</Title>
        </AppHeader>
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route path="/:id" render={props => <ProductDetail {...props} addToOrder={this.addToOrder} />} />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  text-align: center;
`;

const AppHeader = styled.div`
  background-color: #ededed;
  height: 60px;
  padding: 10px;
  color: #131313;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`;

const Logo = styled.img`
  height: 50px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 1.5em;
  flex-grow: 1;
  margin: 0;
`;
