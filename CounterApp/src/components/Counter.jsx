import React from 'react'
import { useState } from 'react'
function Counter() {
    let [count,setCount]=useState(0);
  return (
        <div className=' flex justify-center items-center flex-col '>
            <h1>{count}</h1>
            <div className='flex gap-2 mt-3'> 
                <button
                 onClick={()=>{
                    setCount(count+1)
                 }}
                 className=' p-2 bg-white text-black rounded-md' >Increment</button>

                <button
                onClick={()=>{
                    setCount(count-1)
                 }}
                 className=' p-2 bg-white text-black rounded-md' >Decrement</button>
            </div>
        </div>
  )
}

export default Counter
