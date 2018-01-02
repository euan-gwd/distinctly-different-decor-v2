import React, { Component } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../helpers';
import { Table } from 'semantic-ui-react';
import LineItem from './LineItem';

class Cart extends Component {
  render() {
    const { Orders } = this.props;
    const orderIds = Object.keys(this.props.Orders);
    const totalCost = orderIds.reduce((total, orderId) => {
      const lineItemTotal = Orders[orderId].orderItemTotal;
      return total + lineItemTotal;
    }, 0);

    return (
      <Wrapper>
        <h3>Please Confirm Your Order</h3>
        <Table selectable stackable color="violet">
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
          {Orders && (
            <Table.Body>
              {Object.keys(this.props.Orders).map(key => <LineItem key={key} details={Orders[key]} index={key} />)}
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
