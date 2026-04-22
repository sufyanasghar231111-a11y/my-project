import React, { useContext } from 'react'
import { providerContext } from '../Other/AuthProvider'
import { RiCloseLine, RiLoader4Line } from 'react-icons/ri'

function Logout({user}) {
    let {hideLog, setHideLog, setAnotherhide}=useContext(providerContext)
  return (
    <div className='w-full '>
         
      <div className='flex items-center   justify-between px-15 max-sm:gap-5 max-sm:px-3 max-sm:py-2 py-5'>
        <h1 className='text-3xl max-sm:text-xl font-semibold'>User <br /> DashBoard</h1>
        <div className=' relative '>
          <div onClick={()=>{setHideLog(prev => !prev)}} className=' rounded-full  overflow-hidden cursor-pointer w-15 max-sm:w-7 max-sm:h-7 h-15'>
            <img src={user.profilePic}  />
          </div>  
          <div className={` absolute w-70  ${hideLog? 'h-60  color2':'h-0  '} transition-all duration-300 overflow-hidden  ease-in-out rounded-lg  z-20  right-0`}>
            <div className='px-4 py-2 flex items-center justify-between '>
                <div className='flex items-center gap-2 text-sm'>
                <div  className=' rounded-full  overflow-hidden cursor-pointer w-13 max-sm:w-7 max-sm:h-7 h-13'>
            <img src={user.profilePic}  />
          </div> 
          <h1 className='w-6'>{user.name}</h1>
                </div>
          <div onClick={()=>{setHideLog(false)}} className='w-7 h-7 bg-black/15 rounded-full flex items-center cursor-pointer justify-center'>
            <RiCloseLine />
          </div>
            </div>
            <div className='pt-5 px-4'>
                <button onClick={()=>{setAnotherhide(true)
                    setHideLog(false)
                }} className='w-full color1 py-2 rounded-full text-white font-semibold cursor-pointer'>Log out</button>
            </div>
          </div>
        </div>
      </div>
      
      </div>
  )
}

export default Logout