import React, { Component } from 'react';
import styled from 'styled-components';
import Product from './Product';

class ProductsList extends Component {
  state = { productData: [] };

  async componentDidMount() {
    try {
      const res = await fetch(`http://localhost:9000/products`);
      const productData = await res.json();
      this.setState({ productData });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <ProductGrid>{this.state.productData.map(item => <Product key={item.id} product={item} />)}</ProductGrid>
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
  padding-top: 70px;
`;
