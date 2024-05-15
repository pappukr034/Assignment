import React from 'react'

function SignUp() {
  return (
    <div className=' w-full flex justify-center items-center flex-col gap-2'>
    <input 
    type="text"
    placeholder='Full Name'
    className=' w-[90%] bg-yellow-50 px-2 py-2 font-medium'
     />
    <input 
    type="text"
    placeholder='Mobile Number or Email' 
    className=' w-[90%] bg-yellow-50 px-2 py-2 font-medium'
    />
    <input 
    type="text"
    placeholder='Phone Number,username,or email'
    className=' w-[90%] bg-yellow-50 px-2 py-2 font-medium'
     />
    <input 
    type="password"
    placeholder='password' 
    className=' w-[90%] bg-yellow-50 px-2 py-2 font-medium'
    />
  </div>
  )
}

export default SignUp
