import React, { Component } from "react";
import styled from "styled-components";
import { colors } from "../helpers";
import { database } from "../../firebase/firebase";
import Product from "./Product";

class ProductsList extends Component {
  state = { inventory: [], loaded: false };

  async componentDidMount() {
    try {
      //retrieve product list from firebase
      await database.ref("products").on("value", res => {
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
      <Container>
        {this.state.loaded ? (
          <ProductGrid>
            {this.state.inventory.map(item => (
              <Product key={item.id} product={item} />
            ))}
          </ProductGrid>
        ) : (
          <Loading />
        )}
      </Container>
    );
  }
}

export default ProductsList;

const Container = styled.div`
  grid-area: main;
  padding: 0 5px;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

const ProductGrid = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  grid-gap: 10px;
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

@keyframes load8 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
