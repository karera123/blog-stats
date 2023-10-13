import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";

const Header = () => {

  return (
    <header className='p-5 bg-gray-700 flex flex-row fixed w-full z-10'>
      <div className='flex-1'>
        <Link to='/'>
          <h1 className='text-white text-xl'>
            Personal Statistics Blog | 2023-2024
          </h1>
        </Link>
      </div>
      <div>
        <a href='https://github.com/karera123/blog-stats' target='_blank' rel='noreferrer'><FaGithub size={24} color='white' /></a>
      </div>
    </header>
  )
}

export default Header