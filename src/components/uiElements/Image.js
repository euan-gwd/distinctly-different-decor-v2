import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  return <Img className={`${props.size} ${props.effect}`} src={props.src} alt={props.alt} />;
};

export default Image;

const Img = styled.img`
  display: inline-block;
  max-width: 100%;
`;
