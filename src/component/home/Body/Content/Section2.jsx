import React, { useContext } from 'react'
import { providerContext } from '../../../Other/AuthProvider';
import {RiArrowDropRightLine, RiArrowLeftSLine } from "react-icons/ri";
import {RiArrowRightSLine,RiPokerHeartsFill  } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { homeProvider } from '../../../ContextApi/HomeContext';
function Section2() {
    let {secData,cart,addCart,fav,addFav}=useContext(providerContext)
    
     let {next,fade,handleNext, handlePre,data}=useContext(homeProvider)
    
  return (
    <div className='pt-12 mb-4'>
        <div className=''>

        <div className='flex items-center justify-center flex-col' >
            <h1 className='w-40 text-center bg-[#F9D8F4] max-sm:text-[8px] max-sm:w-32 mb-2  py-2 rounded-full text-[14px] font-semibold '>1 Items Added</h1>
             <div className='flex items-center justify-center flex-col'>

             <h1 className='text-3xl font-bold '>Check Out  </h1>
              <span className='text-[#A72564] mb-3 text-3xl  font-bold'>Hot Pick</span>
             </div>
             <p className='max-sm:text-center'>Lorem ipsum dolor sit amet consectetur adipisicing .</p>
        </div>
        <div className='flex items-end justify-center relative max-sm:mx-4'>
             <div onClick={()=>{handlePre()}} className='px-2 py-2 mr-3 rounded-full bg-gray-300 pt-2 max-sm:absolute max-sm:-bottom-12 max-sm:left-10 hover:bg-gray-200 transition-all ease-in duration-300 cursor-pointer'>
            <RiArrowLeftSLine  className='w-5 h-5 ' />
            </div>
        <div className='flex w-220 max-sm:w-130  items-center justify-center gap-4 overflow-hidden pt-10 '>
            {[0,1,2,3,4].map((i)=>{
                let elem=secData[(next+i) %secData.length]
                return  <div key={elem.id} className={`border-1 border-gray-200 shrink-0 rounded w-70 max-sm:w-50 h-90 ${fade? 'opacity-100 scale-100':'opacity-0 scale-95'} transition-all  duration-300`}>
            <div className='w-full h-60 overflow-hidden relative group border-0'>
                 <p className='absolute px-4 rounded-full color py-1  text-sm  m-2 text-white font-semibold'>{elem.discount}%</p>
                                    <p className={`absolute right-2 group-hover:opacity-100 group-hover:scale-105 scale-0 opacity-0 transition-all ease-in-out rounded-full px-1 py-1 bg-gray-200 duration-400  top-2`}><RiPokerHeartsFill  onClick={()=>{addFav(elem)}} className={`w-5 ${fav&& fav.length>0 && fav.findIndex((item)=> item.id === elem.id) !==-1?'fill-red-500':'fill-white' } h-5 `} /></p>
                <img className='w-full h-full object-cover' src={elem.image} alt="" />
            </div>
            <div className='px-3'>
                <h1 className='pt-2 mb-1 text-[16px] font-semibold'>{elem.title}</h1>
                <h1 className='mb-2 text-lg font-bold flex items-end gap-1'>${elem.price}<span className='text-[14px] line-through text-gray-600 font-semibold'>${elem.oldPrice}</span></h1>
                <button onClick={()=>{addCart(elem)}} className='w-full text-center rounded text-white font-semibold cursor-pointer py-2 color  '>{cart && cart.length>0&& cart.findIndex((item)=> item.id===elem.id ) !==-1? 'Remove to Cart':'Add to Cart'}</button>
            </div>
        </div>
            })}
        </div>
        <div onClick={()=>{handleNext()}} className='px-2 py-2 ml-3  max-sm:absolute max-sm:-bottom-12 max-sm:right-10 rounded-full bg-gray-300 hover:bg-gray-200 transition-all ease-in duration-300 cursor-pointer'>
       <RiArrowRightSLine  className='w-5 h-5' />
        </div>
        </div>
        <div className='flex items-center justify-center max-sm:pt-15 pt-10'>

        <Link to='/shop' className='color text-white px-6 py-2 rounded-full font-semibold flex max-sm:text-[13px]  items-center  justify-center'>
            <button  className='cursor-pointer'>View All Products </button>
            <RiArrowDropRightLine className='w-7 mt-1 h-7 max-sm:w-6 max-sm:h-6 max-sm:mt-0' />
            </Link>
        </div>
        </div>
    </div>
  )
}

export default Section2