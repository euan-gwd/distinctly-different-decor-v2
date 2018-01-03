import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon, Button, Form } from 'semantic-ui-react';

class ContactForm extends Component {
  state = {};
  render() {
    return (
      <FormWrapper>
        <Form>
          <Form.Group inline>
            <Form.Field>
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </Form.Field>
            <Form.Field>
              <label>Phone</label>
              <input type="tel" placeholder="Phone" />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </Form.Field>
            <Button animated="fade" color="violet">
              <Button.Content visible>Place Order</Button.Content>
              <Button.Content hidden>
                <Icon name="send" />
              </Button.Content>
            </Button>
          </Form.Group>
        </Form>
      </FormWrapper>
    );
  }
}

export default ContactForm;

const FormWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 20vh;
  box-sizing: border-box;
`;
