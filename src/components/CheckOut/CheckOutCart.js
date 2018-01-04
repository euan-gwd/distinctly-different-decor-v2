import React, { Component } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../helpers';
import { Table, Icon, Button } from 'semantic-ui-react';
import LineItem from './LineItem';
import ContactForm from './ContactForm';

class Cart extends Component {
  constructor(props) {
    super(props);
    const ordersRef = localStorage.getItem(`CurrentOrder`);
    this.state = {
      orders: JSON.parse(ordersRef) || this.props.Orders,
      showForm: false,
      confirmedOrder: {},
      orderTotal: 0
    };
  }

  componentWillUpdate = (nextProps, nextState) => {
    const ordersRef = localStorage.getItem(`CurrentOrder`);
    nextState.Orders = JSON.parse(ordersRef);
  };

  componentDidMount = () => {
    const orders = { ...this.state.orders };
    const orderIds = Object.keys(orders);
    const totalCost = orderIds.reduce((total, orderId) => {
      const lineItemTotal = orders[orderId].orderItemTotal;
      return total + lineItemTotal;
    }, 0);
    this.setState({ orderTotal: totalCost });
  };

  handleConfirm = () => {
    const ordersTotal = this.state.orderTotal;
    const confirmedOrder = {
      ordersTotal,
      ...this.state.orders
    };
    this.setState({ showForm: true, confirmedOrder });
  };

  render() {
    const { orders, orderTotal, showForm, confirmedOrder } = this.state;
    const ordersLength = Object.keys(orders).length;

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
          {ordersLength > 0 ? (
            <Table.Body>
              {Object.keys(orders).map(key => (
                <LineItem key={key} details={orders[key]} id={key} removeFromOrder={this.props.removeFromOrder} />
              ))}
            </Table.Body>
          ) : (
            <Table.Body>
              <Table.Row textAlign="center">
                <Table.Cell />
                <Table.Cell />
                <Table.Cell>
                  <Icon name="frown" size="huge" color="red" />
                </Table.Cell>
                <Table.Cell>No Orders here</Table.Cell>
                <Table.Cell />
                <Table.Cell />
                <Table.Cell />
              </Table.Row>
            </Table.Body>
          )}
          <Table.Footer fullWidth>
            <Table.Row textAlign="center">
              <Table.HeaderCell colSpan="4" />
              <Table.HeaderCell>Total:</Table.HeaderCell>
              <Table.HeaderCell>{formatPrice(orderTotal)}</Table.HeaderCell>
              <Table.HeaderCell>
                {ordersLength > 0 && (
                  <Button onClick={this.handleConfirm} basic animated="fade" positive={true} size="mini">
                    <Button.Content visible>
                      <Icon name="check" />
                    </Button.Content>
                    <Button.Content hidden>Confirm</Button.Content>
                  </Button>
                )}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        {showForm && <ContactForm confirmedOrder={confirmedOrder} />}
        <AppFooter>&copy;2017 Distinctly Different Decor All Rights Reserved</AppFooter>
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

const AppFooter = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  height: 20px;
  padding: 0;
  color: #131313;
  text-align: right;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 0;
`;
