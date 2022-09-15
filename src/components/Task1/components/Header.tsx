import React from 'react';
import {TTitleType} from "../../../types/TTitleType";

const Header = (props: TTitleType) => {
  return (
    <header>
      <h2>{props.title}</h2>
    </header>
  );
};

export default Header;
