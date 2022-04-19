import React from 'react';
import classes from './ContactItem.module.css';

interface IContactItemProps {
  id: number,
  name: string,
  telNumber: string
}

export const ContactItem: React.FC<IContactItemProps> = ({id, name, telNumber}) => {
  return (
    <div className={classes.item}>
      <h2>{id}. {name}</h2>
      <h4>phone number: {telNumber}</h4>
    </div>
  );
};
