import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { formatPrice } from './helpers';
import { Select, Input } from 'semantic-ui-react';

class ProductDetail extends Component {
  state = { product: {}, orderQty: '', orderSize: '', orderColor: '' };

  async componentDidMount() {
    try {
      const res = await fetch(`http://localhost:9000/products/${this.props.match.params.id}`);
      const product = await res.json();
      this.setState({ product });
    } catch (error) {
      console.log(error);
    }
  }

  handleSizeChange = (e, { value }) => this.setState({ orderSize: value });

  handleColorChange = (e, { value }) => this.setState({ orderColor: value });

  handleQtyChange = (e, { value }) => this.setState({ orderQty: value });

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
    const { product, orderSize, orderColor, orderQty } = this.state;
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
              <Label>Size:</Label>
              <Select
                onChange={this.handleSizeChange}
                options={sizeOptions}
                placeholder="What size?"
                value={orderSize}
              />
              <Label>Color:</Label>
              <Select
                onChange={this.handleColorChange}
                options={colorOptions}
                placeholder="What color?"
                value={orderColor}
              />
              <Label>Qty:</Label>
              <Input type="number" value={orderQty} onChange={this.handleQtyChange} placeholder="How Many?" />
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
  padding-top: 50vh;
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
    object-fit: cover;
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

const Label = styled.label`
  display: block;
  font-size: 1.125rem;
  font-family: -apple-system, 'Dosis', sans-serif;
  justify-content: center;
`;

const sizeOptions = [
  { key: 's', text: 'Small', value: 'S' },
  { key: 'm', text: 'Medium', value: 'M' },
  { key: 'l', text: 'Large', value: 'L' }
];

const colorOptions = [
  { key: 1, text: 'Red', value: 'Red' },
  { key: 2, text: 'Green', value: 'Green' },
  { key: 3, text: 'Blue', value: 'Blue' },
  { key: 4, text: 'Yellow', value: 'Yellow' },
  { key: 5, text: 'Black', value: 'Black' }
];
