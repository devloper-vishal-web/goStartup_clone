import React from 'react'
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import Footer from './footer';

const support = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center md:gap-16 items-center'>
                <div className=' p-5 mx-auto md:text-center md:my-10 md:w-1/3 md:pt-32'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold md:mx-12'>Need Any Help?</h1>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold '>Say hello</h1>
                    <p className='my-8 text-slate-500 text-base '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus. </p>
                </div>
                <div className='flex justify-center items-center gap-3 md:mr-36'>
                    <span className="underline border-2 border-white w-[10vw] mx-auto my-7 md:my-16"></span>
                    <span className='font-bold text-xl sm:text-2xl md:text-3xl'>info@gostartup.com</span>
                </div>
            </div>
            <div className="underline border-1  border-slate-800 w-[95vw] mx-auto my-5"></div>

            <div className='flex flex-col md:flex-row justify-around items-start md:items-center my-6 mx-5 space-y-5'>
                <div className='flex flex-col space-y-2 '>
                    <h1 className='font-semibold md:font-bold text-base md:text-xl'>Email Address </h1>
                    <span className='text-slate-500 text-sm md:text-base'>support@startup.com</span>
                </div>
                <div className='flex flex-col space-y-2 '>
                    <h1 className='font-semibold md:font-bold text-base md:text-xl'>Phone Number </h1>
                    <span className='text-slate-500 text-sm md:text-base'>+009 8754 3433 223</span>
                </div>
                <div className='flex flex-col space-y-2 '>
                    <h1 className='font-semibold md:font-bold text-base md:text-xl'>Office Location</h1>
                    <span className='text-slate-500 text-sm md:text-base'>76/A, Green valle, Califonia USA. </span>
                </div>
                <ul className='flex items-center gap-5 text-slate-500 text-2xl cursor-pointer'>
                    <li className='hover:bg-blue-900 hover:p-2 hover:rounded-full hover:text-white'><FaFacebookF /></li>
                    <li className='hover:bg-blue-900 hover:p-2 hover:rounded-full hover:text-white'><FaTwitter /></li>
                    <li className='hover:bg-blue-900 hover:p-2 hover:rounded-full hover:text-white'><FaInstagram /></li>
                    <li className='hover:bg-blue-900 hover:p-2 hover:rounded-full hover:text-white'><FaLinkedinIn /></li>
                </ul>

            </div>
            <div className="form ">
                <form action="">
                    <div className="flex flex-col justify-center items-center gap-12  p-5 mx-auto text-center my-10 w-1/2 pt-20 md:pt-32">
                        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                            <div className='flex flex-col gap-5 justify-between items-start'>
                                <h1 className='font-semibold'>Your Name </h1>
                                <input type="text" placeholder='Full Name' className=' outline-none' />
                                <div className="underline border-1  border-slate-800 w-[90vw] md:w-[30vw] md:mx-auto hover:border-white"></div>
                            </div>
                            <div className='flex flex-col gap-5 justify-between items-start'>
                                <h1 className='font-semibold'>Email Address</h1>
                                <input type="text" placeholder='Email Address' className=' outline-none' />
                                <div className="underline border-1  border-slate-800 w-[90vw] md:w-[30vw] md:mx-auto"></div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
                            <div className='flex flex-col gap-5 justify-between items-start'>
                                <h1 className='font-semibold'>Phone (Optional)</h1>
                                <input type="text" placeholder='Phone Number' className=' outline-none' />
                                <div className="underline border-1  border-slate-800 w-[90vw] md:w-[30vw] md:mx-auto hover:border-white"></div>
                            </div>
                            <div className='flex flex-col gap-5 justify-between items-start'>
                                <h1 className='font-semibold'>Subject</h1>
                                <input type="text" placeholder='Type Subject ' className=' outline-none' />
                                <div className="underline border-1  border-slate-800 w-[90vw] md:w-[30vw] md:mx-auto hover:border-white"></div>
                            </div>
                        </div>
                        <div className="message">
                            <div className='flex flex-col gap-5 justify-between items-start'>
                                <h1 className='font-semibold'>Message</h1>
                                <input type="text" placeholder='Type Subject ' className=' outline-none' />
                                <div className="underline border-1  border-slate-800 w-[90vw] md:w-[62vw] md:mx-auto hover:border-white mt-16"></div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-start gap-8 w-[90vw] md:w-[63vw]'>
                            <div className='flex gap-3 md:gap-5 justify-between md:items-center text-slate-500'>
                                <input type="checkbox" name="check" id="check" className='w-5 h-5 cursor-pointer bg-slate-800 ' />
                                <span className=' md:text-lg hover:text-blue-400 cursor-pointer'>I have read the terms of the services & I accept privacy policy</span>
                                
                            </div>
                            <button className='font-medium md:font-semibold md:text-lg px-6 py-3 bg-blue-500 w-full cursor-pointer rounded-lg'>Send Message</button>                            
                        </div>
                    </div>
                </form>
            </div>
            <div className='main flex flex-col md:flex-row justify-around items-center py-7'>
                <div className=' p-5'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold my-2'>Looking for a collaboration? </h1>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold '>Get Started Today! </h1>
                    <p className='my-5 text-slate-400 text-base '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros.</p>
                </div>
                <button className='font-semibold text-lg px-5 py-3 bg-blue-500 cursor-pointer rounded-lg'>Get Started Now</button>
            </div>

            <Footer/>
        </div>
    )
}

export default support

