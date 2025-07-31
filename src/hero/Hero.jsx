import React from 'react'
import profile_image from '../assets/profile_picture.jpg'


function Hero() {
  return (
    <div className='flex flex-col items-center bg-[#161513] w-full top-0 left-0 m-0 p-0'>
        <img className='h-[300px] w-[300px] mt-16 rounded-full' src={profile_image} alt="profile_image" />
        <div className='mt-5'>
            <h1 className='text-3xl font-semibold text-white'>I'am Abdul Rahim, MERN Stack</h1>
            <h1 className='text-3xl font-semibold text-white'>Developer based in Pakistan</h1>
        </div>
        <div className='mt-5'>
            <button className='text-white'>Connect with me</button>
            <button className='text-white'>My resume</button>
        </div>
    </div>
  )
}

export default Hero