import React from 'react';
import UniversalButton from "../Task4(Button)/UniversalButton";
import ShowMoney from "./ShowMoney";

type TCashType = 'USD' | 'RUB' | 'ALL'

const data = [
  {banknotes: 'USD', value: 100, number: ' a1234567890'},
  {banknotes: 'USD', value: 50, number: ' z1234567890'},
  {banknotes: 'RUB', value: 100, number: ' w1234567890'},
  {banknotes: 'USD', value: 100, number: ' e1234567890'},
  {banknotes: 'USD', value: 50, number: ' c1234567890'},
  {banknotes: 'RUB', value: 100, number: ' r1234567890'},
  {banknotes: 'USD', value: 50, number: ' x1234567890'},
  {banknotes: 'RUB', value: 50, number: ' v1234567890'},
]


const Task5 = () => {
  const [money, setMoney] = React.useState(data)
  
  const OnShowMoney = (cashType: TCashType) => {
    let showMoney = data.filter(obj => {
      if (cashType === 'ALL') {
        return true
      }
      return obj.banknotes === cashType
    })
    setMoney(showMoney)
  }
  
  return (
    <div>
      <ShowMoney money={money}/>
      <UniversalButton title={'Only RUB'} callback={() => OnShowMoney('RUB')}/>
      <UniversalButton title={'Only USD'} callback={() => OnShowMoney('USD')}/>
      <UniversalButton title={'RUB & USD'} callback={() => OnShowMoney('ALL')}/>
    </div>
  );
};

export default Task5;
