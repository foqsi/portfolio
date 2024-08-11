import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';




const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-cyan-300'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Edward Davis
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I am a Software Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          who specializes in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive web applications.
        </p>
        <div>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-400 hover:border-cyan-400'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
