import React, { ReactNode } from 'react';
import classes from './Button.module.css'

interface IButtonProps {
  children: ReactNode,
  disabled?: boolean
}

export const Button = ({children, ...props}: IButtonProps) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};