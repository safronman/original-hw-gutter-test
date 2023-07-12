import { ChangeEvent } from 'react';

type InputProps = {
  currentText: string;
  setCurrentText: (currentText: string) => void;
};

export const Input = (props: InputProps) => {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setCurrentText(event.target.value);
  };
  return (
    <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler} />
  );
};
