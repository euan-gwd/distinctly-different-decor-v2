import React from 'react';

const Icon = props => {
  return <i className={`${props.effect} ${props.color} ${props.size} ${props.name} icon`}>{props.children}</i>;
};

export default Icon;
