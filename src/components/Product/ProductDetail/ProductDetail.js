import React, { Component } from 'react';
import { database } from '../../../firebase/firebase';
import { formatPrice } from '../../helpers';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import SuccessMessage from './SuccessMessage';
import SizeChoice from './SizeChoice';
import ColorChoice from './ColorChoice';
import QtyChoice from './QtyChoice';
import Image from 'semantic-ui-react/dist/es/elements/Image';
import Button from '../../Elements/Button/Button';
import ButtonGroup from '../../Elements/Button/ButtonGroup';

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

  handleSizeChange = e => this.setState({ orderSize: e.target.value, sizeFieldError: false, sizeFieldValid: true });

  handleColorChange = e => this.setState({ orderColor: e.target.value, colorFieldError: false, colorFieldValid: true });

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
      const ordersRef = database.ref('cart');

      ordersRef.push(orderItem);
      this.setState({ showSuccessMessage: true });
    }
  };

  handleReturnToList = () => {
    this.props.history.push('/');
  };

  componentWillUnmount = () => {
    database.ref().off();
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
      <Backdrop image={product.image}>
        <Container>
          <Header>
            <h2>{product.title}</h2>
            <span>{product.description}</span>
          </Header>
          <Content>
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
                <Button onClick={this.handleAddToCart} primary>
                  Add to Cart
                </Button>
                <Button onClick={this.handleReturnToList}>Return to Listing</Button>
              </ButtonGroup>
            </Form>
          </Content>
        </Container>
        <SuccessMessage show={showSuccessMessage} product={product} orderQty={orderQty} Pricing={Pricing} />
      </Backdrop>
    );
  }
}

export default ProductDetail;

const Backdrop = styled.div`
  grid-row: 2;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 255, 0.3)),
    url(${props => props.image}) center no-repeat;
  background-size: cover;
  display: grid;

  @media screen and (min-width: 768px) {
    grid-template-rows: 0.5fr 1fr;
  }
`;

const Container = styled.div`
  grid-row: 2;
  grid-column: 1;
  padding: 0 1rem;
  background: rgba(255, 255, 255, 0.75);
  display: grid;

  @media screen and (min-width: 768px) {
    grid-row: 2;
    grid-column: 1;
    padding: 0 20px;
  }
`;

const Header = styled.div`
  margin: 1rem 0;
  > h2 {
    margin: 0;
    display: block;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    > h2 {
      margin: 0 0.5rem 0 0;
      display: inline-block;
    }
  }
`;

const Content = styled.div`
  grid-row: 2;
  grid-column: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-column-gap: 1rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(250px, 1fr));
  }
`;

const ProductImage = styled.div`
  grid-column: span 2;
  margin-left: 1rem;

  @media screen and (min-width: 768px) {
    grid-column: 2;
  }
`;

const Form = styled.div`
  grid-column: 1;
  display: block;

  @media screen and (min-width: 768px) {
    grid-column: 3;
    display: grid;
  }
`;
