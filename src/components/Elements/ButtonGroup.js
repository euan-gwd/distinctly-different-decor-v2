import React from 'react';
import styled from 'styled-components';

const ButtonGroup = (props) => <BtnGroup {...props}>{props.children}</BtnGroup>;
export default ButtonGroup;

const BtnGroup = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
`;
