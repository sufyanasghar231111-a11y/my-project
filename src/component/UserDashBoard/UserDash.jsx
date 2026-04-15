import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../home/Body/NavBar'
import gradient4 from '../../../src/assets/gradient4.png'
import logo from '../../../src/assets/logo.png'
import { providerContext } from '../Other/AuthProvider'
import LoginForm from './LoginForm'
import DashBoard from './DashBoard'

const UserDash = () => {
    let {userInput,setUserInput}=useContext(providerContext)
    let [user, setUser]=useState(null)
    // localStorage.clear()

    useEffect(()=>{
      let data=localStorage.getItem('logInUser')
      if(data){
        JSON.parse(data)
        setUser(data)
      }
    },[])

  function handleSubmit(email,password){
    let fetch=userInput.find((e)=> e.email=== email && e.password === password)
    if(fetch){
      localStorage.setItem('logInUser',JSON.stringify(fetch))
      setUser(fetch)
    }
    
  }

  return (
    <div className='pt-20'>
      {
        user ?   <DashBoard />: <LoginForm handleSubmit={handleSubmit} /> 
      }
     
    </div>
  )
}

export default UserDash
