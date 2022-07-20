import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ light }) => ( light ? '#fff' : '#131313' )};
  padding: ${({ primary }) => ( primary ? '15px 36px' : '10px 32px' )};
  background: ${({ light }) => ( light ? '#0096C7' : 'transparent' )};
  border: ${({ light }) => ( light ? '2px solid #0096C7' : '2px solid #131313' )};
  transition: all 0.2s ease;

  &:hover {
    transition: all 0.2s ease;
    border-color: #00B4D8;
    color: ${({ light }) => ( light ? '#fff' : '#00B4D8' )};
    filter: ${({ light }) => ( light ? 'drop-shadow(0 0 10px #00B4D8)' : 'none' )};
    background: ${({ light }) => ( light ? '#00B4D8' : 'transparent' )};
  }

  @media screen and (max-width: 599px) {
    font-size: 1.1rem;
  }

  @media screen and (max-width: 486px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 386px) {
    padding: ${({ primary }) => ( primary ? '10px 30px' : '7px 27px' )};
  }
`