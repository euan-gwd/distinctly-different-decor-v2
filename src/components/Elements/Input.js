import React from 'react';

const Input = props => {
  return (
    <div className={`ui ${props.effect} input ${props.status}`}>
      <input {...props} />
      {props.children}
    </div>
  );
};

export default Input;
