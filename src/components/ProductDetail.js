import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { formatPrice } from './helpers';

class ProductDetail extends Component {
  state = { product: {}, orderQty: 0, orderSize: 'small', orderColor: 'black' };

  async componentDidMount() {
    try {
      const res = await fetch(`http://localhost:9000/products/${this.props.match.params.id}`);
      const product = await res.json();
      this.setState({ product });
    } catch (error) {
      console.log(error);
    }
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleAddToCart = () => {
    const orderItem = {
      orderSize: this.state.orderSize,
      orderColor: this.state.orderColor,
      orderQty: this.state.orderQty,
      ...this.state.product
    };
    this.props.addToOrder(orderItem);
  };

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
          <Overdrive id={`${product.id}`}>
            <img src={imageThumb} alt={product.title} />
          </Overdrive>
          <div>
            <h1>{product.title}</h1>
            <h3>{product.description}</h3>
            <p>{formatPrice(product.price)} per unit</p>
            <OrderForm>
              <label>
                Size:
                <Select value={this.state.orderSize} onChange={this.handleInputChange} name="orderSize">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </Select>
              </label>
              <label>
                Color:
                <Select value={this.state.orderColor} onChange={this.handleInputChange} name="orderColor">
                  <option value="black">Black</option>
                  <option value="colored">Colored</option>
                </Select>
              </label>
              <label>
                How many Units:
                <input
                  type="number"
                  value={this.state.orderQty}
                  onChange={this.handleInputChange}
                  name="orderQty"
                  required
                />
              </label>
            </OrderForm>
            <CartButton onClick={this.handleAddToCart}>+Add to Cart</CartButton>
            <Link to="/">
              <HomeButton>Return to List</HomeButton>
            </Link>
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
    width: 100%;
    height: 100%;
    position: relative;
    top: -5rem;
  }
`;

const CartButton = styled.button`
  border: 1px solid #23d160;
  border-radius: 1px;
  margin: 0 0.25rem;
  padding: 0.25rem;
  box-shadow: none;
  display: inline-block;
  font-size: 1.125rem;
  font-family: -apple-system, 'Dosis', sans-serif;
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

const HomeButton = CartButton.extend`
  border: 1px solid #deb887;
  color: #deb887;

  &:hover {
    background-color: #deb887;
  }
`;

const OrderForm = styled.form`
  display: grid;
  grid-row-gap: 0.5rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: start;
  margin: 0.5rem 0;
`;

const Select = styled.select`
  appearance: none;
  display: block;
  margin: 30px 0;
  padding: 18px 50px 10px 10px;
  background: url();
`;
