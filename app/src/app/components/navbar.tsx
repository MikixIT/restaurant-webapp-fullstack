import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
const Navbar = () => {
  return (
    <div className='h-12 border-b-2 border-b-red-500 text-red-500 p-4 flex text-center items-center uppercase justify-between'>
      {/* LOGO */}
      <div className='text-xl'>
        <Link href={"/"}>Piero</Link>
      </div>
      {/* MOBILE MENU */}
      <div>
        <Menu />
      </div>
    </div>
  )
}

export default Navbar