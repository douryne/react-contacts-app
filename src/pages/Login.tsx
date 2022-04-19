import React, { useEffect, useState } from 'react';
import {Button} from '../components/UI/Button/Button';
import {Input} from '../components/UI/Input/Input';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { useBtnWithFilledForm } from '../hooks/useBtnWithFilledForm';
import {authReducer} from '../store/reducers/authReducer';
interface IForm {
  [username: string]: string,
  password: string
}

export const Login: React.FC = () => {
  const {isAuth} = useAppSelector(state => state.authReducer);
  const {toggleAuthState} = authReducer.actions;
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<IForm>({username: '', password: ''});

  const isFormFilled = useBtnWithFilledForm(form);

  useEffect(() => {
    const authState = localStorage.getItem('isAuth');
    if (!authState) return;
    dispatch(toggleAuthState(Boolean(authState)))
  })

  const login = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(toggleAuthState(true));
    localStorage.setItem('isAuth', 'isAuth');
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

      <h2>isAuth: {String(isAuth)}</h2>
    </div>
  );
};

export default Login;