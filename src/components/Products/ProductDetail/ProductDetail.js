import React, { Component } from "react";
import { database } from "../../../firebase/firebase";
import { formatPrice } from "../../helpers";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import SuccessMessage from "./SuccessMessage";
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
    showSuccessMessage: false
  };

  async componentDidMount() {
    try {
      //retrieve selected product from firebase
      await database
        .ref(`products/${this.props.match.params.id}`)
        .on("value", res => {
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

  handleQtyAdd = () => {
    this.setState((prevState, props) => {
      return {
        orderQty: prevState.orderQty + 1,
        qtyFieldError: false,
        qtyFieldValid: true
      };
    });
  };

  handleQtyRemove = () => {
    if (this.state.orderQty >= 1) {
      this.setState((prevState, props) => {
        return {
          orderQty: prevState.orderQty - 1,
          qtyFieldError: false,
          qtyFieldValid: true
        };
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
    const orderItem = {
      orderSize: this.state.orderSize,
      orderColor: this.state.orderColor,
      orderQty: this.state.orderQty,
      orderItemTotal: this.state.product.price * this.state.orderQty,
      ...this.state.product
    };

    // Form Validation
    if (orderItem.orderSize === "") {
      this.setState({ sizeFieldError: true });
    } else {
      this.setState({ sizeFieldValid: true });
    }

    if (orderItem.orderColor === "") {
      this.setState({ colorFieldError: true });
    } else {
      this.setState({ colorFieldValid: true });
    }

    if (orderItem.orderQty === 0) {
      this.setState({ qtyFieldError: true });
    } else {
      this.setState({ qtyFieldValid: true });
    }

    const { sizeFieldValid, colorFieldValid, qtyFieldValid } = this.state;

    if (sizeFieldValid && colorFieldValid && qtyFieldValid) {
      const ordersRef = database.ref("cart");

      ordersRef.push(orderItem);
      this.setState({ showSuccessMessage: true });
    }
  };

  handleReturnToList = () => {
    this.props.history.push("/");
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

    const Pricing = formatPrice(product.price) + " each";

    return (
      <Backdrop image={product.image}>
        <Container>
          <ProductImage>
            <ImageRibbon primary>{Pricing}</ImageRibbon>
            <Overdrive id={`${product.id}`}>
              <Image
                size="medium"
                src={product.thumbnail}
                alt={product.title}
              />
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
            <QtyChoice
              handleQtyAdd={this.handleQtyAdd}
              handleQtyRemove={this.handleQtyRemove}
              orderQty={orderQty}
              qtyFieldError={qtyFieldError}
            />
            <ButtonGroup>
              <Button
                onClick={this.handleAddToCart}
                color="violet"
                effect="basic"
              >
                Add to Cart
              </Button>
              <Button onClick={this.handleReturnToList}>Back to Main</Button>
            </ButtonGroup>
          </Form>
        </Container>
        <SuccessMessage
          show={showSuccessMessage}
          product={product}
          orderQty={orderQty}
          Pricing={Pricing}
        />
      </Backdrop>
    );
  }
}

export default ProductDetail;

const Backdrop = styled.div`
  grid-row: 2;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      rgba(0, 0, 255, 0.3)
    ),
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
