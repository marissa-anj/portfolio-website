import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { Zoom } from 'react-awesome-reveal';

const Home = () => {
  return (
    <div
      name='home'
      className='h-full w-full bg-gradient-to-b from-black via-black to-gray-900 py-10 pt-20'>
      <div className='max-w-screen-lg mx-auto flex flex-col gap-6 items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            Hey there! I'm
          </h2>
          <h3 className='text-4xl sm:text-7xl font-bold text-white'>
            Marissa Angeles
          </h3>
          <p className='text-gray-300 py-4 max-w-md'>
            I'm a 4th year computer science student concentrating in Big Data
            Systems and working toward a full time developer position.
          </p>
          <p className='text-gray-300 py-4 max-w-md'>
            {' '}
            During my studies, I have worked as a developer that has had the
            priviledge of working with enterprise level clients. With experience
            as a database developer, data analyst, and web developer, I've grown
            to love specializing in the development, delivery and performance of
            data-driven solutions. I have also created and launched websites,
            and I am currently learning about AWS. In my free time you can find
            me cafe-hopping. I also love to draw!
          </p>

          <div>
            <Link
              to='portfolio'
              smooth
              duration={500}
              className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-650 cursor-pointer'>
              Check out my projects
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <Zoom>
          <div>
            <img
              src={HeroImage}
              loading="lazy"
              alt='my profile'
              className=' rounded-lg md:rounded-2xl mx-auto w-full'
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
