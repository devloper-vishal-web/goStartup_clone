import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Features from './features/page'
import About from './about/page'
import Pages from './pages/page'
import Support from './support/page'

const page = () => {
  return (
    <>
      <div className='lg:flex justify-between items-center my-14 md:my-24 mx-4 sm:mx-8 md:mx-12 gap-3 max-sm:mb28 max-md:mb-32'>
        <div className='mx-3 lg:w-2/5'>
          <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl my-6 mt-14 md:mt-20'>Digital Solutions for Your Startup</h1>
          <p className='font-medium text-base text-slate-600 my-3'>Handcrafted Tailwind CSS template for your next - Startup, Business, Agency or SaaS Website. Comes with refreshing design and everything you need to kickstart your next web project. </p>
          <div className='flex flex-wrap gap-3 my-11 md:my-16'>
            <Link href="/features">
              <button className='font-semibold md:text-lg px-3 md:px-6 py-2 md:py-3 bg-blue-600 '>Get Started</button>
            </Link>
            <Link href="/about">
              <button className='btn font-semibold md:text-lg px-3 md:px-6 py-2 md:py-3 bg-slate-900'>How its work</button>
            </Link>
          </div>
        </div>

        <div className='relative mx-3'>
          <Image src="/image-1.jpg" width={520} height={400} alt="" />
          <Image src="/image-2.jpg" className='absolute md:top-35 top-6 sm:top-16 right-16 sm:right-64 md:right-70 max-sm:w-[70vw] max-md:w-[60vw]' width={320} height={240} alt="" />
        </div>
      </div>

      <Features />
      <About />
      <Pages />
      <Support />
    </>
  )
}

export default page
