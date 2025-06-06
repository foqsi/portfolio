import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Computer Science student.</p>
          </div>
          <div>
            <p>
              Currently working on a BT degree in Software Development and work on my own personal projects. 
              I have been programming for almost three years.
              <br/>
              I enjoy gaming and turning wrenches in my free time.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
