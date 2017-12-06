import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import ProductsList from '../components/ProductsList';
import ProductDetail from '../components/ProductDetail';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route path="/:id" component={ProductDetail} />
        </Switch>
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  text-align: center;
`;
