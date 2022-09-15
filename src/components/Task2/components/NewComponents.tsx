import React from 'react';
import {TComponentsStudentType} from "../../../types/TStudentsType";


const NewComponents = (props: TComponentsStudentType) => {
  return (
    <ul>
      {props.students.map(obj => {
        return (
          <li key={obj.id}>
            <span>Name: {obj.name}</span>
            <br/>
            <span>Age: {obj.age}</span>
          </li>
        )
      })}
    </ul>
  );
};

export default NewComponents;
