import React, { Component } from "react";
import styled from "styled-components";
import { database } from "../../firebase/firebase";
import { formatPrice, colors } from "../helpers";
import { AlertOctagon } from "react-feather";
import LineItem from "./LineItem";
import ContactForm from "./ContactForm";

class Cart extends Component {
  state = {
    orders: {},
    totalCost: 0,
    totalItemsInCart: 0
  };

  async componentDidMount() {
    try {
      //retrieve cart contents from firebase
      await database.ref(`cart`).on("value", res => {
        const orders = res.val() || {};
        const orderIds = Object.keys(orders);

        const totalCost = orderIds.reduce((total, orderId) => {
          const lineItemTotal = orders[orderId].orderItemTotal;
          return total + lineItemTotal;
        }, 0); // end calculate total Cost of all items in cart

        const totalItemsInCart = orderIds.reduce((total, orderId) => {
          const totalItems = orders[orderId].orderQty;
          return total + totalItems;
        }, 0); // end calculate total Number of all items in cart

        this.setState({ totalCost, orders, totalItemsInCart });
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleRemoveFromOrder = id => {
    const lineItemRef = database.ref(`/cart/${id}`);
    lineItemRef.remove();
  };

  componentWillUnmount = () => {
    database.ref(`cart`).off();
  };

  render() {
    const { orders, totalCost, totalItemsInCart } = this.state;
    const ordersLength = Object.keys(orders).length;

    return (
      <Container>
        <h2>Check Out List</h2>
        <p>
          These are the items you indicated that you are interested in, please
          confirm below. <br />
          Then enter your contact details and I shall contact you.
        </p>
        <Table>
          <TableHeader>
            <ImageHeader />
            <TableColumnHeader>Item</TableColumnHeader>
            <TableColumnHeader />
            <TableColumnHeader />
            <TableColumnHeader>Qty</TableColumnHeader>
            <TableColumnHeader>Subtotal</TableColumnHeader>
            <TableColumnHeader />
          </TableHeader>
          {ordersLength > 0 ? (
            <TableBody>
              {Object.keys(orders).map(key => (
                <LineItem
                  key={key}
                  details={orders[key]}
                  id={key}
                  removeFromOrder={this.handleRemoveFromOrder}
                />
              ))}
            </TableBody>
          ) : (
            <EmptyCart>
              <EmptyCartBody>
                <AlertOctagon size={48} />
                No Orders found...
              </EmptyCartBody>
            </EmptyCart>
          )}
          <TableFooter>
            <TableFooterTotalLabel>Total:</TableFooterTotalLabel>
            <TableFooterTotalItems>{totalItemsInCart}</TableFooterTotalItems>
            <TableFooterTotalValue>
              {formatPrice(totalCost)}
            </TableFooterTotalValue>
            <TableFooterAction />
          </TableFooter>
        </Table>
        {ordersLength > 0 ? (
          <AttachedForm>
            <ContactForm confirmedOrder={orders} />
          </AttachedForm>
        ) : null}
      </Container>
    );
  }
}

export default Cart;

const Container = styled.div`
  grid-area: main;
  padding: 0 5px;

  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }
`;

const Table = styled.div`
  margin: 1rem 0 0;
  padding: 0;
  min-width: 300px;

  display: grid;
  grid-template-rows: 50px 1fr 50px;
  border: 0.5px solid ${colors.primaryBorder};
  box-shadow: 0px 2px 2.5px 0px rgba(50, 50, 50, 0.5);
  border-top: 2px solid ${colors.primary};
`;

const TableHeader = styled.div`
  grid-row: 1;
  margin: 0;
  padding: 0;

  border-bottom: 1px solid ${colors.primaryBorder};
  display: grid;
  grid-template-columns: auto 15px auto 15px auto 50px;
  align-items: center;
  background-color: ${colors.primaryBorder};
  color: ${colors.white};

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
  display: grid;
  justify-items: center;
  align-content: center;
  height: 50vh;
  background-color: ghostwhite;
  border-bottom: 1px solid ${colors.primaryBorder};
`;

const EmptyCartBody = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  color: ${colors.error};
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.07);
`;

const TableFooter = styled.div`
  grid-row: 3;
  margin: 0;
  padding: 0 0.25rem;

  display: grid;
  grid-template-columns: repeat(6, minmax(35px, 1fr));
  align-items: center;
  background-color: ${colors.primaryBorder};
  color: ${colors.white};
  text-shadow: 0 2px 0 rgba(0, 0, 0, 0.07);

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;

    grid-template-columns: repeat(7, minmax(35px, 1fr));
    align-items: center;
  }
`;

const TableFooterTotalLabel = styled.h2`
  margin: 0;
  grid-column: 2;
  justify-self: center;

  @media screen and (min-width: 768px) {
    grid-column: 4;
    justify-self: center;
  }
`;

const TableFooterTotalItems = styled.h2`
  margin: 0;
  grid-column: 3;
  justify-self: center;

  @media screen and (min-width: 768px) {
    grid-column: 5;
    justify-self: center;
  }
`;

const TableFooterTotalValue = styled.h2`
  margin: 0;
  grid-column: 4;
  justify-self: center;

  @media screen and (min-width: 768px) {
    grid-column: 6;
    justify-self: center;
  }
`;
const TableFooterAction = styled.div`
  grid-column: 6;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-column: 7;
  }
`;

const AttachedForm = styled.div`
  margin: 1rem 0 0;
  padding: 0;
`;
