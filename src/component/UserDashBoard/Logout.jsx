import React, { useContext } from 'react'
import { providerContext } from '../Other/AuthProvider'
import { RiAddLine, RiCloseLine, RiLoader4Line, RiUserLine } from 'react-icons/ri'

function Logout({user}) {
    let {hideLog, setHideLog, setAnotherhide,hideEdit, setHideEdit}=useContext(providerContext)
  return (
    <div className='w-full '>
         
      <div className='flex items-center   justify-between px-15 max-sm:gap-5 max-sm:px-3 max-sm:py-2 py-5'>
        <h1 className='text-3xl max-sm:text-xl font-semibold'>User <br /> DashBoard</h1>
        <div className=' relative '>
          <div onClick={()=>{setHideLog(prev => !prev)}} className=' rounded-full  overflow-hidden cursor-pointer w-15 max-sm:w-7 max-sm:h-7 h-15'>
            <img src={user.profilePic}  />
          </div>  
          
          <div className={` absolute w-70  ${hideLog? 'h-60 color2':'h-0  '} transition-all duration-300 overflow-hidden  ease-in-out rounded-lg  z-20  right-0`}>
            <div className='px-4 py-2 flex items-center justify-between border-purple-400 border-b'>
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
            <div onClick={()=>{setHideEdit(true)}} className='px-6 hover:bg-purple-400 transition-all ease-in-out duration-300 mx-1 hover:text-white  py-3  cursor-pointer mt-1 rounded'>
              <h1 className='flex items-center gap-2'><span className='border rounded-full px-0.5 py-0.5'><RiUserLine className='' /></span> Profile </h1>
            </div>
            <div className='px-6 py-3 transition-all ease-in-out duration-300 hover:bg-purple-400 mx-1 hover:text-white cursor-pointer mt-1 rounded'>
              <h1 className='flex items-center gap-2'><span className='border rounded-full px-0.5 py-0.5'><RiAddLine /></span>Use Another Account </h1>
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