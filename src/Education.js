import React from 'react';

const Education = () => {
  return (
    <aside className='education aside section ml-5 bg-white dark:bg-gray-600 text-black text-md font-normal dark:text-white rounded-lg shadow-xl p-5 mb-10'>
      <div className='section-inner'>
        <div className='text-gray-600 text-2xl font-bold hover:animate-pulse mb-3'>
          {' '}
          Education 🏫
        </div>
        <div className='content'>
          <div className='item'>
            <h3 className='title'>
              <i className='fas fa-graduation-cap' /> Masters in Computer
              Science <b>Yet to be Announced</b>
            </h3>
            <h4 className='university mt-2'>
              Swansea University <span className='year'>(2021-2022)</span>
            </h4>
          </div>
          <div className='item'>
            <h3 className='title'>
              <i className='fas fa-graduation-cap' /> BTech Electrical and
              Electronics Engineering (Minor: CSE) <b>83.2%</b>
            </h3>
            <h4 className='university mt-2'>
              Vellore Institute of Technology{' '}
              <span className='year'>(2014-2018)</span>
            </h4>
          </div>
          {/*//item*/}
          <div className='item'>
            <h3 className='title'>
              <i className='fas fa-graduation-cap' />
              PUC - Maths, Physics, Chemistry. <b>94.2%</b>
            </h3>
            <h4 className='university mt-2'>
              Sri Chaitanya College, Vijayawada{' '}
              <span className='year'>(2012-2014)</span>
            </h4>
          </div>
          {/*//item*/}
        </div>
        {/*//content*/}
      </div>
      {/*//section-inner*/}
    </aside>
  );
};

export default Education;
