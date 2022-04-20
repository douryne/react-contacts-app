import React, { useEffect } from 'react';
import { ContactForm, ContactsList } from '../components';
import { useAction, useAppDispatch, useAppSelector } from './../hooks/redux';
import {fetchContactsByUser} from '../store/reducers/contactsReducer';

interface IAddContactProps {
  name: string,
  telNumber: string
}

const Contacts: React.FC = () => {
  const { contactsReducer } = useAction();
  const {username} = useAppSelector(state => state.authReducer);
  const addNewContact = (form: IAddContactProps) => {
    contactsReducer.addContact({id: Date.now(), ...form});
  }

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContactsByUser({username}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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