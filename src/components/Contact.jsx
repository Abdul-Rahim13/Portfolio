import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <div className='bg-[#161513]'>
      <div className='flex flex-col items-center'>
        <h1 className='text-6xl font-semibold text-white mt-30 text-center relative'>Get in Touch</h1>
          <img
          className='h-[120px] w-[160px] mt-[-68px] ml-[200px]'
          src="data:image/svg+xml,%3csvg%20width='227'%20height='72'%20viewBox='0%200%20227%2072'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2061.1395C0%2055.1999%205.16729%2050.5816%2011.0696%2051.2459L187.039%2071.052C209.597%2073.591%20228.703%2054.5844%20226.282%2032.0133C223.76%208.50255%20199.379%20-6.00841%20177.511%202.98631L13.7433%2070.3471C7.19098%2073.0422%200%2068.2245%200%2061.1395Z'%20fill='url(%23paint0_linear_2160_23)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2160_23'%20x1='851.318'%20y1='47.553'%20x2='756.751'%20y2='339.402'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23DF8908'/%3e%3cstop%20offset='1'%20stop-color='%23B415FF'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"
          alt=""/>
      </div>

      <div className='grid grid-cols-2 gap-35 mt-10'>

        <div className='flex flex-col justify-center items-center'>
          <h1 className=' text-[50px] font-bold bg-gradient-to-l from-[#DF8908] to-[#B415FF] bg-clip-text text-transparent'>Let's talk</h1>
          <p className='text-white text-[16px] max-w-[500px] text-justify mt-5'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          
          <div className='flex flex-row gap-4 self-start ml-24 mt-6'>
            <FontAwesomeIcon className='text-white text-3xl' icon={faEnvelope} />
            <h1 className='text-white'>raheemabdur106@gmail.com</h1>
          </div>

          <div className='flex flex-row gap-4 self-start ml-24 mt-6'>
            <FontAwesomeIcon className='text-white text-3xl' icon={faPhone} />
            <h1 className='text-white text-lg'>+92 315 1464618</h1>
          </div>

          <div className='flex flex-row gap-4 self-start ml-24 mt-6'>
            <FontAwesomeIcon className='text-white text-3xl' icon={faLocationDot} />
            <h1 className='text-white text-lg'>Lahore, Pakistan</h1>
          </div>
        </div>

        <div>
          <h1 className='text-white text-[20px]'>
            Your Name
          </h1>
          <input className='bg-[#32323c] text-[#a0a0a0] mt-3 h-10 w-100 px-3 rounded-[8px]' type="text" placeholder='Enter your name' />

          <h1 className='text-white text-[20px] mt-5'>
            Your Email
          </h1>
          <input className='bg-[#32323c] text-[#a0a0a0] mt-3 h-10 w-100 px-3 rounded-[8px]' type="email" placeholder='Enter your email' />

          <h1 className='text-white text-[20px]'>
            Write your message here
          </h1>
          <input className='bg-[#32323c] text-[#a0a0a0] mt-3 h-10 w-100 px-3 rounded-[8px]' type="text" placeholder='Enter your message' />
        </div>

      </div>
    </div>
  )
}

export default Contact