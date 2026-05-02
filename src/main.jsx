import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AuthProvider from './component/Other/AuthProvider.jsx'
import ScrollComponent from './component/Other/ScrollComponent.jsx'
import Animation from './component/Other/Animation.jsx'
import NavBar from './component/home/Body/NavBar.jsx'
import HomeContext from './ContextApi/HomeContext.jsx'
import ShopContext from './ContextApi/ShopContext.jsx'
import DashContext from './ContextApi/DashContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <DashContext>

    <ShopContext >
  <HomeContext >
    <StrictMode>
  <NavBar />
  <ScrollComponent />
  <Animation >
    <App />
  </Animation>
  </StrictMode>
  </HomeContext>
    </ShopContext>
    </DashContext>
  </AuthProvider>
  </BrowserRouter>

)
