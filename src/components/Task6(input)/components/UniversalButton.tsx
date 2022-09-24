import React from 'react';

type TButtonProps = {
  title: string
  callback: () => void
}

const UniversalButton = (props: TButtonProps) => {
  return (
    <button onClick={() => props.callback()}>{props.title}</button>
  );
};

export default UniversalButton;
