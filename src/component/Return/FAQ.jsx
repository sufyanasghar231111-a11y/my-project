import React, { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri';

function FAQ() {
    
      const faqs = [
        {
          id: 'policy',
          question: 'What is your return policy?',
          answer: 'We offer free returns within 30 days of delivery. Items must be unused and in original packaging with tags attached. Sale items are eligible for exchange or store credit only.'
        },
        {
          id: 'track',
          question: 'How do I track my return?',
          answer: 'Once we receive your return request, you\'ll get a tracking number via email. You can also track your return in your account under "My Orders."'
        },
        {
          id: 'refund',
          question: 'When will I get my refund?',
          answer: 'Refunds are processed within 5-7 business days after we receive your return. It may take 3-5 additional business days for the funds to appear in your account.'
        },
        {
          id: 'sale',
          question: 'Can I return sale items?',
          answer: 'Sale items can be returned for store credit or exchanged for another item of equal or greater value within 30 days.'
        },
        {
          id: 'nonreturnable',
          question: 'What items cannot be returned?',
          answer: 'Personalized items, hygiene products, and gift cards are non-returnable. Swimwear must have tags attached and be unworn.'
        },
        {
          id: 'nonreturnables',
          question: 'What items cannot be returned?',
          answer: 'Personalized items, hygiene products, and gift cards are non-returnable. Swimwear must have tags attached and be unworn.'
        },
      ];

      let [acco,setAcco]=useState({})
      function handleAcco(id){
        setAcco(prev => ({
            ...prev,
            [id]:!prev[id]
        }))
      }


  return (
    <div className='pt-15 px-2 max-sm:pt-11 '>
        <div className='flex flex-col items-center justify-center text-center px-5'>
            <button className='border rounded-sm px-4 py-2 border-pink-500 font-semibold text-[15px] max-sm:text-[12px] color3 text-pink-400 '>Frequently Asked Question </button>
            <h1 className='pt-1 font-semibold lg:text-5xl md:text-3xl text-2xl max-sm:text-xl'>Your Question, Our Expertise.</h1>
            <p className='pt-3 max-sm:pt-1 mb-4 text-sm w-135 text-[#838383] max-sm:w-full max-sm:text-[11px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quas deserunt magni nemo ratione eligendi excepturi? Delectus quia inventore consectetur.</p>
        </div>
        <div className='py-10 max-sm:py-7 px-7 max-sm:px-1 flex flex-col lg:gap-6 max-sm:gap-3 gap-4 md:gap-5'>
            <div className='flex max-sm:flex-col flex-wrap max-sm:gap-3 items-center justify-center md:gap-5 gap-4 lg:gap-6'>
              {faqs.map((elem)=>{
              return   <div key={elem.id}>
                <div onClick={()=>{handleAcco(elem.id)}} className=' border max-w-xl  max-sm:gap-5 gap-4 p-3 rounded flex items-center justify-between'>
                <div  className='cursor-pointer'>
                    <h1 className='font-semibold max-sm:text-[14px] lg:text-[16px] md:text-[13px]'>{elem.question}</h1>
                    <div className={` ${acco[elem.id]?'max-h-30':'max-h-0'} transition-all  duration-500 overflow-hidden`}>
                <h1 className='pt-4 text-sm max-sm:text-[11px]'>{elem.answer}</h1>
                    </div>
                </div>
                <h1 className={`text-lg font-semibold transition-all ease-in-out duration-500  ${acco[elem.id]?'rotate-90':'rotate-45'} cursor-pointer`} ><RiCloseLine /></h1>
            </div>
                </div>
              })}
            
           
            
          
            </div>
            
        </div>
        <div className='py-10 max-sm:py-5 max-sm:px-1 px-10 '>
            <div className='w-full  color3 flex-col text-center px-4 flex items-center justify-center'>
                <h1 className='text-3xl max-sm:text-lg max-sm:pt-3 max-sm:mb-3 font-semibold pt-6  mb-6'>Didn't Find What you were looking for?</h1>
                <p className='w-100 max-sm:w-full max-sm:text-[11px] text-[#838383] text-sm mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab rerum repellendus illum cum, ut optio!</p>
                <button className='px-4  max-sm:text-[13px] py-2 rounded mb-7 color1 font-semibold text-white cursor-pointer'>Speak With an expert</button>
            </div>
        </div>
    </div>
  )
}

export default FAQ