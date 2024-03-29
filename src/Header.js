import React from 'react';
import SumanthPic from './assets/images/SIRI0390.jpeg';
const Header = () => {
  return (
    <div className='bg-white dark_disabled:bg-gray-700 p-10 tracking-wider rounded-lg shadow-lg w-full'>
      <div className='flex flex-row flex-wrap justify-between'>
        <div className='flex flex-row items-center flex-wrap'>
          <img
            src={SumanthPic}
            alt='Sumanth Samala Profile Image'
            className='rounded rounded-lg items-center text-center shadow shadow-lg animate__animated animate__fadeInDown animate__delay-1s'
            width={'200px'}
            height='200px'
            style={{ margin: '0 auto' }}
          />
          <div className='ml-10 animate__animated animate__flash'>
            <div className='text-4xl font-bold text-gray-700 mb-3'>
              Sumanth Samala
            </div>
            <div className='text-xl text-gray-500 mb-3'>
              Full Stack (OverFlow) Developer 😜
            </div>
            <div className='text-sm text-gray-500 mb-3'>
              Masters in Computer Science @ Swansea University 🇬🇧
            </div>
            <div className='text-sm text-gray-500 mb-3'>
              <a href='tel:07442796769'>Ring me @ (+44) 7442796769 📱</a>
            </div>
            <div className='flex flex-row'>
              <div>
                <ul class='social list-inline flex flex-row'>
                  <li class='mr-5 bg-gray-500 rounded rounded-full p-3 text-white hover:shadow-xl hover:bg-gray-700 hover:cursor-pointer hover:animate-bounce'>
                    <a
                      href='https://twitter.com/sumanth0262'
                      target='_blank'
                      className='w-full'
                    >
                      <i class='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li class='mr-5 bg-gray-500 rounded rounded-full p-3 text-white hover:shadow-xl hover:bg-gray-700 hover:cursor-pointer  hover:animate-bounce'>
                    <a
                      href='https://www.linkedin.com/in/samala-sumanth-82431161/'
                      target='_blank'
                      className='w-full'
                    >
                      <i class='fab fa-linkedin-in'></i>
                    </a>
                  </li>
                  <li class='mr-5 bg-gray-500 rounded rounded-full p-3 text-white hover:shadow-xl hover:bg-gray-700 hover:cursor-pointer  hover:animate-bounce'>
                    <a
                      href='https://github.com/SamalaSumanth0262'
                      target={'_blank'}
                    >
                      <i class='fab fa-github-alt'></i>
                    </a>
                  </li>
                  <li class='mr-5 bg-gray-500 rounded rounded-full p-3 text-white hover:shadow-xl hover:bg-gray-700 hover:cursor-pointer  hover:animate-bounce'>
                    <a
                      href='https://stackoverflow.com/users/8404712/samala-sumanth'
                      target='_blank'
                      className='w-full'
                    >
                      <i class='fab fa-stack-overflow'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='self-center' style={{ margin: '10px auto' }}>
          <a href='mailto: chintusamala96@gmail.com'>
            <button
              type='button'
              className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark_disabled:focus:ring-green-800 font-medium rounded-lg text-xl font-bold px-5 py-2.5 text-center mr-2 mb-2 shadow-xl shadow-'
            >
              <i class='fas fa-paper-plane'></i> Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
