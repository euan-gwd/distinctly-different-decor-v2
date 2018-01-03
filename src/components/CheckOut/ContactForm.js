import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon, Button, Form } from 'semantic-ui-react';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    nameFieldError: false,
    emailFieldError: false
  };

  handleNameChange = (e, { value }) => this.setState({ name: value, nameFieldError: false });
  handlePhoneChange = (e, { value }) => this.setState({ phone: value });
  handleEmailChange = (e, { value }) => this.setState({ email: value, emailFieldError: false });
  handleSubmit = () => {
    console.log('button clicked');
  };

  render() {
    return (
      <FormWrapper>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group inline>
            <Form.Field required>
              <label>Name</label>
              <input type="text" placeholder="Name" />
            </Form.Field>
            <Form.Field>
              <label>Phone</label>
              <input type="tel" placeholder="Phone (optional)" />
            </Form.Field>
            <Form.Field required>
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
