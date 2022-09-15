import React from 'react';
import {TTitleType} from "../../../types/TTitleType";

const Footer = (props: TTitleType) => {
  return (
    <footer>
      <h2>{props.title}</h2>
    </footer>
  );
};

export default Footer;
