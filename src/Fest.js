import React from 'react';

const Fest = () => {
  return (
    <aside className='list conferences aside section'>
      <div className='section-inner'>
        <h2 className='heading'>Fests</h2>
        <div className='content'>
          <ul className='list-unstyled'>
            <li>
              <i className='far fa-calendar-alt' />{' '}
              <a href='#' target='_blank'>
                Gravitas ( Tech Fest)
              </a>{' '}
              (VIT - 2018)
            </li>
            <li>
              <i className='far fa-calendar-alt' />{' '}
              <a href='#'>Meetup ReactJS</a> (Paypal Banglore)
            </li>
          </ul>
        </div>
        {/*//content*/}
      </div>
      {/*//section-inner*/}
    </aside>
  );
};

export default Fest;
