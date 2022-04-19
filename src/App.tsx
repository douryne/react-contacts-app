import React from 'react';
import './styles/App.css';
import { Login } from './pages/Login';
import { Navbar } from './components';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
