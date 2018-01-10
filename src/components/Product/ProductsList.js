import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { colors } from '../helpers';
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
          <Container>
            <Loading />
          </Container>
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
  height: fit-content;

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

const Container = styled.div`
  grid-row: 2;
  display: grid;
  justify-self: center;
  align-self: center;
  width: 100vw;
  height: auto;
  box-sizing: border-box;
`;

const Loading = styled.div`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid transparent;
  border-right: 1.1em solid transparent;
  border-bottom: 1.1em solid transparent;
  border-left: 1.1em solid ${colors.primary};
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
  box-sizing: border-box;

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
