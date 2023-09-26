import React from 'react';
import CertificatesData from '../constants/Certificates';
import { Zoom } from 'react-awesome-reveal';

const Certifications = () => {
  return (
    <div
      name='certifications'
      className='w-full h-full pt-20  bg-gradient-to-b from-black to-gray-900 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-green-500'>
            Certifications
          </p>
          <p className='text-xl py-6'>
            These are certifications I have gotten to further my learning. Click
            the badge to see the verification certificate.
          </p>
        </div>
        <div className='w-full grid  sm:grid-cols-2 gap-8 text-center py-12 px-6 sm:px-100'>
          {CertificatesData?.map(
            ({ id, src, title, style, href, download }, idx) => {
              return (
                <Zoom
                  key={id}
                  className='w-full h-full
                  '>
                  <div
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <a
                      href={href}
                      className='flex justify-between items-center w-full text-white'
                      download={download}
                      target='_blank'
                      rel='noreferrer'>
                      <img
                        src={src}
                        alt=''
                        loading="lazy"
                        className='rounded-md mx-auto duration-200 hover:scale-105'
                      />
                    </a>

                    <p className='mt-4'>{title}</p>
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

export default Certifications;
