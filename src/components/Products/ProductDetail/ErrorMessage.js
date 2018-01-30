import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { XSquare } from "react-feather";
import { colors } from "../../helpers.js";
import styled from "styled-components";
import Button from "../../uiElements/Button";
import ButtonGroup from "../../uiElements/ButtonGroup";

class ErrorMessage extends Component {
  handleGoToCart = () => {
    this.props.history.push("/cart");
  };

  render() {
    const { show, close } = this.props;
    return (
      <Message show={show ? "open" : null}>
        <MessageContainer>
          <MessageContent>
            <MessageBody>
              <MessageBodyContent>
                <XSquare />Item Already Added to Cart
              </MessageBodyContent>
            </MessageBody>
          </MessageContent>
          <MessageButtons>
            <MessageButton primary onClick={this.handleGoToCart}>
              Checkout
            </MessageButton>
            <MessageButton onClick={close}>Close</MessageButton>
          </MessageButtons>
        </MessageContainer>
      </Message>
    );
  }
}

export default withRouter(ErrorMessage);

const Message = styled.div`
  grid-row: 1 / 3;
  grid-column: 1;
  padding: 0;
  display: ${props => (props.show ? "grid" : "none")};
  align-items: start;
  justify-items: center;
  z-index: 2;
`;

const MessageContainer = styled.div`
  margin: 0.25rem 0;
  padding: 1rem;
  border: 2px solid ${colors.errorBorder};
  border-radius: 4px;
  background-color: ${colors.errorBackground};
  max-width: 300px;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`;

const MessageContent = styled.div`
  margin: 0 0 1rem;
  color: ${colors.error};
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
`;

const MessageBody = styled.div`
  color: ${colors.error};
  grid-column: 1;
`;

const MessageBodyContent = styled.div`
  grid-row: 2;
  grid-template-columns: 1fr;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: min-content max-content;
    align-items: end;
    grid-gap: 2.5px;
  }
`;

const MessageButtons = styled(ButtonGroup)`
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  padding: 0 1rem;
  max-width: 290px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    grid-column-gap: 1rem;
    align-items: center;
  }
`;

const MessageButton = styled(Button)`
  min-width: fit-content;
`;
