import React from 'react'
import { RiStarSFill } from 'react-icons/ri'

function Section6() {
  return (
    <div className='mt-20 flex items-center justify-center flex-col'>
        <div className='lg:w-200 w-150 h-50 max-sm:h-full md:w-170  mb-10    rounded-xl flex max-sm:flex-col max-sm:w-[95vw] items-center justify-between  bg-[#fdf2fa]'>
            <div className='w-[30%] max-sm:w-full max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center h-full pt-13 max-sm:pt-1 px-7'>
                <h1 className='text-5xl max-sm:text-2xl font-semibold'>4.8</h1>
                <div className='flex item-center mb-3 max-sm:mb-1'>
                                    <div className='flex items-center '>
                                    <RiStarSFill className='w-5 max-sm:w-3 max-sm:h-3 h-5 text-[#bc0a54]' />
                                    <RiStarSFill className='w-5 max-sm:w-3 max-sm:h-3 h-5 text-[#bc0a54]' />
                                    <RiStarSFill className='w-5 max-sm:w-3 max-sm:h-3 h-5 text-[#bc0a54]' />
                                    <RiStarSFill className='w-5 max-sm:w-3 max-sm:h-3 h-5 text-[#bc0a54]' />
                                    <RiStarSFill className='w-5 max-sm:w-3 max-sm:h-3 h-5 text-[#bc0a54]' />
                                    
                                    </div>
                                   
                                </div>
                                <h1 className='font-medium max-sm:text-[10px]'>Based on 27 Reviews</h1>
            </div>
            <div className='w-[70%] max-sm:w-full h-full pt-8 max-sm:pt-1 px-7 max-sm:px-1'>
                <div className='flex  flex-col gap-1 mx-2'>

                <div className='flex  items-center  justify-between'>
                    <h1 className='flex items-center justify-center'>5 <RiStarSFill className='w-5 max-sm:w-3 max-sm:h-3 h-5 text-[#bc0a54]' /></h1>
                    <div className='w-[85%] max-sm:w-[70%] max-sm:ml-1  ml-3 h-2 rounded-full bg-gray-200'>
                        <div className='w-[81%] color h-full rounded-full'> </div>
                    </div>
                    <h1>81%</h1>
                </div>
                <div className='flex items-center  justify-between'>
                    <h1 className='flex items-center justify-center'>4 <RiStarSFill className='w-5 max-sm:w-3 max-sm:h-3 h-5 text-[#bc0a54]' /></h1>
                    <div className='w-[85%] max-sm:w-[70%] max-sm:ml-1 ml-3 h-2 rounded-full bg-gray-200'>
                        <div className='w-[12%] color h-full rounded-full'> </div>
                    </div>
                    <h1>12%</h1>
                </div>
                <div className='flex items-center  justify-between'>
                    <h1 className='flex items-center justify-center'>3 <RiStarSFill className='w-5 max-sm:w-3 max-sm:h-3 h-5 text-[#bc0a54]' /></h1>
                    <div className='w-[85%] max-sm:w-[70%] max-sm:ml-1 ml-3 h-2 rounded-full bg-gray-200'>
                        <div className='w-[4%] color h-full rounded-full'> </div>
                    </div>
                    <h1>4%</h1>
                </div>
                <div className='flex items-center  justify-between'>
                    <h1 className='flex items-center justify-center'>2 <RiStarSFill className='w-5 max-sm:w-3 max-sm:h-3 h-5 text-[#bc0a54]' /></h1>
                    <div className='w-[85%] max-sm:w-[70%] max-sm:ml-1 ml-3 h-2 rounded-full bg-gray-200'>
                        <div className='w-[2%] color h-full rounded-full'> </div>
                    </div>
                    <h1>1%</h1>
                </div>
                <div className='flex items-center  justify-between'>
                    <h1 className='flex item-center justify-center'>1 <RiStarSFill className='w-5 max-sm:mt-1 max-sm:w-3 max-sm:h-3 h-5 text-[#bc0a54]' /></h1>
                    <div className='w-[85%] max-sm:w-[70%] max-sm:ml-1 ml-3 h-2 rounded-full bg-gray-200'>
                        <div className='w-[2%] color h-full rounded-full'> </div>
                    </div>
                    <h1>1%</h1>
                </div>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center'> 
            <button className='px-4 font-semibold max-sm:text-sm  py-2 rounded-full color text-white mb-2'>Share Your Experience</button>
        </div>
    </div>
  )
}

export default Section6