import React, { useContext, useState } from 'react'
import { providerContext } from '../../Other/AuthProvider'
import { BsFillHeartFill } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'

const Health = () => {
  let {fashion,cart, setCart,addCart}=useContext(providerContext)
  
  return (
    <div >
      <div className='text-center'>
        <h1 className='pt-10 text-3xl max-sm:text-xl  font-semibold'>Category Health & Wellness </h1>
      </div>
      <div className='pt-5 lg:px-15 max-sm:px-6 md:px-10  flex flex-wrap gap-4  items-center mb-4 justify-center'>
        {fashion.map((elem)=>{
          return <div key={elem.id} className='lg:w-[24%] md:w-[30%]  shadow-sm max-sm:w-full  overflow-hidden rounded'>
          <div className='h-60 w-full relative'>
            <div className='absolute p-3 flex  w-full justify-between'>
              

              <div className='flex gap-2 flex-col'>
            <button className=' z-1  px-4 w-fit text-white font-medium py-1 color1 rounded-full'>{elem.discount}</button>
            {elem.sold &&(
              <button className=' z-1  text-sm px-4 py-1 font-medium     text-white   bg-[#7e7e7e] rounded-full'>{elem.sold}</button>
            )}
              </div>
              <div className='py-2 px-2 rounded-full h-fit shadow-sm '>
                <BsFillHeartFill className='text-white' />
              </div>
             
            </div>
            <Link to={`/category/fashion/${elem.id}`}>
            <img    className='object-cover h-full cursor-pointer w-full' src={elem.image} decoding="async" loading='lazy' alt="" />
            </Link>
          </div>
          <div className='px-4 pt-3'>
            <h1  className=' font-semibold text-[#7a7a7a]'>{elem.name}</h1>
            <h1 className='leading-5 pb-2'>{elem.description}</h1>
            <h1 className='font-semibold mb-2 text-xl'>${elem.price} <span className='line-through text-sm text-[#8d8c8c]'>${elem.originalPrice}</span></h1>
            <button onClick={()=>{addCart(elem)}} disabled={elem.sold}   className={`color w-full py-2 mb-2 ${elem.sold ? 'cursor-not-allowed':'cursor-pointer'} rounded text-white font-medium  `}>{cart && cart.length>0 && cart.findIndex(item=>item.id === elem.id) !==-1?'Remove To Cart':'Add To cart' }</button>
          </div>
        </div>
          
        })}
        
        
      </div>
    </div>
  )
}

export default Health
