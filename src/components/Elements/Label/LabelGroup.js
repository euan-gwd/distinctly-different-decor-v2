import React from 'react';

const LabelGroup = props => {
  return <div className={`ui ${props.size} labels`}>{props.children}</div>;
};

export default LabelGroup;
