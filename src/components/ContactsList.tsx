import React from 'react';
import { useAppSelector } from '../hooks/redux';


export const ContactsList = () => {
  const {contacts} = useAppSelector(state => state.contactsReducer);


  return (
    <div>
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
