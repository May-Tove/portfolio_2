import PropTypes from 'prop-types';
import ProjectCard from '../ProjectCard';
import projects from '../../projects.json';
import * as Styled from './index.styles';

const ProjectsList = ({ projectsRef }) => {
  const reversedProjects = [...projects].reverse();

  return (
    <Styled.ProjectsSection
      ref={projectsRef}
      initial={{ y: '100vh', opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
      className="section"
    >
      <h2>Projects</h2>
      <Styled.ListContainer>
        {reversedProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Styled.ListContainer>
    </Styled.ProjectsSection>
  );
};

ProjectsList.propTypes = {
  projectsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default ProjectsList;
