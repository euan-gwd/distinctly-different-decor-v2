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
    (props.size === "mini" ? "35px" : "100%") ||
    (props.size === "small" ? "150px" : "100%") ||
    (props.size === "medium" ? "300px" : "100%") ||
    (props.size === "Large" ? "450px" : "100%")};
`;
