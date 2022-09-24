import React from 'react';
import UniversalInput from "./components/UniversalInput";
import UniversalButton from "./components/UniversalButton";

type TMessage = {
  message: string
}


const messageData = [
  {message: 'Message 1'},
  {message: 'Message 2'},
  {message: 'Message 3'},
]

const Task6 = () => {
  const [message, setMessage] = React.useState<TMessage[]>(messageData)
  const [inputValue, setInputValue] = React.useState<string>('')
  
  const addMessage = (textMessage: string) => {
    const newMessage = {message: textMessage}
    setMessage([newMessage, ...message])
    
  }
  
  const callBackButtonHandler = () => {
    addMessage(inputValue)
    setInputValue('')
  }
  
  
  return (
    <div>
      <UniversalInput
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <UniversalButton title={'+'} callback={callBackButtonHandler}/>
      <div>
        <h2>Messages:</h2>
        <div>
          {message.map((m: TMessage, i: number) => <h5 key={i}>{m.message}</h5>)}
        </div>
      </div>
    </div>
  );
};

export default Task6;
