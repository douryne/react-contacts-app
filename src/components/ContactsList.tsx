import React from 'react';
import { useAppSelector } from '../hooks/redux';
import { ContactItem } from './';


export const ContactsList: React.FC = () => {
  const {contacts} = useAppSelector(state => state.contactsReducer);


  return (
    <div>
        {
        contacts.map(contact => (
          <ContactItem key={contact.id} {...contact} />
        ))
      }
    </div>
  );
};
