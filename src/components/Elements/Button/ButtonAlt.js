import React from 'react';
import 'semantic-ui-button/button.min.css';

const Button = props => {
  return <button className={`${props.effect} ui ${props.type} button`}>{props.children}</button>;
};

export default Button;
