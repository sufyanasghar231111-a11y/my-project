import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'


function AllCategory() {
  const location=useLocation();
  return (
    <div className=''>
      <div className='text-center pt-3 '>
        <h1 className='text-4xl max-sm:text-2xl font-medium mb-2 max-sm:mb-1'>Shop By Categories</h1>
        <p className='text-[#6d6c6c] max-sm:text-[10px]'>Browser Our collection by category</p>
      </div>
      <Outlet />
      {location.pathname ==='/category' && (
        <div className='px-20 pt-10 md:px-10 mb-10 lg:px-20 max-sm:px-10 w-full max-sm:w-full md:flex  md:justify-center lg:flex flex-wrap  gap'>
        <div className=' lg:w-[24%] md:w-[30%] max-sm:mb-5  h-70 max-sm:w-full max-sm:h-full  shadow-sm rounded overflow-hidden'>
          <Link to='/category/fashion'>
          <div className='w-full h-50 overflow-hidden cursor-pointer'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1445205170230-053b83016050" alt="" />
          </div>
          </Link>
          <div className='flex items-center pt-4 flex-col justify-center '>

            <h1 className='text-center text-xl font-medium  '>Fashion</h1>
          <div className='pt-1 border-b border-[#dbd9d9]  w-30 '>
          </div>
          <h1 className='text-sm pt-1 max-sm:mb-2 max-sm:pt-2 '>View Products</h1>
          </div>
        </div>
        <div className=' lg:w-[24%] md:w-[30%] max-sm:mb-5  h-70 max-sm:w-full max-sm:h-full  shadow-sm rounded overflow-hidden'>
          <Link to='/category/electronic'>
          <div className='w-full h-50 overflow-hidden cursor-pointer'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="" />
          </div>
          </Link>
          <div className='flex items-center pt-4 flex-col justify-center '>

            <h1 className='text-center text-xl font-medium  '>Electronic</h1>
          <div className='pt-1 border-b border-[#dbd9d9]  w-30 '>
          </div>
          <h1 className='text-sm pt-1 max-sm:mb-2 max-sm:pt-2'>View Products</h1>
          </div>
        </div>
        <div className=' lg:w-[24%] md:w-[30%] max-sm:mb-5  h-70 max-sm:w-full max-sm:h-full  shadow-sm rounded overflow-hidden'>
          <Link to='/category/living'>
          <div className='w-full cursor-pointer h-50 overflow-hidden '>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" alt="" />
          </div>
          </Link>
          <div className='flex items-center pt-4 flex-col justify-center '>

            <h1 className='text-center text-xl font-medium  '>Home & Living</h1>
          <div className='pt-1 border-b border-[#dbd9d9]  w-30 '>
          </div>
          <h1 className='text-sm pt-1 max-sm:mb-2 max-sm:pt-2'>View Products</h1>
          </div>
        </div>
        <div className=' lg:w-[24%] md:w-[30%] max-sm:mb-5  h-70 max-sm:w-full max-sm:h-full  shadow-sm rounded overflow-hidden'>
          <Link to='/category/beauty'>
          <div className='w-full h-50 overflow-hidden cursor-pointer'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" alt="" />
          </div>
          </Link>
          <div className='flex items-center pt-4 flex-col justify-center '>

            <h1 className='text-center text-xl font-medium  '>Beauty</h1>
          <div className='pt-1 border-b border-[#dbd9d9]  w-30 '>
          </div>
          <h1 className='text-sm pt-1 max-sm:mb-2 max-sm:pt-2'>View Products</h1>
          </div>
        </div>
        <div className=' lg:w-[24%] md:w-[30%] max-sm:mb-5  h-70 max-sm:w-full max-sm:h-full  shadow-sm rounded overflow-hidden'>
          <Link to='/category/sport'>
          <div className='w-full h-50 overflow-hidden cursor-pointer'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1517649763962-0c623066013b" alt="" />
          </div>
          </Link>
          <div className='flex items-center pt-4 flex-col justify-center '>

            <h1 className='text-center text-xl font-medium  '>Sport & Outdoors</h1>
          <div className='pt-1 border-b border-[#dbd9d9]  w-30 '>
          </div>
          <h1 className='text-sm pt-1 max-sm:mb-2 max-sm:pt-2'>View Products</h1>
          </div>
        </div>
        <div className=' lg:w-[24%] md:w-[30%] max-sm:mb-5  h-70 max-sm:w-full max-sm:h-full  shadow-sm rounded overflow-hidden'>
          <Link to='/category/toy'>
          <div className='w-full h-50 overflow-hidden cursor-pointer'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1596464716127-f2a82984de30" alt="" />
          </div>
          </Link>
          <div className='flex items-center pt-4 flex-col justify-center '>

            <h1 className='text-center text-xl font-medium  '>Toy & Games</h1>
          <div className='pt-1 border-b border-[#dbd9d9]  w-30 '>
          </div>
          <h1 className='text-sm pt-1 max-sm:mb-2 max-sm:pt-2'>View Products</h1>
          </div>
        </div>
        <div className=' lg:w-[24%] md:w-[30%] max-sm:mb-5  h-70 max-sm:w-full max-sm:h-full  shadow-sm rounded overflow-hidden'>
          <Link to='/category/book'>
          <div className='w-full h-50 overflow-hidden cursor-pointer'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1512820790803-83ca734da794" alt="" />
          </div>
          </Link>
          <div className='flex items-center pt-4 flex-col justify-center '>

            <h1 className='text-center text-xl font-medium  '>Books</h1>
          <div className='pt-1 border-b border-[#dbd9d9]  w-30 '>
          </div>
          <h1 className='text-sm pt-1 max-sm:mb-2 max-sm:pt-2'>View Products</h1>
          </div>
        </div>
        <div className=' lg:w-[24%] md:w-[30%]   h-70 max-sm:w-full max-sm:h-full  shadow-sm rounded overflow-hidden'>
          <Link to='/category/health'>
          <div className='w-full h-50 overflow-hidden cursor-pointer'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528" alt="" />
          </div>
          </Link>
          <div className='flex items-center pt-4 flex-col justify-center '>

            <h1 className='text-center text-xl font-medium  '>Health & Wellness</h1>
          <div className='pt-1 border-b border-[#dbd9d9]  w-30 '>
          </div>
          <h1 className='text-sm pt-1 max-sm:mb-2 max-sm:pt-2'>View Products</h1>
          </div>
        </div> 
      </div>
      )}
      
      
    </div>
  )
}

export default AllCategory