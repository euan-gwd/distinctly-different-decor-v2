import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { formatPrice } from '../helpers';
import { Button, Form, Label, Header, Image } from 'semantic-ui-react';

class ProductDetail extends Component {
  state = {
    product: {},
    orderQty: '',
    orderSize: '',
    orderColor: '',
    sizeFieldError: false,
    colorFieldError: false,
    qtyFieldError: false
  };

  async componentDidMount() {
    try {
      //retrieve selected product from firebase
      await firebase
        .database()
        .ref(`products/${this.props.match.params.id}`)
        .on('value', res => {
          const product = res.val();
          this.setState({ product });
        });
    } catch (error) {
      console.log(error);
    }
  }

  handleSizeChange = (e, { value }) => this.setState({ orderSize: value, sizeFieldError: false });

  handleColorChange = (e, { value }) => this.setState({ orderColor: value, colorFieldError: false });

  handleQtyChange = (e, { value }) => this.setState({ orderQty: value, qtyFieldError: false });

  handleAddToCart = () => {
    const orderItem = {
      orderSize: this.state.orderSize,
      orderColor: this.state.orderColor,
      orderQty: this.state.orderQty,
      orderItemTotal: this.state.product.price * this.state.orderQty,
      ...this.state.product
    };

    const sizeInputError = orderItem.orderSize;
    const colorInputError = orderItem.orderColor;
    const qtyInputError = orderItem.orderQty;

    if (sizeInputError === '') {
      this.setState({ sizeFieldError: true });
    }
    if (colorInputError === '') {
      this.setState({ colorFieldError: true });
    }
    if (qtyInputError === '') {
      this.setState({ qtyFieldError: true });
    }

    if (
      (this.state.sizeFieldError && this.state.colorFieldError && this.state.qtyFieldError === false) ||
      (this.state.orderSize && this.state.orderColor && this.state.orderQty !== '')
    ) {
      this.props.addToOrder(orderItem);
      this.setState({ orderQty: '', orderSize: '', orderColor: '' });
    }
  };

  render() {
    const { product, orderSize, orderColor, orderQty, sizeFieldError, colorFieldError, qtyFieldError } = this.state;

    const sizeOptions = [
      { key: 'sm', text: 'Small', value: 'Small' },
      { key: 'md', text: 'Medium', value: 'Medium' },
      { key: 'lg', text: 'Large', value: 'Large' }
    ];

    const colorOptions = [
      { key: 1, text: 'Red', value: 'Red' },
      { key: 2, text: 'Green', value: 'Green' },
      { key: 3, text: 'Blue', value: 'Blue' },
      { key: 4, text: 'Yellow', value: 'Yellow' },
      { key: 5, text: 'Black', value: 'Black' }
    ];

    const qtyOptions = [
      { key: 1, text: '1', value: '1' },
      { key: 2, text: '2', value: '2' },
      { key: 3, text: '3', value: '3' },
      { key: 4, text: '4', value: '4' },
      { key: 5, text: '5', value: '5' },
      { key: 6, text: '6', value: '6' },
      { key: 7, text: '7', value: '7' },
      { key: 8, text: '8', value: '8' },
      { key: 9, text: '9', value: '9' },
      { key: 10, text: '10', value: '10' },
      { key: 20, text: '20', value: '20' },
      { key: 30, text: '30', value: '30' },
      { key: 40, text: '40', value: '40' },
      { key: 50, text: '50', value: '50' },
      { key: 60, text: '60', value: '60' },
      { key: 70, text: '70', value: '70' },
      { key: 80, text: '80', value: '80' },
      { key: 90, text: '90', value: '90' },
      { key: 100, text: '100', value: '100' }
    ];

    const Pricing = formatPrice(product.price) + ' each';

    return (
      <ProductWrapper backdrop={product.image}>
        <ProductInfo>
          <Overdrive id={`${product.id}`}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              label={{ color: 'violet', ribbon: true, content: [Pricing] }}
            />
          </Overdrive>
          <div>
            <Header as="h2">{product.title}</Header>
            <Header.Subheader>{product.description}</Header.Subheader>
            <FormWrapper>
              <Form unstackable>
                <Form.Group inline>
                  <Label size="large" color="violet" pointing="right">
                    Size
                  </Label>
                  {sizeFieldError ? (
                    <Form.Select
                      upward
                      onChange={this.handleSizeChange}
                      options={sizeOptions}
                      placeholder="What size?"
                      value={orderSize}
                      error
                    />
                  ) : (
                    <Form.Select
                      upward
                      onChange={this.handleSizeChange}
                      options={sizeOptions}
                      placeholder="What size?"
                      value={orderSize}
                      required
                    />
                  )}
                </Form.Group>
                <Form.Group inline>
                  <Label size="large" color="violet" pointing="right">
                    Color
                  </Label>
                  {colorFieldError ? (
                    <Form.Select
                      upward
                      onChange={this.handleColorChange}
                      options={colorOptions}
                      placeholder="What color?"
                      value={orderColor}
                      error
                    />
                  ) : (
                    <Form.Select
                      upward
                      onChange={this.handleColorChange}
                      options={colorOptions}
                      placeholder="What color?"
                      value={orderColor}
                      required
                    />
                  )}
                </Form.Group>
                <Form.Group inline>
                  <Label size="large" color="violet" pointing="right">
                    Quantity
                  </Label>
                  {qtyFieldError ? (
                    <Form.Select
                      upward
                      onChange={this.handleQtyChange}
                      options={qtyOptions}
                      placeholder="How Many?"
                      value={orderQty}
                      error
                    />
                  ) : (
                    <Form.Select
                      upward
                      onChange={this.handleQtyChange}
                      options={qtyOptions}
                      placeholder="How Many?"
                      value={orderQty}
                      required
                    />
                  )}
                </Form.Group>
                <Form.Group inline>
                  <Form.Button onClick={this.handleAddToCart} basic color="violet" animated="fade">
                    <Button.Content visible>Add Selected Item to Cart</Button.Content>
                    <Button.Content hidden>{'Selected Total ' + formatPrice(product.price * orderQty)}</Button.Content>
                  </Form.Button>
                  <Link to="/">
                    <Form.Button basic>
                      <Button.Content color="grey">Return to Listing</Button.Content>
                    </Form.Button>
                  </Link>
                </Form.Group>
              </Form>
            </FormWrapper>
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
  min-height: 100vh;
`;

const ProductInfo = styled.div`
  display: grid;
  background: white;
  text-align: left;
  margin: 0;
  padding: 1rem 1rem 3rem;
  grid-template-columns: minmax(125px, 255px);
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  height: 85vh;
  min-height: 85vh;

  @media screen and (min-width: 641px) {
    margin: 0 0 3rem;
    padding: 1rem 1rem 1rem 10%;
    grid-template-columns: minmax(125px, 255px) 1fr;
    grid-template-rows: 0;
    grid-column-gap: 1rem;
    min-height: 47vh;
    height: 285px;
  }
`;

const FormWrapper = styled.div`
  margin: 1rem 0 0;
  box-sizing: border-box;
`;
