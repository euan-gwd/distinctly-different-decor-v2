import React from 'react';
import styled from 'styled-components';

const Button = ({ title }) => {
  return <StyledButton> {title} </StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  border: 1px solid #23d160;
  border-radius: 1px;
  margin: 0 0.25rem;
  box-shadow: none;
  display: inline-block;
  font-size: 1.125rem;
  justify-content: center;
  line-height: 1.5;
  height: 2.25rem;
  vertical-align: top;
  user-select: none;
  background-color: transparent;
  color: #23d160;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: #23d160;
    color: #fff;
  }
`;
