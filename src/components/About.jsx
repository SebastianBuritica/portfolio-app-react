import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sebastian, nice to meet you. Please take a look around!</p>
            </div>
            <div>
              <p>I am self taught FrontEnd developer who fell in love with technology
              and the future of the internet after learning about blockchain. I focus
              on the React.js ecosystem including react native, the basics of Next.js,
              state containers and the different styling libraries to build scalable UI 
              and UX for any type of application adjusting to the client  request. 
              I want to grow as a proffesional in this field, I just need you, the reader and
              hopefully recruiter, to provide me the chance to prove myself in your organization👨🏻‍💻.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
