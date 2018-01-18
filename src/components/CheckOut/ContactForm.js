import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Elements/Button';
import Icon from '../Elements/Icon';
import Input from '../Elements/Input';

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
    if (this.state.name === '') {
      this.setState({ nameFieldError: true });
    } else {
      const customerOrder = {
        contactName: this.state.name,
        contactEmail: this.state.email,
        contactPhone: this.state.phone,
        orders: this.props.confirmedOrder
      };

      console.log(customerOrder);
      sessionStorage.clear();
    }

    if (this.state.email === '') {
      this.setState({ emailFieldError: true });
    } else {
      const customerOrder = {
        contactName: this.state.name,
        contactEmail: this.state.email,
        contactPhone: this.state.phone,
        orders: this.props.confirmedOrder
      };

      console.log(customerOrder);
      sessionStorage.clear();
    }

    if (this.state.phone === '') {
      this.setState({ phoneFieldError: true });
    } else {
      const customerOrder = {
        contactName: this.state.name,
        contactEmail: this.state.email,
        contactPhone: this.state.phone,
        orders: this.props.confirmedOrder
      };

      console.log(customerOrder);
      sessionStorage.clear();
    }
  };

  render() {
    const { nameFieldError, emailFieldError, phoneFieldError } = this.state;
    return (
      <FormWrapper>
        {nameFieldError ? (
          <Input
            fluid
            label={{ pointing: 'right', content: 'Name', color: 'red' }}
            labelPosition="left"
            placeholder="Name is Required"
            onChange={this.handleNameInput}
            error
          />
        ) : (
          <Input
            fluid
            label={{ pointing: 'right', content: 'Name', color: 'violet' }}
            labelPosition="left"
            placeholder="Contact Name..."
            onChange={this.handleNameInput}
          />
        )}
        {emailFieldError ? (
          <Input
            fluid
            label={{ pointing: 'right', content: 'Email', color: 'red' }}
            labelPosition="left"
            placeholder="Valid Email Required"
            onChange={this.handleEmailInput}
            error
          />
        ) : (
          <Input
            fluid
            label={{ pointing: 'right', content: 'Email', color: 'violet' }}
            labelPosition="left"
            placeholder="Contact Email..."
            onChange={this.handleEmailInput}
          />
        )}
        {phoneFieldError ? (
          <Input
            fluid
            label={{ pointing: 'right', content: 'phone', color: 'red' }}
            labelPosition="left"
            placeholder="A Valid Number 000-000-0000 is required"
            onChange={this.handlePhoneInput}
            error
          />
        ) : (
          <Input
            fluid
            label={{ pointing: 'right', content: 'phone', color: 'violet' }}
            labelPosition="left"
            placeholder="123-456-7890"
            onChange={this.handlePhoneInput}
          />
        )}
        <Button animated="fade" color="violet" onClick={this.handleSubmit}>
          <div>
            <Icon name="send" />
            <span>Place Order</span>
          </div>
        </Button>
      </FormWrapper>
    );
  }
}

export default ContactForm;

const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr) auto;
  grid-row-gap: 0.5rem;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr) auto;
    grid-column-gap: 1rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
