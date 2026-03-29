import React, { useContext } from 'react'
import { providerContext } from './AuthProvider'
import NavBar from '../home/Body/NavBar'
import { RiArrowRightLine, RiPokerHeartsFill } from 'react-icons/ri'

function Fav() {
  let {fav,cart,addCart,addFav}=useContext(providerContext)
  return (
    <div>
      <NavBar />
      <div className='pt-35 px-10 flex flex-wrap gap-4'>

        {fav.map((elem)=>{
                       
                       return  <div key={elem.id} className={`border-1 border-gray-200 shrink-0 rounded w-70 max-sm:w-50 h-90  transition-all  duration-300`}>
                   <div className='w-full h-60 overflow-hidden relative group border-0'>
                        <p className='absolute px-4 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 py-1  text-sm  m-2 text-white font-semibold'>{elem.discount}%</p>
                                           <p className={`absolute right-2 group-hover:opacity-100 group-hover:scale-105 scale-0 opacity-0 transition-all ease-in-out rounded-full px-1 py-1 bg-gray-200 duration-400  top-2`}><RiPokerHeartsFill  onClick={()=>{addFav(elem)}} className={`w-5 ${fav&& fav.length>0 && fav.findIndex((item)=> item.id === elem.id) !==-1?'fill-red-500':'fill-white' } h-5 `} /></p>
                       <img className='w-full h-full object-cover' src={elem.image} alt="" />
                   </div>
                   <div className='px-3'>
                       <h1 className='pt-2 mb-1 text-[16px] font-semibold'>{elem.title}</h1>
                       <h1 className='mb-2 text-lg font-bold flex items-end gap-1'>${elem.price}<span className='text-[14px] line-through text-gray-600 font-semibold'>${elem.oldPrice}</span></h1>
                       <button onClick={()=>{addCart(elem)}} className='w-full text-center rounded text-white font-semibold cursor-pointer py-2 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500  '>{cart && cart.length>0&& cart.findIndex((item)=> item.id===elem.id ) !==-1? 'Remove to Cart':'Add to Cart'}</button>
                   </div>
               </div>
                   })}
      </div>
    </div>
  )
}

export default Fav