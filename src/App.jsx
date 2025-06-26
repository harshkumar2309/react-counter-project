import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
    console.log("clicked", counter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
    console.log("clicked", counter - 1);
  };

  const resetValue = () => {
    setCounter(0); 
    console.log("clicked",0);  
  }

  return (
    <>
      <h1>Update Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add +1 </button>

      <br />

      <button onClick={removeValue}>Remove -1 </button>

      <br />

      <button onClick={resetValue}>Reset to 0 </button>
    </>
  );
}

export default App
