import { createRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProjectsList from './components/ProjectsList';
import { AnimatePresence } from 'framer-motion';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const aboutRef = createRef();
  const projectsRef = createRef();
  const contactRef = createRef();
  return (
    <>
      <AnimatePresence mode="wait">
        <Header
          projectsRef={projectsRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
        <main>
          <Hero />
          <div className="main-global-styling">
            <ProjectsList projectsRef={projectsRef} />
            <About aboutRef={aboutRef} />
            <Contact contactRef={contactRef} />
          </div>
        </main>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
