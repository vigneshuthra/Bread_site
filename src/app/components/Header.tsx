"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const navItems = [
    { link: 'About', path: 'about' },
    { link: 'Breads', path: 'breads' },
    { link: 'Menu', path: 'menu' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'Contact', path: 'contact' },
  ]

  return (
    <nav className='w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-3 sticky top-0 z-50 '>
      <Image src={'/logo.png'} alt={''} width={90} height={90} className='invert' />
      <ul className='lg:flex justify-center items-center gap-10 hidden'>
        {
          navItems.map((link, path) => (
            <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rouned-lg hover:bg-orange-600 hover:rounded-full hover:text-white' to={link.path} spy={true} offset={-100} smooth={true}>{link.link}
            </Link>
          ))
        }

      </ul>

      <button className='bg-orange-600 text-sm px-4 py-2 text-white lg:px-10 lg:py-3 lg:text-xl rounded-full font-bold transfrom hover-scale-105 transition-transform duration-300'>ORDER NOW</button>

      {/* mobile */}

      <div className='flex justify-center items-center lg:hidden mt-3' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-white text-3xl cursor-pointer' /> : <FaBars className=' text-white text-3xl cursor-pointer' />}
        </div>

      </div>
      <div className={`${isMenuOpen ? "flex" : "hidden"} w-full h-fit bg-black p-4 absolute top-[80px] left-0`}>

        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {
            navItems.map((link, path) => (
              <Link key={path} to={link.path} className='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-white w-full text-center' spy={true} offset={-100} smooth={true}>{link.link}</Link>
            ))
          }

        </ul>

      </div>
    </nav>

  )
}

export default Header