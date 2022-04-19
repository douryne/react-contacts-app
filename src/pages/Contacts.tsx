import React from 'react';
import { ContactForm, ContactsList } from '../components';

const Contacts: React.FC = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <ContactsList />
    </div>
  );
};

export default Contacts;