import styled from "styled-components"
import { Link } from "react-scroll"

export const Foot = styled.footer`
  background: #181818;
`

export const FootContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 25px;

  @media screen and (max-width: 599px) {
    height: auto;
    flex-direction: column;
    padding: 25px;
    text-align: center;
  }
`

export const FootIcon = styled(Link)`
  color: #fff;
  font-weight: 400;
  font-size: 1.5rem;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 599px) {
    margin-bottom: 0.5rem;
  }
`

export const FootCopy = styled.p`
  color: #fff;
  font-size: 1rem;
  font-style: italic;

  @media screen and (max-width: 599px) {
    margin-bottom: 1rem;
  }
`

export const FootLogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FootLogoItem = styled.a`
  color: #fff;
  font-size: 1.2rem;
  margin: 0 0.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #00B4D8;
  }
`