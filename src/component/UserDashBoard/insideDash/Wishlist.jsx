import React, { useContext } from 'react'
import { providerContext } from '../../Other/AuthProvider'

const Wishlist = () => {
  let {dashtab}=useContext(providerContext)
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
