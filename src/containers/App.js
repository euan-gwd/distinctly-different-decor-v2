import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import ProductsList from '../components/ProductsList';
import ProductDetail from '../components/ProductDetail';

let numberstamp = 0;

class App extends Component {
  state = { orders: {} };

  addToOrder = orderItem => {
    const orders = { ...this.state.orders };
    numberstamp++;
    orders[`orderline-${numberstamp}`] = orderItem;
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
