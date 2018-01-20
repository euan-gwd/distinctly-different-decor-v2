import React from 'react';
import styled from 'styled-components';

const FormLabel = (props) => <Label {...props}>{props.children}</Label>;

export default FormLabel;

const Label = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
