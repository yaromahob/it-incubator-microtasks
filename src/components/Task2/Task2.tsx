import React from 'react';
import {students} from "./components/data";
import NewComponents from "./components/NewComponents";

const Task2 = () => {
  return (
    <NewComponents students={students}/>
  );
};

export default Task2;
