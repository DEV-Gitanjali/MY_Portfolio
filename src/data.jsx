import {
  FaUser,
  FaHome,
  FaEye, 
  FaFolderOpen,
  FaEnvelopeOpen,
  // FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiEye ,FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FiUser className='nav__icon'/>,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Gitanjalee',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Jena',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },



  {
    id: 5,
    title: 'Address : ',
    description: 'Bhubaneswar',
  },

  {
    id: 6,
    title: 'Phone : ',
    description: '+919861548880',
  },

  {
    id: 7,
    title: 'Email : ',
    description: 'jgitanjali592@gmail.com',
  },

  {
    id: 7,
    title: 'Languages: ',
    description: 'Odia , Hindi , English',
  },
 

  
];

export const stats = [

  {
    id: 1,
    no: '50+',
    title: 'Completed  HandsOn <br/> Projects',
  },

];

export const resume = [

  {
    id: 1,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Engineering Degree <span> Gandhi Institute of Excellent Technocrate</span>',
    desc: 'from Computer Science Engineering(CSE)',
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: '+2 science <span> Chandbali Junior College </span>',
    
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'Bachelor Degree <span> Durga Charan High School </span>',
    
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Css',
    percentage: '75',
  },

  {
    id: 3,
    title: 'JavaScript',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Tailwind Css',
    percentage: '70',
  },

  {
    id: 5,
    title: 'React.js',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Redux Toolkit',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Bootsrap',
    percentage: '65',
  },

  {
    id: 8,
    title: 'GSAP',
    percentage: '45',

  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: ' Movie App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'App',
      },

      {
        icon: <FiEye />,
        title: 'live demo :', 
        desc: 'https://spontaneous-trifle-c62858.netlify.app/',
      },

      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html , TailWind Css , React.js , Redux.toolkit',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/DEV-Gitanjali/Movie_App_React',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Obys Agency website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html5 , css3, javascript, GSAP',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://dev-gitanjali.github.io/Obys_Agency_Clone/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Restaurant Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html5.Css3,React.js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://responsive-modern-restaurant-application.vercel.app/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'AI Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
     
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html5, Tailwind ,Css,React.js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://responsive-morden-ui-ux-website.vercel.app/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Bank App',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
     
      {
        title: 'Language : ',
        desc: 'Html5, Tailwind Css,React.js',
      },
      {
        title: 'Preview : ',
        desc: 'https://bank-modern-app-dun-rho.vercel.app/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Movie seat Booking App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
     
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Html5, css3, javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://dev-gitanjali.github.io/Movie_Seat_Booking/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
