import React from 'react';
import { Zoom } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full h-full pt-20 bg-gradient-to-b from-gray-900 to-black p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-green-500'>
            Contact
          </p>
          <p className='py-6'>
            I would love to get in touch! Submit the form to get in contact with
            me. I look forward to connecting :)
          </p>
        </div>
        <Zoom  className='w-full h-full'>
          <div className=' flex justify-center items-center'>
            <form
              action='https://getform.io/f/b83af40d-5345-4078-8874-217b476195ac'
              method='POST'
              className=' flex flex-col w-full md:w-1/2'>
              <input
                type='text'
                name='name'
                placeholder='Enter your name'
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              />
              <input
                type='text'
                name='email'
                placeholder='Enter your email'
                className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              />
              <textarea
                name='message'
                placeholder='Enter your message'
                rows='10'
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

              <button className='text-white bg-gradient-to-b from-green-500 to-green-550 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>
                Let's talk
              </button>
            </form>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Contact;
