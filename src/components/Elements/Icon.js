import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Icon = (props) => {
  return <i className={`fa fa-${props.name}`}>{props.children}</i>;
};

export default Icon;
