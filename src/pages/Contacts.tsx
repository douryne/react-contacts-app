import React from 'react';
import { ContactForm, ContactsList } from '../components';
import { useAppDispatch } from './../hooks/redux';
import {contactsReducer} from './../store/reducers/contactsReducer';

interface IAddContactProps {
  name: string,
  telNumber: string
}

const Contacts: React.FC = () => {
  const { addContact } = contactsReducer.actions;
  const dispatch = useAppDispatch();
  const addNewContact = (form: IAddContactProps) => {
    dispatch(addContact({id: Date.now(), ...form}));
  }
  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm
        handleForm={(form) => addNewContact(form)}
        btnContent='Add New Contact'
      />
      <ContactsList />
    </div>
  );
};

export default Contacts;