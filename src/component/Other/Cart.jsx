import React, { useContext } from 'react'
import { providerContext } from './AuthProvider'
import NavBar from '../home/Body/NavBar';

function Cart() {
  let {cart,addCart}=useContext(providerContext)
  console.log(cart);
  
  return (
    <div>
      <NavBar />

      <div className='pt-35 px-10 flex flex-wrap gap-5'>
        {cart.map((elem)=>{
                return  <div key={elem.id} className='border-1 border-gray-200 shrink-0 rounded w-70 max-sm:w-50 h-90 '>
            <div className='w-full h-60 overflow-hidden border-0'>
                <img className='w-full h-full object-cover' src={elem.image} alt="" />
            </div>
            <div className='px-3'>
                <h1 className='pt-2 mb-1 text-[16px] font-semibold'>{elem.title}</h1>
                <h1 className='mb-2 text-lg font-bold flex items-end gap-1'>${elem.price}<span className='text-[14px] line-through text-gray-600 font-semibold'>${elem.oldPrice}</span></h1>
                <button onClick={()=>{addCart(elem)}} className='w-full text-center rounded text-white font-semibold cursor-pointer py-2 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500'>{cart && cart.length>0&& cart.findIndex((item)=> item.id == elem.id ) !==-1? 'Remove to Cart':'Add to Cart'}</button>
            </div>
        </div>
            })}
      </div>
    </div>
  )
}

export default Cart