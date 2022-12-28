import React from 'react';

const Credit = () => {
  return (
    <aside className='credits aside section ml-5 bg-white dark:bg-gray-600 text-black text-md font-normal dark:text-white rounded-lg shadow-xl p-5 mb-10 animate__animated animate__fadeInDown animate__delay-1s'>
      <div className='section-inner'>
        <h2 className='heading'>Social Media</h2>
        <div className='flex flex-wrap'>
          <button
            onClick={() => {
              window.open('https://twitter.com/sumanth0262');
            }}
            class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
          >
            <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              <i className='fab fa-twitter' /> Follow me on twitter
            </span>
          </button>

          <button
            onClick={() => {
              window.open('https://www.instagram.com/sumanthsamala/');
            }}
            class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'
          >
            <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              <i className='fab fa-instagram' /> Follow me on instagram
            </span>
          </button>

          <button
            onClick={() => {
              window.open('https://dev.to/samalasumanth0262');
            }}
            class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800'
          >
            <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              <i className='fab  fa-brackets-curly' /> Follow on Dev.to
            </span>
          </button>
          <button
            onClick={() => {
              window.open('github.com/SamalaSumanth0262/');
            }}
            class='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
          >
            <span class='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
              <i className='fab fa-github'></i> Follow me on Github
            </span>
          </button>
        </div>
      </div>
      {/*//content*/}
      {/*//section-inner*/}
    </aside>
  );
};

export default Credit;
