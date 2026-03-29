import React, { useState } from 'react'

function Team() {
    let [team,setTeam]=useState('All')
  return (
    <div className='px-6 py-10 max-sm:py-5'>
        <h1 className='uppercase text-6xl font-medium mb-7 max-sm:text-2xl '>Professional Team</h1>
        <div className='flex  max-sm:flex-col gap-3'>
            <div onClick={()=>{setTeam('All')}} className={`  ${team ==='All'?'w-[32%]':'w-[16%]'} max-sm:w-full relative h-100  transition-all duration-500 cursor-pointer`}>
                <div className={`${team ==="All"?'opacity-100 scale-100':'opacity-0 '} max-sm:opacity-100 absolute bottom-10 px-8 text-white transition-all duration-500`}>
              <p className="text-sm">CEO</p>
                    <h2 className="text-xl font-semibold">Sadako Smith</h2>
                </div>
                <img className={`w-full h-full object-cover `} src="https://imageio.forbes.com/specials-images/imageserve/66c3b9c5b69e4e9fcffc9ca6/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="" />
            </div>
            <div onClick={()=>{setTeam('first')}}  className={`  ${team ==='first'?'w-[32%]':'w-[16%]'} max-sm:w-full relative  h-100  transition-all duration-500 cursor-pointer`}>
                 <div className={`${team ==="first"?'opacity-100 scale-100':'opacity-0 '} max-sm:opacity-100 absolute bottom-10 px-8 text-white transition-all duration-500`}>
              <p className="text-sm">CTO</p>
                    <h2 className="text-xl font-semibold">Sadako Smith</h2>
                </div>
 <img className='w-full h-full object-cover' src="https://thumbs.dreamstime.com/b/handsome-stylish-modern-african-american-business-man-entrepreneur-executive-sitting-outside-office-cheerful-smile-155856257.jpg" alt="" />
            </div>
            <div onClick={()=>{setTeam('second')}}  className={`  ${team ==='second'?'w-[32%]':'w-[16%]'} max-sm:w-full relative  h-100  transition-all duration-500 cursor-pointer`}>
                 <div className={`${team ==="second"?'opacity-100 scale-100':'opacity-0 '} max-sm:opacity-100 absolute bottom-10 px-8 text-white transition-all duration-500`}>
              <p className="text-sm">COO</p>
                    <h2 className="text-xl font-semibold">Sadako Smith</h2>
                </div>
 <img className='w-full h-full object-cover ' src="https://img.freepik.com/free-photo/young-handsome-business-man-choosing-car-car-showroom_1303-17901.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            </div>
            <div onClick={()=>{setTeam('third')}}  className={`  ${team ==='third'?'w-[32%]':'w-[16%]'} max-sm:w-full relative  h-100  transition-all duration-500 cursor-pointer`}>
                 <div className={`${team ==="third"?'opacity-100 scale-100':'opacity-0 '} max-sm:opacity-100 absolute bottom-10 px-8 text-white transition-all duration-500`}>
              <p className="text-sm">Project Manager</p>
                    <h2 className="text-xl font-semibold">Sadako Smith</h2>
                </div>
 <img className='w-full h-full object-cover' src="https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=" alt="" />
            </div>
            <div onClick={()=>{setTeam('four')}}  className={`  ${team ==='four'?'w-[32%]':'w-[16%]'} max-sm:w-full  relative h-100  transition-all duration-500 cursor-pointer`}>
                 <div className={`${team ==="four"?'opacity-100 scale-100':'opacity-0 '} max-sm:opacity-100 absolute bottom-10 px-8 text-white transition-all duration-500`}>
              <p className="text-sm">Product Manager</p>
                    <h2 className="text-xl font-semibold">Sadako Smith</h2>
                </div>
 <img className='w-full h-full object-cover' src="https://thumbs.dreamstime.com/b/young-happy-asian-business-woman-standing-city-street-using-digital-tablet-entrepreneur-wearing-suit-holding-big-busy-smart-419350868.jpg" alt="" />
            </div>
            
        </div>
        <div className='flex items-center pt-10 max-sm:pt-8 justify-center flex-col gap-1 '>
        <p className='w-115 max-sm:w-full text-center text-[17px] max-sm:text-[14px] font-semibold'>We provide innovative and reliable services tailored to your needs.
Our goal is to help you grow, stand out, and succeed in today’s competitive market.</p>
<h1 className='text-2xl font-semibold pt-2 max-sm:pt-1 max-sm:text-xl text-center'>Let’s build something great together.</h1>
        </div>

    </div>
  )
}

export default Team