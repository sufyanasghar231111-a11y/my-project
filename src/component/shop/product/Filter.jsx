import React, { useContext, useState } from 'react'
import { providerContext } from '../../Other/AuthProvider'
import { RiCheckLine, RiCloseFill, RiFilterLine, RiStarSLine } from 'react-icons/ri'


function Filter() {
    let {filterItem,hide,setHide,change,setChange,sort,setSort,price,setPrice,filterColor, setFilterColor}=useContext(providerContext)

    let [rate, setRate]=useState(null)   
    
    let [colorRating, setcolorRating]=useState(0)

  return (
    <div>
        <div className='px-4 md:px-6 lg:px-10 pb-3 w-full flex flex-col lg:flex-row max-sm:px-4    lg:gap-10 gap-6'>
            <div className='lg:w-[28%] w-full   shadow-sm px-4 py-4 lg:sticky lg:top-20 h-fit'>
                <div className='flex items-center justify-between pb-6 pt-4'>
                    <div className='flex items-center  gap-2'>

                    <div className='bg-purple-200 px-2 py-2 rounded  '>
                        <RiFilterLine className='text-purple-700 w-4 h-4' />
                    </div>
                    <div className='leading-5'>

                        <p className='font-medium'>Filter</p>
                        <p className='text-sm'>Products</p>
                    </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h1>Close </h1>
                        <div className='px-1 cursor-pointer py-1 rounded-full bg-gray-200'>
                        <RiCloseFill />
                        </div>
                    </div>
                </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-4'>
                <div className='flex flex-col gap-3'>

                <button className={`${change === 'all'?'color1 text-white':'shadow-sm'} lg:px-10 md:px-6 px-4 py-2 rounded transition-all duration-200 cursor-pointer flex items-center gap-2 font-medium text-black`}
                 onClick={()=>{setChange('all')
                    setHide(false)
                    
                }}>{change ==="all"?<RiCheckLine />:''} All</button>
            <button  className={`${change === 'clothes'?'color1 text-white':'shadow-sm'} lg:px-10 md:px-6 px-4 py-2 transition-all duration-300 rounded cursor-pointer flex items-center gap-2 font-medium text-black`}  onClick={()=>{setChange('clothes')
            setHide(true)
            
            }}>{change ==="clothes"?<RiCheckLine />:''} Clothes</button>
                </div>
        <div className='flex flex-col gap-3'>

            <button className={`${change === 'shirt'?'color1 text-white':'shadow-sm'} lg:px-10 md:px-6 px-4 py-2 rounded transition-all duration-200 cursor-pointer flex items-center gap-2 font-medium text-black`}   onClick={()=>{setChange('shirt')
                setHide(true)
                
            }}>{change ==="shirt"?<RiCheckLine />:''} Shirt</button>
            <button className={`${change === 'shoes'?'color1 text-white':'shadow-sm'} lg:px-10 md:px-6 px-4 py-2 rounded transition-all duration-200 cursor-pointer flex items-center gap-2 font-medium text-black`}  onClick={()=>{setChange('shoes')
                 setHide(true)
               
                 }}  >{change ==="shoes"?<RiCheckLine />:''} Shoes</button>           
        </div>
            </div>
            <div className='pt-5'>
                <p className='text-yellow-400 text-[17px] font-medium'>Filter By Rating </p>
                <button className={`${rate ===null? 'hidden':'flex'}  px-5 py-2 rounded bg-amber-300 font-semibold text-white pt-2`} onClick={()=>{ setRate(null)
                    setcolorRating(0)
                    
                }}>Reset</button>
            <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 lg:gap-0.5 xl:gap-2 md:gap-3 pt-5 justify-items-center'>
               <button     onClick={()=> {setRate([0,1])
                setcolorRating(1)
               }  }  className={`w-full items-center   justify-center flex  cursor-pointer flex-col gap-2 ${colorRating >=1?'text-yellow-400':'text-black'}    px-3 rounded text-[16px] py-3 shadow-sm`}>0-1 <span><RiStarSLine className='w-6 h-6' /></span></button>
               <button    onClick={()=> {setRate([1,2])
                setcolorRating(2)} } className={`flex w-full items-center  justify-center  cursor-pointer ${colorRating >=2?'text-yellow-400':'text-black'}   flex-col gap-2 px-3 rounded text-[16px] py-3 shadow-sm`}>1-2 <span><RiStarSLine className='w-6 h-6' /></span></button>
               <button     onClick={()=> {setRate([2,3])
                setcolorRating(3)} } className={`flex w-full items-center  justify-center  cursor-pointer ${colorRating >=3?'text-yellow-400':'text-black'}  flex-col gap-2 px-3 rounded text-[16px] py-3 shadow-sm`}>2-3 <span><RiStarSLine className='w-6 h-6' /></span></button>
               <button    onClick={()=> {setRate([3,4])
                setcolorRating(4)} } className={`flex w-full items-center  justify-center   cursor-pointer ${colorRating >=4?'text-yellow-400':'text-black'}  flex-col gap-2 px-3 rounded text-[16px] py-3 shadow-sm`}>3-4 <span><RiStarSLine className='w-6 h-6' /></span></button>
               <button     onClick={()=> {setRate([4,5]) 
                setcolorRating(5)}} className={`flex w-full items-center  justify-center  cursor-pointer ${colorRating >=5?'text-yellow-400':'text-black'}   flex-col gap-2 px-3 rounded text-[16px] py-3 shadow-sm`}>4-5 <span><RiStarSLine className='w-6 h-6' /></span></button>
            </div>
            </div>
            <div className='grid grid-cols-2 gap-2 md:gap-3 pt-5 mb-3'>
                <button className={`flex items-center gap-2 shadow-sm duration-200  px-10 py-3 rounded font-semibold ${sort ==='high'? 'color1 text-white':'text-black'} `} onClick={()=>
                {setSort('high')
                    setHide(true)
                    
                }}>{sort ==="high"?<RiCheckLine />:''} Higher</button>
                <button className={`flex items-center gap-2 shadow-sm px-10 duration-200 py-3 rounded font-semibold ${sort ==='low'? 'color1 text-white':'text-black'}`} onClick={()=>{setSort('low')
                    setHide(true)
                }}>{sort ==="low"?<RiCheckLine />:''} low</button>
            </div>
            <div className='flex flex-wrap gap-2 pt-5'>
                <button className={`w-5 h-5 rounded-full ${filterColor=== "green"?'bg-white border-2 border-green-500':'bg-green-500'} `} onClick={()=>{setFilterColor('green')
                    setHide(true)
                    
                }}>
                    {filterColor ==="green"?<RiCheckLine className='w-4 h-4 text-black' />:''}
                </button>
                <button className={`w-5 h-5 rounded-full ${filterColor=== "black"?'bg-white border-2 border-black':'bg-black'} `} onClick={()=>{setFilterColor('black')
                    setHide(true)
                }}>
                    {filterColor ==="black"?<RiCheckLine className='w-4 h-4' />:''}
                </button>
                <button className={`w-5 h-5 rounded-full ${filterColor=== "blue"?'bg-white border-2 border-blue-500':'bg-blue-500'} `} onClick={()=>{setFilterColor('blue')
                     setHide(true)
                }}>
                     {filterColor ==="blue"?<RiCheckLine className='w-4 h-4' />:''}
                </button>
                <button className={`w-5 h-5 rounded-full ${filterColor=== "skin"?'bg-white border-2 border-[#f0a249]':'bg-[#f0a249]'} `} onClick={()=>{setFilterColor('skin')
                     setHide(true)
                }}>
                     {filterColor ==="skin"?<RiCheckLine className='w-4 h-4' />:''}
                </button>
                <button className={`w-5 h-5 rounded-full ${filterColor=== "white"?'bg-white border-2 border-gray-200':'bg-gray-200'} `} onClick={()=>{setFilterColor('white')
                     setHide(true)
                }}>
                     {filterColor ==="white"?<RiCheckLine className='w-4 h-4' />:''}
                </button>
                <button className={`w-5 h-5 rounded-full ${filterColor=== "red"?'bg-white border-2 border-red-500':'bg-red-500'} `} onClick={()=>{setFilterColor('red')
                     setHide(true)
                }}>
                     {filterColor ==="red"?<RiCheckLine className='w-4 h-4' />:''}
                </button>
                <button className={`w-5 h-5 rounded-full ${filterColor=== "gray"?'bg-white border-2 border-gray-500':'bg-gray-500'} `} onClick={()=>{setFilterColor('gray')
                     setHide(true)
                }}>
                     {filterColor ==="gray"?<RiCheckLine className='w-4 h-4' />:''}
                </button>
            </div>
            </div>
            <div className='flex-1  '>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-3' >
            {filterItem.map((elem)=>{       
                return (
                    <>
                    {elem.tags.filter(tagitem =>
                        rate === null?true:tagitem.rating >= rate[0] && tagitem.rating <= rate[1]
                    )
                    
                    .filter( elem => price=== null?true:elem.price>=price[0] && elem.price<=price[1])
                    .sort((a,b)=>{
                        if(sort==='high'){return b.price-a.price}
                        if(sort==='low'){return a.price-b.price}
                        return 0
                    } ) 

                   .filter(elem => filterColor=== null? true:elem.color===filterColor)
                   .filter(elem => change=== "all"? true:elem.names.includes(change))
                    .map((elem,index)=>{
                        return <div key={index} className='w-full shadow-sm mb-3 overflow-hidden rounded '>
                            <div className='w-full md:h-40 lg:h-48 h-32'>
                            <img className='w-full h-full object-cover  transform origin-center hover:scale-105 transition duration-400 cursor-pointer' src={elem.image} alt="" />
                            </div>
                            <div className='px-2 py-2'>

                            <p className='text-[16px] font-medium leading-5 mb-2'>{elem.description}</p>
                            <h1 className='text-sm capitalize'><span className='text-[15px] font-medium'>Brand:</span> {elem.name}</h1>
                            <div className='flex items-center justify-between'>

                            <h2 className='text-sm'><span className='text-[15px] font-medium'>Price:</span> {elem.price}$</h2>
                            <h3 className='text-sm'><span className='font-medium text-[15px]'>Rating: </span> {elem.rating}</h3>
                            </div>
                            <div className='flex items-center justify-center pt-2 mt-2 cursor-pointer font-semibold text-white rounded px-3 lg:px-6 xl:px-10 md:px-6  color1 py-2'>

                            <button className=''>Add To Cart</button>
                            </div>
                            </div>
                        </div>
                    }                   
                    )}
                    </>
                )
            })}
            </div>
             </div>
            
        </div>
    </div>
  )
}

export default Filter