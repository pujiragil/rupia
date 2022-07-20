import styled from "styled-components"

export const Service = styled.div`
  background: #fff;
`

export const ServiceContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 800px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    height: 1000px;
  }

  @media screen and (max-width: 599px) {
    height: auto;
    justify-content: center;
    padding: 6rem 25px;
  }
`

export const ServiceTextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (max-width: 599px) {
    margin-bottom: 6rem;
  }
`

export const ServiceHeader = styled.h1`
  color: #131313;
  font-size: 3rem;
`

export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  height: 60%;
  justify-items: center;
  gap: 1rem;
  align-items: center;

  @media screen and (max-width: 999px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

export const ServiceCard = styled.div`
  background: #131313;
  padding: 2rem 1rem;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  transition: all 0.3s ease;

  @media screen and (max-width: 599px) {
    height: 400px;
  }

  &:hover {
    transition: all 0.3s ease;
    transform: scale(1.03);
  } 
`

export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Img = styled.img`
  width: 70%;
  height: 100%; 
`

export const TextWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  text-align: center;
  width: 100%;
  height: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.h2`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
`

export const Text = styled.p`
  width: 80%;
  font-size: 1rem;
  color: #fff;
`