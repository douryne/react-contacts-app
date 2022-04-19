import React, { useState } from 'react';
import {Button} from '../components/UI/Button/Button';
import {Input} from '../components/UI/Input/Input';

interface IForm {
  username: string,
  password: string
}

export const Login: React.FC = () => {
  const [form, setForm] = useState<IForm>({username: '', password: ''});

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
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Login;