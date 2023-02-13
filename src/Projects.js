import React from 'react';
import Utilisation from './assets/projects/Utilisation.png';
import LetsXchangeFInal from './assets/projects/LetsXchangeFInal.png';
import Avataar from './assets/projects/avataar.png';
import Crm from './assets/projects/crm.png';
import Esop from './assets/projects/mystartupequity.png';
import EditProfile from './assets/projects/EditProfile.png';
import Vaack from './assets/projects/Vaack.png';
import MyAplhaDojo from './assets/projects/myalphadojo.png';
import Parser from 'html-react-parser';

const ProjectInfo = ({ project }) => {
  return (
    <>
      <div className='flex flex-row justify-between items-center hover:bg-gray-100 flex-wrap xs:items-center'>
        {project.image !== '' && (
          <div className='text-gray-600 text-2xl font-bold lg:w-1/6'>
            <img
              src={project.image}
              className='rounded-lg shadow-sm hover:shadow-xl'
              height={'100%'}
              width={'100%'}
            />
          </div>
        )}

        <div className='text-black mt-5 leading-6 ml-10 w-3/4'>
          <>
            <h3 className='text-gray-600 text-xl font-bold'>
              <a
                href={project.link}
                className=' hover:underline hover:text-green-600'
                target='_blank'
              >
                {project.title}
              </a>
            </h3>
            <p className='mb-2'>{Parser(project.description)}</p>
            <p className='font-bold text-gray-600 hover:underline'>
              {project.techUsed}
            </p>
            <p>
              <a
                className='text-green-600 hover:text-green-800'
                href={project.link}
                target='_blank'
              >
                <i className='fas fa-external-link-alt mr-5' />
                Find out more
              </a>
            </p>
          </>
        </div>
      </div>
      <hr class='my-8 h-px bg-gray-200 border-0 dark_disabled:bg-gray-700'></hr>
    </>
  );
};

const Projects = () => {
  const projecInfo = [
    {
      image: Utilisation,
      title: 'Corporate Dashboard Ekincare.com',
      link: 'https://corporate.ekincare.com',
      description:
        ' One of the main portfolios of ekincare company, where i took the responsiblity of revamping the UI into modern UI, providing the best customer experience to end customers. Being a full stack developer, intially started the boiler plate in front end and switched to backend by writing the RESTful API s',
      techUsed: 'Tech Used: Ruby On Rails, ReactJS, PostgreSql, AWS',
    },
    {
      image: LetsXchangeFInal,
      title: 'A Secondary Investment Platform',
      link: 'https://plus.letsventure.com/',
      description:
        'Its a platform where our analyst create a report of the entire startup growth with solid data points and produce a graphical information like piecharts, bar chats etc. This tool is for investors to see how the startup is performing in the market.I was alone <b>Backend, Frontend developer </b> and took care of <b>DevOps</b> too.',
      techUsed:
        'Tech Used: NodeJS, ReactJS, MongoDB, AWS - (Cognito, ECS, Lamda)',
    },
    {
      image: Avataar,
      title: 'A Venture Capital Website',
      link: 'https://avataar.vc',
      description:
        'Avataar is a growth stage, Operational fund partnering actively with brilliant regional Tech-led B2B & SaaS startups to Re-invent, Scale & Transform into successful, enduring global businesses. I was Frontend developer built this website from scratch ',
      techUsed: 'Tech Used: HTML5, CSS3, jQuery,AWS-ECS',
    },
    {
      image: Crm,
      title: 'Customer Relationship Management-Tool',
      link: 'https://crm.letsventure.com',
      description:
        'All the investors details are tracked in this tool.I took care of Front End and Backend for this app and built from scratch.',
      techUsed: 'Tech Used: NodeJS, ReactJS, MongoDB, AWS(DevOps), Material UI',
    },
    {
      image: Esop,
      title: 'ESOP & Cap Table Management made easy',
      link: 'https://www.trica.co/equity?s=m',
      description:
        ' I was Front End Developer in team of 3 developers, this project taught me how to structure the code in a very efficient way and also learnt how to create a React Express boilerplate.',
      techUsed:
        'Tech Used: NodeJS, ReactJS, MongoDB, AWS - (Cognito, ECS, Lamda)',
    },
    {
      image: EditProfile,
      title: 'Angular 1 => ReactJS (Migration)',
      link: 'https://letsventure.com/',
      description:
        'I was one of the Front End Developer among 5 developer during this project.This Project taught me about complex components of ReactJS and Formik(Validation Library).',
      techUsed: 'Tech Used: ReactJS (FrontEnd), ROR (Backend)',
    },
    {
      image: Vaack,
      title: 'E - Commerce Website for Natural Products',
      link: 'http://thenaturallife.in/',
      description:
        'E - commerce website with self manfacured natural products made available on this website, this website is beta version still, This was my freelance project and standalone developer handlesd entire MERN Stack and DevOps.',
      techUsed: 'Tech Used: ReactJS (FrontEnd), ROR (Backend)',
    },
    {
      image: MyAplhaDojo,
      title: 'Accelerate your Career (Website)',
      link: 'https://myalphadojo.com/',
      description:
        'The 4 month boot-camp uses a combination of teaching and learning methodologies to train you in in-demand skills for a successful career in technology sales at tech companies and fast growing tech startups.This was second free lance project where i handled only FrontEnd Development.',
      techUsed: 'Tech Used: ReactJS (FrontEnd), ROR (Backend)',
    },
  ];

  const PetProjects = [
    {
      image: '',
      title: 'Personal Project - Allmeno',
      link: 'https://allmeno2-ec0c9.web.app/',
      description:
        'A user friendly calculator to estimate the bill of the restaurant. This was my first web app which taught me javascript. It has all the restaurants menu and their prices near VIT University. It Got 21k Views in span of 1 week of launch.',
      techUsed: '',
    },
  ];
  return (
    <>
      <div className='bg-white   text-black text-md font-normal dark_disabled:text-white rounded-lg shadow-xl p-5 mb-10 '>
        <div className='text-gray-600 text-2xl font-bold mb-10'>
          {' '}
          My Projects
        </div>
        {projecInfo.map((project) => {
          return <ProjectInfo project={project} />;
        })}
      </div>
      <div className='bg-white   text-black text-md font-normal dark_disabled:text-white rounded-lg shadow-xl p-5 mb-10 '>
        <div className='text-gray-600 text-2xl font-bold mb-10'>
          {' '}
          Other Free Lancing Projects
        </div>
        {PetProjects.map((project) => {
          return <ProjectInfo project={project} />;
        })}
      </div>
    </>
  );
};

export default Projects;
