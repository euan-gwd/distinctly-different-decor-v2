import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { database } from '../../../firebase/firebase';
import { formatPrice, colors } from '../../helpers';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import SuccessMessage from './SuccessMessage';
import SizeChoice from './SizeChoice';
import ColorChoice from './ColorChoice';
import QtyChoice from './QtyChoice';
import Image from 'semantic-ui-react/dist/es/elements/Image';
import Button from 'semantic-ui-react/dist/es/elements/Button';

class ProductDetail extends Component {
  state = {
    product: {},
    orderQty: '',
    orderSize: '',
    orderColor: '',
    sizeFieldValid: false,
    colorFieldValid: false,
    qtyFieldValid: false,
    sizeFieldError: false,
    colorFieldError: false,
    qtyFieldError: false,
    showSuccessMessage: false
  };

  async componentDidMount() {
    try {
      //retrieve selected product from firebase
      await database.ref(`products/${this.props.match.params.id}`).on('value', res => {
        const product = res.val();
        this.setState({ product });
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleSizeChange = e => {
    this.setState({ orderSize: e.target.value, sizeFieldError: false, sizeFieldValid: true });
  };

  handleColorChange = (e, { value }) =>
    this.setState({ orderColor: value, colorFieldError: false, colorFieldValid: true });

  handleQtyChange = (e, { value }) => this.setState({ orderQty: value, qtyFieldError: false, qtyFieldValid: true });

  handleAddToCart = () => {
    const orderItem = {
      orderSize: this.state.orderSize,
      orderColor: this.state.orderColor,
      orderQty: this.state.orderQty,
      orderItemTotal: this.state.product.price * this.state.orderQty,
      ...this.state.product
    };

    // Form Validation
    if (orderItem.orderSize === '') {
      this.setState({ sizeFieldError: true });
    } else {
      this.setState({ sizeFieldValid: true });
    }

    if (orderItem.orderColor === '') {
      this.setState({ colorFieldError: true });
    } else {
      this.setState({ colorFieldValid: true });
    }

    if (orderItem.orderQty === '') {
      this.setState({ qtyFieldError: true });
    } else {
      this.setState({ qtyFieldValid: true });
    }

    const { sizeFieldValid, colorFieldValid, qtyFieldValid } = this.state;
    if (sizeFieldValid && colorFieldValid && qtyFieldValid) {
      this.props.addToOrder(orderItem);
      this.setState({ showSuccessMessage: true });
    }
  };

  render() {
    const {
      product,
      orderSize,
      orderColor,
      orderQty,
      sizeFieldError,
      colorFieldError,
      qtyFieldError,
      showSuccessMessage
    } = this.state;

    const Pricing = formatPrice(product.price) + ' each';

    return (
      <Backdrop image={product.thumbnail}>
        {showSuccessMessage ? (
          <SuccessMessage product={product} orderQty={orderQty} Pricing={Pricing} />
        ) : (
          <Container>
            <ProductImage>
              <Overdrive id={`${product.id}`}>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  label={{ color: 'violet', ribbon: true, content: [Pricing] }}
                />
              </Overdrive>
            </ProductImage>
            <Form>
              <FormHeader>{product.title}</FormHeader>
              <FormSubHeader>{product.description}</FormSubHeader>
              <SizeChoice
                handleSizeChange={this.handleSizeChange}
                orderSize={orderSize}
                sizeFieldError={sizeFieldError}
              />
              <ColorChoice
                handleColorChange={this.handleColorChange}
                orderColor={orderColor}
                colorFieldError={colorFieldError}
              />
              <QtyChoice handleQtyChange={this.handleQtyChange} orderQty={orderQty} qtyFieldError={qtyFieldError} />
              <ButtonGroup>
                <Button onClick={this.handleAddToCart} basic color="violet">
                  <Button.Content>Add to Cart</Button.Content>
                </Button>
                <Link to="/">
                  <Button basic fluid>
                    <Button.Content color="grey">Return to Listing</Button.Content>
                  </Button>
                </Link>
              </ButtonGroup>
            </Form>
          </Container>
        )}
      </Backdrop>
    );
  }
}

export default ProductDetail;

const Backdrop = styled.div`
  grid-row: 2;
  min-height: 85vh;
  background: ${colors.background};
  background-size: cover;
  background-origin: center center;
  position: relative;

  @media screen and (min-width: 768px) {
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 255, 0.3)),
      url(${props => props.image}) center no-repeat;
    background-size: cover;
    background-origin: center center;
  }
`;

const Container = styled.div`
  margin: 1rem 0 2rem;
  padding: 0;
  background: ${colors.background};
  background-size: cover;
  display: grid;
  justify-content: center;
  grid-gap: 1rem 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 1rem 20px;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
    grid-gap: 0 0;
    align-items: center;
    position: absolute;
    bottom: 0;
  }
`;

export const ProductImage = styled.div`
  background: ${colors.background};
  display: grid;
  grid-template-columns: minmax(125px, 255px);
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-column: 2;
  }
`;

const Form = styled.div`
  background: ${colors.background};
  display: grid;
  grid-row-gap: 1rem;
  @media screen and (min-width: 768px) {
    grid-column: 3;
    grid-row-gap: 0.5rem;
  }
`;

const FormHeader = styled.h2`
  margin: 0;
  padding: 0;
`;

const FormSubHeader = styled.p`
  margin: 0;
  padding: 0;
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 0.5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }
`;
