import React, { useContext } from 'react'
import { dashProvider } from '../../../ContextApi/DashContext'

const LogoutDash = () => {
  let {handleLogout}=useContext(dashProvider)
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LogoutDash
