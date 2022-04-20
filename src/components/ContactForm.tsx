import React, {useState} from 'react';
import { Input, Button } from './';
import { useBtnWithFilledForm } from '../hooks/useBtnWithFilledForm';

interface IContactFormProps {
  handleForm: (form: IContactFormState) => void,
  btnContent: string
}

interface IContactFormState {
  name: string,
  telNumber: string
}

export const ContactForm: React.FC<IContactFormProps> = ({handleForm, btnContent}) => {
  const [form, setForm] = useState({name: '', telNumber: ''})
  const isFormFilled = useBtnWithFilledForm(form);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleForm(form);
    setForm({name: '', telNumber: ''});
  }

  return (
    <div>
      <form onSubmit={submitForm}>
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
        <Button disabled={!isFormFilled}>{btnContent}</Button>
      </form>
    </div>
  );
};
