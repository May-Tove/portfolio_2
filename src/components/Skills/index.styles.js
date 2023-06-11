import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: 1024px) {
    max-width: 400px;
  }
`;

export const Icon = styled.div`
  background-color: #e5f4ff;
  padding: 0.5rem 0.6rem;
  border-radius: 50px;
  font-size: 14px;
`;
