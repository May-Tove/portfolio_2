import PropTypes from 'prop-types';
import * as Styled from './index.styles';
import { Reveal } from '../Reveal';

const ProjectCard = ({
  project: { image, name, type, description, github, demo },
}) => {
  return (
    <Styled.Card>
      <Reveal>
        <Styled.CardImage src={image} alt={`Screenshot of ${type} in use`} />
      </Reveal>

      <Styled.CardBody>
        <Reveal>
          <Styled.HeadingContainer>
            <h3>{name}</h3>
            <p>{type}</p>
          </Styled.HeadingContainer>
        </Reveal>

        {description.map((paragraph, index) => (
          <Reveal key={index}>
            <p>{paragraph}</p>
          </Reveal>
        ))}

        <Reveal>
          <Styled.ButtonsContainer>
            <Styled.CTA href={github} target="_blank" rel="noreferrer">
              GitHub Repo
            </Styled.CTA>

            <Styled.CTA href={demo} target="_blank" rel="noreferrer">
              Live Site
            </Styled.CTA>
          </Styled.ButtonsContainer>
        </Reveal>
      </Styled.CardBody>
    </Styled.Card>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string),
    github: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
