import React from 'react';

const Inspiration = () => {
  return (
    <aside className='list music aside section bg-white   text-black text-md font-normal dark_disabled:text-white rounded-lg shadow-xl p-5 lg:mt-0 lg:m-10'>
      <div className='section-inner'>
        <h2 className='heading'>Favourite Authors, Podcasts</h2>
        <div className='content'>
          <ul className='list-unstyled'>
            <li>
              <i className='fas fa-headphones' />{' '}
              <a href='#' className='text-green-900'>
                Dan Abramnov (React Author)
              </a>
            </li>
            <li>
              <i className='fas fa-headphones' />{' '}
              <a href='#' className='text-green-900'>
                Kent C Dodds (Blogger)
              </a>
            </li>
            <li>
              <i className='fas fa-headphones' />{' '}
              <a href='#' className='text-green-900'>
                Naval ravikant (Angel list Founder)
              </a>
            </li>
            <li>
              <i className='fas fa-headphones' />{' '}
              <a href='#' className='text-green-900'>
                Sadhguru
              </a>
            </li>
          </ul>
        </div>
        {/*//content*/}
      </div>
      {/*//section-inner*/}
    </aside>
  );
};

export default Inspiration;
