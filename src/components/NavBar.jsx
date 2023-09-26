import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import NavLinks from '../constants/NavLinks';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='flex justify-end items-center w-full h-20 px-4 text-gray-300 bg-black fixed z-[9999]'>
      <ul className='hidden md:flex'>
        {NavLinks.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium  hover:scale-105 hover:text-green-500 duration-200  `}>
            <Link to={link} smooth duration={1000}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10  md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
          {NavLinks.map(({ id, link }) => (
            <li
              key={id}
              className={`px-4 cursor-pointer capitalize py-6 text-4xl`}>
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={1000}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
