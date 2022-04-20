import React, {  useState } from 'react';
import { Button, Input } from '../components';
import { useBtnWithFilledForm } from '../hooks/useBtnWithFilledForm';
import AuthServer from '../API/AuthServer';
import { useAppDispatch } from '../hooks/redux';
import {authReducer} from '../store/reducers/authReducer';
import {useFetching} from '../hooks/useFetching';

interface IForm {
  [some: string]: string,
  username: string,
  password: string
}

const Login: React.FC = () => {
  const {toggleAuthState} = authReducer.actions;
  const dispatch = useAppDispatch();
  const fetching = useFetching(async () => {
    const users = await AuthServer.getUser(form);

    if (!users.length) {
      alert('wrong username');
      return;
    }
    const user = users[0];
    if (user.password !== form.password) {
      alert('wrong password');
      return;
    }

    dispatch(toggleAuthState(true));
    localStorage.setItem('isAuth', 'true');
  });

  const [form, setForm] = useState<IForm>({username: '', password: ''});

  const isFormFilled = useBtnWithFilledForm(form);

  const login = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    fetching(form);
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