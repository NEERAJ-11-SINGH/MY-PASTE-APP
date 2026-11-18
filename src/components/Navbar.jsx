import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar flex justify-center gap-5 mt-0  p-2 text-white bg-black '
                // bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.20),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(124,58,237,0.15),transparent_35%),linear-gradient(120deg,#d7e748,#acac37,#d7e748)] 
    >
        <NavLink
        to="/"
         className={({ isActive }) =>
    isActive ? 'text-blue-600 font-bold' : 'text-grey-500'
  }
        >
            Home
        </NavLink>
        <NavLink
        to="/paste"
         className={({ isActive }) =>
    isActive ? 'text-blue-600 font-bold' : 'text-grey-500'
  }
        >
            Paste
        </NavLink>
    </div>
  )
}

export default Navbar