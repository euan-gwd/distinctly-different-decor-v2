import React, { Component } from 'react';
import styled from 'styled-components';

import Product from './Product';

class ProductsList extends Component {
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
      <ProductGrid>{this.state.productData.map(product => <Product key={product.id} product={product} />)}</ProductGrid>
    );
  }
}

export default ProductsList;

const ProductGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
