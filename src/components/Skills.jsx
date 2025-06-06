import React from 'react';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 '>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with the most</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-react-original colored text-7xl" alt="REACT icon"></i>
                        <p className='my-4 cursor-default'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-vuejs-plain colored text-7xl" alt="VUE icon"></i>
                        <p className='my-4 cursor-default'>VUE</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-tailwindcss-plain colored text-7xl" alt="TAILWINDCSS icon"></i>
                        <p className='my-4 cursor-default'>TAILWIND</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-css3-plain colored text-7xl" alt="CSS3 icon"></i>
                        <p className='my-4 cursor-default'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-javascript-plain colored text-7xl" alt="JAVASCRIPT icon"></i>
                        <p className='my-4 cursor-default'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-nodejs-plain colored text-7xl" alt="NODEJS icon"></i>
                        <p className='my-4 cursor-default'>NODEJS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-php-plain colored text-7xl" alt="PHP icon"></i>
                        <p className='my-4 cursor-default'>PHP</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <i class="devicon-python-plain colored text-7xl" alt="PYTHON icon"></i>
                        <p className='my-4 cursor-default'>PYTHON</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
