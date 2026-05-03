import React, { useContext } from 'react'
import { providerContext } from '../../Other/AuthProvider'

const LogoutDash = () => {
  let {handleLogout}=useContext(providerContext)
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LogoutDash
