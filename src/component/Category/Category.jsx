import React, {Suspense} from 'react'
import NavBar from '../home/Body/NavBar'
const AllCategory=React.lazy(()=> import('./category/AllCategory'))

function Category() {
  return (
    <div>
      <div className='pt-20'>
        <Suspense fallback={<p>Loading...</p>} >
      <AllCategory />
        </Suspense>
      </div>
    </div>
  )
}

export default Category