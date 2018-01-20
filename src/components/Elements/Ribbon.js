import React from 'react';
import styled from 'styled-components';
import { colors } from '../helpers';

const Ribbon = (props) => {
  return <RibbonLabel {...props}>{props.children}</RibbonLabel>;
};

export default Ribbon;

const RibbonLabel = styled.div`
  position: absolute;
  display: inline-block;
  line-height: 1;
  margin: 1rem 0 0 -1.17rem;
  background-color: ${(props) => (props.primary ? `${colors.primary}` : `${colors.default}`)};
  background-image: none;
  padding: 0.5rem 0.8rem;
  color: ${(props) => (props.primary ? `${colors.white}` : `${colors.black}`)};
  text-transform: none;
  font-weight: bold;
  border: 0px solid #00000060;
  border-top-left-radius: 0.28571429rem;
  border-top-right-radius: 0.28571429rem;
  border-bottom-right-radius: 0.28571429rem;

  &:after {
    position: absolute;
    content: '';
    top: 100%;
    left: 0;
    background-color: transparent;
    border-style: solid;
    border-width: 0em 1.2em 1.2em 0em;
    border-color: transparent;
    border-right-color: inherit;
    width: 0em;
    height: 0em;
  }
`;
