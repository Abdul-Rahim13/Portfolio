import React from 'react'
import profile_image from '../assets/profile_picture.jpg'


function Hero() {
  return (
    <div id='home' className='flex flex-col items-center bg-[#161513] w-full top-0 left-0 m-0 p-0'>
        <img className='h-[300px] w-[300px] mt-8 rounded-full' src={profile_image} alt="profile_image" />
        <div className='mt-5'>
            <h1 className='text-4xl font-semibold text-white'><span className='bg-gradient-to-r from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent'>I'm Abdul Rahim,</span> MERN Stack</h1>
            <h1 className='text-4xl font-semibold text-white text-center'>Developer based in Pakistan</h1>
        </div>

        <div>
          <p className='text-white w-[700px] mt-4 font-normal leading-relaxed text-lg text-justify'>
          Passionate Computer Science student aspiring to become a skilled MERN Stack Developer. 
          Experienced in building user-focused and scalable web applications with clean, maintainable code. 
          Eager to contribute to innovative projects while continuously <span className='block text-center'>learning and growing in modern web technologies.</span>
        </p>

        </div>

        <div className='mt-5 mb-4 flex gap-[25px]'>
            <button className='text-white h-10 w-[150px] rounded-full bg-[linear-gradient(267deg,#DA7C25_0.36%,#B923E1_100%)] transform hover:scale-[1.05] transition duration-500 cursor-pointer'>Connect with me</button>
            <button className='text-white h-10 w-[150px] rounded-full border-2 ransform hover:scale-[1.05] hover:border-[#B415FF] transition duration-500 cursor-pointer border-white/40'>My resume</button>
        </div>
    </div>
  )
}

export default Hero