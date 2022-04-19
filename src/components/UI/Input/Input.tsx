import React, {FC} from 'react';
import classes from './Input.module.css';

interface IInputProps {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  type: string,
  placeholder: string
}


export const Input: FC<IInputProps> = ({...props}) => {
  return (
    <input className={classes.MyInput} {...props}/>
  );
};
