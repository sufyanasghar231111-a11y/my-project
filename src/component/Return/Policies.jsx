import React from 'react'

const Policies = () => {
       const policies = [
    { icon: '📦', title: 'Free Returns', desc: 'Prepaid labels for all returns within 30 days' },
    { icon: '⚡', title: 'Fast Refunds', desc: 'Processed within 5-7 business days' },
    { icon: '🌍', title: 'Worldwide', desc: 'Returns accepted from all countries' },
    { icon: '🛡️', title: 'Secure', desc: '100% money-back guarantee' }
  ];


  return (
    <div className='pt-10'>
      <section className="bg-white/70 backdrop-blur-xl  shadow-2xl overflow-hidden"> 
      <div className="color1 p-12 text-white text-center"> <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Policies</h2> <p className="text-xl opacity-95">Key information about returns, shipping, and more</p> </div> 
      
      <div className="p-12"> <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> {policies.map((policy, index) => ( <div key={index} className="text-center p-8 color2 rounded hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-indigo-100 group hover:border-indigo-200" > <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300"> {policy.icon} </div> <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-500"> {policy.title} </h3> <p className="text-gray-600 leading-relaxed">{policy.desc}</p> </div> ))} </div> </div> </section>
    </div>
  )
}

export default Policies
