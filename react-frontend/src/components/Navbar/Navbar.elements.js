import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';

export const Nav = styled.nav`
  background-color: #35322d;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 3rem;
  display: flex;
  align-items: center;
  font-family: 'Dancing Script', sans-serif;

  a{
    color: #fff;
    font-family: 'Dancing Script', sans-serif;
    text-decoration: none;
  }

  a:hover {
      color: #ffc500;
    }
`;



export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  margin-top: 5%;
  font-size: 1rem;
  border-bottom: 2px solid transparent;
  font-family: 'Poppins', sans-serif;
  &:hover {
    border-bottom: 2px solid #4b59f7;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavItemBtn = styled.button`
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    padding: 5px 1px;
    border-radius: 50px;
    transition: 0.5s;
    line-height: 1;
    margin-top: 12px;
    margin-right: -5%;
    -webkit-animation-delay: 0.8s;
    animation-direction: alternate;
    animation-delay: 0.8s;
    border: 2px solid #ffb03b;
    background: transparent;
    color: #fff;
    width: 50%;

    &:hover {
    background: #ffb03b;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    font-size: 18px;
    }
    a{
        color: #fff;
    }
    a:link{
        text-decoration: none;
    }
  @media screen and (max-width: 960px) {
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    padding: 5px 1px;
    border-radius: 50px;
    transition: 0.5s;
    line-height: 1;
    margin-top: 12px;
    margin-right: -5%;
    -webkit-animation-delay: 0.8s;
    animation-direction: alternate;
    animation-delay: 0.8s;
    border: 2px solid #ffb03b;
    background: transparent;
    color: #fff;
    width: 50%;

    &:hover {
    background: #ffb03b;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    font-size: 18px;
    }
    a{
        color: #fff;
    }
    a:link{
        text-decoration: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  a{
    color: #fff;
  }  
  a:Link{
    text-decoration: none;
  }  
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #ffc500;
      transition: all 0.3s ease;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const UserLogo = styled.h1`
  margin-right: -9%;
  margin-top: 2%;
  margin-left: 8%;

`;