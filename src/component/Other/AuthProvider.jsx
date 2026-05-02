import React, { createContext, useEffect, useState } from 'react'
import products from './SecData'
import Change from './Change'
// import category from './Categoryjs'
import fashionProducts from './Categoryjs'
import services from '../Other/Service'

export const providerContext = createContext()

const AuthProvider = ({ children }) => {
  
  
  let [fashion, setFashion] = useState(fashionProducts)
  let [secData, setSecData] = useState(products)
 
 
  let [cart, setCart] = useState(() => {
    let store = localStorage.getItem('cart')
    return store ? JSON.parse(store) : []
  })
  let [fav, setFav] = useState(() => {
    let store = localStorage.getItem('fav')
    return store ? JSON.parse(store) : []
  })
  let [detail, setDetail] = useState([])
  let [serviceData, setServiceData] = useState(services)

  let [tab, setTab] = useState('returns')
  let [inputs, setInputs] = useState({
    order: '',
    email: '',
    reason: '',
    component: '',
  })
  let [loading, setLoading] = useState(false)
  

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(fav))
  }, [fav])

  function addCart(elem) {
    let newcart = [...cart]
    let index = newcart.findIndex((item) => item.id == elem.id)
    if (index === -1) {
      newcart.push(elem)
    }
    else {
      newcart.splice(index, 1)
    }
    setCart(newcart)
  }

  function addFav(elem) {
    let newfav = [...fav]
    let index = newfav.findIndex((item) => item.id === elem.id)
    if (index === -1) {
      newfav.push(elem)
    }
    else {
      newfav.splice(index, 1)
    }
    setFav(newfav)
  }  
  
  

  return (
    <providerContext.Provider value={{  secData, cart, setCart, addCart, addFav, fav, setFav, fashion, setFashion, detail, setDetail, serviceData, loading, setLoading, inputs, setInputs, tab, setTab,setServiceData, setSecData}}  >
      {children}
    </providerContext.Provider>
  )
}

export default AuthProvider
