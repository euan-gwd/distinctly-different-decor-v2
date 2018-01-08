import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { database } from '../../firebase/firebase';
import Product from './Product';

class ProductsList extends Component {
  state = { inventory: [], loaded: false };

  async componentDidMount() {
    try {
      //retrieve product list from firebase
      await database.ref('products').on('value', res => {
        const productsData = res.val();
        const inventory = [];
        for (let objKey in productsData) {
          productsData[objKey].key = objKey;
          inventory.push(productsData[objKey]);
        }
        this.setState({ inventory, loaded: true });
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.loaded ? (
          <ProductGrid>{this.state.inventory.map(item => <Product key={item.id} product={item} />)}</ProductGrid>
        ) : (
          <div>
            <Loader>Loading...</Loader>
          </div>
        )}
        <AppFooter>&copy;2017 Distinctly Different Decor All Rights Reserved</AppFooter>
      </Fragment>
    );
  }
}

export default ProductsList;

const ProductGrid = styled.div`
  grid-row: 2;
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  grid-gap: 0.5rem 1rem;
  height: auto;

  @media screen and (min-width: 768px) {
    max-height: 125px;
  }
`;

export const AppFooter = styled.div`
  grid-row: 3;
  height: 20px;
  padding: 0 5px;
  box-sizing: border-box;
  color: grey;
  font-size: 0.75rem;
  text-align: right;
  width: 100vw;
  position: fixed;
  bottom: 0;
`;

const Loader = styled.div`
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: load7 1.8s infinite ease-in-out;
  color: lightslategray;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &::before,
  &::after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: load7 1.8s infinite ease-in-out;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
  }

  &::before {
    left: -3.5em;
    animation-delay: -0.32s;
  }

  &::after {
    left: 3.5em;
  }

  @keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;
