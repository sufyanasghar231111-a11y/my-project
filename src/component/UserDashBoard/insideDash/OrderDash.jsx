import React, { useContext } from 'react'
// import { providerContext } from '../../Other/AuthProvider'
import { dashProvider } from '../../../ContextApi/DashContext'

const OrderDash = () => {
  let {dashtab}=useContext(dashProvider)
  return (

    <div>
      {
        dashtab === 'order' &&(
          <div>
            hello order
          </div>
        )
      }
    </div>
  )
}

export default OrderDash
