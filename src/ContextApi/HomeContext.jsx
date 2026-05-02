import React, { createContext } from 'react'

export const  homeProvider=createContext()

const HomeContext = ({children}) => {
  return (
    <homeProvider.Provider >
      {children}
    </homeProvider.Provider>
  )
}

export default HomeContext
