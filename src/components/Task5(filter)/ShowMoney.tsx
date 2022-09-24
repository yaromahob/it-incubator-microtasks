import React from 'react';

type TCashType = {
  banknotes: string
  value: number
  number: string
}

type TMoneyType = {
  money: TCashType[]
}

const ShowMoney = (props: TMoneyType) => {
  
  return (
    <div>
      
      <ul>
        {props.money.map((obj: TCashType, index: number) => {
          return (<li key={index}><span> {obj.banknotes}</span>
            <span> {obj.value}</span>
            <span> {obj.number}</span>
          </li>)
        })}
      </ul>
    </div>
  );
};

export default ShowMoney;
