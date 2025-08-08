import React from 'react'
import Card from './card'

const features = () => {
  return (
    <>
      <div className='main bg-gradient-to-r  w-full'>
        <div className=' p-5 mx-auto text-center py-6 sm:py-8 md:py-10 md:w-1/2 md:pt-40'>
          <h1 className='text-2xl sm:text-4xl md:text-5xl font-extrabold'>Our Unique & Awesome Core Features</h1>
          <p className='my-5 md:my-8 text-slate-500 text-base'>Discover the innovative features that set us apart from the competition and make us the best choice for your needs. It's time to experience the difference.</p>
        </div>

        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto place-items-center pb-16">
          <Card
            cardImg="/funding.png"
            title="Crafted for Startups "
            main="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor. "
          />
          <Card
            cardImg="/layer.png"
            title="High-quality Design "
            main="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor. "
          />
          <Card
            cardImg="/statistics.png"
            title="All Essential Sections  "
            main="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor. "
          />
          <Card
            cardImg="/velocity.png"
            title="Speed Optimized  "
            main="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor. "
          />
          <Card
            cardImg="/website-building.png"
            title="Fully Customizable "
            main="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor. "
          />
          <Card
            cardImg="/process-management.png"
            title="Regular Updates"
            main="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor. "
          />
        </div>
      </div>
    </>
  )
}

export default features
