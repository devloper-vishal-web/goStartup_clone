import React from 'react'
import Image from 'next/image'
import { FaUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const pages = () => {
    
    return (      
        <div>
            <div className=' p-5 mx-auto md:text-center my-8 md:my-10 md:w-1/2 md:pt-40'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold md:mx-12'>Latest News & Articles From Our Blog s</h1>
                <p className='md:my-8 text-slate-500 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus. </p>
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center my-8 sm:my-11 md:my-14 mb-24 md:mb-32'>
                <div className='flex flex-col justify-center mx-8 space-y-6'>
                    <Image className='mx-auto' src="/image-12.jpg" width={400} height={500} alt="" />
                    <div className='flex items-center gap-5 text-slate-400 font-bold'>
                        <span className='flex gap-3 items-center'><FaUser />Musharof Chy </span>
                        <span className='flex gap-3 items-center'><FaCalendarAlt />25 Dec, 2025</span>
                    </div>
                    <p className='text-2xl font-semibold '>Free advertising for your online business</p>
                </div>
                <div className='flex flex-col justify-center mx-8 space-y-6'>
                    <Image className='mx-auto relative' src="/image-13.jpg" width={400} height={500} alt="" />
                    <div className='flex items-center gap-5 text-slate-400 font-bold'>
                        <span className='flex gap-3 items-center'><FaUser />Musharof Chy </span>
                        <span className='flex gap-3 items-center'><FaCalendarAlt />25 Dec, 2025</span>
                    </div>
                    <p className='text-2xl font-semibold'>9 simple ways to improve your design skills </p>
                </div>
                <div className='flex flex-col justify-center mx-8 space-y-6'>
                    <Image className='mx-auto' src="/image-14.jpg" width={400} height={500} alt="" />
                    <div className='flex items-center gap-5 text-slate-400 font-bold'>
                        <span className='flex gap-3 items-center'><FaUser />Musharof Chy </span>
                        <span className='flex gap-3 items-center'><FaCalendarAlt />25 Dec, 2025</span>
                    </div>
                    <p className='text-2xl font-semibold'>Tips to quickly improve your coding speed. </p>
                </div>
            </div>
            <div className="underline border-1  border-slate-800 w-[95vw] mx-auto my-16"></div>

        </div>
    )
}

export default pages
