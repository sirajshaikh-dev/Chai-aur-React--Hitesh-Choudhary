import { useState } from 'react'
import './App.css'
import Card from './components/card'

// let obj={
//   username: "siraj",
//   age:21,
// }
// let arr=[1,2,3,4]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl text-red-400 font-bold underline bg-green-300 rounded-2xl'>Tailwind and Props</h1>
      {/* <Card name= "siraj"  {...obj} arr={arr}/> */}
      <Card username="Sundar" btnText="Visit" imgUrl="https://img-cdn.inc.com/image/upload/w_600,ar_16:9,c_fill,g_auto,q_auto:best/images/panoramic/sundar-pichai-google-inc-1493186230_538103_o987ze.webp"/>
      <Card username="Natalie Paisley" />
     </>
  )
}

export default App
