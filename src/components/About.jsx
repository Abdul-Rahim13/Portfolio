import React from 'react'
import profile_image from '../assets/profile_picture.jpg'

function About() {
  return (
    <div id='about' className='bg-[#161513]'>

      <div className='flex flex-col items-center'>
        <h1 className='text-6xl font-semibold text-white mt-15 text-center relative'>About me</h1>
        <img
          className='h-[120px] w-[160px] mt-[-70px] ml-[175px]'
          src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt=""
        />
      </div>

      <div className='mt-9 flex flex-row gap-25'>
        <img
          className='h-[400px] w-[350px] ml-[130px] rounded-2xl'
          src={profile_image}
          alt=""
        />

        <div className='flex flex-col'>
          <p className='text-white text-[18px] font-medium mt-7'>
            I am a passionate MERN Stack Developer, skilled in building dynamic and user-friendly
            web applications using MongoDB, Express.js, React, and Node.js. I enjoy creating clean,
            scalable solutions and continuously improving my skills in modern web technologies.
          </p>
          <p className='text-white mt-3 text-[18px] font-medium'>
            My goal is to contribute to impactful projects while delivering high-quality,
            maintainable code.
          </p>

          <div className='flex flex-col mt-5 gap-3 w-full max-w-[500px] overflow-hidden'>

            <div className='flex items-center mt-3 origin-left'>
              <div className='flex items-center hover:scale-[1.05] transform-gpu transition duration-300 origin-left w-full'>
                <p className='text-white mr-3 text-[18px] font-bold w-[120px]'>MongoDB</p>
                <div className='h-[8px] w-[90%] rounded-3xl 
                    bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>
                </div>
              </div>
            </div>

            {/* Express.js */}
            <div className='flex items-center mt-3 origin-left'>
              <div className='flex items-center hover:scale-[1.05] transform-gpu transition duration-300 origin-left w-full'>
                <p className='text-white mr-3 text-[18px] font-bold w-[120px]'>Express.Js</p>
                <div className='h-[8px] w-[85%] rounded-3xl 
                    bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>
                </div>
              </div>
            </div>

            {/* React.js */}
            <div className='flex items-center mt-3 origin-left'>
              <div className='flex items-center hover:scale-[1.05] transform-gpu transition duration-300 origin-left w-full'>
                <p className='text-white mr-3 text-[18px] font-bold w-[120px]'>React.Js</p>
                <div className='h-[8px] w-[92%] rounded-3xl 
                    bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>
                </div>
              </div>
            </div>

            <div className='flex items-center mt-3 origin-left'>
              <div className='flex items-center hover:scale-[1.05] transform-gpu transition duration-300 origin-left w-full'>
                <p className='text-white mr-3 text-[18px] font-bold w-[120px]'>Node.Js</p>
                <div className='h-[8px] w-[80%] rounded-3xl 
                    bg-gradient-to-r from-[#DF8908] to-[#B415FF]'>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
