import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import styled from 'styled-components';

import ProductsList from '../components/ProductsList';
import ProductDetail from '../components/ProductDetail';

const App = () => {
  return (
    <AppContainer>
      <Header>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <Title>Welcome to Distinctly Different Decor</Title>
      </Header>
      <Switch>
        <Route exact path="/" component={ProductsList} />
        <Route path="/:id" component={ProductDetail} />
      </Switch>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Title = styled.h1`
  font-size: 1.5em;
`;

export default App;
