import React, { Component } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../helpers';
import { Table, Icon } from 'semantic-ui-react';
import LineItem from './LineItem';

class Cart extends Component {
  render() {
    const { Orders, removeFromOrder } = this.props;
    const orderIds = Object.keys(this.props.Orders);
    const totalCost = orderIds.reduce((total, orderId) => {
      const lineItemTotal = Orders[orderId].orderItemTotal;
      return total + lineItemTotal;
    }, 0);

    const totalOrders = Object.keys(Orders).length;

    return (
      <Wrapper>
        <h3>Please Confirm Your Order</h3>
        <Table selectable stackable color="violet" columns={7}>
          <Table.Header fullWidth>
            <Table.Row textAlign="center">
              <Table.HeaderCell />
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Size</Table.HeaderCell>
              <Table.HeaderCell>Color</Table.HeaderCell>
              <Table.HeaderCell>Qty</Table.HeaderCell>
              <Table.HeaderCell>Subtotal</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>
          {totalOrders > 0 ? (
            <Table.Body>
              {Object.keys(Orders).map(key => (
                <LineItem key={key} details={Orders[key]} id={key} removeFromOrder={removeFromOrder} />
              ))}
            </Table.Body>
          ) : (
            <Table.Body>
              <Table.Row textAlign="center">
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>
                  <Icon name="frown" size="large" color="violet" />
                </Table.Cell>
                <Table.Cell>Cart is Empty</Table.Cell>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
              </Table.Row>
            </Table.Body>
          )}
          <Table.Footer fullWidth>
            <Table.Row textAlign="center">
              <Table.HeaderCell />
              <Table.HeaderCell />
              <Table.HeaderCell />
              <Table.HeaderCell />
              <Table.HeaderCell>Total: </Table.HeaderCell>
              <Table.HeaderCell>{formatPrice(totalCost)}</Table.HeaderCell>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Footer>
        </Table>
      </Wrapper>
    );
  }
}

export default Cart;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 100px 0 0;
  width: 75vw;
  box-sizing: border-box;
`;
