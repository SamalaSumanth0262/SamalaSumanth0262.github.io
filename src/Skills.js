import React from 'react';

const Skills = () => {
  return (
    <div className='ml-5 bg-white dark:bg-gray-600 text-black text-md font-normal dark:text-white rounded-lg shadow-xl p-5 mb-10'>
      <div className='text-gray-600 text-2xl font-bold hover:animate-pulse mb-3'>
        {' '}
        Skills 🎯
      </div>
      <aside className='skills aside section'>
        <div className='section-inner'>
          <div className='content'>
            <p className='intro'>
              I am very much inclined to experiment and explore the new
              technologies in the industry.
            </p>
            <div className='skillset'>
              <div className='item'>
                <h3 className='level-title text-lg text-gray-900 tracking-widest'>
                  Ruby on Rails
                  <span
                    className='level-label'
                    data-toggle='tooltip'
                    data-placement='left'
                    data-animation='true'
                    title='You can use the tooltip to explain more about your skill level...'
                  />
                </h3>
                <div className='level-bar'>
                  <div
                    className='level-bar-inner'
                    data-level='92%'
                    style={{ width: '92%' }}
                  ></div>
                </div>
                {/*//level-bar*/}
              </div>
              <div className='item'>
                <h3 className='level-title text-lg text-gray-900 tracking-widest'>
                  ReactJS
                  <span
                    className='level-label'
                    data-toggle='tooltip'
                    data-placement='left'
                    data-animation='true'
                    title='You can use the tooltip to explain more about your skill level...'
                  />
                </h3>
                <div className='level-bar'>
                  <div
                    className='level-bar-inner'
                    data-level='90%'
                    style={{ width: '90%' }}
                  ></div>
                </div>
                {/*//level-bar*/}
              </div>
              {/*//item*/}
              <div className='item'>
                <h3 className='level-title text-lg text-gray-900 tracking-widest'>
                  NodeJS
                  <span
                    className='level-label'
                    data-toggle='tooltip'
                    data-placement='left'
                    data-animation='true'
                    title='You can use the tooltip to explain more about your skill level...'
                  />
                </h3>
                <div className='level-bar'>
                  <div
                    className='level-bar-inner'
                    data-level='85%'
                    style={{ width: '85%' }}
                  ></div>
                </div>
                {/*//level-bar*/}
              </div>
              {/*//item*/}
              <div className='item'>
                <h3 className='level-title text-lg text-gray-900 tracking-widest'>
                  MySQL, MongoDB
                  <span
                    className='level-label'
                    data-toggle='tooltip'
                    data-placement='left'
                    data-animation='true'
                    title='You can use the tooltip to explain more about your skill level...'
                  />
                </h3>
                <div className='level-bar'>
                  <div
                    className='level-bar-inner'
                    data-level='83%'
                    style={{ width: '83%' }}
                  ></div>
                </div>
                {/*//level-bar*/}
              </div>
              {/*//item*/}

              {/*//item*/}
              <div className='item'>
                <h3 className='level-title text-lg text-gray-900 tracking-widest'>
                  HTM5, CSS3, Bootstrap 4
                  <span
                    className='level-label'
                    data-toggle='tooltip'
                    data-placement='left'
                    data-animation='true'
                    title='You can use the tooltip to explain more about your skill level...'
                  />
                </h3>
                <div className='level-bar'>
                  <div
                    className='level-bar-inner'
                    data-level='81%'
                    style={{ width: '81%' }}
                  ></div>
                </div>
                {/*//level-bar*/}
              </div>
              {/*//item*/}
              <div className='item'>
                <h3 className='level-title text-lg text-gray-900 tracking-widest'>
                  AWS - ECS, Cognito, lamda, Lighsail, EC2, Route53
                  <span
                    className='level-label'
                    data-toggle='tooltip'
                    data-placement='left'
                    data-animation='true'
                    title='You can use the tooltip to explain more about your skill level...'
                  />
                </h3>
                <div className='level-bar'>
                  <div
                    className='level-bar-inner'
                    data-level='77%'
                    style={{ width: '77%' }}
                  ></div>
                </div>
                {/*//level-bar*/}
              </div>
              {/*//item*/}
              <div className='item'>
                <h3 className='level-title text-lg text-gray-900 tracking-widest'>
                  Netlify, Heroku, GitHub Hosting
                  <span
                    className='level-label'
                    data-toggle='tooltip'
                    data-placement='left'
                    data-animation='true'
                    title='You can use the tooltip to explain more about your skill level...'
                  />
                </h3>
                <div className='level-bar'>
                  <div
                    className='level-bar-inner'
                    data-level='75%'
                    style={{ width: '75%' }}
                  ></div>
                </div>
                {/*//level-bar*/}
              </div>
              {/*//item*/}
              <div className='item'>
                <h3 className='level-title text-lg text-gray-900 tracking-widest'>
                  Firebase(GCP)
                  <span
                    className='level-label'
                    data-toggle='tooltip'
                    data-placement='left'
                    data-animation='true'
                    title='You can use the tooltip to explain more about your skill level...'
                  />
                </h3>
                <div className='level-bar'>
                  <div
                    className='level-bar-inner'
                    data-level='65%'
                    style={{ width: '65%' }}
                  ></div>
                </div>
                {/*//level-bar*/}
              </div>
              {/*//item*/}
            </div>
          </div>
          {/*//content*/}
        </div>
        {/*//section-inner*/}
      </aside>
    </div>
  );
};

export default Skills;
