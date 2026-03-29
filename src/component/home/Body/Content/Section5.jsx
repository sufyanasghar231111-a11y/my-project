import React, { useContext, useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine, RiCustomerServiceLine, RiStarSFill, RiVerifiedBadgeFill, RiVerifiedBadgeLine, RiVipCrown2Line, RiVipCrownFill } from 'react-icons/ri'

import { FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import right from '../../../../assets/right.png'
import { providerContext } from '../../../Other/AuthProvider';

function Section5() {
    let {test}=useContext(providerContext)
    let [next, setNext]=useState(0)
    function handleNext(){
        setNext((prev)=> (prev+1) % test.length)
    }
    function handlePrev(){
        setNext(prev === 0? test.length-1:prev-1)
    }
  return (
    <div className='pt-20 max-sm:pt-15'>
         <div className='flex items-center justify-center flex-col' >
            <h1 className='w-40 text-center bg-[#F9D8F4] max-sm:text-[8px] max-sm:w-32 mb-2  py-2 rounded-full text-[14px] font-semibold '>7 Trusted Reviews</h1>
             <h1 className='text-3xl text-center mb-3 font-bold'>Customer <br /> <span className='text-[#A72564]'>Testimonials</span> </h1>
             <p className='max-sm:text-center mb-5 max-sm:text-sm max-sm:w-50'>Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='flex max-sm:flex max-sm:items-center max-sm:justify-center max-sm:px-3  items-center justify-center gap-6 max-sm:gap-3'>
            <div className='flex items-center justify-center gap-1 '>
                 <RiVipCrown2Line className='text-red-600  max-sm:text-sm' />
                 <h1 className='max-sm:text-[10px]'>Premium Quality</h1>
            </div>
            <div className='flex items-center justify-center gap-1 '>
                <RiVerifiedBadgeLine className='text-red-600  max-sm:text-sm' />
                 <h1 className='max-sm:text-[10px]'>Verified Reviews</h1>
            </div>
            <div className='flex items-center justify-center gap-1 '>
                <RiCustomerServiceLine className='text-red-600  max-sm:text-sm' />
                 <h1 className='max-sm:text-[10px]'>24/7 Supports</h1>
            </div>
            <div className='flex items-center justify-center gap-1 '>
                 <FaRegThumbsUp className='text-red-600  max-sm:text-sm' />
                 <h1 className='max-sm:text-[10px]'>95% Satisfaction</h1>
            </div>
        </div>
        <div className='flex max-sm:relative items-center justify-center mb-5 '>
           <div onClick={handlePrev} className='px-2 max-sm:absolute max-sm:-bottom-7 max-sm:left-10 py-2 rounded-full bg-gray-200'>
            <RiArrowLeftSLine  className='w-5 h-5 ' />
            </div>
              <div className='flex w-300 max-sm:flex max-sm:items-center max-sm:justify-center  px-5 py-5 gap-3 overflow-hidden'>
       {[0,1,2].map((i)=>{
        let elem=test[(next+i)% test.length]
           return  <div key={elem.id} className='w-96 transition-all duration-300  max-sm:w-full max-sm:mx-3 shrink-0 h-70 shadow-lg rounded-xl overflow-hidden '>
                <div className='w-full h-2 color'>
                </div>
                <div className='flex item-center justify-between px-4  pt-5'>
                    <div className='flex items-center '>
                    <RiStarSFill className='w-5 h-5 text-red-500' />
                    <RiStarSFill className='w-5 h-5 text-red-500' />
                    <RiStarSFill className='w-5 h-5 text-red-500' />
                    <RiStarSFill className='w-5 h-5 text-red-500' />
                    <RiStarSFill className='w-5 h-5 text-red-500' />
                    <h2 className='ml-2 font-semibold'>{elem.rating}</h2>
                    </div>
                    <img className='w-6 h-4' src={right}  />
                </div>
                <div className='px-4 pt-6 max-sm:text-[15px]  max-sm:pt-3'>
                    " {elem.comment} "
                </div>
                <div className='px-4 pt-5 max-sm:pt-8 w-full'>
                    <div className='flex items-center gap-3 w-full'>
                        <div className='rounded-full relative  w-20 h-15'>
                            <img  className='w-full h-full rounded-full object-cover ' src={elem.image} alt="" />
                        
                        <button className='absolute -right-2 bottom-0 z-1'><RiVerifiedBadgeFill className='text-green-500 w-5 h-5' /></button>
                        </div>
                        <div className='w-full'>
                            <div className='flex items-center gap-3 '> 
                                <h1 className='text-[15px] font-semibold max-sm:text-[13px]'>{elem.name}</h1>
                                <button className='px-2 py-[1px] max-sm:text-[10px] text-green-600 bg-green-200 text-[10px] rounded-full'>Verified</button>
                            </div>
                            <div>
                                <h1 className='text-[14px] max-sm:text-[9px]'>Verified Customer</h1>
                            </div>
                            <div className='mt-1 flex gap-10 justify-between w-full max-sm:gap-5  items-center'>
                                <h1 className='text-[10px] max-sm:text-[8px]'>{elem.time}</h1>
                                <button className=' text-[15px] w-40 max-sm:w-23  py-1 bg-gray-200 max-sm:text-[9px] rounded-full'>Verified Purchase</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            
        
       })}
        </div>
       
        <div onClick={handleNext} className='px-2 py-2 max-sm:absolute max-sm:-bottom-7 max-sm:right-10 rounded-full bg-gray-200'>

         <RiArrowRightSLine className='w-5 h-5 ' />
        </div>
         </div>
         <div>
            
         </div>
    </div>
  )
}

export default Section5