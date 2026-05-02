import React, { createContext } from 'react'

export const dashProvider=createContext()
const DashContext = ({children}) => {
    
  return (
    <div>
      {children}
    </div>
  )
}

export default DashContext
