import React, { useState } from 'react';
import './styles/App.css';
import { Button, Input } from './components';

interface IForm {
  username: string
}

function App() {

  const [form, setForm] = useState<IForm>({username: ''})

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({username: event.target.value});
  }

  return (
    <div className="App">
      <h1>WORKS</h1>
      <Button disabled={true}>Open</Button>
      <Input
          value={form.username}
          onChange={(e) => handleInput(e)}
          type='text'
          placeholder='Username'
        />
    </div>
  );
}

export default App;
