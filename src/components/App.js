import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import ProductsList from './ProductsList';
import ProductDetail from './ProductDetail';

class App extends Component {
  state = { orders: {} };

  addToOrder = orderItem => {
    const orders = { ...this.state.orders };
    const timestamp = Date.now();
    orders[`order-${timestamp}`] = orderItem;
    this.setState({ orders });
    console.log(this.state.orders);
  };

  render() {
    return (
      <AppContainer>
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