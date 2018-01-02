import React, { Component } from 'react';
import styled from 'styled-components';
import Product from './Product';

class ProductsList extends Component {
  render() {
    const { productData } = this.props;
    return (
      <div>
        <ProductGrid>{productData.map(item => <Product key={item.id} product={item} />)}</ProductGrid>
      </div>
    );
  }
}

export default ProductsList;

const ProductGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
  grid-gap: 0.5rem;
  padding-top: 100px;
`;
