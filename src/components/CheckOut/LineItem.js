import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../helpers';
import { Image, Icon, Button } from 'semantic-ui-react';

class LineItem extends Component {
  render() {
    const { details, id, removeFromOrder } = this.props;
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default LineItem;

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
