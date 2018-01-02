import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import { Table, Header, Image, Icon } from 'semantic-ui-react';

class LineItem extends Component {
  render() {
    const { details } = this.props;

    return (
      <Table.Row textAlign="center">
        <Table.Cell>
          <Header as="h4" image>
            <Image src={details.thumbnail} alt={details.title} rounded size="mini" />
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Header as="h4">{details.title}</Header>
        </Table.Cell>
        <Table.Cell>{details.orderSize}</Table.Cell>
        <Table.Cell>{details.orderColor}</Table.Cell>
        <Table.Cell>{details.orderQty}</Table.Cell>
        <Table.Cell>{formatPrice(details.orderItemTotal)}</Table.Cell>
        <Table.Cell>
          <Icon name="delete" size="mini" link color="red" />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default LineItem;
