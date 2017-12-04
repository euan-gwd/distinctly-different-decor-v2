import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const productImage = require(`../assets/products/${product.thumbnail}`);
  return (
    <Link to={`/${product.id}`}>
      <div>
        <Poster src={productImage} alt={product.title} />
        <InfoButton>More Info</InfoButton>
      </div>
    </Link>
  );
};

export default Product;

const Poster = styled.img`
  max-width : 100%;
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

const InfoButton = styled.button`
  border: 1px solid #23d160;
  border-radius: 1px;
  margin: 0 0.25rem;
  box-shadow: none;
  display: inline-block;
  font-size: 1.125rem;
  justify-content: center;
  line-height: 1.5;
  height: 2.25rem;
  vertical-align: top;
  user-select: none;
  background-color: transparent;
  color: #23d160;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;

  &:hover {
    background-color: #23d160;
    color: #fff;
  }
`;
