import React from 'react';

import AboutMe from './AboutMe';
import ContactInformation from './ContactInformation';
import GitHub from './GitHub';
import Projects from './Projects';
import Work from './Work';
import Skills from './Skills';
import Education from './Education';
import Language from './Language';
import Inspiration from './Inspiration';
import Credit from './Credit';
const Layout = () => {
  return (
    <div className='p-10 bg-sky-900 dark:bg-white tracking-wider'>
      <div className='flex flex-row flex-wrap'>
        <div className='flex flex-col w-2/3' id='left'>
          <AboutMe />
          <Work />
          <Projects />
          <GitHub />
        </div>
        <div className='w-1/3' id='right'>
          <Credit />

          <ContactInformation />

          <Skills />
          <Education />
          <Language />
          <Inspiration />
        </div>
      </div>
    </div>
  );
};

export default Layout;
