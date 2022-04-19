import React, { ReactNode, FC } from 'react';
import classes from './Button.module.css'

interface IButtonProps {
  children: ReactNode,
  disabled?: boolean
}

export const Button: FC<IButtonProps> = ({children, ...props}) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};