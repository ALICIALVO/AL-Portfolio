import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NormalLink } from '../styles/globalStyles';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <Card className='card'>
      <CardImg src={project.img} alt={project.title} loading='lazy' />
      <CardInfo>
        <CardTitle>{project.title}</CardTitle>
        <CardDesc>{project.desc}</CardDesc>

        <CardLinks>
          {project.github && (
            <CardLink href={project.github} target='_blank' rel='noreferrer'>
              Source <FaGithub />
            </CardLink>
          )}
          <CardLink
            href={project.live}
            primary
            target='_blank'
            rel='noreferrer'
          >
            Live <HiOutlineExternalLink />
          </CardLink>
        </CardLinks>
      </CardInfo>
    </Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    github: PropTypes.string,
    live: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;

const Card = styled.article`
  background: var(--bg-card);

  backdrop-filter: blur(22px);
  /* box-shadow: var(--shadow); */
  border-radius: 0.6rem;
  overflow: hidden;
`;

const CardImg = styled.img`
  aspect-ratio: 4/3;
`;

const CardInfo = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h2`
  color: var(--heading-color);
`;

const CardDesc = styled.small`
  color: var(--para-gray-color);
`;

const CardLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`;

const CardLink = styled(NormalLink)`
  padding: 0.5rem 1rem;
  width: 100%;
  text-align: center;
  justify-content: center;
  font-size: 0.8rem;
  border: 0.1rem solid var(--accent-blue);
  color: ${({ primary }) => (primary ? '#fff' : 'var(--accent-blue)')};
  background: ${({ primary }) => (!primary ? 'none' : 'var(--accent-blue)')};
`;
