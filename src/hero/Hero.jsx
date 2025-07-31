import React from 'react'
import profile_image from '../assets/profile_picture.jpg'


function Hero() {
  return (
    <div className='flex flex-col items-center bg-[#161513] w-full top-0 left-0 m-0 p-0'>
        <img className='h-[300px] w-[300px] mt-20 rounded-full' src={profile_image} alt="profile_image" />
        <div className='mt-5'>
            <h1 className='text-3xl font-semibold text-white'><span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent'>I'am Abdul Rahim,</span> MERN Stack</h1>
            <h1 className='text-3xl font-semibold text-white'>Developer based in Pakistan</h1>
        </div>

        <div className='mt-5 mb-4'>
            <button className='text-white mr-4 h-10 w-[150px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_100%)] transform hover:scale-[1.05] transition duration-500 cursor-pointer'>Connect with me</button>
            <button className='text-white'>My resume</button>
        </div>
    </div>
  )
}

export default Hero