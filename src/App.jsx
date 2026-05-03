import  { Route, Routes } from 'react-router-dom'
import Home from './component/home/Body/Home'
import Shop from './component/shop/Shop'
import About from './component/About/About'
import Return from './component/Return/Return'
import Privacy from './component/Privacy/Privacy'
import UserDash from './component/UserDashBoard/UserDash'
import Category from './component/Category/Category'
import Fav from './component/Other/Fav'
import Cart from './component/Other/Cart'
import Fashion from './component/Category/category/Fashion'
import Electronic from './component/Category/category/Electronic'
import Living from './component/Category/category/Living'
import Sport from './component/Category/category/Sport'
import Toy from './component/Category/category/Toy'
import Book from './component/Category/category/Book'
import Health from './component/Category/category/Health'
import Beauty from './component/Category/category/Beauty'
import FashionCategory from './component/otherCategory/FashionCategory'
import gsap from 'gsap'
import SigninForm from './component/UserDashBoard/SigninForm'

function App() {
  
  
  return (
    <div  className=''>
      
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/category' element={<Category  />} >
        <Route path='fashion' element={<Fashion />} />
        <Route path='fashion/:id' element={<FashionCategory />} />
         
        <Route path='electronic' element={<Electronic />}  /> 
        <Route path='living' element={<Living />}  /> 
        <Route path='beauty' element={<Beauty />}  /> 
        <Route path='sport' element={<Sport />}  /> 
        <Route path='toy' element={<Toy />}  />
        <Route path='book' element={<Book />}  />
        <Route path='health' element={<Health />}  /> 
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/return' element={<Return />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/user' element={<UserDash />} >
        <Route path='signin' element={<SigninForm />} />
        </Route>
        <Route path='/fav' element={<Fav />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App