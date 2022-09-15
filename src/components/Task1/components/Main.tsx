import React from 'react';
import {TTitleType} from "../../../types/TTitleType";

const Main = (props: TTitleType) => {
  return (
    <main>
      <h2>{props.title}</h2>
    </main>
  );
};

export default Main;
