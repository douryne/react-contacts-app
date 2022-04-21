import React, {useEffect} from 'react';
import './styles/App.css';
import { Navbar, AppRouter } from './components';
import {BrowserRouter} from 'react-router-dom';
import { useAction } from './hooks/redux';

function App() {
  const {authReducer} = useAction();

  useEffect(() => {
    const authState = localStorage.getItem('authState');
    if (!authState) return;
    const {isAuth, username} = JSON.parse(String(authState));
    authReducer.toggleAuthState(
      {
        isAuth: isAuth,
        username: username
      })
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
