import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Overdrive from 'react-overdrive';

const Product = ({ product }) => {
  const productImage = require(`../../assets/products/${product.thumbnail}`);
  return (
    <Link to={`/products/${product.id}`}>
      <Overdrive id={`${product.id}`}>
        <Poster src={productImage} alt={product.title} />
      </Overdrive>
    </Link>
  );
};

export default Product;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    transition: 0.5s;
    z-index: 3;
    transform-origin: center;
    transform: scale(1.15);
    transition: 0.5s;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
    box-shadow: 0 16px 16px rgba(0, 0, 0, 0.1);
    box-shadow: 8px 32px 32px rgba(0, 0, 0, 0.15);
    box-shadow: 8px 64px 64px rgba(0, 0, 0, 0.15);
`;
