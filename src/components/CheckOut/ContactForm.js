import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon, Button, Input } from 'semantic-ui-react';

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
    const contactDetails = {
      contactName: this.state.name,
      contactEmail: this.state.email,
      contactPhone: this.state.phone
    };

    const nameInputError = contactDetails.contactName;
    const emailInputError = contactDetails.contactEmail;

    if (nameInputError === '') {
      this.setState({ nameFieldError: true });
    }
    if (emailInputError === '') {
      this.setState({ emailFieldError: true });
    }

    console.log(contactDetails);
  };

  render() {
    const { nameFieldError, emailFieldError } = this.state;
    return (
      <FormWrapper>
        {nameFieldError ? (
          <Input
            icon="user"
            iconPosition="left"
            label={{ tag: true, content: 'Name' }}
            labelPosition="right"
            placeholder="Enter Contact Name"
            onChange={this.handleNameChange}
            error
          />
        ) : (
          <Input
            icon="user"
            iconPosition="left"
            label={{ tag: true, content: 'Name' }}
            labelPosition="right"
            placeholder="Enter Contact Name"
            onChange={this.handleNameChange}
          />
        )}
        {emailFieldError ? (
          <Input
            icon="envelope"
            iconPosition="left"
            label={{ tag: true, content: 'Email' }}
            labelPosition="right"
            placeholder="Enter Contact Email Address"
            onChange={this.handleEmailChange}
            error
          />
        ) : (
          <Input
            icon="envelope"
            iconPosition="left"
            label={{ tag: true, content: 'Email' }}
            labelPosition="right"
            placeholder="Enter Contact Email Address"
            onChange={this.handleEmailChange}
          />
        )}
        <Input
          icon="mobile"
          iconPosition="left"
          label={{ tag: true, content: 'Phone' }}
          labelPosition="right"
          placeholder="Enter Contact Number"
          onChange={this.handlePhoneChange}
        />
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
`;
