import React from 'react';
import {TTopCarsType} from "../../../types/TTopCarType";
import './style.css'

const HomeMicroTask = (props: TTopCarsType) => {
  
  return (
    
    <table>
      <thead>
      <tr>
        <td>&nbsp;</td>
        <td>brand</td>
        <td>model</td>
      </tr>
      </thead>
      {props.topCars.map((obj, index) => {
        return (
          <tbody key={index}>
          <tr>
            <td className='firstColumn'>{index + 1}</td>
            <td>{obj.manufactured}</td>
            <td>{obj.model}</td>
          </tr>
          </tbody>
        )
      })}
    
    </table>
  
  
  );
};

export default HomeMicroTask;
