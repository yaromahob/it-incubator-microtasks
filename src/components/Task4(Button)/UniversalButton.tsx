import React from 'react';

type TUnivButtonType = {
  title: string
  callback: () => void
}

const UniversalButton = (props: TUnivButtonType) => {
  const onClickHandler = () => {
    props.callback()
  }
  
  return (
    <button onClick={onClickHandler}>
      {props.title}
    </button>
  );
};

export default UniversalButton;
