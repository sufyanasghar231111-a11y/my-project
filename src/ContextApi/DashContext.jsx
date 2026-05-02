import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocal, setLocal } from '../component/UserDashBoard/js/Login'
import dashboardData from '../component/Other/dash'

export const dashProvider=createContext()
const DashContext = ({children}) => {

    let [userInput, setUserInput]=useState([])
    let [user, setUser]=useState(() => {
  try {
    return JSON.parse(localStorage.getItem("logInUser")) || null;
  } catch {
    return null;
  }
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

    let [dashArr, setDashArr]=useState(dashboardData)
   let [dashtab, setDashtab]=useState('dashboard')
   const name=user?.name || ''
   console.log(name);
   
    const firstName=name.trim().split(' ')[0];

    const initial=(name.trim().split(' ')[0][0] + name.trim().split(' ').pop()[0]).toUpperCase()
    let [hideBar, setHideBar]=useState(true)
    useEffect(()=>{
      setLocal()
      let {log}=getLocal()
      setUserInput(log)
    },[])
    // localStorage.clear()
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
      localStorage.setItem('logInUser',JSON.stringify(user))
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
    <dashProvider.Provider value={{handleChangeEdit,userInput, setUserInput,user, setUser,notName, setNotName,notEmail, setNotEmail,notPassword, setNotPassword,handleEdit,handlechange,handleSignSubmit,incorrect,setIncorrect,delay,setDelay,setAnotherhide,anotherhide,handleLogout,hideEdit,setHideEdit,signloading, setSignloading,notloginpassword,setNotloginpassword,hideLog,setHideLog,notloginemail, setNotloginemail,dashArr, setDashArr,dashtab, setDashtab,firstName,initial,hideBar,setHideBar}}>
      {children}
    </dashProvider.Provider>
  )
}

export default DashContext
