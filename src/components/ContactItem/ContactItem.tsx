import React from 'react';
import { Button } from '../';
import { useAppDispatch } from '../../hooks/redux';
import {contactsReducer} from '../../store/reducers/contactsReducer';
import classes from './ContactItem.module.css';

interface IContactItemProps {
  id: number,
  name: string,
  telNumber: string
}

export const ContactItem: React.FC<IContactItemProps> = ({id, name, telNumber}) => {
  const { removeContact } = contactsReducer.actions;
  const dispatch = useAppDispatch();

  return (
    <div className={classes.item}>
      <h2>{id}. {name}</h2>
      <h4>phone number: {telNumber}</h4>
      <Button onClick={() => dispatch(removeContact(id))}>Remove Item</Button>
    </div>
  );
};
