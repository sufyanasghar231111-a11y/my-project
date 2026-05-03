import React, { createContext, useEffect, useState } from 'react'
import products from './SecData'
import Change from './Change'
// import category from './Categoryjs'
import fashionProducts from './Categoryjs'
import services from '../Other/Service'
import { useNavigate } from 'react-router-dom'
import dashboardData from '../Other/dash'
import {getLocal, setLocal} from '../UserDashBoard/js/Login'

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
  
    let [userInput, setUserInput]=useState([])
    let [user, setUser]=useState(() => {
  try {
    return JSON.parse(localStorage.getItem("logInUser")) || null;
  } catch {
    return null;
  }
})

  useEffect(() => {
 
    setLocal()
    let {log}=getLocal()
  setUserInput(log);
}, []);


  
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
    let [dashArr, setDashArr]=useState(dashboardData)
   let [dashtab, setDashtab]=useState('dashboard')
   let [hideBar, setHideBar]=useState(true)


   const name = user?.name || '';  
  const firstName = name.trim().split(' ')[0];
  const initial = (name.trim().split(' ')[0][0] + name.trim().split(' ').pop()[0]).toUpperCase();

      function handleLogout(){
    setTimeout(() => {
      localStorage.removeItem('logInUser')
      setUser(null)
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

let [editForm, setEditForm]=useState({
  name:user?.name,
  email:user?.email
})

let [incorrect, setIncorrect]=useState(false)

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

function handleEdit(e){
  e.preventDefault()
  setUser(prev => ({
    ...(prev || {}),
    name:editForm.name,
    email:editForm.email
  }))

  setHideEdit(false)

  setEditForm({
    name:editForm.name,
    email:editForm.email
  })
}

 useEffect(()=>{
  if(user){

    localStorage.setItem('logInUser',JSON.stringify(user))
  }
  else{
    localStorage.removeItem('logInUser')
  }
    },[user])

    useEffect(() => {
  setEditForm({
    name: user?.name || "",
    email: user?.email || ""
  })
}, [user])

function handleChangeEdit(e){
  const {name,value}=e.target
  setEditForm(prev =>({
    ...prev,
    [name]:value
  }))
}     

  return (
    <providerContext.Provider value={{  secData, cart, setCart, addCart, addFav, fav, setFav, fashion, setFashion, detail, setDetail, serviceData, loading, setLoading, inputs, setInputs, tab, setTab,setServiceData, setSecData,handleChangeEdit,userInput, setUserInput,user, setUser,notName, setNotName,notEmail, setNotEmail,notPassword, setNotPassword,handleEdit,handlechange,handleSignSubmit,incorrect,setIncorrect,delay,setDelay,setAnotherhide,anotherhide,handleLogout,hideEdit,setHideEdit,signloading, setSignloading,notloginpassword,setNotloginpassword,hideLog,setHideLog,notloginemail, setNotloginemail,dashArr, setDashArr,dashtab, setDashtab,firstName,initial,hideBar,setHideBar}}  >
      {children}
    </providerContext.Provider>
  )
}

export default AuthProvider
