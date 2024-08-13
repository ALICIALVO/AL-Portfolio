import styled from 'styled-components';
import { Container } from '../styles/globalStyles';

const contactIcons = [
  {
    url: './icons/gmail.svg',
    linkTo: 'mailto:YourEmailAddress.com',
    altText: 'gmail',
  },
  {
    url: './icons/linkedin.svg',
    linkTo: 'https://www.linkedin.com/in/alicia-lvovsky-a478a3287/',
    altText: 'linkedin',
  },
];

const Collab = () => {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Heading>Looking for a Full-Stack Developer?</Heading>
          <Text>
          I&apos;m eager to join a dynamic team as a full-stack developer. Have an opening? Let&apos;s connect and create something great together!
          </Text>

          <IconsWrapper>
            {contactIcons.map((icon, i) => (
              <IconLink href={icon.linkTo} key={i}>
                <img src={icon.url} alt={icon.altText} />
              </IconLink>
            ))}
          </IconsWrapper>
        </TextWrapper>
        <Image src='./images/info.svg' alt='' />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: space-between;
  padding: 2em 0;

  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  padding: 2em 0;

  img {
    display: block;
    width: 48px;
    height: 48px;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin: 1em 0;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
`;

const IconLink = styled.a`
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const Heading = styled.h1`
  font-size: 2em;
  line-height: 1.4;
  margin-bottom: 0.6em;
`;

const Text = styled.p`
  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 240px;
  margin: 0 auto;
`;

export default Collab;
