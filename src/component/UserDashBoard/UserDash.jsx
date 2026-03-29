import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../home/Body/NavBar'
import gradient4 from '../../../src/assets/gradient4.png'
import logo from '../../../src/assets/logo.png'
import { providerContext } from '../Other/AuthProvider'
import LoginForm from './LoginForm'
import DashBoard from './DashBoard'

const UserDash = () => {
  let {localst, setLocalst,falseEmail, setFalseEmail}=useContext(providerContext)
  let [user, setUser]=useState(null)

  // localStorage.clear()
  useEffect(() => {
  let logName = localStorage.getItem('logInUser');
  if (logName) {
    let userData = JSON.parse(logName);
    setUser(userData);
  }
}, []);
  function handleUser(email,password){
    if(localst){
        let users=localst.find((e)=> email === e.email && password=== e.password) 
        if(users){
          setUser(users)
          localStorage.setItem('logInUser',JSON.stringify(users) )
          setFalseEmail(false)
        }else{
          setFalseEmail(true)          
        }
      }
  }
  return (
    <div>
      <div className='pt-20 '>
       {
        user ? <DashBoard  user={user} setUser={setUser} /> :<LoginForm handleUser={handleUser} />
       }       
      </div>
    </div>
  )
}

export default UserDash
