"use client"

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { menus } from '../../../export';


const OurMenu = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine'
    })

  }, [])

  return (
    <section id='menu' className='w-full bg-cover h-fit flex flex-col justify-start items-center gap-10 py-20 lg:px-20 px-10' style={{ backgroundImage: `url('/banner10.jpg')` }}>

      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-[55px] text-white font-semibold text-center'>
        Our Fresh Menus
      </h1>
      <div data-aos="zoom-in" data-aos-delay="200" className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-4'>
        {
          menus.map((item, index) => (
            <div key={index} className='felx- flex-col justify-start items-start gap-4 bg-black p-10 rounded-xl h-60 opacity-75'>
              <h1 className='text-white font-semibold text-2xl'>{item.title}</h1>
              <p className='text-lg text-slate-200 '>
                {item.about}
              </p>

            </div>
          ))
        }
      </div>

    </section>

  )
}

export default OurMenu