import React, { createContext, useEffect, useState } from 'react'
import categories from './Data'
import products from './SecData'
import testimonials from './CustomerTestimonials'
import Change from './Change'
import category from './Categoryjs'
import fashionProducts from './Categoryjs'
import services from '../Other/Service'
import  {getLocal}  from '../UserDashBoard/js/Login'
import { useNavigate } from 'react-router-dom'
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
  let [userInput, setUserInput]=useState([])
  let [user, setUser]=useState(()=>{
    let store=localStorage.getItem('logInUser')
    return store? JSON.parse(store):null
  })

  let [notName, setNotName]=useState(false)
  let [notEmail, setNotEmail]=useState(false)
  let [notPassword, setNotPassword]=useState(false)
  let [signloading, setSignloading]=useState(false)

  let [notloginpassword,setNotloginpassword]=useState(false)
  let [notloginemail, setNotloginemail]=useState(false)

  let [delay, setDelay]=useState(false)
  let [hideLog, setHideLog]=useState(false)
  let [anotherhide, setAnotherhide]=useState(false)
  let [hideEdit, setHideEdit]=useState(false)

  useEffect(()=>{
    // setLocal()
    let {log}=getLocal()

    setUserInput(log)
  },[])
  // localStorage.clear()
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
  
  function handleLogout(){
    setTimeout(() => {
      localStorage.removeItem('logInUser')
      setUser(null)
      localStorage.removeItem('logInUser')
      setDelay(false)
      setAnotherhide(false)
    }, 2000);
    setDelay(true)
  }

let [sign, setSign]=useState({
  name:'',
  email:'',
  password:''
})  

let navigate=useNavigate()
function handleSignSubmit(e){
  e.preventDefault()
  let newUser={
    name:sign.name,
    email:sign.email,
    password:sign.password,
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg"
  }

  setTimeout(() => {
    if(sign.name && sign.email && sign.password && sign.password.length>= 8){
      setUser(newUser)
      localStorage.setItem('logInUser',JSON.stringify(newUser))
      navigate('/user')
    }
    setSign({
 name:'',
 email:'',
 password:''

})
    setSignloading(false)
  }, 2000);

  
  setSignloading(true)
  setUserInput((prev) => [...(prev || []), newUser])
  let data=JSON.parse(localStorage.getItem('users')) || []
  data.push(newUser)
  localStorage.setItem('users', JSON.stringify(data))

  if(!sign.name){
    setNotName(true)
    setSignloading(false)
  }
  if(!sign.email){
    setNotEmail(true)
    setSignloading(false)
  }
  if(!sign.password){
    setNotPassword(true)
    setSignloading(false)
  }
  
}

function handlechange(e){
  setSign({
    ...sign,
    [e.target.name]:e.target.value
  })
}

  return (
    <providerContext.Provider value={{ data, secData, cart, setCart, addCart, addFav, fav, setFav, test, filterItem, setFilterItem, hide, setHide, change, setChange, sort, setSort, price, setPrice, filterColor, setFilterColor, fashion, setFashion, detail, setDetail, serviceData, loading, setLoading, inputs, setInputs, tab, setTab,userInput, setUserInput,handleLogout,sign, setSign,handleSignSubmit,handlechange,user, setUser,notName, setNotName,notPassword, setNotPassword,notEmail,setNotEmail,signloading,notloginemail, setNotloginemail,notloginpassword,setNotloginpassword,delay, setDelay,hideLog, setHideLog,anotherhide, setAnotherhide,hideEdit, setHideEdit}}  >
      {children}
    </providerContext.Provider>
  )
}

export default AuthProvider
