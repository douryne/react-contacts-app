import React, {useEffect} from 'react';
import './styles/App.css';
import { Navbar, AppRouter } from './components';
import {BrowserRouter} from 'react-router-dom';
import { useAppDispatch } from './hooks/redux';
import {authReducer} from './store/reducers/authReducer';

function App() {
  const {toggleAuthState} = authReducer.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const authState = localStorage.getItem('isAuth');
    if (!authState) return;
    dispatch(toggleAuthState(JSON.parse(authState)))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
