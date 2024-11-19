"use client"

import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';


const Contact = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine'
    })

  }, [])


  return (
    <section id='contact-section' className='w-full flex flex-col justify-start items-end gap-20 bg-cover h-fit lg:px-20 px-10 py-10 lg:py-20 bg-center' style={{ backgroundImage: `url("/banner.jpg")` }}>

      <div className='lg:w-[40%] w-full flex flex-col justify-start items-center gap-10'>
        <h1 data-aos="zoom-in" data-aos-delay="200" className='text-black text-[55px] font-semibold text-center'> Contact US </h1>
        <p data-aos="zoom-in" data-aos-delay="200" className='text-xl text-black text-center'>
          Lorem ipsum dolor sit amet. Sit quae sunt quo consequatur <br />laborum et iusto sunt et quae laborum eum laborum pariatur
        </p>
        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-6 lg:w-[80%] w-full'>
          <div id='form-box' className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4 w-full'>
            <div className='w-full flex flex-col justify-center items-start gap-2'>
              <h1 className='text-lg font-semibold text-black'>Full Name</h1>
              <input type="text" placeholder='Enter your full Name' className='bg-white text-black px-6 py-1 w-full rounded-full border-2 border-slate-400' />
            </div>

            <div className='w-full flex flex-col justify-center items-start gap-2'>
              <h1 className='text-lg font-semibold text-black'>Email</h1>
              <input type="email" placeholder='Enter your full Name' className='bg-white text-black px-6 py-1 w-full rounded-full border-2 border-slate-400' />
            </div>

          </div>
          <button className='w-full bg-black px-6 py-3 rounded-full text-white font-semibold'>SUBMIT</button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="600" className='w-full grid lg:grid-cols-3 grid-cols-1 justify-end items-start gap-6 mt-10'>
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-black font-bold text-2xl'> Find US</h1>
            <p className='text-xl'>Rua Dom Joao V,21 Lisbon, <br /> PT-1250-089
            </p>
          </div>
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-black font-bold text-2xl'> Find US</h1>
            <p className='text-xl'>Rua Dom Joao V,21 Lisbon,<br /> PT-1250-089
            </p>
          </div>
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-black font-bold text-2xl'> Call US</h1>
            <p className='text-xl'>Rua Dom Joao V,21 Lisbon,<br /> PT-1250-089
            </p>
          </div>

        </div>
      </div>


    </section>
  )
}

export default Contact