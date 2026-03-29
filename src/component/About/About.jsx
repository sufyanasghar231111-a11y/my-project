import React from 'react'
import NavBar from '../home/Body/NavBar'
import Service from './AboutSection/Service'
import Team from './AboutSection/Team'

function About() {
  return (
    <div>
      <div className='pt-15'>
        <div className='w-full h-[91vh] relative max-sm:h-[87vh]'>
          <div className=' absolute flex items-center justify-center w-full h-full'>
            <h1 className='text-white text-6xl uppercase max-sm:text-3xl'>
            About Us 
            </h1>
          </div>
        <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/02/a3/c6/02a3c651da95df5f750ed43d48d276fc.jpg" alt="" />
        </div>
      </div>

      <Service />
      <Team />
    </div>
  )
}

export default About