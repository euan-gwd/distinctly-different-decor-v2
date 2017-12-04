import React, { Component } from 'react';
import styled from 'styled-components';
import { formatPrice } from './helpers';

class ProductDetail extends Component {
  state = { product: {} };

  async componentDidMount() {
    try {
      const res = await fetch(`http://localhost:9000/products/${this.props.match.params.id}`);
      const product = await res.json();
      this.setState({ product });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { product } = this.state;
    let imageBackDrop,
      imageThumb = null;

    if (product.image && product.thumbnail !== undefined) {
      imageBackDrop = require(`../assets/products/${product.image}`);
      imageThumb = require(`../assets/products/${product.thumbnail}`);
    }

    return (
      <ProductWrapper backdrop={imageBackDrop}>
        <ProductInfo>
          {product.image !== undefined ? <img src={imageThumb} alt={product.title} /> : null}
          <div>
            <h1>{product.title}</h1>
            <h3>{product.description}</h3>
            <p>{formatPrice(product.price)}</p>
            <CartButton>Add to Cart</CartButton>
            <HomeButton>Back to Home</HomeButton>
          </div>
        </ProductInfo>
      </ProductWrapper>
    );
  }
}

export default ProductDetail;

const ProductWrapper = styled.div`
  position: relative;
  padding-top: 60vh;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 255, 0.5)),
    url(${props => props.backdrop}) center no-repeat;
  background-size: cover;
  background-origin: border-box;
`;

const ProductInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    width: 25%;
    height: 25%;
    position: relative;
    top: -5rem;
  }
`;

const CartButton = styled.button`
  border: 1px solid #23d160;
  border-radius: 1px;
  margin: 0 0.25rem;
  box-shadow: none;
  display: inline-block;
  font-size: 1.125rem;
  justify-content: center;
  line-height: 1.5;
  height: 2.25rem;
  vertical-align: top;
  user-select: none;
  background-color: transparent;
  color: #23d160;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: #23d160;
    color: #fff;
  }
`;

const HomeButton = styled.button`
  border: 1px solid #deb887;
  border-radius: 1px;
  margin: 0 0.25rem;
  box-shadow: none;
  display: inline-block;
  font-size: 1.125rem;
  justify-content: center;
  line-height: 1.5;
  height: 2.25rem;
  vertical-align: top;
  user-select: none;
  background-color: transparent;
  color: #deb887;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: #deb887;
    color: #fff;
  }
`;
