import React, { useState } from 'react';
import {Button} from '../components/UI/Button/Button';
import {Input} from '../components/UI/Input/Input';
import { useBtnWithFilledForm } from '../hooks/useBtnWithFilledForm';

interface IForm {
  [username: string]: string,
  password: string
}

export const Login: React.FC = () => {
  const [form, setForm] = useState<IForm>({username: '', password: ''});

  const isFormFilled = useBtnWithFilledForm(form);

  const login = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(form);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <Input 
          value={form.username}
          onChange={event => setForm({...form, username: event.target.value})}
          type='text'
          placeholder='Username'
        />
        <Input
          value={form.password}
          onChange={event => setForm({...form, password: event.target.value})}
          type='password' 
          placeholder='Password'
        />
        <Button disabled={!isFormFilled}>Login</Button>
      </form>
    </div>
  );
};

export default Login;