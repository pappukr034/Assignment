import React from 'react'

function SignIn() {
  return (
    <div className=' w-full flex justify-center items-center flex-col gap-2'>
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

export default SignIn
