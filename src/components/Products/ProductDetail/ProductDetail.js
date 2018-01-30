import React, { Component } from "react";
import { database } from "../../../firebase/firebase";
import { formatPrice } from "../../helpers";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import SuccessMessage from "./SuccessMessage";
import ErrorMessage from "./ErrorMessage";
import SizeChoice from "./SizeChoice";
import ColorChoice from "./ColorChoice";
import QtyChoice from "./QtyChoice";
import Image from "../../uiElements/Image";
import Button from "../../uiElements/Button";
import ButtonGroup from "../../uiElements/ButtonGroup";
import ImageRibbon from "../../uiElements/ImageRibbon";

class ProductDetail extends Component {
  state = {
    product: {},
    orderQty: 0,
    orderSize: "",
    orderColor: "",
    sizeFieldValid: false,
    colorFieldValid: false,
    qtyFieldValid: false,
    sizeFieldError: false,
    colorFieldError: false,
    qtyFieldError: false,
    showSuccessMessage: false,
    showErrorMessage: false
  };

  async componentDidMount() {
    try {
      //retrieve selected product from firebase
      await database.ref(`products/${this.props.match.params.id}`).on("value", res => {
        const product = res.val();
        this.setState({ product });
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleSizeChange = e => {
    this.setState({
      orderSize: e.target.value,
      sizeFieldError: false,
      sizeFieldValid: true
    });
  };

  handleColorChange = e => {
    this.setState({
      orderColor: e.target.value,
      colorFieldError: false,
      colorFieldValid: true
    });
  };

  handleQtyChange = e => {
    const Value = e.target.value;
    if (Value > 0) {
      this.setState({
        orderQty: e.target.value,
        qtyFieldError: false,
        qtyFieldValid: true
      });
    } else {
      this.setState({
        orderQty: 0,
        qtyFieldError: true,
        qtyFieldValid: false
      });
    }
  };

  handleAddToCart = () => {
    const newOrder = {
      orderSize: this.state.orderSize,
      orderColor: this.state.orderColor,
      orderQty: parseInt(this.state.orderQty, 10),
      orderItemTotal: this.state.product.price * this.state.orderQty,
      ...this.state.product
    };

    // Form Validation
    if (newOrder.orderSize === "") {
      this.setState({ sizeFieldError: true });
    } else {
      this.setState({ sizeFieldValid: true });
    }

    if (newOrder.orderColor === "") {
      this.setState({ colorFieldError: true });
    } else {
      this.setState({ colorFieldValid: true });
    }

    if (newOrder.orderQty === 0) {
      this.setState({ qtyFieldError: true });
    } else {
      this.setState({ qtyFieldValid: true });
    }

    const { sizeFieldValid, colorFieldValid, qtyFieldValid } = this.state;

    if (sizeFieldValid && colorFieldValid && qtyFieldValid) {
      // Check if Item already exists in Cart
      let currentOrders = [];

      // get Current Orders in Cart
      database.ref(`cart`).on("value", res => {
        const orders = res.val() || {};
        currentOrders = Object.values(orders);
      });

      // Check if each OrderItem in cart already exists in Cart
      currentOrders.forEach(currentOrder => {
        let checkSize = Object.is(currentOrder.orderSize, newOrder.orderSize);
        let checkColor = Object.is(currentOrder.orderColor, newOrder.orderColor);
        let checkQty = Object.is(currentOrder.orderQty, newOrder.orderQty);

        if (checkSize && checkColor && checkQty) {
          this.setState({ showErrorMessage: true });
        } else {
          const ordersRef = database.ref("cart");
          ordersRef.push(newOrder);
          this.setState({ showSuccessMessage: true });
        }
      });
    }
  };

  handleReturnToList = () => {
    this.props.history.push("/");
  };

  handleClose = () => {
    this.setState({ showErrorMessage: false });
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
      showSuccessMessage,
      showErrorMessage
    } = this.state;

    const Pricing = formatPrice(product.price) + " each";

    return (
      <Backdrop image={product.image}>
        <Container>
          <ProductImage>
            <ImageRibbon primary>{Pricing}</ImageRibbon>
            <Overdrive id={`${product.id}`}>
              <Image size="medium" src={product.thumbnail} alt={product.title} />
            </Overdrive>
            <Header>
              <h2>{product.title}</h2>
              <span>{product.description}</span>
            </Header>
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
            <FormButtons>
              <Button onClick={this.handleAddToCart} color="violet" effect="basic">
                Add to Cart
              </Button>
              <Button onClick={this.handleReturnToList}>Back to Main</Button>
            </FormButtons>
          </Form>
        </Container>
        <SuccessMessage show={showSuccessMessage} product={product} orderQty={orderQty} Pricing={Pricing} />
        <ErrorMessage show={showErrorMessage} close={this.handleClose} />
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
  grid-row: 1;
  grid-column: 1;
  padding: 1rem 1rem;
  display: grid;
  grid-template-columns: minmax(300px, 1fr);
  justify-items: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.75);

  @media screen and (min-width: 768px) {
    grid-row: 2;
    grid-column: 1;
    padding: 0 20px;
    grid-template-columns: minmax(250px, 1fr) minmax(300px, 1fr);
  }
`;

const ProductImage = styled.div`
  grid-column: 1;
  position: relative;
`;

const Header = styled.div`
  margin: 0.5rem 0;
  > h2 {
    margin: 0;
  }
`;

const Form = styled.div`
  grid-column: 1;
  grid-row: 2;

  @media screen and (min-width: 768px) {
    grid-column: 2;
    grid-row: 1;
    justify-self: start;
  }
`;

const FormButtons = styled(ButtonGroup)`
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  padding: 0 1rem;
  max-width: 290px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-column-gap: 1rem;
    align-items: center;
  }
`;
