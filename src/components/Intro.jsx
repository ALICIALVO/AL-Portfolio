import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, HighlightedLink } from '../styles/globalStyles';
import avatar from '../../public/assets/avatar.jpg';
import { FiDownload } from 'react-icons/fi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Intro = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Wrapper>
          <MyImg src={avatar} alt='AL' loading='lazy' />
          <Description>
            <Heading>Alicia Lvovsky</Heading>
            <Title>Full Stack Developer</Title>
            <Bio>
              Passionate about Technology and Startups | Life long learner
            </Bio>
            <HighlightedLink
              href=''
              target='_blank'
            >
              Download Resume <FiDownload />
            </HighlightedLink>
            <IconsWrapper>
              <Icon href='https://github.com/ALICIALVO' target='_blank'>
                <BsGithub />
              </Icon>
              <Icon
                href='https://www.linkedin.com/in/alicia-lvovsky-a478a3287/'
                target='_blank'
              >
                <BsLinkedin />
              </Icon>
            </IconsWrapper>
          </Description>
        </Wrapper>
      </motion.div>
    </Container>
  );
};

export default Intro;

const Wrapper = styled.div`
  padding: 2rem 0;
  margin: 2rem 0;
  min-height: 50vh;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 12rem;
  }
`;

const Description = styled.div`
  flex-grow: 1;
`;

const Heading = styled.h1`
  font-size: 4rem;
  line-height: 1.2;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 400;
`;

const Bio = styled.p`
  color: var(--other-para-color);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const MyImg = styled.img`
  display: block;
  width: 50%;
  max-width: 10rem;
  border-radius: 50%;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    max-width: 8rem;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
`;

const Icon = styled.a`
  color: var(--para-color);
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;

  :hover {
    color: var(--accent-blue);
  }
`;
