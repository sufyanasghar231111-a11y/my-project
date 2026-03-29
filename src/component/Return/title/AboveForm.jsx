import React from 'react'

const AboveForm = () => {
    let arr= [
                 { num: 1, title: 'Start Your Return', desc: 'Fill out the form below or use your order confirmation email' },
                 { num: 2, title: 'Print Label', desc: "We'll email you a prepaid shipping label" },
                { num: 3, title: 'Ship It Back', desc: 'Drop off at any UPS location or schedule pickup' }
                ]
  return (
    <div className='flex  flex-wrap max-sm:items-center mt-10 gap-8 mb-8 items-center justify-center'>
        {arr.map((elem)=>{
            return <div key={elem.num}  >

      <div className=' color2 w-80 max-sm:w-70 max-sm:h-50 h-60 p-4 max-sm:p-3 text-center group hover:-translate-y-3 transition-all duration-300 hover:shadow-xl border border-indigo-100 hover:border-indigo-200 shadow-2xl rounded'>
        <div className="w-20 max-sm:w-14 max-sm:h-14 h-20 color1 text-white rounded flex items-center justify-center mx-auto mb-6 max-sm:mb-2 text-2xl max-sm:text-xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300"> {elem.num} </div>
        <h3 className="text-2xl max-sm:text-xl font-bold text-gray-800 mb-4 group-hover:text-indigo-600">{elem.title}</h3> 
        <p className="text-gray-600 leading-relaxed max-sm:text-sm max-sm:leading-6">{elem.desc}</p>
      </div>
            </div>
        })}
    </div>
  )
}

export default AboveForm
