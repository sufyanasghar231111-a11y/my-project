import React, { useContext, useEffect } from 'react'
import NavBar from '../home/Body/NavBar'
import LoginForm from './LoginForm'
import DashBoard from './DashBoard'
import { providerContext } from '../Other/AuthProvider'

const UserDash = () => {
    let {userInput,setUserInput,user, setUser, setIncorrect}=useContext(providerContext)

    useEffect(()=>{
      let pushData=JSON.parse(localStorage.getItem('users')) || []
      setUserInput(pushData)

      let data=JSON.parse(localStorage.getItem('logInUser'))
      if(data){
        setUser(data)
      }
    },[])
    

  function handleSubmit(email,password){

      let fetch=userInput.find((e)=> e.email=== email && e.password === password)

      if(fetch){
        localStorage.setItem('logInUser',JSON.stringify(fetch))
        setUser(fetch)
      }
    else{
      setIncorrect(true)
    }
  }

  return (
    <div className='pt-15'>
     
      {
        user ?   <DashBoard user={user} />: <LoginForm handleSubmit={handleSubmit} /> 
      }
     
    </div>
  )
}

export default UserDash
