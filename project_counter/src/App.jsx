import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, functionToChangeValue] = useState(0)

  const addValue = () => {
    if(counter < 20){
    functionToChangeValue(counter + 1)
    }else{
      alert("LIMIT EXCEED!!!")
    }
  }

  const minusValue = () => {
    if(counter > 0){
      functionToChangeValue(counter - 1)
    }else{
      alert("Value cannot be less than ZERO!!!")
    }
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
