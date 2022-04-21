import { Button } from '../Button/Button';
import { useAppSelector } from '../../../hooks/redux';
import { useAction } from '../../../hooks/redux';

import classes from './Navbar.module.css';

export const Navbar = () => {
  const {authReducer} = useAction();
  const {isAuth} = useAppSelector(state => state.authReducer);

  const logOut = (): void => {
    authReducer.toggleAuthState({isAuth: false, username: ''});
    localStorage.setItem('authState', JSON.stringify(
      {isAuth: false, username: ''}
    ))
  }

  return (
    <div className={classes.navbar}>
      <Button disabled={!isAuth} onClick={logOut}>
        Log Out
      </Button>
    </div>
  );
};
