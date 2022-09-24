import React, {ChangeEvent} from 'react';

type TUniversalInput = {
  setInputValue: (textMessage: string) => void
  inputValue: string
}

const UniversalInput = (props: TUniversalInput) => {
  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue(e.target.value)
  }
  
  return (
    
    <input type="text" value={props.inputValue} onChange={changeInputValue}/>
  
  )
  
};

export default UniversalInput;
