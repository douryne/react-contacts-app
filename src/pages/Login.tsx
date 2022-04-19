import React, {  useState } from 'react';
import {Button} from '../components/UI/Button/Button';
import {Input} from '../components/UI/Input/Input';
import { useAppDispatch } from '../hooks/redux';
import { useBtnWithFilledForm } from '../hooks/useBtnWithFilledForm';
import {authReducer} from '../store/reducers/authReducer';
interface IForm {
  [username: string]: string,
  password: string
}

const Login: React.FC = () => {
  const {toggleAuthState} = authReducer.actions;
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<IForm>({username: '', password: ''});

  const isFormFilled = useBtnWithFilledForm(form);

  const login = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(toggleAuthState(true));
    localStorage.setItem('isAuth', 'true');
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