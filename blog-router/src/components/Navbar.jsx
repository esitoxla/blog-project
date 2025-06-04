import React from 'react'
import { NavLink, Link } from 'react-router'


export default function Navbar() {
  return (
    <div className='flex justify-between items-center text-xl bg-indigo-950 text-white gap-5 py-4 px-12'>
        <span className='text-indigo-200'>LOGO</span>
       <ul className='flex gap-5'>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
        </li>
        <li>
            <Link to="/addNew">Add new</Link>
        </li>
        <li>
            <Link to="/gallery">Gallery</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        
       </ul>
    </div>
  )
}
