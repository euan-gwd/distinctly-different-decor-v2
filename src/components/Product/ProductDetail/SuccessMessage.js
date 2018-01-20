import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { formatPrice } from '../../helpers';
import Icon from '../../uiElements/Icon';
import Image from '../../uiElements/Image';
import Button from '../../uiElements/Button';
import ButtonGroup from '../../uiElements/ButtonGroup';

class SuccessMessage extends Component {
  handleGoToCart = () => {
    this.props.history.push('/cart');
  };

  handleReturnToList = () => {
    this.props.history.push('/');
  };

  render() {
    const { show, product, orderQty } = this.props;
    return (
      <Message show={show ? 'open' : null}>
        <MessageContainer>
          <MessageContent>
            <ProductImage>
              <Overdrive id={`${product.id}`}>
                <Image src={product.thumbnail} alt={product.title} size="tiny" />
              </Overdrive>
            </ProductImage>
            <MessageBody>
              <MessageBodyHeader>
                <h3>
                  {orderQty} x {product.title}
                </h3>
                <p>{'SubTotal: ' + formatPrice(product.price * orderQty)}</p>
              </MessageBodyHeader>
              <MessageBodyContent>
                <Icon name="check" color="green" />Added to Cart
              </MessageBodyContent>
            </MessageBody>
          </MessageContent>
          <ButtonGroup>
            <MessageButton primary onClick={this.handleGoToCart}>
              Proceed to Checkout
            </MessageButton>
            <MessageButton onClick={this.handleReturnToList}>Continue Shopping</MessageButton>
          </ButtonGroup>
        </MessageContainer>
      </Message>
    );
  }
}

export default withRouter(SuccessMessage);

const Message = styled.div`
  grid-row: 1 / 3;
  grid-column: 1;
  padding: 0 2.5vw;
  display: ${props => (props.show ? 'grid' : 'none')};
  align-items: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 768px) {
    padding: 0;
    justify-content: center;
  }
`;

const MessageContainer = styled.div`
  margin: 0.25rem 0;
  padding: 1rem;
  border: 2px solid #a3c193;
  border-radius: 4px;
  background-color: #fbfff5;
  width: 300px;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

const MessageContent = styled.div`
  margin: 0 0 1rem;
  color: #789e76;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const ProductImage = styled.div`
  grid-column: 1;
`;

const MessageBody = styled.div`
  color: #789e76;
  grid-column: 2;
`;

const MessageBodyHeader = styled.div`
  grid-column: 2;

  > h3 {
    margin: 0;
    color: #1a521c;
  }
`;

const MessageBodyContent = styled.div`
  margin: 0;
  grid-row: 2;
`;

const MessageButton = styled(Button)`
  min-width: 75px;
`;
