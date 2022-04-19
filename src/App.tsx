import React from 'react';
import './styles/App.css';
import { Button } from './components';

function App() {
  return (
    <div className="App">
      <h1>WORKS</h1>
      <Button disabled={true}>Open</Button>
    </div>
  );
}

export default App;
