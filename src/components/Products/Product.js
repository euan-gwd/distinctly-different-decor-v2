import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../helpers";
import Overdrive from "react-overdrive";

const Product = ({ product }) => {
  return (
    <Overdrive id={`${product.id}`}>
      <Poster>
        <div className="Poster__Overlay">
          <PosterButton to={`/products/${product.id}`}>View</PosterButton>
        </div>
        <img src={product.thumbnail} alt={product.title} />
      </Poster>
    </Overdrive>
  );
};

export default Product;

const PosterButton = styled(NavLink)`
  border: 1px solid ${colors.default};
  color: ${colors.default};
  background-color: ${colors.primaryBorder};
  text-transform: uppercase;
  text-decoration: none;
  padding: 5px 7.5px;
  border-radius: 0.28571429rem;
`;

const Poster = styled.div`
  overflow: hidden;
  display: grid;
  grid-template: 1 / 1;
  box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.06);
  transition: 0.5s;

  img {
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    width: 100%;
    height: 100;
    object-fit: cover;
  }

  .Poster__Overlay {
    display: grid;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    justify-items: center;
    align-items: center;
    background-color: #00000032;
    position: relative;
    opacity: 0;
    transition: opacity 0.5s;
  }

  @media screen and (min-width: 768px) {
    &:hover {
    z-index: 3;
    transition: 0.5s;
    transform-origin: center;
    transform: scale(1.15);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    box-shadow: 0 16px 16px rgba(0, 0, 0, 0.1);
    box-shadow: 8px 32px 32px rgba(0, 0, 0, 0.15);
    box-shadow: 8px 64px 64px rgba(0, 0, 0, 0.15);

    .Poster__Overlay {
      opacity: 1;
      transition: opacity 0.5s;
     }

  }
`;
