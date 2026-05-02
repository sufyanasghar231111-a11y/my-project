import React, { useContext } from 'react'
import { providerContext } from '../../Other/AuthProvider'

const Setting = () => {
    let {dashtab}=useContext(providerContext)
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
