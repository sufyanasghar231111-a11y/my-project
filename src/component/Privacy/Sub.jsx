import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../../assets/logo.png'

function Sub() {
    let [pop, setPop]=useState(false)
    let [input,setInput]=useState('')
    function handlePop(){
        if(input===''){
            alert('please Add Email')
        }
        else{
            setInput('')
            setPop(true)
            setInterval(()=>{
                setPop(false)    
            },2000)
        }
    }
  return (
    <div className='px-13 pt-15 pb-5  relative max-sm:px-5 '>
        <div className=' absolute  flex items-center left-1/2 top-1 justify-center '>
        {pop && (

        <div className='bg-white/10 backdrop-blur-lg px-4  py-2'>
            hello
        </div>
        )}
        </div>
        <div className='flex justify-between max-sm:flex-col pb-15'>
            <div className='flex  justify-between max-sm:justify-start  lg:w-[30%] md:w-[40%] max-sm:w-full max-sm:gap-20'> 
                <div>
                    <h1 className='text-lg  font-medium pb-2'>
                       ADAAYA
                    </h1>
                    <div className='text-sm text-[#2e2e2e] max-sm:mb-4'> 

                    <p>Our Story</p>
                    <p>Wall of Glory</p>
                    <p>Tutorials</p>
                    <p>Hire US</p>
                    <p >Contact US</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-lg  font-medium pb-2'>
                        Products
                    </h1>
                    <div className='text-sm text-[#2e2e2e]'> 

                    <p>Shop Ball</p>
                    <p>Shipping & Returns</p>
                    <p> Payments</p>
                    <p>Track My Order</p>
                    </div>
                </div>

            </div>
            <div className='lg:w-[30%] md:w-[40%] max-sm:w-full'>
                <h1 className='text-lg font-medium'>SubScribe</h1>
                <h1 className='text-sm text-[#2e2e2e]'>Lorem ipsum dolor sit amet </h1>
                <div>
                <input type="text" value={input} onChange={(elem)=>{setInput(elem.target.value)}}  className='px-3 py-2 mt-2 shadow-sm outline-0 text-[#050505]' placeholder='Email Address' />
                <button onClick={()=>{handlePop()}}  className='px-3 py-2 color1 font-semibold cursor-pointer text-white shadow-sm'>Go</button>

                </div>
                <div className="flex items-center gap-4 mt-4">
                                <div className="p-2 bg-white/10 backdrop-blur-lg rounded-full hover:text-blue-500 transition">
                                  <FaFacebook />
                                </div>
                                <div className="p-2 bg-white/10 backdrop-blur-lg rounded-full hover:text-blue-400 transition">
                                  <FaTwitter />
                                </div>
                                <div className="p-2 bg-white/10 backdrop-blur-lg rounded-full hover:text-red-500 transition">
                                  <FaInstagram />
                                </div>
                              </div>
            </div>
        </div>

        <div className='flex items-center gap-4 justify-center'>
            <div className='border border-[#838383] h-fit w-[40%] '>
            </div>
            <div className='flex items-center gap-4 max-sm:gap-2'>
            <img className='w-9 max-sm:w-5 shadow-lg' src={logo} alt="" />
            <h1 className='font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent max-sm:text-[10px]'>ADAAYA </h1>
            </div>
            <div className='border border-[#838383] h-fit w-[40%]'>

            </div>

        </div>
        <div className='text-center pt-8 uppercase text-sm font-medium max-sm:text-[10px]'>
            <h1>
                © 2026 ADAAYA AD(558988-3769) All Rights Reserved
            </h1>
            <h1>
                Design By Roud Studio
            </h1>
        </div>
    </div>
  )
}

export default Sub