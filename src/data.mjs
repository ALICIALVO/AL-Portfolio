import { nanoid } from 'nanoid';

const projects = [
  {
    id: nanoid(),
    title: 'WhatsApp web clone',
    img: '/images/projects/pro.png',
    desc: 'A notes app where one can add quick notes on the go. Data is saved locally.',
    technologies: ['React.js'],
    github: 'https://github.com/ALICIALVO/Mern-web-chat-project.git',
    live: 'https://web-chat-app-omor.onrender.com/',
  },
  {
    id: nanoid(),
    title: 'rainbow Todo - vanilla js',
    img: '/images/projects/rainbowapp.png',
    desc: 'To do list vanilla.js.A notes app where one can add quick notes on the go.A notes app ',
    technologies: ['React.js'],
    github: 'https://github.com/ALICIALVO/to-do-list-app-alicia-yossef.git',
    live: 'https://web-chat-app-omor.onrender.com/',
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
