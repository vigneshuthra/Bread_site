"use client"
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-out-sine'
    })

  }, [])

  return (
    <section id='Hero' className='w-full flex lg:flex-row flex-col justify-between items-start'>
      <div id='image-section' className='lg:w-[50%] w-full'>
        <Image src="/hero.jpg" alt={''} data-aos="zoom-in" width={800} height={500} className='bg-cover bg-center' />
      </div>

      <div id='content-section' className='lg:w-[50%] w-full flex flex-col justify-center items-center gap-10 p-20'>
        <Image src="/logo.png" alt={''} width={120} height={100} data-aos="zoom-in" data-aos-delay="200" />
        <h1 data-aos="zoom-in" data-aos-delay="400" className='text-[50px] text-black text-center leading-[55px]'>Fresh Breads <br /> Handcrafted daily</h1>
        <p data-aos="zoom-in" data-aos-delay="600" className='text-center text-xl text-slate-600'>
          Lorem ipsum dolor sit amet. Sit quae sunt quo consequatur laborum et iusto sunt et quae laborum eum laborum pariatur! Non sequi asperiores ex earum voluptatibus est blanditiis veritatis sit incidunt incidunt
        </p>
        <button data-aos="zoom-in" data-aos-delay="800" className='border-2 border-black rounded-full px-14 py-4 font-bold'> READ MORE</button>
      </div>
    </section>
  )
}

export default Hero