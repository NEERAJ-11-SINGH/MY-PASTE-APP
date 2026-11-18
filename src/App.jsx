import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import Viewpaste from './components/Viewpaste'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './responsive.css'

const router= createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div>
         <Navbar />
         <Home />
      </div>
    },
     {
      path: "/paste",
      element:
      <div>
         <Navbar />
         <Paste />
      </div>
    },
     {
      path: "/paste/:id",
      element:
      <div>
         <Navbar />
         <Viewpaste />
      </div>
    },
      
  ]
)

function App() {
  

  return (
    <>
      <RouterProvider router={router} />
          
    </>
  )
}

export default App
