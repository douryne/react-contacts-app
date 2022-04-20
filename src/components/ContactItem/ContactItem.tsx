import React, {useState} from 'react';
import { Button, ContactForm } from '../';
import { useAppDispatch } from '../../hooks/redux';
import {contactsReducer} from '../../store/reducers/contactsReducer';
import classes from './ContactItem.module.css';

interface IContactItemProps {
  id: number,
  index: number
  name: string,
  telNumber: string
}

interface IEditContactProps {
  name: string,
  telNumber: string
}

export const ContactItem: React.FC<IContactItemProps> = ({id, index, name, telNumber}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const { removeContact, editContact } = contactsReducer.actions;
  const dispatch = useAppDispatch();

  const editForm = (form: IEditContactProps) => {
    dispatch(editContact({id: id, ...form}));
    setIsEditing(false);
  }

  return (
    <div className={classes.item}>
      {
        isEditing
        ?
        <>
          <ContactForm
            handleForm={(form) => editForm(form)}
            btnContent='Edit Contact'
          />
          <Button onClick={() => setIsEditing(false)}>Close Edit</Button>
        </>
        :
        <>
          <div className="text">
            <h2>{index}. {name}</h2>
            <h4>phone number: {telNumber}</h4>
          </div>
          <div className={classes.btns}>
            <Button onClick={() => dispatch(removeContact(id))}>Remove Item</Button>
            <Button onClick={() => setIsEditing(true)}>Edit Item</Button>
          </div>
        </>
      }
    </div>
  );
};
