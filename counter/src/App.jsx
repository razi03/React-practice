import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter]= useState(10)

  // let counter = 15

  const addValue = () => {
    if (counter<20) {
      counter = counter + 1
      setCounter(counter)
    }
    else{
      alert("Counter reached maximum value")
    }
    }

    const removeValue = () => {
      if (counter>0) {
        counter = counter - 1
        setCounter(counter)
      }
      else{
        alert("Counter reached minimum value")
      }
    }

  return (
    <>
    <h1>Counter App</h1>
    <h2>counter value: {counter}</h2>
    <button 
    onClick={addValue}>Increment</button>
    <br />
    <button
    onClick={removeValue}>Decrement</button>
    </>
  )
}

export default App
