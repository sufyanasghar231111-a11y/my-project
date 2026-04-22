import React, { useContext } from 'react'
import gradient4 from '../../../src/assets/gradient4.png'
import logo from '../../../src/assets/logo.png'
import { providerContext } from '../Other/AuthProvider'
import DashBoard from './DashBoard'
import { Link } from 'react-router-dom'
import { RiLoader4Line } from 'react-icons/ri'

function SigninForm() {
    let {sign,handleSignSubmit,handlechange,user,notName, setNotName,notPassword, setNotPassword,notEmail,setNotEmail,signloading}=useContext(providerContext)
   
  return (
    <div className=''>
        {
            user ? 
                <DashBoard user={user} />
            : 
              <div className='flex items-center justify-center min-h-[80vh]'>
            <div className='shadow-[0_0_15px_rgba(0,0,0,0.2)] shadow-purple-200 rounded max-sm:flex-col-reverse max-sm:w-full max-sm:px-2 max-sm:mx-3  w-170 px-2 pt-4 max-sm:py-2  flex   justify-start max-sm:gap-4 gap-15 '>
                <div className='w-80 max-sm:w-full   rounded overflow-hidden h-full relative'>
                  <div className='absolute flex max-sm:justify-start flex-col justify-between h-full py-3 px-5'>
                     <h1 className='font-medium max-sm:hidden  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>ADAAYA</h1>
                      <div className='mb-5'>
                        <p className='text-[12px] text-neutral-700 mb-2 '>You can easily</p>
                        <h1 className='text-2xl max-sm:text-xl font-semibold'> Get assess your personal hub For clarity and productivity.  </h1>
                      </div>
                  </div>
                    <img className='w-full max-sm:max-h-40 h-full object-cover' src={gradient4} alt="" />              
                </div>
                <form onSubmit={handleSignSubmit}   className='pt-2 max-sm:px-2' >
                    <div className='w-9 mb-4 flex gap-2 items-center'>
                        <img  src={logo} alt="" /> 
                        <h1 className='font-medium  md:hidden  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>ADAAYA</h1>
                    </div>
                    <h1 className='text-3xl max-sm:text-2xl font-semibold mb-2'> Please Login </h1>
                    <p className='text-[12px] max-sm:text-[10px] leading-4 text-neutral-400 mb-4'>Access your order, item, food anytime <br /> and anywhere - and acces more information</p>
                   
                    <div className=' mb-2'>
                        <h1 className='text-sm max-sm:text-[12px]'>Name: </h1>
                        <input name='name' value={sign.name} onChange={(e)=>{handlechange(e)
                            setNotName(false)
                        }}  type="name" placeholder='Enter name' className='px-2 py-2  text-sm mt-1 border-2  w-full border-gray-200 rounded focus:border-indigo-500  outline-0 transition-all duration-300 '  />
                        {
                            notName &&(
                                <h1 className={`text-[12px] text-red-400  transition-all duration-300 `}>Name Required: </h1>
                            )
                        }
                    </div>
                    <div className=' mb-1'>
                        <h1 className='text-sm max-sm:text-[12px]'>Email: </h1>
                        <input name='email' value={sign.email} onChange={(e)=>{handlechange(e)
                            setNotEmail(false)
                        }}  type="email" placeholder='Your@email.com' className='px-2 py-2  text-sm mt-1 border-2  w-full border-gray-200 rounded focus:border-indigo-500  outline-0 transition-all duration-300 '  />
                        {
                            notEmail &&(
                                <h1 className={`text-[12px] text-red-400  transition-all duration-300 `}>Email Required: </h1>
                            )
                        }
                    </div>
                    <div className='mb-1'>
                        <h1 className='text-sm max-sm:text-[12px]'>Password: </h1>
                        <input name='password' value={sign.password} onChange={(e)=>{handlechange(e)
                            setNotPassword(false)
                        }}  type="text" placeholder='Enter Password' className='px-2 py-2    text-sm mt-1 w-full border-2  border-gray-200 rounded focus:border-indigo-500  outline-0 transition-all duration-300 '  />
                        {
                            notPassword &&(
                                <h1 className={`text-[12px] text-red-400  transition-all duration-300 `}>Password Required: </h1>
                            )
                        }
                        {
                        sign.password.length <=7 && sign.password.length >3 ? (
                            <div className='text-[12px] text-red-400 '>
                                password is short
                            </div>
                        ):''
                        }
                    </div>
                    {
                        signloading ? (
                            <button disabled={signloading} className={`w-full mt-2 rounded px-2 py-2 color1 ${signloading? 'opacity-70 cursor-not-allowed':'opacity-100 cursor-pointer'} text-white font-semibold flex items-center justify-center  `}><RiLoader4Line className='w-5 h-5 rotate' /></button>
                        ):(
                            <button className='w-full mt-2 rounded px-2 py-2 color1 text-white font-semibold cursor-pointer'>Login</button>
                        )
                    }
                    
                    <div className='flex items-center font-medium pt-3 pb-2 justify-center'>
                        Already have an account ?
                     <Link to='/user' className=' pl-2 text-blue-600' > login</Link>
                    </div>
                </form>
            </div>
        </div>
            
        }

          
    </div>
  )
}

export default SigninForm