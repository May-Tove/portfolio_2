import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 3rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
