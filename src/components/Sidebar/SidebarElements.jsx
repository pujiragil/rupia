import styled from "styled-components"
import { Link as LinkS } from "react-scroll"
import { Link as LinkR } from "react-router-dom"

export const Side = styled.div`
  background: #131313;
  top: 0;
  display: none;
  @media screen and (max-width: 900px) {
    position: fixed;
    display: block;
    width: 100%;
  }
`

export const SideContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1300px;
`

export const SideWrapper = styled.div`
  transition: all 0.6s ease-in-out;
  background: #131313;
  position: absolute;
  top: ${({ open }) => ( open ? '0' : '-1500px' )};
  left: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const SideMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 100px);
  width: 100%;
  justify-self: center;
  align-self: center;
  text-align: center;
  list-style: none;
  margin-bottom: 1rem;

  @media screen and (max-width: 496px) {
    grid-template-rows: repeat(5, 80px);
  }

  @media screen and (max-width: 386px) {
    grid-template-rows: repeat(5, 60px);
  }
`

export const SideItem = styled.li`
  width: 100%;
`

export const SideLink = styled(LinkS)`
  color: #fff;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  font-size: 1.3rem;

  &:hover {
    transition: all 0.3s ease;
    color: #00B4D8;
  }

  @media screen and (max-width: 496px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 386px) {
    font-size: 1rem;
  }
`

export const SideBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
`

export const SideBtnLink = styled(LinkR)`
  display: flex;
  border: 1px solid #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  width: 80%;
  height: 100px;
  text-decoration: none;
  font-size: 1.3rem;
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    color: #00B4D8;
    border-color: #00B4D8;
  }

  &:nth-child(2) {
    background: #0096C7;
    border-color: #0096C7;

    &:hover {
      color: #fff;
      background: #00B4D8;
      border-color: #00B4D8;
      filter: drop-shadow(0 0 7px #00B4D8);
    }
  }

  @media screen and (max-width: 496px) {
    height: 70px;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 386px) {
    height: 50px;
    font-size: 1rem;
  }
`