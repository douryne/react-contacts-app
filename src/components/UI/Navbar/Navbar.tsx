import { Button } from '../Button/Button';
import { useAppSelector } from '../../../hooks/redux';
import { useAction } from '../../../hooks/redux';
import { useNavigate } from 'react-router-dom';

import classes from './Navbar.module.css';

export const Navbar = () => {
  const {authReducer} = useAction();
  const {isAuth} = useAppSelector(state => state.authReducer);


  const navigate = useNavigate();

  const logOut = (): void => {
    authReducer.toggleAuthState({isAuth: false, username: ''});
    localStorage.setItem('isAuth', 'false');
  }

  return (
    <div className={classes.navbar}>
      <Button disabled={!isAuth} onClick={logOut}>
        Log Out
      </Button>
      <Button disabled={isAuth} onClick={() => navigate('/login')}>
        Login
      </Button>
    </div>
  );
};
