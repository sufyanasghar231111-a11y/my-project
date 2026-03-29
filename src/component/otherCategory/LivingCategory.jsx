import React, { useContext, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { providerContext } from '../Other/AuthProvider'

const LivingCategory = () => {
  let {detail,fashion,setDetail}=useContext(providerContext)
  console.log(detail);
     let {id}=useParams();
  
useEffect(()=>{

    let data=fashion.filter((elem) => {return  elem.id ==id})
    setDetail(data)
  
},[fashion,id,setDetail])



  
  return (
    <div className='pt-15 lg:px-20 md:px-14 max-sm:pt-8 max-sm:px-8'>
      <div className=''>
        {detail.map((elem)=>{
          return <div key={elem.id} className='flex justify-start max-sm:flex-col  max-sm:gap-7 gap-13'>
            <div className='w-[50%] max-sm:w-full h-100 overflow-hidden rounded shadow-lg'>
              <img className='w-full h-full object-cover ' src={elem.image} alt="" />
            </div>
            <div>
              <h1 className='text-2xl font-medium'>{elem.name}</h1>
              <p className='text-xl font-medium'>{elem.brand}</p>
              <p className='text-[16px]'>{elem.description}</p>
              <h1 className='pt-3 text-sm '><span className='font-semibold text-lg'>Price:</span> ${elem.price} </h1>
              <h1 className=' text-sm '><span className='font-semibold text-lg'>Stock:</span> {elem.stock} </h1>
              <h1 className=' text-sm '><span className='font-semibold text-lg'>Rating:</span> {elem.rating} ⭐</h1>
              <div className='flex w-fit gap-3 pt-6  flex-col'>
              <button className=' px-4 py-2 cursor-pointer rounded  color1 text-white font-semibold'>Set To Favorite</button>
              <button  className={ `${elem.sold ? 'cursor-no-drop':'cursor-pointer'} px-4 py-2  rounded color1 mb-4 text-white font-semibold `}> Add To Cart</button>
              {elem.sold &&(

              <button className=' px-3 py-1 cursor-pointer rounded color1 text-white mb-5'> {elem.sold}</button>
              )}
              </div>
            </div>
          </div>
        })}
      </div>
 
    </div>
  )
}

export default LivingCategory
