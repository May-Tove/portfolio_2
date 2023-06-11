import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Styled from './index.styles';
import Logo from '/assets/logo_light@2x.png';

const Header = ({ aboutRef, projectsRef, contactRef }) => {
  const [navbar, setNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleChangeBackground = () => {
    if (window.scrollY >= 600) {
      setNavbar(true);
    } else setNavbar(false);
  };

  window.addEventListener('scroll', handleChangeBackground);

  const checkActiveSection = () => {
    const sections = [
      { name: 'about', ref: aboutRef },
      { name: 'projects', ref: projectsRef },
      { name: 'contact', ref: contactRef },
    ];

    // Get the current scroll position from the top of the page
    const scrollPos = window.pageYOffset + window.innerHeight;

    // Get the height of the whole document
    const docHeight = document.documentElement.offsetHeight;

    // If we're at the bottom of the page, set the active section to 'contact'
    if (docHeight - scrollPos < 50) {
      // 50 is a buffer, change it based on your needs
      setActiveSection('contact');
      return;
    }

    for (const section of sections) {
      const rect = section.ref.current.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 0) {
        setActiveSection(section.name);
        return;
      }
    }

    setActiveSection(null);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleChangeBackground);
    window.addEventListener('scroll', checkActiveSection);

    return () => {
      window.removeEventListener('scroll', handleChangeBackground);
      window.removeEventListener('scroll', checkActiveSection);
    };
  }, []);

  const handleNavClick = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Styled.Header className={navbar ? 'nav-bg' : ''}>
      <Styled.NavBar>
        <Styled.Logo>
          {' '}
          {navbar ? <img src={Logo} alt="Logo" /> : 'may'}
        </Styled.Logo>
        <Styled.NavMenu>
          <li>
            {' '}
            <Styled.NavButton
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => handleNavClick(projectsRef)}
            >
              Projects
            </Styled.NavButton>
          </li>
          <li>
            {' '}
            <Styled.NavButton
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => handleNavClick(aboutRef)}
            >
              About
            </Styled.NavButton>
          </li>
          <li>
            {' '}
            <Styled.NavButton
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => handleNavClick(contactRef)}
            >
              Contact
            </Styled.NavButton>
          </li>
        </Styled.NavMenu>
      </Styled.NavBar>
    </Styled.Header>
  );
};

Header.propTypes = {
  projectsRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  aboutRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  contactRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default Header;
