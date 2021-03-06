import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { colors } from "./helpers";
import styled from "styled-components";
import logo from "./logo.svg";
import ProductsList from "./Products/ProductsList";
import ProductDetail from "./Products/ProductDetail/ProductDetail";
import Cart from "./CheckOut/CheckOutCart";
import CartButton from "./CheckOut/CartButton";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <CartButton />
        </AppHeader>
        <Route exact path="/" render={props => <ProductsList {...props} />} />
        <Route
          path="/products/:id"
          render={props => <ProductDetail {...props} />}
        />
        <Route path="/cart" render={props => <Cart {...props} />} />
        <AppFooter>
          &copy;2017 Distinctly Different Decor All Rights Reserved
        </AppFooter>
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.5),
    rgba(0, 0, 255, 0.3)
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-origin: center center;
  background-position: fixed;
  display: grid;
  grid-template-rows: 50px 1fr 20px;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

const AppHeader = styled.div`
  grid-area: header;
  background: ${colors.background};
  padding: 0 5px;
  color: #131313;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

const Logo = styled.img`
  height: 35px;
  text-align: left;
`;

const AppFooter = styled.div`
  grid-area: footer;
  align-self: end;
  padding: 0 5px;
  box-sizing: border-box;
  color: grey;
  font-size: 0.75rem;
  text-align: right;
`;
