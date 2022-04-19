import React, {useState} from 'react';
import { Input, Button } from './';
import { useBtnWithFilledForm } from '../hooks/useBtnWithFilledForm';
import { useAppDispatch } from './../hooks/redux';
import {contactsReducer} from './../store/reducers/contactsReducer';

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({name: '', telNumber: ''})
  const { addContact } = contactsReducer.actions;
  const dispatch = useAppDispatch();
  const isFormFilled = useBtnWithFilledForm(form);

  const addNewContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addContact({id: Date.now(), ...form}));
    setForm({name: '', telNumber: ''})
  }

  return (
    <div>
      <form onSubmit={addNewContact}>
        <Input 
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          type='text'
          placeholder='Contact Name'
        />
        <Input 
          value={form.telNumber}
          onChange={(e) => setForm({...form, telNumber: e.target.value})}
          type='number'
          placeholder='Contact Phone Number'
        />
        <Button disabled={!isFormFilled}>Add new Contact</Button>
      </form>
    </div>
  );
};
