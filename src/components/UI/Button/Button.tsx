import React, { ReactNode, FC } from 'react';
import classes from './Button.module.css'

interface IButtonProps {
  children: ReactNode,
  disabled?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const Button: FC<IButtonProps> = ({children, ...props}) => {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};