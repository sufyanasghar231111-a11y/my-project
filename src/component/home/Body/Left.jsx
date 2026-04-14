import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiStoreLine } from "react-icons/ri";
import { RiEmotionHappyLine } from "react-icons/ri";
import { RiTShirtLine } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";

function Left() {
   
  return (
    <div className='pt-3 max-sm:pt-4 '>
        <div className=''> 
            <h1 className='w-40  text-center bg-[#F9D8F4] max-sm:text-[8px] max-sm:w-32  py-2 rounded-full text-[10px] font-semibold '>WWERE ZOUK CAZ:NOW.</h1>
        </div>
        <div  className='pt-5 max-sm:pt-3'> 
            <h1 className='text-6xl md:text-5xl lg:text-6xl max-sm:text-4xl font-bold max-sm:font-extrabold mb-4'>Where Style <br /> <span className='text-[#A72564]'>Meets Soul</span></h1>
            <p className='mb-7 max-sm:mb-2 max-sm:text-[12px] md:text-[14px] lg:text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> ex nesciunt distinctio, repudiandae tempora officia.</p>
        </div>
        <div className='flex items-center gap-5 '>
            <Link to='/shop' className='px-5 max-sm:px-4 md:px-4 lg:px-5  max-sm:py-2 flex py-3  md:py-2 lg:py-3   items-center justify-center  text-white font-medium gap-1 max-sm:text-[9px] md:text-[12px] lg:text-[15px] rounded-full color'><RiStoreLine className='max-sm:text-[11px] ' /> <span>Shop Collection</span></Link>
            <button className='px-5 py-3 md:px-4 lg:px-5 max-sm:px-4 max-sm:text-[9px] max-sm:py-2  md:py-2 lg:py-3  rounded-full border-gray-300 bg-[#FAF4FE] md:text-[12px] lg:text-[15px] border-1'>
                New Lookbook
            </button>
        </div>
        <div className='pt-13 max-sm:pt-4 md:gap-5 lg:gap-10  max-sm: flex items-center gap-10 max-sm:gap-5'>
            <div className='flex items-center gap-2 max-sm:gap-1'>
                <div className='px-3 py-3 max-sm:px-2 max-sm:py-2 rounded-xl max-sm:rounded-lg bg-[#F9D8F4]'>

                <RiEmotionHappyLine className='w-5 max-sm:w-4  max-sm:h-3 h-4 text-purple-500' />
                </div>
                <div >
                    <h1 className='font-semibold  lg:text-[16px] md:text-[14px] max-sm:text-[10px]'>50K+</h1>
                    <p className='lg:text-sm max-sm:text-[8px] md:text-[10px]'>Satified Customers</p>
                </div>
            </div>
            <div className='flex items-center gap-2 max-sm:gap-1'>
                <div className='px-3 py-3 max-sm:px-2 max-sm:py-2 rounded-xl max-sm:rounded-lg bg-[#F9D8F4]'>

                <RiTShirtLine  className='w-5 h-5 max-sm:w-4  max-sm:h-3 text-purple-500' />
                </div>
                <div >
                    <h1 className='font-semibold lg:text-[16px] md:text-[14px] max-sm:text-[10px]'>200K+</h1>
                    <p className='lg:text-sm max-sm:text-[8px] md:text-[10px]'>New Arrivals</p>
                </div>
            </div>
            
            <div className='flex items-center gap-2 max-sm:gap-1'>
                <div className='px-3 py-3 max-sm:px-2 max-sm:py-2 rounded-xl max-sm:rounded-lg bg-[#F9D8F4]'>

                <RiCustomerService2Fill className='w-5 h-5 max-sm:w-4  max-sm:h-3 text-purple-500' />
                </div>
                <div >
                    <h1 className='font-semibold lg:text-[16px] md:text-[14px] max-sm:text-[10px]'>50K+</h1>
                    <p className='lg:text-sm max-sm:text-[8px] md:text-[10px]'>Customer Support</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Left;