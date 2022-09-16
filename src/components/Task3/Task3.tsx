import React from 'react';
import {topCars} from "./components/data";
import HomeMicroTask from "./components/HomeMicroTask";

const Task3 = () => {
  return (
    <HomeMicroTask topCars={topCars}/>
  );
};

export default Task3;
