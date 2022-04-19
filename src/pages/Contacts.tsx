import React from 'react';
import { useAppSelector } from '../hooks/redux';

const Contacts = () => {

  const {contacts} = useAppSelector(state => state.contactsReducer);

  return (
    <div>
      <h1>Contacts</h1>
      {
        contacts.map(contact => (
          <div key={contact.id}>
            <h2>{contact.name}</h2>
            <h3>{contact.telNumber}</h3>
          </div>
        ))
      }
    </div>
  );
};

export default Contacts;