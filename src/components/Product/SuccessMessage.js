import React from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Link } from 'react-router-dom';
import { formatPrice } from '../helpers';
import { ButtonGroup } from './ProductDetail';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import Image from 'semantic-ui-react/dist/es/elements/Image';
import Button from 'semantic-ui-react/dist/es/elements/Button';

const SuccessMessage = props => {
  const { product, orderQty } = props;
  return (
    <Message>
      <MessageContainer>
        <MessageContent>
          <ProductImage>
            <Overdrive id={`${product.id}`}>
              <Image src={product.thumbnail} alt={product.title} size="tiny" />
            </Overdrive>
          </ProductImage>
          <MessageBody>
            <MessageBodyHeader>
              {orderQty} x {product.title}
            </MessageBodyHeader>
            <p>{'SubTotal: ' + formatPrice(product.price * orderQty)}</p>
            <Icon name="check" color="green" /> Successfully Added to Cart
          </MessageBody>
        </MessageContent>
        <ButtonGroup>
          <Link to="/cart">
            <Button basic fluid color="violet">
              <Button.Content>Proceed to Checkout</Button.Content>
            </Button>
          </Link>
          <Link to="/">
            <Button basic fluid>
              <Button.Content color="grey">Continue Shopping</Button.Content>
            </Button>
          </Link>
        </ButtonGroup>
      </MessageContainer>
    </Message>
  );
};

export default SuccessMessage;

const Message = styled.div`
  display: grid;
  justify-content: center;
  z-index: 2;
`;

const MessageContainer = styled.div`
  margin: 0.25rem 0 0;
  padding: 1rem;
  border: 2px solid #a3c193;
  border-radius: 4px;
  background-color: #fbfff5;
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
  grid-column: 2;
  color: #789e76;
`;

const MessageBodyHeader = styled.h3`
  margin: 0;
  color: #1a521c;
`;
