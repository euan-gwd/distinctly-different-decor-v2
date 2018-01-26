import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Send } from "react-feather";
import Input from "../uiElements/Input";
import Ribbon from "../uiElements/Ribbon";
import RequiredLabel from "../uiElements/RequiredLabel";
import IconButton from "../uiElements/IconButton";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
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
    if (this.state.name === "") {
      this.setState({ nameFieldError: true });
    } else {
      const customerOrder = {
        contactName: this.state.name,
        contactEmail: this.state.email,
        contactPhone: this.state.phone,
        orders: this.props.confirmedOrder
      };

      console.log(customerOrder);
    }

    if (this.state.email === "") {
      this.setState({ emailFieldError: true });
    } else {
      const customerOrder = {
        contactName: this.state.name,
        contactEmail: this.state.email,
        contactPhone: this.state.phone,
        orders: this.props.confirmedOrder
      };

      console.log(customerOrder);
    }

    if (this.state.phone === "") {
      this.setState({ phoneFieldError: true });
    } else {
      const customerOrder = {
        contactName: this.state.name,
        contactEmail: this.state.email,
        contactPhone: this.state.phone,
        orders: this.props.confirmedOrder
      };

      console.log(customerOrder);
    }
  };

  render() {
    const { nameFieldError, emailFieldError, phoneFieldError } = this.state;
    return (
      <Fragment>
        <h3>Contact Details:</h3>
        <FormWrapper>
          <InputGroup>
            <Label primary>Name:</Label>
            {nameFieldError && <RequiredLabel>A Valid Name is Required!</RequiredLabel>}
            <Input
              placeholder="Contact Name..."
              onChange={this.handleNameInput}
              validate={nameFieldError ? "error" : null}
            />
          </InputGroup>

          <InputGroup>
            <Label primary>Email:</Label>
            {emailFieldError && <RequiredLabel>A Valid Email is Required!</RequiredLabel>}
            <Input
              placeholder="Contact Email..."
              onChange={this.handleEmailInput}
              validate={emailFieldError ? "error" : null}
            />
          </InputGroup>
          <InputGroup>
            <Label primary>Phone:</Label>
            {nameFieldError && <RequiredLabel>A Valid Number is Required!</RequiredLabel>}
            <Input
              placeholder="123-456-7890"
              onChange={this.handlePhoneInput}
              validate={phoneFieldError ? "error" : null}
            />
          </InputGroup>
          <SubmitGroup>
            <SubmitButton color="primary" onClick={this.handleSubmit}>
              <span>Place Order</span>
              <Send />
            </SubmitButton>
          </SubmitGroup>
        </FormWrapper>
      </Fragment>
    );
  }
}

export default ContactForm;

const FormWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr) 140px;
  grid-row-gap: 0.5rem;
  /* justify-items: center; */

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr) 140px;
    grid-column-gap: 1rem;
    justify-items: start;
    align-items: end;
  }
`;

const InputGroup = styled.div`
  margin: 0;
  padding: 0 0 0 1rem;
  box-sizing: border-box;
`;

const SubmitGroup = styled.div`
  margin: 1rem 0 0;
  padding: 0 0 0 1rem;
`;

const SubmitButton = styled(IconButton)`
  max-width: 12.55rem;
  padding: 0.78571429rem calc(0.78571429rem/2);
  justify-items: center;

  @media screen and (min-width: 768px) {
    max-width: unset;
  }
`;

const Label = styled(Ribbon)`
  font-size: 1rem;
  margin: 0 0 0.125rem -1.17rem;
`;
