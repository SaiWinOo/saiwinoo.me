'use client';

import Experience from '@/components/Experience';
import React from 'react'
import { links } from '../../data/links';
import Project from '@/components/Project';
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";


const page = () => {

  return (
    <div className='bg-secondary text-white min-h-screen'>
      <div className='grid grid-cols-1 gap-10 items-start lg:grid-cols-2 max-w-[1200px] p-10 mx-auto'>
        <Navbar />
        <div className=''>
          <About />
          <Experience />
          <Project />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page;