import PropTypes from 'prop-types';
import { Reveal } from '../Reveal';
import * as Styled from './index.styles';

const Contact = ({ contactRef }) => {
  return (
    <Styled.ContactSection
      ref={contactRef}
      initial={{ y: '100vh', opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 50, delay: 0.5 }}
      className="section"
    >
      <Reveal>
        <h2>Contact Me</h2>
      </Reveal>
      <Reveal>
        <p>
          If you want to reach out, you can send me an email me at{' '}
          <span>
            <a href="mailto: maytoveh@gmail.com">maytoveh@gmail.com</a>
          </span>{' '}
          or message me on{' '}
          <span>
            <a
              href="https://no.linkedin.com/in/may-tove-hovdal-24b406153"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </span>{' '}
        </p>
      </Reveal>
    </Styled.ContactSection>
  );
};

Contact.propTypes = {
  contactRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Contact;
