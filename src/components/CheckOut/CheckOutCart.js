import React, { Component } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../helpers';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import Button from 'semantic-ui-react/dist/es/elements/Button';
import LineItem from './LineItem';
import ContactForm from './ContactForm';

class Cart extends Component {
  constructor(props) {
    super(props);
    const ordersRef = localStorage.getItem(`CurrentOrder`);
    const orderTotalRef = localStorage.getItem(`CartTotalItems`);
    this.state = {
      orders: JSON.parse(ordersRef) || this.props.orders,
      showForm: false,
      confirmedOrder: {},
      orderTotal: JSON.parse(orderTotalRef) || this.props.cartTotal
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
        <Table>
          <TableHeader>
            <ImageHeader />
            <DesciptionHeader>Desc</DesciptionHeader>
            <SizeHeader>Size</SizeHeader>
            <ColorHeader>Color</ColorHeader>
            <QtyHeader>Qty</QtyHeader>
            <SubtotalHeader>Subtotal</SubtotalHeader>
            <ActionHeader />
          </TableHeader>
          {ordersLength > 0 ? (
            <TableBody>
              {Object.keys(orders).map(key => (
                <LineItem key={key} details={orders[key]} id={key} removeFromOrder={this.props.removeFromOrder} />
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <div>
                <Icon name="frown" size="huge" color="red" />
              </div>
              <div>No Orders here</div>
            </TableBody>
          )}
          <TableFooter>
            <TableFooterTotalLabel>Total:</TableFooterTotalLabel>
            <TableFooterTotalValue>{formatPrice(orderTotal)}</TableFooterTotalValue>
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
        {showForm && <ContactForm confirmedOrder={confirmedOrder} />}
        <AppFooter>&copy;2017 Distinctly Different Decor All Rights Reserved</AppFooter>
      </Wrapper>
    );
  }
}

export default Cart;

const Wrapper = styled.div`
  margin: 0;
  padding: 80px 7.5px 0;
  height: 100vh;
  min-width: 320px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 80px 20px 0;
    max-width: 85vw;
  }
`;

const Table = styled.div`
  margin: 0 0 0.5rem;
  padding: 0;
  min-width: 300px;
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 50px auto 50px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    margin: 0 auto 1rem;
    padding: 0;
    box-sizing: border-box;
  }
`;

const TableHeader = styled.div`
  grid-row: 1;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(6, minmax(35px, 1fr));
  grid-column-gap: 0;
  justify-items: center;
  align-items: center;
  border-top: 3px solid #642bcc;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 768px) {
    grid-row: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
  box-sizing: border-box;

  @media screen and (min-width: 481px) {
    justify-self: center;
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const DesciptionHeader = styled.div``;
const SizeHeader = styled.div``;
const ColorHeader = styled.div``;
const QtyHeader = styled.div``;
const SubtotalHeader = styled.div``;
const ActionHeader = styled.div``;

const TableBody = styled.div`
  grid-row: 2;
`;

const TableFooter = styled.div`
  grid-row: 3;
  margin: 0;
  padding: 0 0.25rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(6, minmax(35px, 1fr));
  align-items: center;
  color: #642bcc;
  background-color: rgba(255, 255, 255, 0.5);

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    grid-template-columns: repeat(7, minmax(35px, 1fr));
    align-items: center;
  }
`;

const TableFooterTotalLabel = styled.div`
  grid-column: 3;
  justify-self: center;

  @media screen and (min-width: 768px) {
    grid-column: 4;
    justify-self: center;
  }
`;
const TableFooterTotalValue = styled.div`
  grid-column: 5;
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
