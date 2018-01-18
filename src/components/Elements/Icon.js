import React from 'react';
import 'semantic-ui-icon/icon.min.css';

const Icon = props => {
  return <i className={`${props.effect} ${props.color} ${props.size} ${props.name} icon`}>{props.children}</i>;
};

export default Icon;
