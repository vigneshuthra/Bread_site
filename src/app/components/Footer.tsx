"use client"
import React from 'react'
import { Link } from 'react-scroll';
import { FaCopyright } from 'react-icons/fa';
import { FaArrowPointer } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <section className='bg-black w-full text-white flex justify-center items-center p-3 gap-4'>
        <FaCopyright className='size-6 text-white' />
        <h1 className='text-white text-center font-semibold text-lg'>Copyright 2024, Lisbon Bakes, All Rights Reserved</h1>

      </section>

      {/* // scroll to top */}
      <Link to="hero" spy={true} offset={-100} smooth={true}>
        <div className='bg-orange-500 p-5 text-black rounded-full hover:bg-white cursor-pointer fixed right-6 bottom-6'>
          <FaArrowPointer className='w-[35px] h-[35px]' />

        </div>
      </Link>

    </>
  )
}

export default Footer