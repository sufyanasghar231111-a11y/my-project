import React, { useContext } from 'react'
import { providerContext } from '../Other/AuthProvider'
import { RiAddLine, RiCloseLine, RiLoader4Line, RiUserLine } from 'react-icons/ri'
import DashItem from '../UserDashBoard/insideDash/DashItem'
import OrderDash from '../UserDashBoard/insideDash/OrderDash'
import Setting from '../UserDashBoard/insideDash/Setting'
import Wishlist from '../UserDashBoard/insideDash/Wishlist'
import Profile from '../UserDashBoard/insideDash/Profile'
import LogoutDash from '../UserDashBoard/insideDash/LogoutDash'

function Logout({user}) {
    let {hideLog, setHideLog, setAnotherhide, setHideEdit,hideBar,setHideBar, setDashtab}=useContext(providerContext)
    
     const name = user.name ;  
  const firstName = name.trim().split(' ')[0];
  const initial = (name.trim().split(' ')[0][0] + name.trim().split(' ').pop()[0]).toUpperCase();
  return (
    <div className='w-full'>
         
      {/* <div className='flex items-center   justify-between px-15 max-sm:gap-5 max-sm:px-3 max-sm:py-2 py-5'>
        <h1 className='text-3xl max-sm:text-xl font-semibold'>User <br /> DashBoard</h1>
        <div className=' relative '>
          <div onClick={()=>{setHideLog(prev => !prev)}} className=' rounded-full  overflow-hidden cursor-pointer relative  w-15 max-sm:w-7 max-sm:h-7 h-15'>
            <div className='color1 z-10 w-full h-full flex items-center justify-center text-white text-xl font-semibold  absolute'>
              {initial}
            </div>
          </div>  
          
          <div className={` absolute w-70  ${hideLog? 'h-60 color2':'h-0  '} transition-all duration-300 overflow-hidden  ease-in-out rounded-lg  z-20  right-0`}>
            <div className='px-4 py-2 flex items-center justify-between border-purple-400 border-b'>
                <div className='flex items-center gap-2 text-sm'>
                <div  className=' rounded-full  overflow-hidden cursor-pointer w-13 max-sm:w-7 max-sm:h-7 h-13'>
            <img src={user.profilePic}  />
          </div> 
          <h1 className='w-6'>{firstName}</h1>
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
      </div> */}

      <div className='w-full flex relative'>
        
        <div className={` ${hideBar ? "max-sm:-translate-x-full" : "max-sm:translate-x-0"} transition-all ease-in-out duration-300  max-sm:w-[60%] lg:w-[23%] md:w-[35%] w-[30%] relative max-sm:absolute  max-sm:backdrop-blur-lg max-sm:bg-white/10  py-5 shadow-[-5px_0_10px_rgba(0,0,0,0.2)]`}>
            <div onClick={()=>{setHideBar(true)}} className='absolute cursor-pointer  top-0 right-0 text-xl  rounded-full md:hidden m-3'>
              x
            </div>
          <div className='flex flex-col items-center justify-center'>
          <div className='color1 z-10 max-sm:w-10 max-sm:h-10 w-12 h-12 md:w-13 md:h-13 lg:w-17 lg:h-17 rounded-full  flex items-center justify-center text-white text-[13px] lg:text-xl max-sm:text-[10px] md:text-[15px] font-semibold'>
              {initial}
            </div>
            <div className='font-semibold  text-lg lg:text-3xl max-sm:text-sm md:text-lg capitalize  pt-3'>
              {user.name}
            </div>
            <div className='py-5  text-sm max-sm:text-[9px] text-[#888888] '>
              {user.email}
            </div>
          </div>
          <div className='border-t border-gray-300'>
          </div>
          <div className=' flex flex-col max-sm:text-sm  pt-5'>
            <h1 onClick={()=>{setDashtab('dashboard')}} className='w-full py-3 px-7  border-r-3 rounded  '>DashBoard</h1>
            <h1 onClick={()=>{setDashtab('order')}} className='w-full py-3 px-7  border-r-3 rounded '>Orders</h1>
            <h1 onClick={()=>{setDashtab('wish')}} className='w-full py-3 px-7 border-r-3 rounded '>Wishlist</h1>
            <h1 onClick={()=>{setDashtab('profile')}} className='w-full py-3 px-7 border-r-3 rounded '>Profile</h1>
            <h1 onClick={()=>{setDashtab('setting')}} className='w-full py-3 px-7 border-r-3 rounded '>Settings</h1>
            <h1 onClick={()=>{setDashtab('logout')}} className='w-full py-3 px-7 border-r-3 rounded '>Logout</h1>
          </div>
        </div>
        <div className={`w-[80%]  max-sm:w-full  px-10 py-10 bg-gray-100 `} >
         <DashItem firstName={firstName} />
         <OrderDash />
         <Setting />
         <Wishlist />
         <Profile />
         <LogoutDash />
        </div>
      </div>
      
      </div>
  )
}

export default Logout