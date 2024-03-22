import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';


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
    icon: <FaUser className='nav__icon' />,
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
    description: 'Pooja',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Chaudhari',
  },

  {
    id: 3,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 4,
    title: 'Address : ',
    description: 'Ambad(Jalna),Maharashtra',
  },

  {
    id: 5,
    title: 'Phone : ',
    description: '8623982858',
  },

  {
    id: 6,
    title: 'Email : ',
    description: 'poojavchaudhari06@gmail.com',
  },
];

export const stats = [
  {
    id: 1,
    title: 'Frontend Developer',
    description: 'I am front-end developer <br/> with experience in building <br/> responsive and optimized sites',
  },

  {
    id: 2,
    title: 'Backend Developer',
    description: 'I have Experience developing <br/> fast and optimized <br/> backend system and APIs',
  },

  // {
  //   id: 3,
  //   title: 'Happy Customers',
  //   description: '8623982858',
  // },

  // {
  //   id: 4,
  //   title: ' Awards  Won',
  //   description: '8623982858',
  // },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Jan 2023 - June 2023 ',
    title: 'Web Developer Intern <span> Anka Technology Solution pvt ltd Pune </span>',
    desc: 'Designing and developing user frontend interfaces web application using angularJS best practices. Work on admin portal side of live project called PoweswapWorked on technologies like Angular,Ts, Js, Bootstrapt' ,
  },

  {
    id: 2,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Engineering Degree <span> SGGSIE&T Nanded </span>',
    desc: 'Graduated in Information Technology',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'HSC <span> MSS COLLEGE AMBAD </span>',
    
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017',
    title: 'SSC <span> JAIN ENGLISH SCHOOL ,AMBAD </span>',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '80',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '95',
  },

  {
    id: 4,
    title: 'Angular',
    percentage: '80',
  },

  {
    id: 5,
    title: 'React',
    percentage: '70',
  },

  {
    id: 6,
    title: 'Bootstrap',
    percentage: '80',
  },

  {
    id: 7,
    title: 'C/C++',
    percentage: '80',
  },

  {
    id: 8,
    title: 'SQL',
    percentage: '60',
  },

  
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Portfolio',
    details: [
      {
        icon: <FiFileText />,
        title: 'My Portfolio',
        desc: 'Photo',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React+Vite , Html and CSS',
      },
      {
        icon: <a href="https://ang-blog-5b9ef.web.app/"><FiExternalLink/></a> ,
        title: 'Preview : ',
        desc: <a href='https://ang-blog-5b9ef.web.app/' >'https://ang-blog-5b9ef.web.app/'</a>
       
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Blogging Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Personal Blog  : ',
        desc: 'Website',
      },
    
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Angular , js, htm/css and bootstrap',
      },
      {
        icon: <a href="https://ang-blog-5b9ef.web.app/"><FiExternalLink/></a> ,
        title: 'Preview : ',
        desc: <a href='https://ang-blog-5b9ef.web.app/' >'https://ang-blog-5b9ef.web.app/'</a>,
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'GYM WebSite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Gym : ',
        desc: 'Website',
      },  

      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'js, htm/css and bootstrap',
      },
      {
        icon: <a href= "https://poojachaudhari06.github.io/fitness1.github.io/"><FiExternalLink/></a> ,
        title: 'Preview :',
        desc: <a href='https://poojachaudhari06.github.io/fitness1.github.io/'>'https://poojachaudhari06.github.io/fitness1.github.io/'</a>
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Donation Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Donation : ',
        desc: 'Website',
      },
      
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'html,css, js,bootstrap and Razorpay',
      },
      {
        icon: <a href="https://poojachaudhari06.github.io/tsf-donation/"><FiExternalLink/></a> ,
        title: 'Preview : ',
        desc: <a href='https://poojachaudhari06.github.io/tsf-donation/' >'https://poojachaudhari06.github.io/tsf-donation/'</a>,
        
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Banking Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'payment integration : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'html,css and js, bootstrap',
      },
      {
        icon: <a href="https://poojachaudhari06.github.io/basic-banking-system/index.html"><FiExternalLink/></a> ,
        title: 'Preview : ',
        desc: <a href='https://poojachaudhari06.github.io/basic-banking-system/index.html' >'https://poojachaudhari06.github.io/basic-banking-system/index.html'</a>,
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
