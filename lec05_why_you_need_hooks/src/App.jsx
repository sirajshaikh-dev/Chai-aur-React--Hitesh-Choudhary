import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

// let count=0
 function addValue(){
  if(count<20){
  setCount(count+1); 
  }
 }
 
const removeValue= ()=>{
  if (count>0){
    setCount(count-1)
  }
}
  return (
    <>
      <p>Count: {count}</p>
       <button onClick={addValue}>Add value {count} </button>  <br /> <br />
       <button onClick={removeValue}>Remove value {count} </button>
    </>
  )
}

export default App
