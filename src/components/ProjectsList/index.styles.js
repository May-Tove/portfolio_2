import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4rem 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(800px, 1fr));
  }
`;
