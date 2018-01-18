import React from 'react';

const Select = props => {
  return <select className={`ui ${props.status} ${props.direction} dropdown`}>{props.children}</select>;
};

export default Select;
