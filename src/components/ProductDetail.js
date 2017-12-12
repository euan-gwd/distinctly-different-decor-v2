import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { formatPrice } from './helpers';
import { Button, Form, Label } from 'semantic-ui-react';

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

  handleQtyChange = (e, { value }) => {
    if (value < 1) {
      this.setState({ orderQty: '' });
    } else {
      this.setState({ orderQty: value });
    }
  };

  handleAddToCart = () => {
    const orderItem = {
      orderSize: this.state.orderSize,
      orderColor: this.state.orderColor,
      orderQty: this.state.orderQty,
      orderItemTotal: this.state.product.price * this.state.orderQty,
      ...this.state.product
    };
    if (this.state.orderSize && this.state.orderColor && this.state.orderQty !== 'undefined') {
      this.props.addToOrder(orderItem);
    }
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
            <Form>
              <Form.Group inline required>
                <Label size="large" color="violet" pointing="right">
                  Size
                </Label>
                <Form.Radio label="Small" value="sm" checked={orderSize === 'sm'} onChange={this.handleSizeChange} />
                <Form.Radio label="Medium" value="md" checked={orderSize === 'md'} onChange={this.handleSizeChange} />
                <Form.Radio label="Large" value="lg" checked={orderSize === 'lg'} onChange={this.handleSizeChange} />
              </Form.Group>
              <Form.Group inline>
                <Label size="large" color="violet" pointing="right">
                  Color
                </Label>
                <Form.Select
                  onChange={this.handleColorChange}
                  options={colorOptions}
                  placeholder="What color?"
                  value={orderColor}
                  required
                />
              </Form.Group>
              <Form.Group inline>
                <Label size="large" color="violet" pointing="right">
                  Quantity
                </Label>
                <Form.Input
                  type="number"
                  value={orderQty}
                  onChange={this.handleQtyChange}
                  placeholder="How Many?"
                  required
                />
              </Form.Group>
              <Form.Button onClick={this.handleAddToCart} basic color="green" animated="fade" fluid>
                <Button.Content visible>Add Selected to Cart</Button.Content>
                <Button.Content hidden>{formatPrice(product.price * orderQty)}</Button.Content>
              </Form.Button>
            </Form>
          </div>
        </ProductInfo>
      </ProductWrapper>
    );
  }
}

export default ProductDetail;

const ProductWrapper = styled.div`
  position: relative;
  padding-top: 45vh;
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
    object-fit: cover;
    position: relative;
    top: -5rem;
  }
`;

const colorOptions = [
  { key: 1, text: 'Red', value: 'Red' },
  { key: 2, text: 'Green', value: 'Green' },
  { key: 3, text: 'Blue', value: 'Blue' },
  { key: 4, text: 'Yellow', value: 'Yellow' },
  { key: 5, text: 'Black', value: 'Black' }
];
