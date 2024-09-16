"use client"
import React from 'react'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import Link from 'next/link';


const sign = () => {
  return (

        
        <div className='p-3 max-w-lg mx-auto mt-36' >
       <h1 className='text-3xl text-center font-semibold my-7'>Sign in</h1>
       <form  className='flex flex-col gap-4'>

         <input type='email' placeholder='email' id='email' 
         className='bg-slate-100 rounded-lg p-3'/>
         <input type='password' placeholder='password' id='password' 
         className='bg-slate-100 rounded-lg p-3'/>
         <button className='bg-slate-500 rounded-lg text-white p-3 uppercase 
         hover:opacity-75'></button>
          </form>
   
    </div>

  )
}
  
export default sign
  
  