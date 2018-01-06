import React, { Component } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../helpers';
import Image from 'semantic-ui-react/dist/es/elements/Image';
import Button from 'semantic-ui-react/dist/es/elements/Button';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';

class LineItem extends Component {
  render() {
    const { details, id, removeFromOrder } = this.props;
    return (
      <LineItemRow>
        <LineItemImage>
          <Image src={details.thumbnail} alt={details.title} size="mini" />
        </LineItemImage>
        <div>{details.title}</div>
        <div>{details.orderSize}</div>
        <div>{details.orderColor}</div>
        <div>{details.orderQty}</div>
        <div>{formatPrice(details.orderItemTotal)}</div>
        <LineItemActions>
          <Button
            onClick={() => {
              removeFromOrder(id);
            }}
            basic
            negative={true}
            animated="fade"
            size="mini"
          >
            <Button.Content visible>
              <Icon name="delete" />
            </Button.Content>
            <Button.Content hidden>Delete</Button.Content>
          </Button>
        </LineItemActions>
      </LineItemRow>
    );
  }
}

export default LineItem;

const LineItemRow = styled.div`
  margin: 0;
  padding: 0.25rem;
  box-sizing: border-box;
  min-height: 50px;
  display: grid;
  grid-template-columns: repeat(6, minmax(35px, 1fr));
  grid-row-gap: 1rem;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  &:last-of-type {
    border: 0;
  }

  &:hover {
    background-color: whitesmoke;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    grid-template-columns: repeat(7, minmax(35px, 1fr));
    align-items: center;
  }
`;

const LineItemImage = styled.div`
  display: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media screen and (min-width: 481px) {
    justify-self: center;
    display: block;
    margin: 0;
    padding: 0.25rem 0;
    box-sizing: border-box;
  }
`;

const LineItemActions = styled.div`
  margin: 0;
  padding: 0;
  padding-left: 0.25rem;
  box-sizing: border-box;
`;
