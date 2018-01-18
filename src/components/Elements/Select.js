import React from 'react';

const Select = props => {
  return (
    <div class="ui compact menu">
      <div class="ui simple dropdown item">
        Dropdown
        <i class="dropdown icon" />
        <div class="menu">
          <div class="item">Choice 1</div>
          <div class="item">Choice 2</div>
          <div class="item">Choice 3</div>
        </div>
      </div>
    </div>
  );
};

export default Select;
