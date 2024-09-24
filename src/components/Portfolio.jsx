import React from 'react';
import PortfolioData from '../constants/Portfolio';
import githubmarkwhite from '../assets/github-mark-white.png';
import { Zoom } from 'react-awesome-reveal';

const Portfolio = () => {
  return (
    <div
      name='portfolio'
      className='bg-gradient-to-b from-black to-gray-900 w-full text-white h-full pt-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-green-500'>
            Portfolio
          </p>
          <p className='py-6'>
            These are a handful of projects I have created. Head to my github
            for more details!
          </p>
        </div>
        <div className='w-full h-full '></div>
        <div className='h-full w-full grid md:grid-cols-2 lg:grid-cols-3 place-items-center  gap-5 lg:gap-5'>
          {PortfolioData?.map(
            (
              {
                id,
                src,
                name,
                date,
                description,
                source_code_link,
                tags,
                demo,
              },
              idx
            ) => {
              return (
                <Zoom
                  className='w-full h-full'
                  key={id}>
                  <div className='bg-slate-900 shadow-md shadow-green-500 hover:scale-105 duration-500 md:pb-5 md:px-2 rounded-2xl sm:w-[300px] w-full h-full p-3'>
                    <div className='relative w-full h-[230px]'>
                      <img
                        src={src}
                        alt='project_image'
                        className='w-full h-full object-cover md:object-contain rounded-2xl'
                      />
                    </div>

                    <div className='mt-2'>
                      <div className='flex items-center justify-between'>
                        <h3 className='text-white font-bold text-[24px]'>
                          {name}
                        </h3>
                        <div className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer p-2'>
                          <a
                            href={source_code_link ? source_code_link : '#'}
                            target='_blank'
                            rel='noreferrer'>
                            <img
                              src={githubmarkwhite}
                              className='w-full h-full object-contain'
                              alt=''
                              loading="lazy"
                            />
                          </a>
                        </div>
                      </div>

                      <h3 className='text-white text-[14px]'>{date}</h3>
                      <p className='mt-2 text-secondary text-[14px] text-slate-400'>
                        {description}
                      </p>
                      <div className='w-full h-full flex justify-center items-center mt-4'>
                      
                      </div>
                    </div>

                    <div className='mt-4 flex flex-wrap gap-2 justify-start  '>
                      {tags?.map((tags) => (
                        <p
                          key={tags}
                          className={`text-white-700 bg-green-700 font-bold text-xs px-2 py-2 rounded-xl`}>
                          {tags}
                        </p>
                      ))}
                    </div>
                  </div>
                </Zoom>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
