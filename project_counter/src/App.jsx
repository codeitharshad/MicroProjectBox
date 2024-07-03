import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, functionToChangeValue] = useState(0)

  const addValue = () => {
    functionToChangeValue(counter+1)
  }

  const minusValue = () => {
    functionToChangeValue(counter-1)
  }


  return (
    <>
     <h1>The Counter</h1>
     <h2>Counter Value: {counter}</h2>

     <button 
     onClick={addValue}
     >Increase</button>

     <button
     onClick={minusValue}
     >Decrease</button>
    </>
  )
}

export default App
