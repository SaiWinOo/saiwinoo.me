import Experience from '@/components/Experience';
import React from 'react'
import { links } from '../../data/links';
import Project from '@/components/Project';
import About from '@/components/About';


const page = () => {
  return (
    <div className='bg-secondary text-white min-h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] p-10 mx-auto'>
        <div>
          <h1 className='font-bold text-4xl'>Sai Win Oo</h1>
          <h4>Experienced Fullstack Developer</h4>
          <p>I build exceptional and accessible digital experiences for the web.</p>
          <div>
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                {
                  links.map(link => (
                    <li key={link.href}>
                      <a className="group flex items-center py-3 active" href={link.href}>
                        <span className='mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">{link.text}</span>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
        <div className=''>
          <About />
          <Experience />
          <Project />
        </div>
      </div>
    </div>
  )
}

export default page;