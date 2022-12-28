import React from 'react';

const Work = () => {
  return (
    <div className='bg-white dark:bg-gray-600 text-black text-md font-normal dark:text-white rounded-lg shadow-xl p-5 mb-10 '>
      <div className='text-gray-600 text-2xl font-bold mb-10'>
        {' '}
        Work Experience
      </div>
      <hr class='my-3 h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
      <div className='content'>
        <div className='item mb-5'>
          <h3 className='text-black font-bold text-xl mb-2 flex items-center hover:text-green-800'>
            <img
              src='https://www.talentica.com/wp-content/uploads/2021/09/Talentica-Logo.svg'
              width='150px'
              className='mr-2 shadow-xl rounded-lg p-2'
            />
            Software Developer -{''}
            <span className='text-gray-700 text-sm'>
              <a href='https://www.talentica.com'> &nbsp;&nbsp;Talentica</a>
            </span>{' '}
            <span className='text-gray-700 text-sm'>
              (November 2021 - December 2022)
            </span>
          </h3>
          <p>
            &nbsp;&nbsp;&nbsp;In this Mortagage and lending company, As a
            matured developer I have integrated various kinds of integration
            like Asset Verification with Finicity, Income Verification with
            Equifax and Finicity, Asset and Income Verification with Empinfo.
          </p>
        </div>
        <hr class='my-3 h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
        <div className='item mb-5'>
          <h3 className='text-black font-bold text-xl mb-2 flex items-center hover:text-green-800'>
            <img
              src='https://d2667ouk2zvn9v.cloudfront.net/assets/ekincare_logo-157564d02447db7b7cd58fc1367e79245d1eae693b2f63f558ef08cb84034774.png'
              width='150px'
              className='mr-2 shadow-xl rounded-lg p-2'
            />
            Software Developer -{' '}
            <span className='text-gray-700 text-sm'>
              <a href='https://ekincare.com'>&nbsp;&nbsp;Ekincare</a>
            </span>{' '}
            <span className='text-gray-700 text-sm'>
              (July 2020 - November 2021)
            </span>
          </h3>
          <p>
            &nbsp;&nbsp;&nbsp;In this company, I learnt how to write code which
            is scalable and effecient. Implemented various design patterns in
            the repo, writing optmised queries to increase performance of the
            webpage. Implemented client side enhacement techniques like service
            worker.
          </p>
        </div>
        <hr class='my-3 h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
        <div className='item mb-5'>
          <h3 className='text-black font-bold text-xl mb-2 flex items-center hover:text-green-800'>
            <img
              src='https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/057da749-0497-4be1-a2c7-6a6a5bc36590.png'
              width='150px'
              className='mr-2 shadow-xl rounded-lg'
            />
            Software Developer -{' '}
            <span className='text-gray-700 text-sm'>
              <a href='https://letsventure.com'>&nbsp;&nbsp;LetsVenture</a>
            </span>{' '}
            <span className='text-gray-700 text-sm'>
              (June 2018 - July 2020)
            </span>
          </h3>
          <p>
            &nbsp;&nbsp;&nbsp;As a full stack developer learnt languages like
            Ruby on rails, SQL, AngularJS, ReactJS, NodeJS, Bootstrap 4,
            Firebase (Notifications), Post Man, MongoDB, Express. I am
            responsible for developing features on the platform, and Go to guy
            for one its portfolios <b>letsxchange.com</b> and <b>CRM - Tool</b>{' '}
            and <b>Syndicates</b> ( Client Side ).
          </p>
        </div>
        <hr class='my-3 h-px bg-gray-200 border-0 dark:bg-gray-700'></hr>
        {/*//item mb-5*/}
        <div className='item mb-5'>
          <h3 className='text-black font-bold text-xl mb-2 flex items-center hover:text-green-800'>
            Internship - Java:{' '}
            <span className='text-gray-700 text-sm'>
              <a href='#'>&nbsp;&nbsp;Kveninar Technologies</a>
            </span>{' '}
            <span className='text-gray-700 text-sm'>
              (June 2017 - July 2017)
            </span>
          </h3>
          <p>
            &nbsp;&nbsp;&nbsp;During summer vacation, I had done Internship on
            Java Enterprise Edition and built a web app using Servlets and
            apache Server.
          </p>
        </div>
        {/*//item*/}
      </div>
    </div>
  );
};

export default Work;
