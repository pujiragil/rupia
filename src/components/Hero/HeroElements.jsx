import styled from "styled-components"
import { Link } from "react-scroll"

export const Hero = styled.main`
  background: #131313;
`

export const HeroContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 800px;
  padding: 0 50px;
  font-family: 'Inter', sans-serif;
  font-weight: 800; 
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 900px) {
    height: 100vh;
    padding: 0 25px;
  }
`

export const HeroHeading = styled.h1`
  color: #fff;
  width: 70%;
  font-size: 3.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 496px) {
    font-size: 2.5rem;
    width: 100%;
  }

  @media screen and (max-width: 386px) {
    font-size: 2rem;
  }
`

export const HeroText = styled.p`
  color: #fff;
  font-weight: 400;
  font-size: 1.5rem;
  width: 70%;
  margin-bottom: 2rem;

  @media screen and (max-width: 496px) {
    font-size: 1.2rem;
    width: 100%;
    width: 90%;
  }

  @media screen and (max-width: 386px) {
    font-size: 1.1rem;
  }
`

export const HeroBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 496px) {
    flex-direction: column;
  }
`

export const HeroButton = styled(Link)`
  padding: 15px 36px;
  background: ${({ primary }) => ( primary ? '#0096C7' : 'transparent' )};
  border: ${({ primary }) => ( primary ? '2px solid #0096C7' : '2px solid #fff' )};
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-right: ${({ primary }) => ( primary ? '0' : '1rem' )};
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    background: ${({ primary }) => ( primary ? '#00B4D8' : 'transparent' )};
    border-color: #00B4D8;
    color: ${({ primary }) => ( primary ? '#fff' : ' #00B4D8' )};
    filter: ${({ primary }) => ( primary ? 'drop-shadow(0 0 10px #00B4D8)' : 'none' )};
  }

  @media screen and (max-width: 496px) {
    margin: ${({ primary }) => ( primary ? '1rem 0 0 0' : '0' )};
    width: 80%;
    border-width: 1px;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 386px) {
    font-size: 1rem;
  }

`