import React, { useContext } from 'react'
import {RiArrowRightSLine, RiPokerHeartsFill } from "react-icons/ri";
import {RiArrowLeftSLine } from "react-icons/ri";
import {RiArrowRightLine } from "react-icons/ri";
import {RiArrowDropRightLine } from "react-icons/ri";

// import { providerContext } from '../../../Other/AuthProvider';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { homeProvider } from '../../../ContextApi/HomeContext';

gsap.registerPlugin(ScrollTrigger);


function Section() {
   let {next,fade,handleNext, handlePre,data}=useContext(homeProvider)
   
   
  return (
    <div>
        <div className='w-full  flex flex-col items-center justify-center pt-20'>
            <div className=''> 
            <h1 className='w-40 text-center bg-[#F9D8F4] max-sm:text-[8px] mb-4 max-sm:w-32  py-2 rounded-full text-[10px] font-semibold '>WWERE ZOUK CAZ:NOW.</h1>
        </div>
        <h1 className='text-4xl font-bold'>Shop By <br /> <span className='text-[#A72564]'>Category</span> </h1>
        <p className='pt-3 mb-10 max-sm:text-center max-sm:text-sm max-sm:mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit</p>
        </div>
        <div className='flex items-center relative justify-center mx-3'>
            <div onClick={()=>{handlePre()}}  className='mr-3 px-2 py-2 max-sm:absolute max-sm:left-10 max-sm:top-[93%] rounded-full bg-gray-300 cursor-pointer '>
            <RiArrowLeftSLine className='w-5 h-5 ' />
            </div>
        <div className='scroll flex gap-4  items-center justify-center max-sm:w-100 w-230  overflow-hidden'>

            {[0,1,2].map((i)=>{
                const elem=data[(next +i)% data.length]
                return  <div key={elem.id} className={`flex  gap-4 transition-all duration-300 mb-10 ${fade? 'opacity-100 scale-100':'opacity-0 scale-95'} `}>  
           <div className='border-1 border-gray-400 shrink-0 overflow-hidden rounded-lg  w-70 max-sm:w-50 h-90 '>
                <div className='w-full h-60 overflow-hidden group relative '>
                    <p className='absolute px-4 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 py-1  text-sm  m-2 text-white font-semibold'>Popular</p>
                    <img className='w-full  h-full object-cover' src={elem.image} alt="" />
                    </div>
                    <div className='px-2'>
                    <div className='flex items-center pt-3   justify-between'>
                        <h1 className='font-semibold text-[18px]'>{elem.name}</h1>
                        <div className=' px-2 flex items-center justify-center py-2 rounded-full bg-[#fadcf7]'>
                        <button><RiArrowRightLine className='w-3 h-3' /></button>
                        </div>
                    </div>
                    <p className='pb-3 text-sm text-gray-700 border-b-1 border-gray-300'>{elem.trend}</p>
                    <h1 className='pt-2 text-[14px] text-gray-800'>{elem.items}</h1>
                    </div>
            </div>
        </div>
            })}
        </div>
       <div onClick={()=>{handleNext()}}  className=' px-2 py-2 max-sm:absolute max-sm:top-[93%] max-sm:right-10 rounded-full bg-gray-300 cursor-pointer '>
    <RiArrowRightSLine className='w-5 h-5' />
        </div>
        </div>
        <div className='flex items-center justify-center mt-5 max-sm:mt-10 mb-10'>
            <Link to='/category' className='bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold flex max-sm:text-[13px]  items-center  justify-center'>
            <button   className='cursor-pointer'>Browser All Categories </button>
            <RiArrowDropRightLine className='w-7 mt-1 h-7 max-sm:w-6 max-sm:h-6 max-sm:mt-0' />
            </Link>
        </div>
    </div>
  )
}

export default Section