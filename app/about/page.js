import React from 'react'
import Image from 'next/image'

const about = () => {
    return (
        <div>
            <div className=' p-5 mx-auto text-center my-8 sm:my-10 md:my-16 md:w-1/2 md:mt-40'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold'>Know Details About Our Company </h1>
                <p className='my-8 text-slate-500 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus. </p>
            </div>
            <ul className='flex justify-around items-center w-full my-2'>
                <li className='text-lg cursor-pointer font-medium'>About Us</li>
                <li className='text-lg cursor-pointer font-medium'>Our Mission</li>
                <li className='text-lg cursor-pointer font-medium'>Our Vision</li>
            </ul>
            <div className="underline border-1 border-slate-600 w-[90vw] md:w-[80vw] mx-auto"></div>
            <div className="md:flex justify-around items-center mx-4 sm:mx10 md:mx-28 my-12 sm:my-14 md:my-16">
                <div className="img relative w-2/3 md:w-1/2">
                    <Image src="/image-3.jpg" width={337} height={150} className='' alt="" />
                    <Image src="/image-4.jpg" width={277} height={77} className='absolute top-18 left-32 sm:left-60 md:left-52' alt="" />
                </div>
                <div className=' p-5 my-10 md:w-1/2'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>We are Creative Digital Agency Based in USA </h1>
                    <p className="my-8 text-slate-500 text-base">Discover the innovative features that set us apart from the competition and make us the best choice for your needs. It&apos;s time to experience the difference.</p>
                    <p className='my-8 text-slate-500 text-base'>Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor. </p>
                    <p className='my-8 text-slate-500 text-base'>Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis nulla. Integer vitae magna lacus. Sed venenatis auctor dolor. </p>
                </div>

            </div>

            <div className=' p-5 mx-auto md:text-center my-10 md:w-1/2 md:pt-40'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold'>Meet With Our Creative Dedicated Team </h1>
                <p className='my-8 text-slate-500 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus. </p>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-8 my-6 sm:my-9 md:my-14 mx-3'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <Image className='rounded-lg' src="/image-5.jpg" width={311} height={311} alt="" />
                    <h1 className='font-semibold text-2xl'>Olivia Andrium</h1>
                    <p className='font-light text-lg text-slate-500'>Project Manager </p>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <Image className='rounded-lg' src="/image-6.jpg" width={311} height={311} alt="" />
                    <h1 className='font-semibold text-2xl'>Jemse Kemorun </h1>
                    <p className='font-light text-lg text-slate-500'>Project Designer </p>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <Image className='rounded-lg' src="/image-7.jpg" width={311} height={311} alt="" />
                    <h1 className='font-semibold text-2xl'>Avi Pestarica </h1>
                    <p className='font-light text-lg text-slate-500'>Web Designer</p>
                </div>
            </div>

            <div className=' p-5 mx-auto md:text-center my-8 md:my-10 md:w-1/2 md:pt-40'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold md:mx-12'>Explore Our Latest Case Studies </h1>
                <p className='my-8 text-slate-500 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus. </p>
            </div>

            <ul className='flex justify-center items-center gap-16 text-xl'>
                <li>All</li>
                <li>Branding Strategy</li>
                <li>Digital Experiences</li>
                <li>eCommerce</li>
            </ul>
            <div className="images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center my-12 md:my-16 mx-5 md:mx-8">
                <Image src="/image-8.jpg" className=' sm:col-span-2 col-start-1' width={840} height={300} alt="" />
                <Image src="/image-9.jpg" className='sm:row-span-2 md:col-start-3' width={400} height={300} alt="" />
                <Image src="/image-10.jpg" className='sm:row-start-2 md:row-start-2' width={400} height={300} alt="" />
                <Image src="/image-11.jpg" width={500} height={300} alt="" />
            </div>
            <button className='font-semibold md:text-lg px-4 md:px-6 py-2 md:py-3 bg-blue-600 mx-auto justify-center flex '>
                See More Projects
            </button>

            <div className=' p-5 mx-auto md:text-center my-8 md:my-10 md:w-1/2 md:pt-40'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold md:mx-12'>Trusted by Global Brands</h1>
                <p className='my-8 text-slate-500 text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus. </p>
            </div>
            <div className="users flex justify-around items-center mx-3 sm:mx-14  md:mx-24 my-12 md:my-16 flex-wrap">
                <Image width={151} height={111} src="https://go-tailwind.preview.uideck.com/src/images/brands/uideck.svg" alt="" />
                <Image width={151} height={111} src="https://go-tailwind.preview.uideck.com/src/images/brands/tailadmin.svg" alt="" />
                <Image width={151} height={111} src="https://go-tailwind.preview.uideck.com/src/images/brands/graygrids.svg" alt="" />
                <Image width={151} height={111} src="https://go-tailwind.preview.uideck.com/src/images/brands/lineicons.svg" alt="" />
                <Image width={151} height={111} src="https://go-tailwind.preview.uideck.com/src/images/brands/plainadmin.svg" alt="" />
            </div>
            <div className="underline border-1 border-slate-800 w-[95vw] mx-auto my-16"></div>
        </div>
    )
}

export default about
