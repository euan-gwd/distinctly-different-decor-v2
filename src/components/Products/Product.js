import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../helpers";
import Overdrive from "react-overdrive";

const Product = ({ product }) => {
  return (
    <Overdrive id={`${product.id}`}>
      <Poster>
        <PosterOverlay>
          <PosterButton to={`/products/${product.id}`}>View</PosterButton>
        </PosterOverlay>
        <PosterImage src={product.thumbnail} alt={product.title} />
      </Poster>
    </Overdrive>
  );
};

export default Product;

const PosterOverlay = styled.div`
  display: grid;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-items: center;
  align-items: center;
  background-color: #00000032;
  position: relative;
  opacity: 0;
  transition: opacity 0.5s;
`;

const PosterButton = styled(NavLink)`
  outline: none;
  border: none;
  color: ${colors.grey};
  margin: 0;
  padding: calc(0.78571429rem/2) 1rem;
  box-sizing: border-box;
  text-transform: none;
  text-shadow: none;
  text-decoration: none;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1rem;
  font-style: normal;
  text-align: center;
  background-color: ${colors.primaryBorder};
  border-radius: 0.28571429rem;
  box-shadow: 0px 0px 0px 1px
    ${props => (props.primary ? `${colors.primary}` : `${colors.grey}`)} inset;
`;

const PosterImage = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  height: 100;
  object-fit: cover;
`;

const Poster = styled.div`
  overflow: hidden;
  display: grid;
  grid-template: 1 / 1;
  transition: 0.5s;

  @media screen and (min-width: 768px) {
    &:hover {
    z-index: 3;
    transition: 0.5s;
    transform: scale(1.15);
    transform-origin: center;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    box-shadow: 0 16px 16px rgba(0, 0, 0, 0.1);
    box-shadow: 8px 32px 32px rgba(0, 0, 0, 0.15);
    box-shadow: 8px 64px 64px rgba(0, 0, 0, 0.15);

    ${PosterOverlay} {
    opacity: 1;
    transition: opacity 0.5s;
    }

  }
`;
