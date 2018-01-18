import React from 'react';
import 'semantic-ui-input';

const Input = props => {
  return (
    <div className={`ui ${props.effect} input ${props.status}`}>
      <input {...props} />
      {props.children}
    </div>
  );
};

export default Input;
