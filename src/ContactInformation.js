import React from 'react';

const ContactInformation = () => {
  return (
    <div className='ml-5 bg-white dark:bg-gray-600 text-black text-md font-normal dark:text-white rounded-lg shadow-xl p-5 mb-10 animate__animated animate__fadeInDown animate__delay-1s'>
      <div className='content'>
        <ul className='list-unstyled flex flex-col'>
          <li className=' mb-3 text-green-900 hover:underline'>
            <i className='fas mr-5 fa-map-marker-alt' />
            <span className='sr-only'>Location:</span>Swansea, United Kingdom
          </li>
          <li className=' mb-3 text-green-900 hover:underline'>
            <i className='fas mr-5 fa-envelope' />
            <span className='sr-only'>Email:</span>
            <a href='#'>chintusamala96@gmail.com</a>
          </li>
          <li className=' mb-3 text-green-900 hover:underline'>
            <i className='fas mr-5 fa-link' />
            <span className='sr-only'>Website:</span>
            <a href='#'>https://sumanthsamala.netlify.com/</a>
          </li>
        </ul>
      </div>
      {/*//content*/}
    </div>
  );
};

export default ContactInformation;
