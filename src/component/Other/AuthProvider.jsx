import React, { createContext, useEffect, useState } from 'react'
import categories from './Data'
import products from './SecData'
import testimonials from './CustomerTestimonials'
import Change from './Change'
import category from './Categoryjs'
import fashionProducts from './Categoryjs'
import services from '../Other/Service'
import  {getLocal, setLocal}  from '../UserDashBoard/js/Login'
export const providerContext = createContext()




const AuthProvider = ({ children }) => {
  

  let [data, setData] = useState(categories)
  let [hide, setHide] = useState(false)
  let [filterColor, setFilterColor] = useState(null)
  let [fashion, setFashion] = useState(fashionProducts)
  let [secData, setSecData] = useState(products)
  let [change, setChange] = useState(() => {
    let store = localStorage.getItem('change')
    return store ? JSON.parse(store) : 'all'
  })
  let [test, setTest] = useState(testimonials)
  let [sort, setSort] = useState(null)
  let [price, setPrice] = useState(null)
  let [cart, setCart] = useState(() => {
    let store = localStorage.getItem('cart')
    return store ? JSON.parse(store) : []
  })
  let [fav, setFav] = useState(() => {
    let store = localStorage.getItem('fav')
    return store ? JSON.parse(store) : []
  })
  let [filterItem, setFilterItem] = useState(Change)
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
  let [localst, setLocalst]=useState([])
    let [falseEmail, setFalseEmail]=useState(false)
  useEffect(()=>{
    setLocal();
    const {log}=getLocal()
    setLocalst(log)
  },[])


  useEffect(() => {
    localStorage.setItem('change', JSON.stringify(change))
  }, [change])

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
    <providerContext.Provider value={{ data, secData, cart, setCart, addCart, addFav, fav, setFav, test, filterItem, setFilterItem, hide, setHide, change, setChange, sort, setSort, price, setPrice, filterColor, setFilterColor, fashion, setFashion, detail, setDetail, serviceData, loading, setLoading, inputs, setInputs, tab, setTab,localst, setLocalst,falseEmail, setFalseEmail }}  >
      {children}
    </providerContext.Provider>
  )
}

export default AuthProvider
