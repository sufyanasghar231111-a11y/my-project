import React, { useContext } from 'react'
import gradient4 from '../../../src/assets/gradient4.png'
import logo from '../../../src/assets/logo.png'
import { providerContext } from '../Other/AuthProvider'
import DashBoard from './DashBoard'

function SigninForm() {
    let {handleSigninsubmit,setSigninInput, signinInput,handleChangeSignin,user, setUser}=useContext(providerContext)
  return (
    <div className=''>
        {
            user ? (
                <DashBoard />
            ): (
                <div>
                    <form onSubmit={handleSigninsubmit}  className='pt-5 max-sm:px-2' >
                    <div className='w-9 mb-4 flex gap-2 items-center'>
                        <img  src={logo} alt="" /> 
                        <h1 className='font-medium  md:hidden  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'>ADAAYA</h1>
                    </div>
                    <h1 className='text-3xl max-sm:text-2xl font-semibold mb-2'> Please Login </h1>
                    <p className='text-[12px] max-sm:text-[10px] leading-4 text-neutral-400 mb-4'>Access your order, item, food anytime <br /> and anywhere - and acces more information</p>
                    <div className=' mb-2'>
                        <h1 className='text-sm max-sm:text-[12px]'>Name </h1>
                        <input name='name' value={signinInput.name}   onChange={handleChangeSignin}   type="name" placeholder='name' className='px-2 py-2  text-sm mt-1 border-2  w-full border-gray-200 rounded focus:border-indigo-500  outline-0 transition-all duration-300 '  />
                    </div>
                    <div className=' mb-2'>
                        <h1 className='text-sm max-sm:text-[12px]'>Email: </h1>
                        <input name='email' value={signinInput.email}  onChange={handleChangeSignin}    type="email" placeholder='Your@email.com' className='px-2 py-2  text-sm mt-1 border-2  w-full border-gray-200 rounded focus:border-indigo-500  outline-0 transition-all duration-300 '  />
                    </div>
                    <div className='mb-2'>
                        <h1 className='text-sm max-sm:text-[12px]'>Password: </h1>
                        <input name='password' value={signinInput.password} onChange={handleChangeSignin}   type="text" placeholder='Enter Password' className='px-2 py-2    text-sm mt-1 w-full border-2  border-gray-200 rounded focus:border-indigo-500  outline-0 transition-all duration-300 '  />
                    </div>
                    <button className='w-full mt-2 rounded px-2 py-2 color1 text-white font-semibold cursor-pointer'>Login</button>
                </form>
                </div>
            )
        }
        
    </div>
  )
}

export default SigninForm