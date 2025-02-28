import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <Link to='./' className='flex items-center text-black cursor-pointer text-[1.5rem]'>
        <img src={assets.logo} className='w-12 h-12' alt="" />
        <p className='tracking-[1px] font-[600]'>5Leaf</p>
        </Link>
        <button onClick={()=> setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar