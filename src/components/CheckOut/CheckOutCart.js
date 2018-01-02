import React, { Component } from 'react';
import styled from 'styled-components';
import LineItem from './LineItem';
import { Table } from 'semantic-ui-react';

class Cart extends Component {
  render() {
    const { Orders } = this.props;
    return (
      <Wrapper>
        <h3>Your Order</h3>
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
