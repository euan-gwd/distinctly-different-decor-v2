import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
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
        <Header>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <Title>Welcome to Distinctly Different Decor</Title>
        </Header>
        <ProductGrid>{this.state.productData.map(item => <Product key={item.id} product={item} />)}</ProductGrid>
      </div>
    );
  }
}

export default ProductsList;

const ProductGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, minmax(50px, 1fr));
  grid-row-gap: 1rem;
  grid-column-gap: 0.5rem;
`;

const Header = styled.div`
  background-color: #ededed;
  height: 60px;
  padding: 10px;
  color: #131313;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 1.5em;
  flex-grow: 1;
  font-family: -apple-system, 'Dosis', sans-serif;
`;
