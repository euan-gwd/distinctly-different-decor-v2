import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import { Table, Image, Icon, Button } from 'semantic-ui-react';

class LineItem extends Component {
  render() {
    const { details, id, removeFromOrder } = this.props;
    return (
      <Table.Row textAlign="center">
        <Table.Cell>
          <Image src={details.thumbnail} alt={details.title} rounded size="tiny" />
        </Table.Cell>
        <Table.Cell>{details.title}</Table.Cell>
        <Table.Cell>{details.orderSize}</Table.Cell>
        <Table.Cell>{details.orderColor}</Table.Cell>
        <Table.Cell>{details.orderQty}</Table.Cell>
        <Table.Cell>{formatPrice(details.orderItemTotal)}</Table.Cell>
        <Table.Cell>
          <Button
            onClick={() => {
              removeFromOrder(id);
            }}
            basic
            negative="true"
            animated="fade"
            size="mini"
          >
            <Button.Content visible>
              <Icon name="delete" />
            </Button.Content>
            <Button.Content hidden>Delete</Button.Content>
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default LineItem;
