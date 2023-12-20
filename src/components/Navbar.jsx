'use client';

import React from 'react'
import { useState, useEffect } from 'react';
import { links } from '../../data/links';
import SocialLinks from './SocialLinks';


const Navbar = () => {


  const [activeLink, setActiveLink] = useState('#about');
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveLink(`#${entry.target.id}`);
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '30px',
      threshold: 0.7,
    });

    const targets = document.querySelectorAll('section[id]');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);


  return (
    <div className='h-[80vh] flex flex-col justify-between  static lg:sticky top-0 pt-32' >
      <div>
        <h1 className='font-bold text-[50px] text-gray-200'>Sai Win Oo</h1>
        <h4 className='font-semibold text-2xl text-gray-300'>Experienced Fullstack Developer</h4>
        <p className='text-gray-400 my-5'>I build exceptional and accessible digital experiences for the web.</p>
        <div>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              {
                links.map(link => (
                  <li key={link.href} >
                    <a className={`group flex items-center py-3 ${link.href === activeLink ? 'nav-active' : ''}`} href={link.href}>
                      <span className='nav-line mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{link.text}</span>
                    </a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
      <SocialLinks />
    </div >
  )
}

export default Navbar;