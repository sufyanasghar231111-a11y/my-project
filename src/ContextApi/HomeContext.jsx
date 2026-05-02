import React, { createContext, useState } from 'react'
import categories from '../component/Other/Data'

export const  homeProvider=createContext()

const HomeContext = ({children}) => {
      let [next, setNext]=useState(0)
      let [fade, setFade]=useState(true)
      let [data, setData] = useState(categories)
  
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
    <homeProvider.Provider value={{next, setNext,fade,setFade,handleNext, handlePre,setData,data}} >
      {children}
    </homeProvider.Provider>
  )
}

export default HomeContext
