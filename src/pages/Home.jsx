import Collab from '../components/Collab';
import Intro from '../components/Intro';
import ProjectList from '../components/ProjectList';
import Skills from '../components/Skills';
import { data } from '../data.mjs';

const Home = () => {
  const { projects, skills } = data;

  return (
    <div>
      <Intro />
      <Skills skills={skills} />
      <ProjectList projects={projects.slice(0, 3)} />
      <Collab />
    </div>
  );
};
export default Home;
