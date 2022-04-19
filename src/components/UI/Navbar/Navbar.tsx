import React from 'react';
import { Button } from '../Button/Button';
import { useAppSelector } from '../../../hooks/redux';
import { useAppDispatch } from '../../../hooks/redux';
import {authReducer} from '../../../store/reducers/authReducer';

import classes from './Navbar.module.css';

export const Navbar = () => {

  const {isAuth} = useAppSelector(state => state.authReducer);
  const {toggleAuthState} = authReducer.actions;
  const dispatch = useAppDispatch();

  const logOut = (): void => {
    dispatch(toggleAuthState(false));
    localStorage.setItem('isAuth', 'false');
  }

  return (
    <div className={classes.navbar}>
      <Button disabled={!isAuth} onClick={logOut}>
        Log Out
      </Button>
    </div>
  );
};
