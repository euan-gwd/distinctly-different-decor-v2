import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const productImage = require(`../data/products/${product.image}`);
  return (
    <Link to={`/${product.id}`}>
      <Poster src={productImage} alt={product.title} />
    </Link>
  );
};

export default Product;

const Poster = styled.img`
  box-shadow: 0 0 5px black;
  width: 154px;
`;
