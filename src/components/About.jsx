import React from 'react'

const About = () => {
  return (
    <section id='about' className='text-gray-400 pt-30 pb-10'>
      <div className="border border-teal-300 p-4 h-[330px] relative mx-auto w-full sm:w-[300px] rounded-md ">
        <img className="object-cover group absolute top-0 right-0 hover:top-[-15px] hover:right-[-15px] h-full shadow-lg shadow-teal-300 transition-all duration-500 rounded-md hover:rounded-sm  w-full" src={'/myself.jpeg'} alt="" />

        {/* <img className="object-cover group top-0 right-0 hover:top-[-15px] hover:right-[-15px] h-full shadow-lg shadow-teal-300 transition-all duration-500 rounded-md hover:rounded-sm  w-full" src={'/myself.jpeg'} alt="" /> */}

      </div>
      <p className="mt-10">
        Hi, I{"'"}m Sai Win Oo, a passionate web developer with nearly 2 years of experience in creating beautiful and functional websites and applications. I specialize in web application development and front-end design. I have worked with clients from various industries, such as logistic, education, and entertainment, to help them achieve their online goals.
      </p>
      <div className="mt-10">
        <a href="/saiwinoo.pdf" download={true} className="p-2 bg-transparent border hover:bg-teal-300 hover:text-black transition-all duration-500 border-teal-300 w-auto">Download CV</a>
      </div>
    </section>
  )
}

export default About;