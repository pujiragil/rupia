import styled from "styled-components"

export const Sec = styled.section`
  background: ${({ dark }) => ( dark === true ? '#131313' : '#fff')};
`

export const SecContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  height: 800px;
  padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    height: 1000px;
  }

  @media screen and (max-width: 599px) {
    /* max-height: 100vh; */
    height: 92vh;
  }
`

export const SecWrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-template-areas: ${props => props.imgStart === true ? "'col2 col1'" : "'col1 col2'"};

  @media screen and (max-width: 599px) {
    grid-template-areas: ${props => props.imgStart === true ? "'col2 col2' 'col1 col1'" : "'col1 col1' 'col2 col2'" };
  }
`

export const Column1 = styled.div`
  grid-area: col1;
  /* justify-self: center; */
  /* align-self: center; */
  max-width: 600px;
  width: 100%;
  height: 100%;
  /* color: #fff; */
  /* display: flex; */
  /* background: #131313; */

  @media screen and (max-width: 900px) {
    max-width: 100%;
    padding: 0 1rem;
  }

  @media screen and (max-width: 599px) {
    padding: 1rem 0;
  }
`

export const Column2 = styled(Column1)`
  grid-area: col2;
  /* background: red; */
  @media screen and (max-width: 900px) {
    width: 50vw;
  }

  @media screen and (max-width: 599px) {
    width: 100%;
  }
`

export const TextWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: ${({ imgStart }) => ( imgStart === true ? 'right' : 'left' )};
  align-items: ${({ imgStart }) => ( imgStart === true ? 'flex-end' : 'flex-start' )};
`

export const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #00B4D8;
`

export const Header = styled.h1`
  color: ${({ dark }) => ( dark === true ? '#fff' : '#131313')};
  font-size: 3rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 599px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 386px) {
    font-size: 2rem;
  }
`

export const Description = styled.p`
  color: ${({ dark }) => ( dark === true ? '#fff' : '#131313')};
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 2rem;

  @media screen and (max-width: 599px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 386px) {
    font-size: 1.1rem;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 386px) {
    width: 80%;
    height: 80%;
  }
`