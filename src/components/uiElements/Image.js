import React from "react";
import styled from "styled-components";

const Image = props => {
  return <Img size={props.size} src={props.src} alt={props.alt} />;
};

export default Image;

const Img = styled.img`
  display: block;
  max-width: 100%;
  object-fit: cover;
  width: ${props =>
    (props.size === "mini" ? "50px" : null) ||
    (props.size === "tiny" ? "100px" : null) ||
    (props.size === "small" ? "125px" : null) ||
    (props.size === "medium" ? "250px" : null) ||
    (props.size === "Large" ? "500px" : null)};
  height: auto;
`;
