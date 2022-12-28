import React from 'react';
import ReactDOM from 'react-dom';

const Language = () => {
  return (
    <aside className='languages aside section ml-5 bg-white dark:bg-gray-600 text-black text-md font-normal dark:text-white rounded-lg shadow-xl p-5 mb-10'>
      <div className='section-inner'>
        <h2 className='heading'>Languages</h2>
        <div className='content'>
          <ul className='list-unstyled'>
            <li className='item'>
              <span className='title'>
                <strong>English:</strong>
              </span>
              <span className='level text-gray-800'>
                Native Speaker <br className='visible-xs' />
                <i className='fas fa-star text-yellow-500' />{' '}
                <i className='fas fa-star text-yellow-500' />{' '}
                <i className='fas fa-star text-yellow-500' />{' '}
                <i className='fas fa-star text-yellow-500' />{' '}
                <i className='fas fa-star text-yellow-500' />{' '}
              </span>
            </li>
            {/*//item*/}
            <li className='item'>
              <span className='title'>
                <strong>Hindi:</strong>
              </span>
              <span className='level text-gray-800'>
                Native Speaker <br className='visible-xs' />
                <i className='fas fa-star text-yellow-500' />{' '}
                <i className='fas fa-star text-yellow-500' />{' '}
                <i className='fas fa-star text-yellow-500' />{' '}
                <i className='fas fa-star text-yellow-500' />{' '}
              </span>
            </li>
            {/*//item*/}
            <li className='item'>
              <span className='title'>
                <strong>Telugu:</strong>
              </span>
              <span className='level text-gray-800'>
                Native Speaker <br className='visible-xs' />
                <i className='fas fa-star text-yellow-500' />{' '}
                <i className='fas fa-star text-yellow-500' />{' '}
                <i className='fas fa-star text-yellow-500' />{' '}
                <i className='fas fa-star text-yellow-500' />{' '}
                <i className='fas fa-star text-yellow-500' />{' '}
              </span>
            </li>
          </ul>
        </div>
        {/*//content*/}
      </div>
      {/*//section-inner*/}
    </aside>
  );
};
export default Language;
