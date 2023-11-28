import React, { useState } from 'react';
import './App.css';

function App(Props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < Props.limit) {
      setCount(count + 1)
    };
  };


  const reset = () => {
    setCount(0);
  };



  return (
    <div className='main'>
      <h1>{Props.text}</h1>
      <h2>Count: {count}</h2>
      <div className="card">
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
