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
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 255, 0.3));
  min-height: 100vh;
`;

const AppHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 80px;
  padding: 10px;
  color: #131313;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

const Logo = styled.img`
  height: 65px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 1.5em;
  margin: 0;
`;
