import gsap from 'gsap'
import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Animation = ({children}) => {
    let currentPath=useLocation().pathname
    let container=useRef()
    let delay=useRef()
  useEffect(function(){

    let tl=gsap.timeline()
     tl.to(container.current,{
      display:'flex'
    })
    tl.from('.stair',{
      height:0,
      
      stagger:{
        amount:-0.15,
      },

    })
    tl.to('.stair',{
      y:'100%',
      stagger:{
        amount:-0.15
      }
    })

    tl.to(container.current,{
      display:'none',
    })

    tl.to('.stair',{
      y:'0%',
      stagger:{
        amount:-0.15
      }
    })
    gsap.from(delay.current,{
        opacity:0,
        delay:1.3,
        scale:1.06,
        transformOrigin: "center center"
    })
  },[currentPath])
  return (
    <div>
      <div ref={container} className='h-screen w-full flex fixed z-10  pointer-events-none top-0'>
  
  <div className='stair h-full w-1/5 bg-[#3e0a2f]/80'></div>

  <div className='stair h-full w-1/5 bg-[#850f45]/80'></div>

  <div className='stair h-full w-1/5 bg-[#c3145a]/80'></div>

  <div className='stair h-full w-1/5 bg-[#ff4d6d]/80'></div>

  <div className='stair h-full w-1/5 bg-[#ff8fa3]/80'></div>

</div>
<div className='overflow-hidden'>

      <div ref={delay} >
        {children}
      </div>
</div>
    </div>
  )
}

export default Animation
