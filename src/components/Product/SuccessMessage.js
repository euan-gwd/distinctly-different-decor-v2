import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { formatPrice } from '../helpers';
import { ButtonGroup } from './ProductDetail';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import Button from 'semantic-ui-react/dist/es/elements/Button';

const SuccessMessage = props => {
  const { product, orderQty } = props;
  return (
    <Message>
      <MessageContent>
        <MessageBody>
          <Icon name="check" color="green" /> {orderQty} x {product.title} Successfully Added to Cart
        </MessageBody>
        <ButtonGroup>
          <Link to="/cart">
            <Button fluid color="violet" animated="fade">
              <Button.Content visible>{'SubTotal: ' + formatPrice(product.price * orderQty)}</Button.Content>
              <Button.Content hidden>Go to Checkout</Button.Content>
            </Button>
          </Link>
          <Link to="/">
            <Button basic fluid>
              <Button.Content color="grey">Continue Shopping</Button.Content>
            </Button>
          </Link>
        </ButtonGroup>
      </MessageContent>
    </Message>
  );
};

export default SuccessMessage;

const Message = styled.div`
  display: grid;
  justify-content: center;
  z-index: 2;
`;

const MessageContent = styled.div`
  margin: 0.25rem 0 0;
  padding: 1rem;
  border: 2px solid #a3c193;
  border-radius: 4px;
  background-color: #fbfff5;
`;

const MessageBody = styled.p`
  margin: 1rem 0;
  text-align: center;
  color: #789e76;
`;
