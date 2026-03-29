import React, { useContext, useEffect, useState } from 'react'
import { providerContext } from '../../Other/AuthProvider'

const Service = () => {

    let {serviceData}=useContext(providerContext)
    let [hide,setHide]=useState({})
    

    function handleClick(id){
            setHide(prev =>({
                ...prev,
                [id]:!prev[id]
            }))       
    }
  return (
    <div className='pt-15 px-6 pb-10 max-sm:pt-10'>
        <div className='border border-[#a5a5a5]'>
        </div>
        <div className='pt-6 flex  max-sm:flex-col justify-between'>
            <div className='uppercase text-3xl max-sm:text-2xl font-medium leading-7 w-[30%] max-sm:w-full pt-5 max-sm:pt-3'>
                <h1>We Provide</h1>
                <h1>Various Services</h1>
            </div>
            <div className='w-[50%] max-sm:w-full flex  flex-col justify-start'>
                {serviceData.map((elem)=>{
                    return <div key={elem.id}  className='  '>
                       
                <div onClick={()=>{handleClick(elem.id) }} className='flex group cursor-pointer  relative  gap-4 font-medium text-lg pt-5 max-sm:text-[15px] max-sm:pt-7'>
                <h1 className=''>0{elem.id}</h1>
                <h1 className=''>{elem.name}</h1>
                </div>
                <div className={`pl-8 text-[15px] ${hide[elem.id] ? 'max-h-50':'max-h-0'} overflow-hidden  transition-all duration-500 max-sm:text-[12px]   pt-4 `}>
                    <h1 className={` pb-2`}> {elem.description}</h1>            
                </div>
                <div className='border border-[#a5a5a5]'>
                </div>
                </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Service
