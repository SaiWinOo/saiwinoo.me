import React from 'react'

const page = () => {
  return (
    <div className='bg-secondary text-white min-h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1000px] mx-auto'>
        <div>
          <h1 className='font-bold text-4xl'>Sai Win Oo</h1>
          <h4>Experienced Fullstack Developer</h4>
          <p>I build exceptional and accessible digital experiences for the web.</p>
          <div>
            <nav class="nav hidden lg:block" aria-label="In-page jump links">
              <ul class="mt-16 w-max">
                <li>
                  <a class="group flex items-center py-3 active" href="#about">
                    <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                    </span>
                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">About</span>
                  </a>
                </li>
                <li>
                  <a class="group flex items-center py-3 " href="#experience">
                    <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span><span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
                  </a>
                </li>
                <li>
                  <a class="group flex items-center py-3 " href="#projects">
                    <span class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
                    </span>
                    <span class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div>
          <div>
            About Section
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;