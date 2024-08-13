import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';
import  { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
    min-height: 100vh;
    background: var(--bg-img);
    background-attachment: fixed;
    line-height: 1.7;
  }

  h1, h2, h3, h4 {
    color: var(--heading-color);
  }

  a {
    color: var(--link-color);
  }

  p {
    color: var(--para-color);
  }

  html {
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

a.logo {
  padding-left: 0 !important;
}

a.logo:first-of-type::after {
  display: none;
}

p {
  color: var(--para-color);
}

img {
  display: block;
  width: 100%;
}

.container {
  width: 90%;
  max-width: 960px;
  margin: 0 auto;
}

.border {
  border: 1px solid red;
}

.text-bg {
  font-size: 5em;
}

.text-md {
  font-style: 4em;
}
`;

// main container
export const Container = styled.div`
  width: 90%;
  max-width: 768px;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const NavLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;

  li a {
    margin-right: 2em;
    padding: 0.2em 0;
    color: var(--link-color);
    border-radius: 4px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    /* hover border animation */
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      height: 2px;
      background-color: var(--link-active-color);
      transition: width 0.4s ease-in-out;
    }

    :hover {
      color: var(--link-active-color);
    }

    :hover::after {
      width: 100%;
    }
  }

  li a.active {
    color: var(--link-active-color);
  }

  li a.active::after {
    width: 100%;
    background-color: var(--link-active-color);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const swipe = keyframes`
 0% {
    left: -64px;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  100% {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export const NormalLink = styled.a`
  background-color: var(--accent-blue);
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  color: white;
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -64px;
    width: 32px;
    height: 64px;
    background-color: white;
    opacity: 0.5;
    filter: blur(10px);
    transform: rotate(30deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    /* animation-name: ${swipe};
    animation-duration: 2s;
    animation-iteration-count: infinite; */
  }

  svg {
    margin-left: 0.8rem;
  }

  :hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

export const HighlightedLink = styled.a`
  background-color: var(--accent-blue);
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  color: white;
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -64px;
    width: 32px;
    height: 64px;
    background-color: white;
    opacity: 0.5;
    filter: blur(10px);
    transform: rotate(30deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
    animation-name: ${swipe};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  svg {
    margin-left: 0.8rem;
  }

  /* :hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  } */
`;

export const ButtonLink = styled(Link)`
  background-color: var(--accent-blue);
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  color: white;
  display: flex;
  width: fit-content;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -64px;
    width: 32px;
    height: 64px;
    background-color: white;
    opacity: 0.5;
    filter: blur(10px);
    transform: rotate(30deg);
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  svg {
    margin-left: 0.8rem;
  }

  :hover:after {
    left: 120%;
    transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const TransparentButton = styled(Link)`
  display: flex;
  align-items: center;
  background-color: transparent;
  border-radius: 100px;
  margin: 0 auto;
  width: fit-content;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
  color: var(--para-color);

  svg {
    margin-left: 0.8rem;
    font-size: 0.8rem;
  }
`;

// styled heading / section heading
export const SectionTitle = styled.h1`
  font-weight: 600;
  position: relative;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.1rem;
  margin-top: 1rem;
`;
