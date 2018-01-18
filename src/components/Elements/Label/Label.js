import React from 'react';

const Label = props => {
  return <div className={`ui ${props.type} ${props.color} ${props.effect} ${props.size} label`}>{props.children}</div>;
};

export default Label;
