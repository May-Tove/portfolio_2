import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const CardImage = styled.img`
  height: 400px;
  width: 100%;

  @media (min-width: 1024px) {
    min-width: 50%;
    height: 450px;
  }
`;

export const CardBody = styled.div`
  width: 100%;
`;

export const HeadingContainer = styled.div`
  margin-bottom: 20px;
  border-bottom: 0.5px solid lightgrey;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const CTA = styled.a`
  background-color: #262626;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 14px;
  padding: 10px 16px;
  transition: all 0.5s ease;

  :hover,
  :focus {
    background-color: #6a6a6a;
    color: white;
    transition: all 0.5s ease;
  }
`;
