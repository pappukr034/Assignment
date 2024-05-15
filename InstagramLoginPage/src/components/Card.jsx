import React, { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'

function Card() {
    const [signIn,setSignIn]=useState(true);
  return (
    <div className=' gap-10 rounded-lg flex justify-center  items-center flex-col w-[400px] h-[450px] border-2 border-orange-200'>
        <h1 className=' text-5xl font-semibold'>Instagram</h1>
        {
            signIn && (
                <SignIn />
            )
        }
        {
            !signIn && (
                <SignUp />
            )
        }
        <button
          onClick={(e)=>{
            e.defaultPrevented();
          }}
          className=' w-[90%] bg-blue-400 px-2 py-1 font-bold rounded-md text-white text-[20px]'> {signIn?'Sign in':'Sign up'} </button>
        <p className='text-[18px] font-light '> {signIn?"Don't":""} {!signIn?"Have":"have"} an account? <span onClick={()=> setSignIn(!signIn)} className=' text-blue-400 font-semibold cursor-pointer'> {signIn?'Sign up':'Sign in'} </span> </p>
    </div>
  )
}

export default Card
