





 

import React, { useContext, useState } from 'react'
import NavBar from '../home/Body/NavBar'
import AboveForm from './title/AboveForm';
import { providerContext } from '../Other/AuthProvider';
import FAQ from './FAQ';
import Policies from './Policies';

function Return() {

  let {tab,setTab,loading,setLoading,inputs, setInputs}=useContext(providerContext)
  const tabs = [
      { id: 'returns', label: 'Returns', icon: '📦' },
      { id: 'faq', label: 'FAQ', icon: '❓' },
      { id: 'policies', label: 'Policies', icon: '📋' }
    ];

    function handleSubmit(e){
      e.preventDefault();
      setInputs({
        order:'',
        email:'',
        return:"Doesn't fit",
        component:''
      })

       if(!inputs.order || !inputs.email || !inputs.reason || !inputs.component ){
        setLoading(false)
      
      }
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },3000)
      

      
    }
    function handleChange(e){
       setInputs({
        ...inputs,
        [e.target.name]:e.target.value
      })
      
    }
    
  return (
    <div className=' relative'>
      <div className='pt-20 color1 max-sm:w-full h-80 max-sm:h-60'>
        <div className='text-center flex items-center justify-center h-full flex-col   text-white'>
          <h1 className='text-5xl max-sm:text-3xl font-semibold'>Help Center </h1>
          <p className='pt-5 font-semibold text-xl max-sm:text-[15px] max-sm:pt-2'>Return & FAQ</p>
        </div>
      </div>
      <div className='flex items-center max-sm:px-4 max-sm:gap-2 justify-center pt-8 gap-5 text-black'>
        {tabs.map((elem)=>{
         return  <div key={elem.id}>
          <button  onClick={()=>{setTab(elem.id)}} className={`px-6 py-5 max-sm:px-3 max-sm:py-3 transition-all duration-300 rounded ${tab === elem.id?' color1 text-white':' color2 text-black'} font-semibold max-sm:gap-2 cursor-pointer max-sm:text-[15px]  text-xl flex  gap-4`}><span className=''>{elem.icon}</span> {elem.label}</button>
         </div>
        })}
      </div>
      {
        tab ==='returns'? (
          <>
          <AboveForm />
          <div className='mt-10  flex items-center  justify-center mb-5 px-1'>
        <form onSubmit={handleSubmit} className='color2 max-sm:mx-4  mt-10 w-full max-w-md sm:max-w-lg  md:max-w-2xl lg:max-w-3xl  space-y-6'>
          <div className='py-6 px-4 sm:px-6 md:px-10 lg:px-12 '>
            <div className='mb-3'>
            <label className=" text-sm font-semibold text-gray-700 mb-1">Order Number</label>
          <input required name='order' type="text" value={inputs.order}  onChange={handleChange} placeholder='e.g., ORD-123456' className='w-full max-sm:max-w-full p-4 max-sm:p-2 border-2 border-gray-200 rounded focus:border-indigo-500  outline-0 transition-all duration-300  ' />
            </div>
            <div className='mb-3'>
            <label className=" text-sm font-semibold text-gray-700 mb-1">Email Address</label>
          <input required name='email' type="email" value={inputs.email} onChange={handleChange} placeholder='your@email.com' className='w-full max-sm:max-w-full p-4 max-sm:p-2  border-2 border-gray-200 rounded focus:border-indigo-500  outline-0 transition-all duration-300  ' />
            </div>
            <div className='mb-3'>
            <label className=" text-sm font-semibold text-gray-700 mb-1">Reason for Return</label>
            <select required name='return' value={inputs.reason} onChange={handleChange} className="w-full max-sm:max-w-full p-4 max-sm:p-2 border-2  border-gray-200 rounded focus:border-indigo-500 outline-0  transition-all duration-300 "> <option>Doesn't fit</option> <option>Wrong item received</option> <option>Changed my mind</option> <option>Defective/Damaged</option> <option>Other</option> </select>
            </div>
            <div className='mb-3'>
            <label className=" text-sm font-semibold text-gray-700 mb-1">Additional Comments</label>
          <textarea required name='component' value={inputs.component} onChange={handleChange} rows='4' type="text" placeholder='Example: ORD-1234' className='w-full max-sm:max-w-full p-4 max-sm:p-2 border-2 border-gray-200 rounded focus:border-indigo-500  outline-0 transition-all duration-300  ' />
          <div className='flex items-center justify-center pt-4'>
          <button type='submit'  className='px-4  py-2 rounded color1 text-white font-semibold w-full max-sm:w-full text-[17px] max-sm:text-[14px] cursor-pointer shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300'>Request Submit</button>
          </div>
            </div>
          </div>
        </form>
      </div>
          </>
      
    ):''
      }
      {
        loading &&
       
          (<div className=' absolute mb-3  max-sm:right-[16%] max-sm:bottom-70 right-3 bottom-3'>
        <button className={`rounded px-4 py-2 bg-green-500 text-white font-semibold transition-all duration-500 opacity-100 -translate-y-10 max-sm:text-sm flex items-center gap-2`} ><span>✅</span> Request Sent Successfully </button>
      </div>)
        
      }
      {
        tab ==='faq'? (
          <FAQ />
        ):''
      }
      {
        tab ==='policies'? (
          <Policies  />
        ):''
      }
      
    </div>
  )
}

export default Return