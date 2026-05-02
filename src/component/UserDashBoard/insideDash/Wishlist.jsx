import React, { useContext } from 'react'
import { dashProvider } from '../../../ContextApi/DashContext'

const Wishlist = () => {
  let {dashtab}=useContext(dashProvider)
  return (
    <div>
      {
        dashtab=== 'wish'&&(
          <div>Wish</div>
        )
      }
    </div>
  )
}

export default Wishlist
