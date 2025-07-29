import React from 'react'

function Navbar() {
  return (
    <div>
      <ul className='flex justify-around items-center h-16 list-none bg-[#161513] text-red-500'>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
