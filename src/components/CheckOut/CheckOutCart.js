import React, { Component } from 'react';
import styled from 'styled-components';
// import { database } from '../../firebase/firebase';
import { formatPrice, colors } from '../helpers';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import Button from 'semantic-ui-react/dist/es/elements/Button';
import LineItem from './LineItem';
import ContactForm from './ContactForm';

class Cart extends Component {
  state = {
    orders: {},
    showForm: false,
    confirmedOrder: {},
    totalCost: 0
  };

  // async componentDidMount() {
  //   try {
  //     //retrieve cart contents from firebase
  //     await database.ref(`cart/${this.props.match.params.id}`).on('value', res => {
  //       const orders = res.val();
  //       const orderIds = Object.keys(orders);
  //       const totalCost = orderIds.reduce((total, orderId) => {
  //         const lineItemTotal = orders[orderId].orderItemTotal;
  //         return total + lineItemTotal;
  //       }, 0);
  //       this.setState({ totalCost, orders });
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  componentDidMount = () => {
    const orders = { ...this.props.orders };
    const orderIds = Object.keys(orders);
    const totalCost = orderIds.reduce((total, orderId) => {
      const lineItemTotal = orders[orderId].orderItemTotal;
      return total + lineItemTotal;
    }, 0);
    this.setState({ totalCost, orders });
  };

  componentWillUpdate = (nextProps, nextState) => {
    const ordersRef = sessionStorage.getItem(`CurrentOrder`);
    const updatedOrders = JSON.parse(ordersRef) || {};
    const orderIds = Object.keys(updatedOrders);
    const UpdatedTotal = orderIds.reduce((total, orderId) => {
      const lineItemTotal = updatedOrders[orderId].orderItemTotal;
      return total + lineItemTotal;
    }, 0);
    nextState.orders = updatedOrders;
    nextState.totalCost = UpdatedTotal;
  };

  handleConfirm = () => {
    const ordersTotal = this.props.orderTotal;
    const confirmedOrder = {
      ordersTotal,
      ...this.state.orders
    };
    this.setState({ showForm: true, confirmedOrder });
  };

  render() {
    const { orders, totalCost, showForm, confirmedOrder } = this.state;
    const ordersLength = Object.keys(orders).length;

    return (
      <Container>
        <Table>
          <TableHeader>
            <ImageHeader />
            <TableColumnHeader>Item</TableColumnHeader>
            <TableColumnHeader>Size</TableColumnHeader>
            <TableColumnHeader>Color</TableColumnHeader>
            <TableColumnHeader>Qty</TableColumnHeader>
            <TableColumnHeader>Subtotal</TableColumnHeader>
            <TableColumnHeader />
          </TableHeader>
          {ordersLength > 0 ? (
            <TableBody>
              {Object.keys(orders).map(key => (
                <LineItem key={key} details={orders[key]} id={key} removeFromOrder={this.props.removeFromOrder} />
              ))}
            </TableBody>
          ) : (
            <EmptyCart>
              <div>
                <Icon name="frown" size="huge" color="red" />
              </div>
              <div>No Orders found, Cart is sad...</div>
            </EmptyCart>
          )}
          <TableFooter>
            <TableFooterTotalLabel>Total:</TableFooterTotalLabel>
            <TableFooterTotalValue>{formatPrice(totalCost)}</TableFooterTotalValue>
            <TableFooterAction>
              {ordersLength > 0 && (
                <Button onClick={this.handleConfirm} basic animated="fade" positive={true} size="mini">
                  <Button.Content visible>
                    <Icon name="check" />
                  </Button.Content>
                  <Button.Content hidden>Confirm</Button.Content>
                </Button>
              )}
            </TableFooterAction>
          </TableFooter>
        </Table>
        <AttachedForm>{showForm && <ContactForm confirmedOrder={confirmedOrder} />}</AttachedForm>
      </Container>
    );
  }
}

export default Cart;

const Container = styled.div`
  grid-row: 2;
  min-height: 85vh;
  padding: 0 5px;
  min-width: 100%;

  @media screen and (min-width: 768px) {
    grid-row: 2;
    justify-self: center;
    padding: 0 1rem;

    width: 85vw;
  }
`;

const Table = styled.div`
  margin: 1rem 0 0;
  padding: 0;
  min-width: 300px;

  display: grid;
  grid-template-rows: 50px 1fr 50px;
  border: 0.5px solid ${colors.border};
  box-shadow: 0px 2px 2.5px 0px rgba(50, 50, 50, 0.5);
  border-top: 2px solid ${colors.border};

  @media screen and (min-width: 768px) {
    margin: 1rem 0 0;
    padding: 0;

    grid-template-rows: 50px 1fr 50px;
  }
`;

const TableHeader = styled.div`
  grid-row: 1;
  margin: 0;
  padding: 0;

  border-bottom: 1px solid ${colors.border};
  display: grid;
  grid-template-columns: auto 15px auto 15px auto 50px;
  align-items: center;
  background-color: ${colors.background};
  color: black;

  @media screen and (min-width: 768px) {
    grid-row: 1;
    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: repeat(7, minmax(35px, 1fr));
    grid-column-gap: 0.25rem;
    align-items: center;
  }
`;

const ImageHeader = styled.div`
  display: none;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    justify-self: center;
    display: block;
    margin: 0;
    padding: 0;
  }
`;

const TableColumnHeader = styled.div`
  justify-self: center;
`;

const TableBody = styled.div`
  grid-row: 2;
  background-color: white;

  @media screen and (min-width: 768px) {
    max-height: 60vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const EmptyCart = styled.div`
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: ghostwhite;
  border-bottom: 1px solid ${colors.border};
`;

const TableFooter = styled.div`
  grid-row: 3;
  margin: 0;
  padding: 0 0.25rem;

  display: grid;
  grid-template-columns: repeat(6, minmax(35px, 1fr));
  align-items: center;
  background-color: ${colors.background};
  color: ${colors.primary};

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;

    grid-template-columns: repeat(7, minmax(35px, 1fr));
    align-items: center;
  }
`;

const TableFooterTotalLabel = styled.div`
  grid-column: 2 / 4;
  justify-self: center;

  @media screen and (min-width: 768px) {
    grid-column: 4;
    justify-self: center;
  }
`;
const TableFooterTotalValue = styled.div`
  grid-column: 4;
  justify-self: center;

  @media screen and (min-width: 768px) {
    grid-column: 6;
    justify-self: center;
  }
`;
const TableFooterAction = styled.div`
  grid-column: 6;
  justify-self: center;
  padding-left: 0.25rem;

  @media screen and (min-width: 768px) {
    grid-column: 7;
    justify-self: center;
  }
`;

const AttachedForm = styled.div`
  margin: 1rem 0 0;
  padding: 0;
`;
