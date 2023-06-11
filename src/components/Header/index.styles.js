import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: transparent;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  z-index: 1000;
`;

export const Logo = styled.span`
  font-family: 'quiche-flare', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: beige;

  img {
    max-height: 25px;
    width: auto;
    transition: all 0.5s ease;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 90vw;
  max-width: 1300px;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: 0;
  color: black;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.5s ease;
  height: 70px;
  border-bottom: 2px solid transparent;

  :hover {
    color: #ea4c89;
    transition: all 0.5s ease;
  }
`;
