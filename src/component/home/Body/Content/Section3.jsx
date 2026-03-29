import React, { useEffect, useState } from 'react'
import gradient from '../../../../assets/gradient.png'
import { RiArrowRightLine } from 'react-icons/ri'
import { data, Link } from 'react-router-dom'




function Section3() {
    // localStorage.clear()
    let [time, setTime]=useState({ days:200,
   hours:10,
   min:10,
   sec:0})

// useEffect(()=>{
//     localStorage.setItem('time', time)
// },[time])

useEffect(()=>{
    let timer= setInterval(()=>{
        setTime((prev)=>{
            let {days,hours,min,sec}=prev
            if(sec>0){
                sec--
            }
            else{
                sec=59;
                if(min>0){
                    min--;
                }
                else{
                    min=59;
                    if(hours>0){
                        hours--;
                    }
                    else{
                        hours=23;
                        if(days>0){
                            days--
                        }
                        else{
                            clearInterval(timer)
                            return {days:0, hours:0,min:0,sec:0}
                        }
                    }
                }
            }
            return {days, hours,min,sec}
        })
    },1000)
    return ()=> clearInterval(timer)
},[])
    
    
  return (
    <div className='pt-20 max-sm:pt-10 max-sm:mx-5  lg:mx-30 mx-9 md:mx-10 mb-5 flex items-center  justify-center'>
        <div className='lg:w-274 w-200 md:h-100 h-110 md:w-300  lg:h-80 max-sm:h-120 relative  rounded-2xl '>
            <img className='w-full absolute h-full   -z-10 ' src={gradient} alt="" />
            <div className='flex items-center max-sm:flex-col  py-6 px-7 gap-10 max-sm:gap-0 justify-between'>
            <div className=' w-[65%] max-sm:w-full max-sm:h-40  h-80'>
                <div className=' flex gap-4 items-center  mb-6 max-sm:mb-3'>
                    <button className='uppercase px-3 max-sm:text-[8px] rounded-full text-[11px] text-white font-semibold py-2   bg-gradient-to-r from-purple-800 via-fuchsia-800 to-pink-800'>Shop Now</button>
                    <button className='uppercase px-3 max-sm:text-[8px] rounded-full text-[11px]  text-white font-semibold py-2 border-1 border-white'>Limited time only</button>
                </div>
                <div className=''>
                    <h1 className='lg:text-5xl text-3xl md:text-4xl font-semibold max-sm:text-2xl mb-4 max-sm:mb-2 text-white'>Holiday Flash  Sale! Limited Time Offer</h1>
                    <p className='text-gray-300 max-sm:text-sm md:text-[13px] lg:text-[16px] mb-5 max-sm:mb-3 md:w-70 lg:w-112 max-sm:w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis!</p>
                </div>
               <div className=''>

        <Link to='/shop' className='color w-fit text-white px-6 py-3 max-sm:px-4 max-sm:py-2 rounded-sm font-semibold gap-1 flex max-sm:text-[13px]  items-center  justify-center'>
            <button  className='cursor-pointer'>Shop Now </button>
            <RiArrowRightLine className='w-5 mt-1 h-4 max-sm:w-4 max-sm:h-4 max-sm:mt-0' />
            </Link>
        </div>
            </div>
            <div className='lg:w-[42%] md:w-full w-full pt-10 max-sm:mt-20   max-sm:h-70 h-90'>
                <div className='bg-gradient-to-br from-purple-600/25 via-fuchsia-600/20 to-pink-600/25
            backdrop-blur-lg
            rounded-2xl shadow-xl
            border border-white/10 text-white w-full h-[65%]'>
                    <div className='flex max-sm:justify-center max-sm:items-center flex-col gap-2 items-center max-sm:pt-1 justify-center pt-4'>
                        <h1 className='text-lg  max-sm:text-[14px]'>Time Remaining</h1>
                        <div className='h-[2px] rounded-full w-13 color'></div>
                    </div>
                    
                    <div className='pt-4  max-sm:pt-5 gap-3 max-sm:gap-2 flex  px-2   items-center justify-center  max-sm:items-center'>
                        <div>
                        <div className='w-19 max-sm:w-13 flex mb-2 items-center justify-center text-3xl max-sm:text-[18px] font-semibold shrink-0 h-20 max-sm:h-15 bg-gradient-to-br from-purple-400/40 via-fuchsia-400/35 to-pink-400/40 backdrop-blur-md rounded-xl text-white border border-white/15 '><span>{time.days}</span></div>
                          
                        <h1 className='text-center uppercase text-[14px] max-sm:text-[10px] font-semibold text-[#dfdede]'>Day</h1>
                        </div>
                        <div>
                        <div className='w-19 max-sm:w-13 flex mb-2 items-center justify-center text-3xl max-sm:text-[18px] font-semibold shrink-0 h-20 max-sm:h-15 bg-gradient-to-br from-purple-400/40 via-fuchsia-400/35 to-pink-400/40 backdrop-blur-md rounded-xl text-white border border-white/15 '><span>{time.hours}</span></div>
                          
                        <h1 className='text-center uppercase text-[14px] max-sm:text-[10px] font-semibold text-[#dfdede]'>Hrs</h1>
                        </div>
                        <div>
                        <div className='w-19 max-sm:w-13 flex mb-2 items-center justify-center text-3xl max-sm:text-[18px] font-semibold shrink-0 h-20 max-sm:h-15 bg-gradient-to-br from-purple-400/40 via-fuchsia-400/35 to-pink-400/40 backdrop-blur-md rounded-xl text-white border border-white/15 '><span>{time.min}</span></div>
                          
                        <h1 className='text-center uppercase text-[14px] max-sm:text-[10px] font-semibold text-[#dfdede]'>Mins</h1>
                        </div>
                        <div>
                        <div className='w-19 max-sm:w-13 flex mb-2 items-center justify-center text-3xl max-sm:text-[18px] font-semibold shrink-0 h-20 max-sm:h-15 bg-gradient-to-br from-purple-400/40 via-fuchsia-400/35 to-pink-400/40 backdrop-blur-md rounded-xl text-white border border-white/15 '><span>{time.sec}</span></div>
                          
                        <h1 className='text-center uppercase text-[14px] max-sm:text-[10px] font-semibold text-[#dfdede]'>Sec</h1>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section3