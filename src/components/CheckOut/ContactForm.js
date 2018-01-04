import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon, Button, Input } from 'semantic-ui-react';

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    nameFieldError: false,
    emailFieldError: false,
    phoneFieldError: false
  };

  handleNameInput = (e, { value }) => {
    let nameInput = value;
    /^[a-zA-Z-_ ]{3,30}$/.test(nameInput)
      ? this.setState({ name: value, nameFieldError: false })
      : this.setState({ name: value, nameFieldError: true });
  };

  handleEmailInput = (e, { value }) => {
    let emailInput = value;
    /[\w\-._]+@[\w\-._]+\.\w{2,10}/.test(emailInput)
      ? this.setState({ email: value, emailFieldError: false })
      : this.setState({ email: value, emailFieldError: true });
  };

  handlePhoneInput = (e, { value }) => {
    let phoneInput = value;
    /^\d{3}-\d{3}-\d{4}$/.test(phoneInput)
      ? this.setState({ phone: value, phoneFieldError: false })
      : this.setState({ phone: value, phoneFieldError: true });
  };

  handleSubmit = () => {
    const contactDetails = {
      contactName: this.state.name,
      contactEmail: this.state.email,
      contactPhone: this.state.phone
    };

    const nameInput = contactDetails.contactName;
    const emailInput = contactDetails.contactEmail;

    if (nameInput === '' || emailInput === '') {
      this.setState({ nameFieldError: true });
    }
  };

  render() {
    const { nameFieldError, emailFieldError, phoneFieldError } = this.state;
    return (
      <FormWrapper>
        {nameFieldError ? (
          <Input
            icon="user"
            iconPosition="left"
            label={{ tag: true, content: 'Name' }}
            labelPosition="right"
            placeholder="Enter Contact Name"
            onChange={this.handleNameInput}
            error
          />
        ) : (
          <Input
            icon="user"
            iconPosition="left"
            label={{ tag: true, content: 'Name' }}
            labelPosition="right"
            placeholder="Enter Contact Name"
            onChange={this.handleNameInput}
          />
        )}
        {emailFieldError ? (
          <Input
            icon="envelope"
            iconPosition="left"
            label={{ tag: true, content: 'Email' }}
            labelPosition="right"
            placeholder="Enter Contact Email Address"
            onChange={this.handleEmailInput}
            error
          />
        ) : (
          <Input
            icon="envelope"
            iconPosition="left"
            label={{ tag: true, content: 'Email' }}
            labelPosition="right"
            placeholder="Enter Contact Email Address"
            onChange={this.handleEmailInput}
          />
        )}
        {phoneFieldError ? (
          <Input
            icon="mobile"
            iconPosition="left"
            label={{ tag: true, content: 'Phone' }}
            labelPosition="right"
            placeholder="Enter Contact Number"
            onChange={this.handlePhoneInput}
            error
          />
        ) : (
          <Input
            icon="mobile"
            iconPosition="left"
            label={{ tag: true, content: 'Phone' }}
            labelPosition="right"
            placeholder="Enter Contact Number xxx-xxx-xxxx"
            onChange={this.handlePhoneInput}
          />
        )}
        <Button animated="fade" color="violet" onClick={this.handleSubmit}>
          <Button.Content visible>Place Order</Button.Content>
          <Button.Content hidden>
            <Icon name="send" />
          </Button.Content>
        </Button>
      </FormWrapper>
    );
  }
}

export default ContactForm;

const FormWrapper = styled.div`
  display: grid;
  grid-row-gap: 1rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
