import React, { useContext } from 'react'
import { dashProvider } from '../../../ContextApi/DashContext'


const DashItem = () => {
    let {dashtab, setHideBar,dashArr,firstName}=useContext(dashProvider)
  return (
    <div>
      { dashtab=== 'dashboard' &&(
          <div>
          <div onClick={()=>{setHideBar(false)}} className='text-sm md:hidden'>p</div>
          <h1 className='text-4xl font-bold'>  DashBoard</h1>

          <h1 className='text-[15px] font-medium pt-0.5 text-[#888888]'>Welcome back, {firstName} 👋</h1>
             <div className='flex max-sm:items-center lg:justify-start lg:items-start md:justify-center md:items-center max-sm:justify-center  flex-wrap gap-6 pt-8'>
          {
            dashArr.map((elem)=>{
           return <div key={elem.id} className='shadow-sm w-74 bg-white  border border-indigo-100 group hover:border-indigo-200 hover:-translate-y-2 hover:shadow-lg transition-all ease-in-out duration-400  rounded-lg px-7 py-5'>
              <div className={` flex items-center justify-center group-hover:scale-105 transition-transform  duration-400 ${elem.color}  w-10 h-10 rounded-xl`}>
                {elem.icon}
              </div>
              <div className='font-bold text-3xl pt-3 pb-3'>
                {elem.prefix}{elem.value}
              </div>
              <div className='text-sm text-[#888888]'>
                {elem.title}
              </div>
              <div className='pt-3 text-sm text-green-500'>
               {elem.change} {elem.description}
              </div>
            </div>
            })
          }

          
          </div>
          </div>
          )}
    </div>
  )
}

export default DashItem
