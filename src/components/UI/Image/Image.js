import React from 'react';
import styled from 'styled-components';

const Image = props => <Img {...props}>{props.children}</Img>;

export default Image;

const Img = styled.img`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  background-color: transparent;
  height: auto;
`;
