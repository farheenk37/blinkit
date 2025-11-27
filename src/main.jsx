import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import"bootstrap/dist/css/bootstrap.css"
import"bootstrap/dist/js/bootstrap.bundle"
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Home from './Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout.jsx'
import MainContext from './ContextAPI/MainContext.jsx'
let router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
  
   children : [
    {
      path:'/',
      element: <Home/>
    }
   ] 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext>
      <RouterProvider router={router}/>
    </MainContext>
   

  </StrictMode>
)
