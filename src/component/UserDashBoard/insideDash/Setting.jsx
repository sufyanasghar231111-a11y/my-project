import React, { useContext } from 'react'
import { dashProvider } from '../../../ContextApi/DashContext'

const Setting = () => {
    let {dashtab}=useContext(dashProvider)
  return (
    <div>
      {
        dashtab === 'setting' &&(
          <div>Setting</div>
        )
      }
    </div>
  )
}

export default Setting
