import styled from "styled-components"
import { Link as LinkS } from "react-scroll"
import { Link as LinkR } from "react-router-dom"

export const Nav = styled.nav`
  background: #131313;
  z-index: 9;
  width: 100%;
  position: fixed;
  top: 0;
  `

export const NavContainer = styled.div`
  background: #131313;
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
  height: 80px;
  padding: 0 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 386px) {
    height: 60px;
  }
`

export const NavLogo = styled(LinkS)`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 400;

  @media screen and (max-width: 496px) {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 386px) {
    font-size: 1.5rem;
  }
`

export const NavToggle = styled.div`
  cursor: pointer;
  z-index: 99;
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
  }
`

export const Bars = styled.span`
  width: 25px;
  height: 3px;
  margin: 5px 0;
  border-radius: 15px;
  display: none;
  transition: all 0.3s ease-in-out;

  &:nth-child(1) {
    background: ${({ open }) => ( open ? '#00B4D8' : '#fff' )};
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => ( open && 'translateX(7px)' )};
  }

  &:nth-child(2) {
    transition: all 0.3s ease-in-out;
    background: ${({ open }) => ( open ? '#00B4D8' : '#fff' )};
  }
  
  &:nth-child(3) {
    background: ${({ open }) => ( open ? '#00B4D8' : '#fff' )};
    transition: all 0.5s ease-in-out;
    transform: ${({ open }) => ( open && 'translateX(-7px)' )};
  }



  @media screen and (max-width: 900px) {
    display: block;
  }
`

export const NavMenu = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  list-style: none;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const NavItem = styled.li`
  color: #fff;
`

export const NavLink = styled(LinkS)`
  font-size: 1.1rem;
  padding: 0 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    color: #00B4D8;
  }
`

export const NavBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const NavBtn = styled(LinkR)`
  font-size: 1.1rem;
  text-decoration: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 10px 25px;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:nth-child(1) {
    margin: 0 1rem;
    
    &:hover {
      transition: all 0.3s ease;
      border-color: #00B4D8;
      color: #00B4D8;
    }
  }


  &:nth-child(2) {
    background: #0096C7;
    border-color: #0096C7;
    transition: all 0.3s ease;

    &:hover {
      filter: drop-shadow(0 0 7px #00B4D8);
      background: #00B4D8;
      transition: all 0.3s ease;
    }
  }
`