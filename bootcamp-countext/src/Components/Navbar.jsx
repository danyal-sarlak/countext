import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <nav>
        <ul className='flex gap-4 p-5 '>
            <li>
                <NavLink className='text-2xl' to='/form'>
                Form
                </NavLink>
            </li>
            <li>
                <NavLink className='text' to='/showinfo'>
                Show
                </NavLink>
            </li>
        </ul>
    </nav>
    <div>
      <Outlet/>
    </div>
    </div>
   
  )
}
