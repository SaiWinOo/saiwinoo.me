import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { PiLinkedinLogoBold } from "react-icons/pi";

const links = {
  github: 'https://www.github.com/SaiWinOo',
  instagram: 'https://www.instagram.com/saiwinoo13/',
  twitter: 'https://twitter.com/Saiwinoo',
  linkedin: 'https://www.linkedin.com/in/saiwinoo/',
};

const SocialLinks = () => {
  return (
    <ul className='flex gap-4'>
      <li>
        <a href={links.github} target='_blank' className='hover:text-white text-gray-400 cursor-pointer'>
          <FaGithub className='text-2xl hover:scale-110 transition-all duration-300' />
        </a>
      </li>
      <li>
        <a href={links.instagram} className='hover:text-white text-gray-400 cursor-pointer'>
          <FaInstagram className='text-2xl hover:scale-110 transition-all duration-300' />
        </a>
      </li>
      <li>
        <a href={links.twitter} className='hover:text-white text-gray-400 cursor-pointer'>
          <FiTwitter className='text-2xl hover:scale-110 transition-all duration-300' />
        </a>
      </li>
      <li>
        <a href={links.linkedin} className='hover:text-white text-gray-400 cursor-pointer'>
          <PiLinkedinLogoBold className='text-2xl hover:scale-110 transition-all duration-300' />
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks;