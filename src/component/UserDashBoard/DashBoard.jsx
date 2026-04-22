import React, { use, useContext } from 'react'
import { FaShoppingBag, FaUndo, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { providerContext } from '../Other/AuthProvider';
import Logout from './Logout';
import { RiCloseLine } from 'react-icons/ri';

function DashBoard({user}) {
  console.log(user.profilePic);
  

  let {handleLogout,anotherhide, setAnotherhide,delay, setDelay}=useContext(providerContext)

  return (
    <div className='w-full relative h-[561px]'>
      {
        anotherhide && (
          <>
      <div onClick={()=>{setAnotherhide(false)}} className=' cursor-pointer absolute w-full h-full z-30 backdrop-blur-sm inset-0 bg-black/50'>
      </div>
      <div className=' absolute w-90 py-4 px-4 text-center rounded-xl  color3 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40'>
      <h1 className='pt-6 font-semibold text-3xl'>Are you sure you <br /> want to log out?</h1>
      <h1 className='text-lg pt-3 font-semibold'> Log out of ChatGPT as <br /> sufyanasghar231111@gmail.com?</h1>
      <div className='flex flex-col gap-3 py-3 px-4'>
        {
          delay ? (
            <button onClick={handleLogout} className='py-2 cursor-pointer rounded-full color1 text-white font-semibold'> <RiCloseLine /></button>
          ):(
            <button onClick={handleLogout} className='py-2 cursor-pointer rounded-full color1 text-white font-semibold'>Log out</button>
          )
        }
        
        <button onClick={()=>{setAnotherhide(false)}} className='py-2 rounded-full color1 cursor-pointer text-white font-semibold'>Cancel</button>
      </div>
      </div>
          </>
        )
      }
      
     <Logout user={user} />
    </div>
  )
}

export default DashBoard