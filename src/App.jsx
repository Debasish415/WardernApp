import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/></>
    },
    {
      path : "/contact",
      element: <><Navbar/><Contact/></>
    },
        
  ])
  return (
    <>
    
    <RouterProvider router={router} />
    </>
  )
}

export default App