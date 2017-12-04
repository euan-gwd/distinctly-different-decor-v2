import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

class App extends Component {
  state = { productData: [] };

  async componentDidMount() {
    try {
      const res = await fetch(`http://localhost:9000`);
      const productData = await res.json();
      this.setState({ productData });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <AppContainer>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to Custom React Starter Kit</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/components/App.js</code> and save to reload.
        </Intro>
      </AppContainer>
    );
  }
}

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

const Intro = styled.p`
  font-size: large;
`;

export default App;
