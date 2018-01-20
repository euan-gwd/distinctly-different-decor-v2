import React from "react";
import styled from "styled-components";

const Image = props => {
  return <Img size={props.size} src={props.src} alt={props.alt} />;
};

export default Image;

const Img = styled.img`
  display: inline-block;
  max-width: 100%;
  object-fit: cover;
  /* width: ${props => (props.size ? "" : "100%")}; */
`;