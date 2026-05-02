import React, {  useContext } from 'react'
import { FaShoppingBag, FaUndo, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { providerContext } from '../Other/AuthProvider';
import Logout from './Logout';
import { RiCloseLine, RiLoader4Line } from 'react-icons/ri';

function DashBoard({user}) {  

  let {handleLogout,anotherhide, setAnotherhide,delay,hideEdit, setHideEdit,handleEdit,editForm,handleChangeEdit}=useContext(providerContext)
  

  return (
    <div className='w-full relative '>
      {
        anotherhide && (
          <>
      <div onClick={()=>{setAnotherhide(false)}} className=' cursor-pointer absolute w-full h-full z-30 backdrop-blur-sm inset-0 bg-black/50'>
      </div>
      <div className=' absolute w-90 py-4 px-4 text-center rounded-xl  color3 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-40'>
      <h1 className='pt-6 font-semibold text-3xl'>Are you sure you <br /> want to log out?</h1>
      <h1 className='text-lg pt-3 font-semibold'> Log out of ChatGPT as <br /> {user.email}?</h1>
      <div className='flex flex-col gap-3 py-3 px-4'>
        {
          delay ? (
            <button onClick={handleLogout} className='py-2 cursor-not-allowed opacity-70 rounded-full color1 w-full flex items-center  justify-center text-white font-semibold'> <RiLoader4Line className='w-5 h-5 rotate' /></button>
          ):(
            <button  onClick={handleLogout} className='py-2 cursor-pointer rounded-full color1 text-white font-semibold'>Log out</button>
          )
        }
        
        <button disabled={delay} onClick={()=>{setAnotherhide(false)}} className={`py-2 rounded-full cursor-pointer color1  text-white font-semibold`}>Cancel</button>
      </div>
      </div>
          </>
        )
      }

      {
        hideEdit && 
        (

        <>
        <div onClick={()=>{setHideEdit(false)}} className=' cursor-pointer absolute w-full h-full z-30 backdrop-blur-sm inset-0 bg-black/50'>
      </div>
          <div className='absolute w-100 py-2 px-4   rounded-xl  color3 top-65 left-1/2 h-100 -translate-y-1/2 -translate-x-1/2 z-40'>
            <div>
              <h1 className='font-semibold text-xl'>Edit Profile</h1>
          </div>
          <div className='flex items-center justify-center pt-3'>
          <div className='w-30 h-30 overflow-hidden   rounded-full'>
            <img src={user.profilePic} alt="" />
          </div>
          </div>
          <form onSubmit={handleEdit}>

          <div className='border border-purple-400 flex flex-col mt-5 py-1.5 rounded-lg font-semibold  text-sm px-4 gap-1'>
            Display Name
            <input type="text" name='name' value={editForm.name} onChange={handleChangeEdit} placeholder='' className='outline-0 ' />
          </div>
          <div className='border border-purple-400 flex flex-col mt-2 py-1.5 rounded-lg font-semibold  text-sm px-4 gap-1'>
            Display Name
            <input type="text" name='email' value={editForm.email} onChange={handleChangeEdit} placeholder='' className='outline-0 ' />
          </div>
          <div className='text-center text-[10px] pt-1'>
            Your profile helps people recognize you. Your name and username are also <br /> used in the Sora app.
          </div>
          <div className='flex items-center justify-end  pt-3 gap-2'>
            <button onClick={()=>{setHideEdit(false)}} className='px-2 py-1 rounded-full bg-purple-300 text-sm font-medium cursor-pointer'>Cancel</button>
            <button type='submit' className='px-2 py-1 rounded-full bg-purple-300 text-sm font-medium cursor-pointer'>Save</button>
          </div>
          </form>
          </div>
        </>
        )
      }
      
     <Logout user={user} />
    </div>
  )
}

export default DashBoard