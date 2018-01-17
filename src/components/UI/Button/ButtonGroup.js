import React from 'react';
import styled from 'styled-components';

const ButtonGroup = props => <BtnGroup {...props}>{props.children}</BtnGroup>;
export default ButtonGroup;

const BtnGroup = styled.div`
  margin: 0 0 1rem;
  padding: 0;
  display: flex;
  align-items: center;
`;
