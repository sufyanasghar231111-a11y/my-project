import React from 'react'
import simple from '../../../../assets/simple.png'
import { RiArrowRightLine, RiPokerHeartsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Section4() {
  return (
    <div className='pt-10 mb-4 bg-[#FEFCFE]'>
        
        <div className='flex items-center justify-center flex-col' >
            <h1 className='w-40 text-center bg-[#F9D8F4] max-sm:text-[8px] max-sm:w-32 mb-2  py-2 rounded-full text-[14px] font-semibold uppercase'>With love xoxo</h1>
             <div className='flex items-center justify-center flex-col'>

             <h1 className='text-3xl font-bold '>Editorial  </h1>
              <span className='text-[#A72564] mb-3 text-3xl  font-bold'>Lookbook</span>
             </div>
             <p className='max-sm:text-center max-sm:text-sm mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing .</p>

        </div>
        <div className='px-5 w-full' >
            <div className='w-full flex max-sm:flex-col  max-sm:justify-center items-center justify-between gap-4'>
                <div className='lg:w-[40%] w-full md:w-[50%] h-117 max-sm:w-full max-sm:h-80 rounded'>
                    <img className='w-full h-full object-cover' src={simple} alt="" />
                </div>
                <div className='w-[60%] flex max-sm:items-center max-sm:justify-center  max-sm:w-full flex-col gap-5 '>
                    <div className='flex gap-4 max-sm:gap-2'>
                        <div className='shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] relative group  rounded-lg w-[40%] max-sm:w-[40vw] h-55 overflow-hidden '>
                            <div className='absolute w-full h-full z-10  backdrop-blur-sm ml-100 group-hover:ml-0 transition-all duration-600 py-5 px-6'>
                                <div className='flex items-center justify-between'>

                                <h1 className='text-white text-xl font-semibold mb-3'>Winter Style</h1>
                                <RiPokerHeartsFill className='text-white text-lg' />
                                </div>
                                <p className='text-white text-sm mb-5'>Shop BRUNELLO CUCINELLI Slim-Fit Ribbed Shearling Jacket, Explore the latest in-season BRUNELLO CUCINELLI collection today on MR PORTER</p>
                                <button className='px-4 py-2 rounded color text-white font-semibold'>Add To cart</button>
                            </div>
                            <img src="https://i.pinimg.com/736x/4f/a2/5f/4fa25fa19937bca6f8fb422580778ea9.jpg" className='w-full h-full object-cover scale-100 hover:scale-105 transition-all duration-500' alt="" />
                        </div>
                        <div className='shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] group max-sm:w-[40vw] rounded-lg w-[40%] h-55 overflow-hidden relative'>
                            <div className='absolute w-full h-full z-10  backdrop-blur-sm ml-100 group-hover:ml-0 transition-all duration-600 py-5 px-6'>
                                <div className='flex items-center justify-between'>

                                <h1 className='text-white text-xl font-semibold mb-3'>Winter Style</h1>
                                <RiPokerHeartsFill className='text-white text-lg' />
                                </div>
                                <p className='text-white text-sm mb-5'>Shop BRUNELLO CUCINELLI Slim-Fit Ribbed Shearling Jacket, Explore the latest in-season BRUNELLO CUCINELLI collection today on MR PORTER</p>
                                <button className='px-4 py-2 rounded color text-white font-semibold'>Add To cart</button>
                            </div>
                            <img src="https://i.pinimg.com/1200x/50/f9/77/50f9779171269ced55f60f10b65fff75.jpg" className='w-full h-full object-cover' alt="" />
                            </div>  
                    </div>
                    <div className='flex gap-4 max-sm:gap-2'>
                        <div className='shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] rounded-lg max-sm:w-[40vw] w-[40%] relative overflow-hidden group h-55'>
                             <div className='absolute w-full h-full z-10  backdrop-blur-sm ml-100 group-hover:ml-0 transition-all duration-600 py-5 px-6'>
                                <div className='flex items-center justify-between'>

                                <h1 className='text-white text-xl font-semibold mb-3'>Winter Style</h1>
                                <RiPokerHeartsFill className='text-white text-lg' />
                                </div>
                                <p className='text-white text-sm mb-5'>Shop BRUNELLO CUCINELLI Slim-Fit Ribbed Shearling Jacket, Explore the latest in-season BRUNELLO CUCINELLI collection today on MR PORTER</p>
                                <button className='px-4 py-2 rounded color text-white font-semibold'>Add To cart</button>
                            </div>
                            <img src="https://i.pinimg.com/1200x/1a/13/90/1a1390dc268d2620282444744da55ad6.jpg" className='w-full h-full object-cover' alt="" />
                        </div>
                        <div className='shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] rounded-lg max-sm:w-[40vw] w-[40%] relative overflow-hidden h-55 group'>
                             <div className='absolute w-full h-full z-10  backdrop-blur-sm ml-100 group-hover:ml-0 transition-all duration-600 py-5 px-6'>
                                <div className='flex items-center justify-between'>

                                <h1 className='text-white text-xl font-semibold mb-3'>Winter Style</h1>
                                <RiPokerHeartsFill className='text-white text-lg' />
                                </div>
                                <p className='text-white text-sm mb-5'>Shop BRUNELLO CUCINELLI Slim-Fit Ribbed Shearling Jacket, Explore the latest in-season BRUNELLO CUCINELLI collection today on MR PORTER</p>
                                <button className='px-4 py-2 rounded color text-white font-semibold'>Add To cart</button>
                            </div>
                            <img src="https://i.pinimg.com/736x/77/77/2a/77772ad2a751e8745304cedaaefc3ce7.jpg" className='w-full h-full object-cover' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <div className='flex items-center justify-center pt-10'>

        <Link to='/shop' className='w-fit color text-white px-6 py-3 max-sm:px-4 max-sm:py-2 rounded-sm font-semibold gap-2 flex max-sm:text-[13px]  items-center  justify-center'>
            <button  className='cursor-pointer'>Shop Now </button>
            <RiArrowRightLine className='w-5 mt-1 h-4 max-sm:w-4 max-sm:h-4 max-sm:mt-0' />
            </Link>
        </div>
    </div>
  )
}

export default Section4