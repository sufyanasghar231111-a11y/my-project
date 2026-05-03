import React, { useContext } from 'react'

import { providerContext } from '../../Other/AuthProvider'

const OrderDash = () => {
  let {dashtab}=useContext(providerContext)
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
