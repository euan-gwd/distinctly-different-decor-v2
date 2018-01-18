import React from 'react';
import 'semantic-ui-button';

const ButtonsGroup = props => {
  return <div className={`ui ${props.size} ${props.effect} buttons`}>{props.children}</div>;
};

export default ButtonsGroup;
