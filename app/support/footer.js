import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';

const footer = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-16 md:my-24 mx-3'>
        <div className='flex flex-col gap-5'>
          <Image src="/logo-dark.svg" width={185} height={44} alt="logo"
            className='invertLogo my-5' />
          <p className='text-slate-500 w-56'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
          <ul className='flex items-center gap-5 text-slate-400 text-2xl cursor-pointer my-5'>
            <li className='hover:bg-blue-900 hover:p-2 hover:rounded-full hover:text-white'><FaFacebookF /></li>
            <li className='hover:bg-blue-900 hover:p-2 hover:rounded-full hover:text-white'><FaTwitter /></li>
            <li className='hover:bg-blue-900 hover:p-2 hover:rounded-full hover:text-white'><FaInstagram /></li>
            <li className='hover:bg-blue-900 hover:p-2 hover:rounded-full hover:text-white'><FaLinkedinIn /></li>
          </ul>
        </div>
        <div className="grid grid-cols-2">
          <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold my-5'>Company</h1>
            <ul className='text-slate-500 text-base flex flex-col gap-3'>
              <li className='hover:text-white cursor-pointer'>Home</li>
              <li className='hover:text-white cursor-pointer'>Product</li>
              <li className='hover:text-white cursor-pointer'>Careers</li>
              <li className='hover:text-white cursor-pointer'>Pricing</li>
            </ul>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-2xl font-bold my-5'>Support</h1>
            <ul className='text-slate-500 text-base flex flex-col gap-3'>
              <li className='hover:text-white cursor-pointer'>Company</li>
              <li className='hover:text-white cursor-pointer'>Media Press</li>
              <li className='hover:text-white cursor-pointer'>Our Blog </li>
              <li className='hover:text-white cursor-pointer'>Contact Us </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl font-bold my-5'>Get in touch</h1>
          <div className='flex flex-col gap-2'>
            <p className='text-slate-500 text-base '>Toll Free Customer Care</p>
            <span className='font-bold'>+(91) 123 456 7890 </span>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-slate-500 text-base '>Need live support? </p>
            <span className='font-bold'>suppport@domain.com </span>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-2xl font-bold my-5'>Newsletter</h1>
          <p className='text-slate-500 text-lg '>Subscribe to receive future updates</p>
          <button className='bg-slate-800 text-slate-500 font-semibold py-3 rounded-lg cursor-pointer'>Email Address</button>
        </div>
      </div>
      <div className="underline border-1  border-slate-800 w-[95vw] mx-auto my-5 max-md:hidden"></div>
      <div className='flex flex-col md:flex-row justify-between items-center md:mx-10 my-5'>
        <ul className='text-slate-500 text-base font-medium flex gap-5'>
          <li>English</li>
          <li>Privacy Policy</li>
          <li>Support</li>
        </ul>
        <div className="underline border-1  border-slate-800 w-[95vw] mx-auto my-5 md:hidden"></div>
        <span className='&copy text-slate-500'>© 2025 Startup. All rights reserved </span>
      </div>
    </div>
  )
}

export default footer
