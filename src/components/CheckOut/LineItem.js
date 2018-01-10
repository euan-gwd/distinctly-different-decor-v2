import React, { Component } from 'react';
import styled from 'styled-components';
import { formatPrice, colors } from '../helpers';
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
        <LineItemCell>{details.title}</LineItemCell>
        <LineItemCell>{details.orderSize}</LineItemCell>
        <LineItemCell>{details.orderColor}</LineItemCell>
        <LineItemCell>{details.orderQty}</LineItemCell>
        <LineItemCell>{formatPrice(details.orderItemTotal)}</LineItemCell>
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
  padding: 0 0.125rem;
  box-sizing: border-box;
  min-height: 50px;
  display: grid;
  grid-template-columns: auto 15px auto 15px auto 50px;
  grid-gap: 0.5rem 0.5rem;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid ${colors.border};

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    grid-template-columns: repeat(7, minmax(35px, 1fr));
    align-items: center;

    &:hover {
      background-color: ghostwhite;
    }
  }
`;

const LineItemImage = styled.div`
  display: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    justify-self: center;
    display: block;
    margin: 0;
    padding: 0.25rem 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    justify-content: center;
    align-items: center;
  }
`;

const LineItemCell = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const LineItemActions = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  align-items: center;
`;
