import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../styles/globalStyles';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  return (
    <Container>
      <FooterWrapper>
        <Row>
          <Col>
            <ColTitle>Socials</ColTitle>

            <SiteLink href='https://github.com/ALICIALVO/Mern-web-chat-project.git' target='_blank'>
              Github
            </SiteLink>
            <SiteLink
              href='https://www.linkedin.com/in/alicia-lvovsky-a478a3287/'
              target='_blank'
            >
              LinkedIn
            </SiteLink>
          </Col>
          {/* col 2 */}
          <Col>
            <ColTitle>Quick Links</ColTitle>
            <SiteRouterLink to='/'>About</SiteRouterLink>
            <SiteRouterLink to='/projects'>Projects</SiteRouterLink>
            <SiteRouterLink to='/contact'>Contact</SiteRouterLink>
          </Col>
          {/* col 3 */}
        </Row>
      </FooterWrapper>
      <Attribution>
        Made with <AiFillHeart color='yellow' /> by{' '}
        <a
          href='https://github.com/ALICIALVO'
          rel='noreferrer'
          target='_blank'
        >
          Alicia Lvovsky
        </a>
      </Attribution>
    </Container>
  );
};
export default Footer;

const FooterWrapper = styled.footer`
  border-top: 1px solid var(--line);
  padding: 2em 0;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Col = styled.div`
  width: 100%;
`;

const ColTitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 0.5em;
`;

const SiteLink = styled.a`
  display: block;
  width: fit-content;
  text-decoration: none;
  margin: 0.5em 0;
  :hover {
    opacity: 0.8;
  }
`;

const SiteRouterLink = styled(Link)`
  display: block;
  width: fit-content;
  text-decoration: none;
  margin: 0.5em 0;
  :hover {
    opacity: 0.8;
  }
`;

const Attribution = styled.div`
  margin: 2em 0;
  margin-top: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;
