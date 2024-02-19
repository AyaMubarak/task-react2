import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const changeCounter = () => {
    setCount(count + 1);
  }

  return (
    <>
      <button className='btn' onClick={changeCounter}>Aya Mubarak {count}</button>
    </>
  )
}

export default App;

