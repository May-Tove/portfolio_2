/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import * as Styled from './index.styles';
import Skills from '../Skills';
import { Reveal } from '../Reveal';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = ({ aboutRef }) => {
  return (
    <motion.section
      ref={aboutRef}
      initial={{ y: '100vh', opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
      className="section"
    >
      <Reveal width="100%">
        <h2>About Me</h2>
      </Reveal>
      <Styled.AboutContainer>
        <div>
          <Reveal>
            <p>
              I'm an enthusiastic front-end developer with a deep-seated passion
              for coding and design. I just graduated from my higher
              professional degree in frontend development at Noroff, and I'm now
              keen to embark on this exciting journey in the tech industry.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Over the past nine years, I've gained skills in various roles
              within one of Norway's largest hotels, strengthening my abilities
              in problem-solving, adaptability, and teamwork - all of which are
              important as a developer also.
            </p>
          </Reveal>
          <Reveal>
            <p>
              My aspiration is to continually develop my skills, progress
              towards a senior developer position, and be a reliable resource
              for my team. I eagerly anticipate contributing to, learning from,
              and engaging with the tech community. Please feel free to explore
              further to learn more about the projects I have worked on during
              my studies.
            </p>
          </Reveal>
          <Reveal>
            <Styled.LinkContainer>
              <p>My Links</p>
              <a href="https://github.com/May-Tove">
                <FaGithub size={20} />
              </a>

              <a href="https://no.linkedin.com/in/may-tove-hovdal-24b406153">
                <FaLinkedin size={20} />
              </a>
            </Styled.LinkContainer>
          </Reveal>
        </div>
        <Reveal>
          <Skills />
        </Reveal>
      </Styled.AboutContainer>
    </motion.section>
  );
};

About.propTypes = {
  aboutRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default About;
