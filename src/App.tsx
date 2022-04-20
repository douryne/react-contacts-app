import React, {useEffect} from 'react';
import './styles/App.css';
import { Navbar, AppRouter } from './components';
import {BrowserRouter} from 'react-router-dom';
import { useAction } from './hooks/redux';

function App() {
  const {authReducer} = useAction();

  useEffect(() => {
    const authState = localStorage.getItem('isAuth');
    const username = localStorage.getItem('username');
    if (!authState && !username) return;
    authReducer.toggleAuthState({isAuth: JSON.parse(String(authState)), username: String(username)})
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
