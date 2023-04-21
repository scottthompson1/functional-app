import './App.css';
import { Original } from './pages/home/components/Original';
import {useEffect, useState} from 'react';
function App() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter((count) => counter + 1);
    }, 1000);
  });
  return (
    <>
    <Original name={counter}></Original>
    <h1>{counter}</h1>
    </>
  );
}

export default App;
