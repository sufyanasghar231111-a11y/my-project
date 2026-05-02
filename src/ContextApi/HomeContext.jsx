import React, { createContext, useEffect, useState } from 'react'
import categories from '../component/Other/Data'
import testimonials from '../component/Other/CustomerTestimonials'

export const  homeProvider=createContext()

const HomeContext = ({children}) => {

    // all data is about home page 
      let [next, setNext]=useState(0)
      let [fade, setFade]=useState(true)
      let [data, setData] = useState(categories)
       let [time, setTime]=useState({ days:200,
   hours:10,
   min:10,
   sec:0})
   let [test, setTest] = useState(testimonials)


useEffect(()=>{
    let timer= setInterval(()=>{
        setTime((prev)=>{
            let {days,hours,min,sec}=prev
            if(sec>0){
                sec--
            }
            else{
                sec=59;
                if(min>0){
                    min--;
                }
                else{
                    min=59;
                    if(hours>0){
                        hours--;
                    }
                    else{
                        hours=23;
                        if(days>0){
                            days--
                        }
                        else{
                            clearInterval(timer)
                            return {days:0, hours:0,min:0,sec:0}
                        }
                    }
                }
            }
            return {days, hours,min,sec}
        })
    },1000)
    return ()=> clearInterval(timer)
},[])
    
      function handleNext(){
          setFade(false)
          setTimeout(()=>{
              setNext((prev) =>(prev+1) % data.length)
              setFade(true)
          },200)
      }
      function handlePre(){
          setFade(false)
          setTimeout(() => {
              setNext(prev=> prev === 0 ? data.length -1: prev-1)
          setFade(true)
          }, 200);
      }
  return (
    <homeProvider.Provider value={{next, setNext,fade,setFade,handleNext, handlePre,setData,data,time, setTime,test, setTest}} >
      {children}
    </homeProvider.Provider>
  )
}

export default HomeContext
