import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './index.css';


function App() {

  let [count, setCount] = useState(0);

  function increment(){
    setCount(count + 1)
  }

  function decrement(){
    setCount(count - 1)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <button onClick={increment} className="border-2 border-blue-600 p-2 rounded-lg mb-5">Increment</button>
      <h1>{count}</h1>
      <button onClick={decrement} className="border-2 border-blue-600 p-2 rounded-lg mt-5">Decrement</button>
    </div>
  );
}

export default App;
