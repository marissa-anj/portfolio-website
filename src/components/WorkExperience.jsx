import React from 'react';

import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import TimelineElements from '../constants/TimelineElements';

const WorkExperience = () => {
  return (
    <div
      name='experience'
      className='h-full w-full bg-gradient-to-b from-gray-900 to-black pt-20'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-green-500'>
            Work Experience
          </p>
          <p className='text-xl py-6'>Here is my journey so far!</p>
        </div>
      </div>
      <VerticalTimeline>
        {TimelineElements?.map((element) => {
          return (
            <VerticalTimelineElement
              contentStyle={{
                background: '#10142c',
                color: '#fff',
              }}
              contentArrowStyle={{ borderRight: '7px solid #10142c' }}
              iconStyle={{ background: element.iconBg }}
              key={element.id}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={element.icon}
                    alt={element.company}
                    loading='lazy'
                    className='w-full h-full object-contain rounded-sm'
                  />
                </div>
              }>
              <div ClassName='flow-root shadow-md shadow-green-500 text-gray-300'>
                <span ClassName='font-bold text-3xl my-1 float-left '>
                  {element.title}
                </span>
                <h3 className='float-right right-0'>{element.location}</h3>
              </div>

              <h5 className='vertical-timeline-element-subtitles text-gray-300'>
                {element.company}
              </h5>
              <h6 className='vertical-timeline-element-subtitles text-gray-3000'>
                {element.date}
              </h6>
              {/*<p id='description'>{element.description}</p>*/}
              <ul className='mt-5 list-disc ml-5 space-y-2 text-gray-300'>
                {element.points.map((point, index) => (
                  <li
                    key={`experiences-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'>
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
