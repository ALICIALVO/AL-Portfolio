import { nanoid } from 'nanoid';

const projects = [
  {
    id: nanoid(),
    title: 'Mern WhatsApp web clone',
    img: '/images/projects/msg.png',
    desc: 'WhatsApp Web clone with secure login, real-time messaging, media sharing, and responsive design. Built with React and Node.js.',
    technologies: ['React.js'],
    github: 'https://github.com/ALICIALVO/Mern-web-chat-project.git',
    live: 'https://web-chat-app-omor.onrender.com/',
  },
  {
    id: nanoid(),
    title: 'Portfolio Website - React JS',
    img: '/images/projects/night.png',
    desc: 'A sleek portfolio site with dark and light themes, smooth animations, and responsive design. Built with React.',
    technologies: ['React.js'],
    github: 'https://github.com/ALICIALVO/AL-Portfolio.git',
    live: 'https://al-portfolio-1vib.onrender.com',
  },
  {
    id: nanoid(),
    title: 'Rainbow Todo List - Vanilla JS',
    img: '/images/projects/rainbow.png',
    desc: 'To-Do list and notes app built with Vanilla JS. Manage tasks and add quick notes on the go. Simple and efficient.',
    technologies: ['React.js'],
    github: 'https://github.com/ALICIALVO/to-do-list-app-alicia-yossef.git',
    live: 'https://to-do-list-vanilajs.netlify.app/',
  },
  
];

const skills = [
  {
    icon: 'html',
    title: 'HTML',
  },
  {
    icon: 'css',
    title: 'CSS',
  },
  {
    icon: 'javascript',
    title: 'JavaScript',
  },
  {
    icon: 'typescript',
    title: 'TypeScript',
  },
  {
    icon: 'react',
    title: 'React.js',
  },
  {
    icon: 'nodejs',
    title: 'Node.js',
  },
  {
    icon: 'expressjs',
    title: 'Express.js',
  },
  {
    icon: 'mongodb',
    title: 'MongoDB',
  },
  {
    icon: 'sass',
    title: 'Sass',
  },
  {
    icon: 'git',
    title: 'Git',
  },
  {
    icon: 'figma',
    title: 'Figma',
  },
  {
    icon: 'github',
    title: 'Github',
  },
  {
    icon: 'redux',
    title: 'Redux',
  },
  {
    icon: 'mysql',
    title: 'MySQL',
  },
];

export const data = { projects, skills };
