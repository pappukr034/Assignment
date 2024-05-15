import { useState } from 'react'

import './App.css'
import Card from './components/Card'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='w-full h-screen bg-white flex justify-center items-center'> 
       <Card />
     </div>
    </>
  )
}

export default App
