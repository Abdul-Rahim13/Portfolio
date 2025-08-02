import React from 'react'

function Footer() {
  return (
    <div className='bg-[#161513] py-5'>

      <div className="border-t border-gray-400 w-10/12 mx-auto my-6"></div>

      <div className='grid grid-cols-2 gap-20 items-center w-10/12 mx-auto'>

        <div>
          <h1 className='text-white text-center md:text-left'>
            © 2025 Abdul Rahim. All rights reserved.
          </h1>
        </div>

        <div className='flex justify-around text-white'>
          <h1 className='cursor-pointer hover:text-[#DF8908]'>Terms of Service</h1>
          <h1 className='cursor-pointer hover:text-[#DF8908]'>Privacy Policy</h1>
          <h1 className='cursor-pointer hover:text-[#DF8908]'>Connect with me</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
