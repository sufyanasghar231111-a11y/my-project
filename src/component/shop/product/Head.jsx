import React, { useContext } from 'react'
import { RiArrowUpDownFill, RiBox3Line, RiEqualizerLine, RiLoopRightLine } from 'react-icons/ri'
import { providerContext } from '../../Other/AuthProvider'

function Head() {
    let { filterItem, hide, setHide, setChange, change,sort ,setSort,price,setPrice,filterColor, setFilterColor } = useContext(providerContext)

    return (
        <div className='px-25 max-sm:px-5 py-8'>
            <div className='flex items-center max-sm:gap-5 justify-between '>
                <div className='flex items-center gap-2'>
                    <div className='bg-purple-200 rounded px-2 py-2'>
                        <RiBox3Line className='text-purple-800 ' />
                    </div>
                    <div>
                        <h1 className='font-bold leading-4 max-sm:text-sm'>{change.length} Products Found</h1>
                        <p className='text-[13px] flex items-center gap-1 max-sm:text-[10px]'><RiEqualizerLine className='w-3 h-3' /> Showing 1-8 of 50</p>
                    </div>
                </div>
                <div className='flex items-center gap-6 max-sm:gap-3'>
                    <button className='border border-gray-300 max-sm:py-2  max-sm:text-[11px]  pr-15 pl-3 py-2 rounded-lg text-sm flex items-center gap-2'><RiArrowUpDownFill className='w-3 h-3 text-gray-500' /> Sort By   {sort ==='high'?'Higher':''} {sort ==='low'?'Lower':''}</button>
                    {hide  &&  (<button className='flex items-center cursor-pointer text-sm justify-center gap-3' onClick={() => {
                        setChange('all')
                        setHide(false)
                        setSort(null)
                        setFilterColor(null)
                    }}><RiLoopRightLine /> Reset Filters</button>)}
                </div>
            </div>
        </div>
    )
}

export default Head