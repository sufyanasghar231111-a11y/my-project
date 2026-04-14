import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { BsHeart } from 'react-icons/bs'
import { RiShoppingBasketFill } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { providerContext } from '../../Other/AuthProvider';
import gsap from 'gsap';



function NavBar() {

  let [close, setClose] = useState(false)
  let { cart, fav } = useContext(providerContext)


  return (
    <div className='w-full '>
      <div className='relative '>
        <div className='w-full fixed top-0 left-0 z-50 '>
          <div className='flex  items-center justify-between max-sm:gap-15  md:gap-10  max-sm:px-4 px-13 md:px-5 lg:px-13 py-4 inset-0 bg-white/90 backdrop-blur-lg  opacity-100 '>
            <div className={`w-full h-96 shadow-lg ${close ? ' translate-y-0' : ' -translate-y-full'}   transition-all ease-in-out duration-300  inset-0 bg-white/90 backdrop-blur-2xl md:hidden z-60 fixed top-0 left-0`}>
              <div onClick={() => { setClose(false) }} className=' absolute right-2 top-5  rounded-full  transition-all ease-in duration-150  '>
                {/* <RiCloseLine  /> */}
                <div className='w-10 rotate-45 h-0.5 color1'></div>
                <div className='w-10 -rotate-45 h-0.5 color1'></div>
              </div>
              <div className='flex px-6 pt-18 w-full items-center  text-center  justify-center flex-col'>

                <Link onClick={() => { setClose(false) }} to='/' className='border-y w-full  border-neutral-500 py-1   text-xl font-semibold'>Home</Link>

                <Link className=' py-1   w-full text-xl font-semibold' to='/shop'>Shop</Link>
                <Link className=' py-1  w-full text-xl font-semibold border-y border-neutral-500' to='/category'>Category</Link>
                <Link className=' py-1  w-full text-xl font-semibold' to='/about'>About</Link>
                <Link className=' py-1  w-full text-xl font-semibold border-y border-neutral-500' to='/return'>Return & FAQ</Link>
                <Link className=' py-1  w-full text-xl font-semibold ' to='/privacy'>Privacy Policy</Link>
                <Link className=' py-1 w-full text-xl font-semibold border-y  border-neutral-500' to='/user'>User Dashboard</Link>
              </div>
            </div>
            <div className='flex items-center justify-center gap-3 '>
              <div onClick={() => { setClose(true) }} className='md:hidden lg:hidden max-sm:block'>
                <RiMenu3Line />
              </div>
              <img className='w-9 shadow-lg' src={logo} alt="logo" />
              <h1 className='font-medium  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>ADAAYA</h1>
            </div>
            <div className='flex lg:gap-6 xl:text-[15px] md:gap-3 md:text-[11px]  lg:text-[13px] text-[15px] max-sm:hidden max-md:hidden '>
              <div className=' '>

                <NavLink to='/' className={({ isActive }) => isActive ? 'color1 text-white  lg:px-4 md:px-3 lg:py-2 md:py-1  rounded-full lg:-mt-1  md:mt-0' : 'text-black mt-1'}>Home</NavLink>

              </div>

              <div>

                <NavLink to='/shop' className={({ isActive }) => isActive ? 'color1 text-white lg:px-4 md:px-3  lg:py-2 md:py-1 rounded-full lg:-mt-1  md:mt-0' : 'text-black mt-1'}>Shop</NavLink>
              </div>
              <div>

                <NavLink to='/category' className={({ isActive }) => isActive ? 'color1 text-white lg:px-4 md:px-3   lg:py-2 md:py-1 rounded-full lg:-mt-1  md:mt-0' : 'text-black mt-1'}>Category</NavLink>
              </div>
              <div>

                <NavLink to='/about' className={({ isActive }) => isActive ? 'color1 text-white lg:px-4 md:px-3   lg:py-2 md:py-1 rounded-full lg:-mt-1  md:mt-0' : 'text-black mt-1'}>About</NavLink>
              </div>
              <div>

                <NavLink to='/return' className={({ isActive }) => isActive ? 'color1 text-white lg:px-4 md:px-3   lg:py-2 md:py-1 rounded-full lg:-mt-1  md:mt-0' : 'text-black mt-1'}>Return & FAQ</NavLink>
              </div>
              <div>

                <NavLink to='/privacy' className={({ isActive }) => isActive ? 'color1 text-white lg:px-4 md:px-3   lg:py-2 md:py-1 rounded-full lg:-mt-1  md:mt-0' : 'text-black mt-1'}>Privacy Policy</NavLink>
              </div>
              <div>

                <NavLink to='/user' className={({ isActive }) => isActive ? 'color1 text-white lg:px-4 md:px-3   lg:py-2 md:py-1 rounded-full  lg:-mt-1  md:mt-0 ' : 'text-black mt-1'}>User Dashboard</NavLink>
              </div>
            </div>
            <div className='flex items-center justify-center max-sm:gap-4 gap-6'>
              <Link to='/fav' className='relative'>
                <p className={`absolute -right-4 -top-4 w-5 h-5 rounded-full text-[10px] max-sm:-right-3 max-sm:-top-3  max-sm:w-4 max-sm:h-4 max-sm:text-[8px]  flex items-center justify-center bg-gray-100 ${fav.length > 0 ? 'text-red-500' : 'text-black'} `}>{fav.length}</p>
                <BsHeart className="text-[15px]" />
              </Link>
              <Link to='/cart' className='relative'>
                <p className={`absolute -right-4 -top-4 w-5 h-5 max-sm:-right-3 max-sm:-top-3  max-sm:w-4 max-sm:h-4 max-sm:text-[8px] rounded-full text-[10px]   flex items-center justify-center bg-gray-100 ${cart.length > 0 ? 'text-red-500' : 'text-black'}`}>{cart.length}</p>
                <RiShoppingBasketFill />
              </Link>
              <div>
                <RiUserLine />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NavBar