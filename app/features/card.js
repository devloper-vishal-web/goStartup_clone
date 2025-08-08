import React from 'react'
import Image from 'next/image'

const card = ({ cardImg, title, main }) => {
  return (
      <div className="p-3 md:p-6 flex flex-col shadow-xl shadow-slate-900 rounded-2xl text-center mx-6">
        <Image src={cardImg} className='mx-auto my-5 rounded-full bg-amber-400 p-3' width={84} height={84} alt="" />
        <h1 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h1>
        <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      </div>
  )
}

export default card
