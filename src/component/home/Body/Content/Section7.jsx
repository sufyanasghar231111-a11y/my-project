import React from 'react'
import logo from '../../../../assets/logo.png'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { RiMailLine, RiMapPin2Line, RiPhoneLine } from 'react-icons/ri';

function Section7() {
  return (
    <div className="mt-16 mb-10">
      <div className="w-full h-[5px] color"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          
          <div className="flex flex-col sm:flex-row gap-10">

           
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <img className="w-12 sm:w-14" src={logo} alt="logo" />
                <h1 className="font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  ADAAYA
                </h1>
              </div>

              <p className="text-sm leading-5 text-gray-600 max-w-sm">
                <span className="text-[15px] font-semibold">Lorem.</span> ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur voluptate Lorem ipsum dolor sit amet.
              </p>

              <div className="flex items-center gap-4 mt-4">
                <div className="p-2 bg-gray-200 rounded-full hover:text-blue-500 transition">
                  <FaFacebook />
                </div>
                <div className="p-2 bg-gray-200 rounded-full hover:text-blue-400 transition">
                  <FaTwitter />
                </div>
                <div className="p-2 bg-gray-200 rounded-full hover:text-red-500 transition">
                  <FaInstagram />
                </div>
              </div>
            </div>

            
            <div className="flex-1">
              <h1 className="mb-3 font-semibold">Quick Links</h1>

              <div className="flex flex-col text-sm w-fit gap-1 text-gray-600">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/category">Category</Link>
                <Link to="/about">About</Link>
                <Link to="/return">Return & FAQ</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/user">User Dashboard</Link>
              </div>
            </div>
          </div>

          
          <div className="flex flex-col sm:flex-row gap-10">

            
            <div className="flex-1">
              <h1 className="font-semibold mb-3">Support</h1>

              <div className="text-sm text-gray-600 space-y-1">
                <p className="flex items-center gap-2">
                  <RiMailLine className="text-red-500" />
                  support@azawa.com
                </p>
                <p className="flex items-center gap-2">
                  <RiPhoneLine className="text-red-500" />
                  +1 800 090 2020
                </p>
                <p className="flex items-center gap-2">
                  <RiMapPin2Line className="text-red-500" />
                  Canada, Houston
                </p>
              </div>
            </div>

            
            <div className="flex-1">
              <h1 className="font-semibold mb-3">Stay Update</h1>
              <p className="text-sm text-gray-600 mb-3">
                Subscribe to receive updates, offers & news
              </p>

              <div className="flex items-center bg-gray-200 rounded-full p-1 max-w-md ">
                <input
                  className="flex-1 bg-transparent w-full md:text-sm  px-3 py-2 outline-none lg:text-sm"
                  placeholder="Enter your email"
                />
                <button className="px-4 py-2 lg:text-sm md:text-[10px] font-semibold text-white color rounded-full">
                  Join
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7
