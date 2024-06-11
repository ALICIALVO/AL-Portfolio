import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
 
  custom: {
    '--text-color': '#242222',
    '--heading-color': '#242222',
    '--bg-color': 'rgb(255, 255, 255)',
    '--bg-card': 'rgba(255, 255, 255, 0.48)',
    '--bg-img': 'url("public/assets/light.jpg") no-repeat center center',
    '--bg-blur': 'rgba(255, 255, 255, 0.2)',
    '--link-color': '#333',
    '--link-active-color': '#2563eb',
    '--link-hover-color': '#2563eb',
    '--para-color': '#111',
    '--para-gray-color': '#3c3838',
    '--other-para-color': '#534e4e',
    '--accent-blue': '#495469',
    '--underline': '#fde860',
    '--shadow': '0 0 1rem 0.2rem #f4ecec6f',
    '--line': '#ffecec'
  }
});

const darkTheme = createTheme({
  
  custom: {
    '--text-color': '#fff',
    '--heading-color': '#fff',
    '--bg-color': '#02010e',
    '--bg-card': '#181718a8',
    '--bg-img': 'url("public/assets/dark.jpg") no-repeat center center',
    '--bg-blur': 'rgba(0, 0, 0, 0.2)',
    '--link-color': '#a39e9e',
    '--link-active-color': '#fff',
    '--link-hover-color': '#fff',
    '--para-color': '#f7f2f2',
    '--para-gray-color': '#bcafaf',
    '--other-para-color': '#ccc',
    '--shadow': '0 0 0.1rem 0.1rem #121224',
    '--line': '#131214',
    '--underline': '#2563eb'
  }
});

export { lightTheme, darkTheme };
