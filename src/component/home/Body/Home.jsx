import React, { useEffect, useRef, useState } from 'react'
import NavBar from './NavBar'
import Left from './Left'
import Right from './Right'
import cleanup from '../../../assets/cleanup.png'
import Section from './Content/Section'
import Section1 from './Content/Section1'
import Section2 from './Content/Section2'
import Section3 from './Content/Section3'
import Section4 from './Content/Section4'
import Section5 from './Content/Section5'
import Section6 from './Content/Section6'
import Section7 from './Content/Section7'
import gsap from 'gsap'

function Home() {
 
  
  return (
    <div className=''>
      

       <div className='pt-18 '>
        <div className='color text-white p-3 h-12 w-full md:w-full '>
          <h1 className='max-sm:text-[14px]'>Limited Vacation & Super Offers</h1>
        </div>
      </div>

      <div  className='w-full relative flex  items-center max-sm:pt-2 justify-between md:gap-5 lg:gap-0 px-17 pt-8 md:pt-2 lg:pt-11 md:px-10 lg:px-17  max-sm:px-5 max-sm:flex-col '>
              <div  className='w-1/2  max-sm:w-full '>
              <Left />
              </div>
              <div className='max-sm:w-full'> 
              <Right />
              </div>
            </div>
            <div>
              <Section />
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
              <Section7 />
            </div>
    </div>
  )
}

export default Home