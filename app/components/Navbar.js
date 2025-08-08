"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ImCross } from 'react-icons/im'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [theme, setTheme] = useState("dark-theme")
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(!showMenu)
  }
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme('dark-theme')

    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMenu])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])



  return (
    <div className='navbar py-3 sm:py-6 md:py-8 sticky top-0 z-10 '>
      <nav className='flex justify-between items-center max-md:flex-wrap mx-8 sm:mx-14 lg:mx-24 '>
        <div className="logo-sec">
          <Image src="/logo-dark.svg" width={185} height={44} alt="logo"
            className='invertLogo' />
        </div>
        <ul className='lg:flex gap-9 hidden'>
          <Link href="/"><li className='textColor cursor-pointer'>Home</li></Link>
          <Link href="/features"><li className='textColor cursor-pointer'>Features</li></Link>
          <Link href="/about"><li className='textColor cursor-pointer'>About</li></Link>
          <Link href="/pages"><li className='textColor cursor-pointer'>Pages</li></Link>
          <Link href="/support"><li className='textColor cursor-pointer'>Support</li></Link>
        </ul>
        <div className='lg:flex gap-3 items-center hidden'>
          <Link href="/signin">
            <button className='font-semibold text-lg px-5 py-2 bg-blue-600 cursor-pointer rounded-lg'>Signin</button>
          </Link>
          <Link href="/signup">
            <button className='btn font-semibold text-lg px-5 py-2 bg-slate-900 cursor-pointer rounded-lg'>Signup</button>
          </Link>
          <button onClick={() => toggleTheme()}><Image id='toggle' className='invert-100 h-8 w-6 cursor-pointer' src={theme === 'dark-theme' ? '/light-mode.png' : '/dark.png'} width={14} height={14} alt="" /></button>

        </div>
        {!showMenu && (
          <div className="ham-menu hidden max-lg:block">
            <button onClick={() => toggleTheme()}><Image id='toggle' className='invert-100 h-8 w-6 cursor-pointer mr-3 pt-1' src={theme === 'dark-theme' ? '/light-mode.png' : '/dark.png'} width={14} height={14} alt="" /></button>
            <button onClick={handleMenu} className='text-2xl font-semibold'><GiHamburgerMenu className='cursor-pointer' /></button>
          </div>
        )}
        {showMenu && (
          <div className="ham-menu hidden max-lg:block z-20">
            <button onClick={handleMenu}><ImCross className='cursor-pointer' /></button>
          </div>
        )}
        {showMenu ? (
          <ul className='flex justify-center items-center flex-col gap-10 bg-gray-800 overflow-y-hidden fixed z-10 top-16 left-0 w-screen min-h-screen duration-300 ease-in'>
            <Link href="/" onClick={() => setShowMenu(false)}><li className='textColor cursor-pointer'>Home</li></Link>
            <Link href="/features" onClick={() => setShowMenu(false)}><li className='textColor cursor-pointer'>Features</li></Link>
            <Link href="/about" onClick={() => setShowMenu(false)}><li className='textColor cursor-pointer'>About</li></Link>
            <Link href="/pages" onClick={() => setShowMenu(false)}><li className='textColor cursor-pointer'>Pages</li></Link>
            <Link href="/support" onClick={() => setShowMenu(false)}><li className='textColor cursor-pointer'>Support</li></Link>
            <div className="flex justify-between items-center gap-5 mt-10">
              <Link href="/signin">
                <button onClick={() => setShowMenu(false)} className='font-semibold text-lg px-5 py-2 bg-blue-600 cursor-pointer rounded-lg'>Signin</button>
              </Link>
              <Link href="/signup">
                <button onClick={() => setShowMenu(false)} className='btn font-semibold text-lg px-5 py-2 bg-slate-900 cursor-pointer rounded-lg'>Signup</button>
              </Link>
            </div>
          </ul>
        ) : <div className='flex justify-center items-center flex-col gap-10 bg-gray-800 overflow-y-hidden fixed z-10 top-0 left-[-150%] w-screen min-h-screen duration-300 ease-in'></div>}
      </nav>
    </div>
  )
}

export default Navbar
