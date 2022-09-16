import React from 'react';

const Task4 = () => {
  const foo1 = () => {
    alert('Ничего не передавать')
  }
  
  const foo2 = (num: number) => {
    alert(num)
  }
  
  return (
    <div>
      <button onClick={foo1}>One</button>
      <button onClick={() => foo2(100200)}>Two</button>
    </div>
  );
};

export default Task4;
