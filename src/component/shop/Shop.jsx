import React from 'react'
import NavBar from '../home/Body/NavBar'
import gradient2 from '../../assets/gradient2.png'
import image from '../../assets/image.png'
import { RiArrowRightSLine, RiBox3Line, RiCaravanLine, RiEyeLine, RiFlashlightLine, RiHeartLine, RiLineChartLine, RiPriceTag3Line, RiSearchLine, RiShieldLine, RiShoppingCartLine, RiStarLine, RiUserAddLine, RiVipCrown2Line } from 'react-icons/ri'
import Head from './product/Head'
import Filter from './product/Filter'

function Shop() {
  return (
    <div>
      <div className='lg:w-full w-full min-h-screen  bg-gradient-to-br from-[#3e0a2f] via-[#850f45] via-[#c3145a] to-[#1f0418]'>
        
        <div className='pt-25 flex  max-sm:px-5 md:gap-5 lg:gap-10    max-sm:pt-6 justify-between max-sm:flex-col   lg:px-15 xl:px-25  md:px-5'>
          <div className='pt-25  '>
            <div className='flex items-center px-4 py-2 max-sm:px-3 max-sm:rounded-lg max-sm:py-1  gap-3 rounded-xl
            bg-white/10 backdrop-blur-lg
             shadow-lg
            text-white w-fit'>
              <div className='px-2 py-2 max-sm:px-1 max-sm:py-1 rounded-full color1'>
                <RiVipCrown2Line className='max-sm:w-3 max-sm:h-3' />
              </div>
              <div>
                <h1 className='uppercase text-sm max-sm:text-[10px]'> premium collection</h1>
                <p className='text-[12px]  font-semibold text-gray-300 max-sm:text-[10px]'>Curated limited packs</p>
              </div>
              </div>
              <div  className='pt-8 max-sm:pt-5'>
               <h1 className='text-white text-3xl lg:text-6xl md:text-5xl max-sm:text-3xl font-bold'>
                Discover Your
                <br />
                <span className='text-pink-300'>
                  Perfect <span className='text-pink-100'>Style</span>
                </span>
               </h1>
               <p className='w-80 md:w-90  lg:w-110 max-sm:w-70  max-sm:text-sm  gap-1  text-[#d4becc] flex mb-7  pt-6'>
                <button className='pt-1'>
                <RiEyeLine />
                </button>
                Browse through our curated collection of premium products designed for
        comfort, elegance, and timeless style.
               </p>

               <div className=' flex items-center px-5 max-sm:px-3 rounded-xl max-sm:w-full md:w-90 lg:w-full w-85   bg-white/10 backdrop-blur-lg
             shadow-lg
            text-white'>
                <div className='relative'>
                  <div className='absolute w-[5px] h-[5px] rounded-full bg-blue-400 top-0 right-0'></div>
                  <RiSearchLine className='w-5 h-5 max-sm:w-4 max-sm:h-4  text-[#d4becc]' />
                </div>
                <input type="text" placeholder='Search Products, category, or styles...' className=' outline-0 px-3  w-full rounded-xl py-4 max-sm:text-[10px] ' />
               </div>
                <div className='pt-6 flex flex-wrap  max-sm:flex-col max-sm:justify-center max-sm:items-center gap-3 max-sm:gap-2 font-medium text-white'>
                  <div className='flex gap-2 lg:text-[14px] text-[10px] md:text-[12px]'>

                  <button className='px-4   py-2 max-sm:text-[10px] rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center gap-2 '><RiFlashlightLine className='text-yellow-500 w-3 h-3 ' /> New Arrials</button>
                  <button className='px-4  py-2 rounded-full max-sm:text-[10px] bg-gradient-to-br from-purple-600/25 via-fuchsia-600/20 to-pink-600/25
            backdrop-blur-lg flex items-center justify-center gap-2'><RiLineChartLine className='w-3 h-3 ' /> Flash Sale</button>
                  </div>
                  <div className='flex gap-2  lg:text-[14px] md:text-[12px] text-[10px] max-sm:gap-3'>

                  <button className='px-4  py-2 max-sm:text-[10px] rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center gap-2'><RiStarLine className='text-yellow-500 w-3 h-3' /> Best Sellers</button>
                  <button className='px-4  py-2 max-sm:text-[10px] rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center gap-2'><RiHeartLine className='w-3 h-3 text-pink-300 ' /> Wishlist</button>
                  </div>
                </div>
                <div className='pt-10 max-sm:pt-5   flex items-center gap-3   mb-5'>
                  <div className='flex-1   text-center  max-sm:w-full flex items-center justify-center flex-col rounded-xl bg-white/10 backdrop-blur-lg'>
                  <div className='px-2 py-2 rounded-full mt-3 bg-white/5 backdrop-blur-lg mb-2'><RiBox3Line className='text-purple-500' />
                  </div>
                  <h1 className='font-semibold text-white max-sm:text-[12px]'>500 +</h1>
                  <p className='text-[12px] px-3  mb-3 text-gray-200 text-center max-sm:text-[10px]'>Premium Products</p>
                  </div>
                  <div className='flex-1  text-center max-sm:w-full flex items-center justify-center flex-col rounded-xl bg-white/10 backdrop-blur-lg'>
                  <div className='px-2 py-2 rounded-full mt-3 bg-white/5 backdrop-blur-lg mb-2'><RiBox3Line className='text-purple-500' />
                  </div>
                  <h1 className='font-semibold text-white max-sm:text-[12px]'>500 +</h1>
                  <p className='text-[12px] px-3  mb-3 text-gray-200 text-center max-sm:text-[10px]'>Premium Products</p>
                  </div>
                  <div className='flex-1  text-center  max-sm:w-full flex items-center justify-center flex-col rounded-xl bg-white/10 backdrop-blur-lg'>
                  <div className='px-2 py-2 rounded-full mt-3 bg-white/5 backdrop-blur-lg mb-2'><RiBox3Line className='text-purple-500' />
                  </div>
                  <h1 className='font-semibold text-white max-sm:text-[12px]'>500 +</h1>
                  <p className='text-[12px] px-3  mb-3 text-gray-200 text-center max-sm:text-[10px]'>Premium Products</p>
                  </div>
                </div>
              </div>
          </div>
          <div>
            <div>
              <div className=' w-full  md:w-full xl:w-130   max-sm:w-full rounded-2xl  bg-gradient-to-br 
            from-[#5e1752] 
            via-[#C2185B] 
            to-[#691343] text-white'>

              <div className='flex items-start  justify-between'>
                <div className='pt-5 px-10 md:px-3 lg:px-10'>
                <h1 className='text-xl md:text-sm lg:text-xl max-sm:text-[10px] font-semibold flex items-center gap-1 '><RiPriceTag3Line className='-rotate-90 w-4 h-4 ' /> Featured  Collection</h1>
                <p className='text-[13px] lg:text-[13px] md:text-[11px] max-sm:text-[10px] mb-2 flex items-center gap-1 text-[#b5b3ba]'><RiUserAddLine /> Hand Pick By our Stylist</p>
                </div>
                <div className='px-3 pt-2'>
                <button className='px-4 rounded-full color py-1 text-sm md:text-[11px] max-sm:text-[9px] lg:text-sm'> Premium</button>
                </div>
              </div>
              <div className="pt-5 px-3 sm:px-4 md:px-6 lg:px-10 pb-5">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">

    <div className="w-full aspect-square rounded-lg overflow-hidden">
      <img src="https://5.imimg.com/data5/SELLER/Default/2023/7/323356025/UR/EQ/WS/192140499/safeimagekit-resized-img-3--500x500.png" className="w-full h-full object-cover" alt="" />
    </div>

    <div className="w-full aspect-square rounded-lg overflow-hidden">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kFYcYSZKOzjd08y8dueETHf09OWImN-NiQ&s" className="w-full h-full object-cover" alt="" />
    </div>

    <div className="w-full aspect-square rounded-lg overflow-hidden">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwXfzAq-0aPG75teYMaEj8eXGbaVZiZinz9w&s" className="w-full h-full object-cover" alt="" />
    </div>

    <div className="w-full aspect-square rounded-lg overflow-hidden">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdao4m8c3DNVlbg5cWL7m80lmci4DKNNong&s" className="w-full h-full object-cover" alt="" />
    </div>

    <div className="w-full aspect-square rounded-lg overflow-hidden">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB6HVa1DI9R2DCjhKkDZbY13U-j37twZz_Pw&s" className="w-full h-full object-cover" alt="" />
    </div>

    <div className="w-full aspect-square rounded-lg overflow-hidden">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjV13_HryJUP6tqjbSeVql_vbDxbSjBMsfFw&s" className="w-full h-full object-cover" alt="" />
    </div>

  </div>
</div>
              <div className='lg:mx-10 md:mx-5 mx:5 max-sm:mx-3 mb-6 pb-9 lg:pb-9 md:pb-4 pb-4'>

              <div className='w-full   rounded-2xl bg-white/10 p-6 '>
              <div className='flex items-center justify-between'>
                <h1 className='max-sm:text-[11px]'>Browser Categories</h1>
                <h1><RiShoppingCartLine className='max-sm:w-3 max-sm:h-3' /></h1>
              </div>
              <div>

              <div className='flex items-center justify-between pt-5 max-sm:px-1 px-2 lg:px-3 md:px-0 '>
                <div className='flex items-center gap-3 max-sm:gap-2'>
                  <div className='border w-10 h-10 max-sm:h-7 max-sm:w-7 max-sm:rounded-lg rounded-xl'>
                    <img src={image} className='w-full max-sm:rounded-lg  h-full rounded-xl object-cover' alt="" />
                  </div>
                  <div>
                    <h1 className='text-[15px] font-semibold max-sm:text-[12px]'>Men's fashion</h1>
                    <p className='text-sm text-[#b5b3ba] max-sm:text-[10px]'> time min</p>
                  </div>
                </div>
                <div><RiArrowRightSLine className='text-[#b5b3ba]' /></div>
              </div>
              <div className='flex items-center justify-between pt-5 px-2 lg:px-3 md:px-0  max-sm:px-1'>
                <div className='flex items-center gap-3 max-sm:gap-2'>
                  <div className='border w-10 h-10 max-sm:h-7 max-sm:w-7 max-sm:rounded-lg rounded-xl'>
                    <img src={image} className='w-full max-sm:rounded-lg  h-full rounded-xl object-cover' alt="" />
                  </div>
                  <div>
                    <h1 className='text-[15px] font-semibold max-sm:text-[12px]'>Men's fashion</h1>
                    <p className='text-sm text-[#b5b3ba] max-sm:text-[10px]'> time min</p>
                  </div>
                </div>
                <div><RiArrowRightSLine className='text-[#b5b3ba]' /></div>
              </div>
              <div className='flex items-center justify-between pt-5 px-2 lg:px-3 md:px-0  max-sm:px-1'>
                <div className='flex items-center gap-3 max-sm:gap-2'>
                  <div className='border w-10 h-10 max-sm:h-7 max-sm:w-7 max-sm:rounded-lg rounded-xl'>
                    <img src={image} className='w-full max-sm:rounded-lg  h-full rounded-xl object-cover' alt="" />
                  </div>
                  <div>
                    <h1 className='text-[15px] font-semibold max-sm:text-[12px]'>Men's fashion</h1>
                    <p className='text-sm text-[#b5b3ba] max-sm:text-[10px]'> time min</p>
                  </div>
                </div>
                <div><RiArrowRightSLine className='text-[#b5b3ba]' /></div>
              </div>
              <div className='flex items-center  justify-between pt-5 px-2 lg:px-3 md:px-0  max-sm:px-1'>
                <div className='flex items-center gap-3 max-sm:gap-2'>
                  <div className='border w-10 h-10 max-sm:h-7 max-sm:w-7 max-sm:rounded-lg rounded-xl'>
                    <img src={image} className='w-full max-sm:rounded-lg  h-full rounded-xl object-cover' alt="" />
                  </div>
                  <div>
                    <h1 className='text-[15px] font-semibold max-sm:text-[12px]'>Men's fashion</h1>
                    <p className='text-sm text-[#b5b3ba] max-sm:text-[10px]'> time min</p>
                  </div>
                </div>
                <div><RiArrowRightSLine className='text-[#b5b3ba]' /></div>
              </div>
              </div>
              </div>
              </div>
              
              </div>
              <div className='lg:pt-3 md:pt-1 max-sm:pt-0 flex items-center max-sm:flex-col justify-center lg:gap-3 md:gap-2 max-sm:gap-2 text-sm mb-4 text-white'>
                  <button className='px-4  max-sm:text-[10px] lg:text-[16px] md:text-[11px] text-[10px] max-sm:px-3 py-1  rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center gap-2 '><RiShieldLine className='text-green-400 w-3 h-3' /> Premium Quality </button>
                  <button className='px-4  max-sm:text-[10px] lg:text-[16px] md:text-[11px] text-[10px] max-sm:px-3 py-1  rounded-full 
            backdrop-blur-lg flex items-center bg-white/10  justify-center gap-2 '><RiLineChartLine className='w-3 h-3 ' /> Flash Sale</button>
            <div>
                  <button className='px-4  max-sm:text-[10px] lg:text-[16px] md:text-[11px] text-[10px] max-sm:px-3 py-1  rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center gap-2 '><RiCaravanLine className='text-blue-400 w-3 h-3' /> Fast Shipping</button>
            </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Head />

      <div>
        <Filter />
      </div>
    </div>
  )
}

export default Shop