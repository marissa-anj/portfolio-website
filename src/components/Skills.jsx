import React from 'react';
import ExperienceTechs from '../constants/Experience';
import { Zoom } from 'react-awesome-reveal';
const Skills = () => {
  return (
    <div
      name='skills'
      className='bg-gradient-to-b from-gray-900 to-black w-full h-full pt-20 '>
      <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='pt-6 text-4xl font-bold border-b-4 border-green-500 p-2 inline'>
            Skills
          </p>
          <p className='py-6'>
            These are the technologies, frameworks and languages I've worked
            with.
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0'>
          {ExperienceTechs?.map(({ id, src, title, style }) => (
            <>
              <Zoom key={id} className='w-full h-full'>
                <div
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                  <img src={src} alt='' loading="lazy" className='w-20 mx-auto' />
                  <p className='mt-4'>{title}</p>
                </div>
              </Zoom>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
