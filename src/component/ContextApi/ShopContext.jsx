import React, { createContext, useEffect, useMemo, useState } from 'react'
import Change from '../Other/Change'

export const  shopProvider=createContext()

function ShopContext({children}) {
    let [filterItem, setFilterItem] = useState(Change)
    let [rate, setRate]=useState(null)  
          let [sort, setSort] = useState(null)
          let [price, setPrice] = useState(null)
          let [hide, setHide] = useState(false)
           let [filterColor, setFilterColor] = useState(null)
        let [colorRating, setcolorRating]=useState(0)
        let [change, setChange] = useState(() => {
            let store = localStorage.getItem('change')
            return store ? JSON.parse(store) : 'all'
          })
           useEffect(() => {
              localStorage.setItem('change', JSON.stringify(change))
            }, [change])
        const processData=useMemo(()=>{
            return filterItem.map((elem)=>{       
                    return {
                    ...elem,
                        tags:elem.tags.filter(tagitem =>
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
                }
                }
            )
        },[filterColor,change,price,rate,filterItem, sort])
  return (
    <shopProvider.Provider value={{rate, setRate,colorRating, setcolorRating,sort, setSort,price,setPrice,filterItem,setFilterItem,change,setChange,hide,setHide,processData,filterColor, setFilterColor}}>
        {children}
    </shopProvider.Provider>
  )
}

export default ShopContext