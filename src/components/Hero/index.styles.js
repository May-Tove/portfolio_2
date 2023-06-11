import styled from 'styled-components';
import { motion } from 'framer-motion';
import HeroImage from '/assets/hero-11.jpg';

export const HeroContainer = styled.section`
  overflow: hidden;
`;

export const HeroSection = styled(motion.div)`
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  color: beige;
`;

export const Frontend = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 400;
`;

export const Heading = styled.h1`
  font-size: 5rem;
  max-width: 90vw;

  @media (min-width: 1024px) {
    font-size: 6rem;
    max-width: 80vw;
  }
`;

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 400;
  font-family: 'quiche-flare', sans-serif;
  max-width: 90vw;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 1024px) {
    font-size: 3rem;
    max-width: 80vw;
  }
`;
