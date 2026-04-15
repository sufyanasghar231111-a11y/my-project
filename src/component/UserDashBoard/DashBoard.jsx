import React from 'react'
import { FaShoppingBag, FaUndo, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';

function DashBoard() {
  
  return (
    <div>
      <div>
      <div className='flex items-center justify-between px-10 max-sm:gap-5 max-sm:px-3 max-sm:py-2 py-5'>
        <h1 className='text-3xl max-sm:text-xl font-semibold'>User <br /> DashBoard</h1>
        <div className='flex items-center gap-5 max-sm:gap-3'>
          <div className='flex items-center gap-2 max-sm:gap-1'>
          <div className=' rounded-full overflow-hidden w-10 max-sm:w-7 max-sm:h-7 h-10'>
            <img alt="" />
          </div>
          <h1 className='text-sm max-sm:text-[10px]'></h1>
          </div>
          <button  className='px-2 py-1 rounded color1 text-white text-sm max-sm:text-[10px]  cursor-pointer'>Log Out</button>
        </div>
      </div>
      <div className='px-10 py-5 flex flex-wrap gap-4 max-sm:justify-center '>
        <div className='color3 w-77 h-50 rounded text-center flex items-center justify-center flex-col py-6'>
          <h1 className='text-xl font-semibold'><FaShoppingBag /></h1>
          <h1 className='text-4xl font-semibold pt-3'>Orders</h1>
          <h1 className='text-3xl pt-2 font-semibold'></h1>
        </div> 
        <div className='color3 w-77 h-50 rounded text-center flex items-center justify-center flex-col py-6'>
          <h1 className='text-xl font-semibold'><FaUndo /></h1>
          <h1 className='text-4xl font-semibold pt-3'>Returns</h1>
          <h1 className='text-3xl pt-2 font-semibold'></h1>
        </div> 
        <div className='color3 w-77 h-50 rounded text-center flex items-center justify-center flex-col py-6'>
          <h1 className='text-xl font-semibold'><FaTimesCircle /></h1>
          <h1 className='text-4xl font-semibold pt-3'>Canceled</h1>
          <h1 className='text-3xl pt-2 font-semibold'></h1>
        </div> 
        <div className='color3 w-77 h-50 rounded text-center flex items-center justify-center flex-col py-6'>
          <h1 className='text-xl font-semibold'><FaCheckCircle /></h1>
          <h1 className='text-4xl font-semibold pt-3'>Receiveds</h1>
          <h1 className='text-3xl pt-2 font-semibold'></h1>
        </div> 
      </div>
      </div>
    </div>
  )
}

export default DashBoard