import React from 'react';
import 'semantic-ui-image';

const Image = props => {
  return <img className={`ui  ${props.size} ${props.effect} image`} src={props.src} alt={props.alt} />;
};

export default Image;
