import styled from 'styled-components';
import { useThemeContext } from '../context/ThemeContext';
import { Container, Nav, NavLinks } from '../styles/globalStyles';
import { BsMoon, BsSun } from 'react-icons/bs';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollIndicator from './ScrollIndicator';

const Navbar = () => {
  const { state, dispatch } = useThemeContext();
  const { theme } = state;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef();
  const [bgBlur, setBgBlur] = useState(false);

  const handleThemeToggle = () => {
    dispatch({
      type: 'TOGGLE_THEME',
      payload: theme === 'light' ? 'dark' : 'light',
    });
  };

  useEffect(() => {
    const animation = gsap.fromTo(
      mobileMenuRef.current.children,
      { x: -300 },
      {
        x: 0,
        stagger: 0.02,
      }
    );

    return () => {
      animation.kill();
    };
  });

  useEffect(() => {
    function scrollChecker() {
      if (window.scrollY > 100) {
        setBgBlur(true);
      } else {
        setBgBlur(false);
      }
    }
    document.addEventListener('scroll', scrollChecker);

    return () => window.removeEventListener('scroll', scrollChecker);
  }, []);

  return (
    <Header mobile={mobileMenuOpen} bgBlur={bgBlur} theme={theme}>
      <ScrollIndicator />
      <Container>
        <Nav>
          <HamburgerMenu onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <IoMdClose /> : <HiOutlineMenuAlt2 />}
          </HamburgerMenu>
          <MobileNavLinks
            className={mobileMenuOpen ? 'open' : ''}
            ref={mobileMenuRef}
          >
            <li>
              <NavLink
                to='/'
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/projects'
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Contact
              </NavLink>
            </li>
          </MobileNavLinks>
          <NavLinks>
            <li>
              <NavLink
                to='/'
                className={({ isActive, isPending }) => {
                  return isActive
                    ? 'active logo'
                    : isPending
                    ? 'pending logo'
                    : 'logo';
                }}
              >
                <Logo
                  src='./images/al.png'
                  alt='logo image'
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/projects'
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/contact'
                className={({ isActive, isPending }) => {
                  return isActive ? 'active' : isPending ? 'pending' : '';
                }}
              >
                Contact
              </NavLink>
            </li>
          </NavLinks>
          <ToggleContainer>
            <ToggleCheckbox
              type='checkbox'
              id='checkbox'
              checked={theme === 'dark'}
              onChange={handleThemeToggle}
            />
            <ToggleLabel htmlFor='checkbox'>
              <ToggleBall />
              <BsMoon />
              <BsSun />
            </ToggleLabel>
          </ToggleContainer>
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.bgBlur && 'var(--bg-blur)'};
  backdrop-filter: ${(props) => props.bgBlur && 'blur(20px)'};
  border-bottom: ${(props) =>
    props.bgBlur
      ? props.theme === 'dark'
        ? '1px solid #cbd5e11a'
        : '1px solid #0f172a1a'
      : '1px solid transparent'};
`;

const Logo = styled.img`
  width: 100%;
  max-width: 32px;
`;

const HamburgerMenu = styled.button`
  font-size: 1.5em;
  background-color: transparent;
  border: none;
  outline: none;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  display: none;
  color: var(--text-color);

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavLinks = styled.nav`
  list-style-type: none;
  position: fixed;
  top: 12vh;
  left: 0;
  width: 100%;
  z-index: 1000;
  min-height: 88vh;
  background-color: var(--bg-color);
  backdrop-filter: blur(10px);
  display: none;
  padding: 0 5%;

  &.open {
    display: block;
  }

  li a {
    margin-right: 0;
    padding: 1em 0;
    border-bottom: 1px solid var(--line);
    color: var(--link-color);
    text-decoration: none;
    display: block;

    :hover {
      color: var(--link-active-color);
    }
  }

  li a.active {
    color: var(--link-active-color);
  }

  li a.active::after {
    width: 100%;
    background-color: var(--link-active-color);
  }

  @media (min-width: 768px) {
    display: none;

    &.open {
      display: none;
    }
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleCheckbox = styled.input`
  opacity: 0;
  position: absolute;
`;

const ToggleLabel = styled.label`
  cursor: pointer;
  background-color: var(--accent-blue);
  width: 2.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  position: relative;
  border-radius: 100px;
`;


const ToggleBall = styled.div`
  position: absolute;
  top: 0.5em;
  left: 0.5em;
  width: 1.1rem;
  height: 1.1rem;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.4s ease;
  ${ToggleCheckbox}:checked + ${ToggleLabel} & {
    transform: translateX(1.6rem);
  }
`;

// const ToggleIcon = styled.div`
//   color: #fff;
// `;
