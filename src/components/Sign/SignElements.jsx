import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.main`
  min-height: 600px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  background: #181818;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SignWrapper = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled(Link)`
  text-decoration: none;
  text-align: left;
  height: 80px;
  padding: 0 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 2rem;
  font-weight: 400;
  cursor: pointer;
  margin-bottom: 2rem;

  @media screen and (max-width: 486px) {
    margin-bottom: 0;
  }

  @media screen and (max-width: 386px) {
    font-size: 1.5rem;
  }
`

export const FormContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    padding: 0 25px;
    justify-content: center;
  }
`

export const Form = styled.form`
  max-width: 450px;
  width: 100%;
  height: auto;
  padding: 4rem 2rem;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 7px 7px 5px 5px #131313;

  @media screen and (max-width: 486px) {
    padding: 5rem 2rem;
  }

  @media screen and (max-width: 386px) {
    padding: 4rem 2rem;
  }
`

export const FormH1 = styled.h1`
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 386px) {
    font-size: 1.5rem;
  }
`

export const FormLabel = styled.label`
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;

  @media screen and (max-width: 386px) {
    font-size: 1rem;
  }
`

export const FormInput = styled.input`
  outline: none;
  width: 100%;
  background: transparent;
  border: 1px solid #131313;
  border-radius: 5px;
  padding: 1rem;
  transition: all 0.2s ease;
  margin-bottom: 1rem;
  font-size: 1.1rem;

  &:focus {
    border-color: #fff;
  }

  @media screen and (max-width: 386px) {
    font-size: 1rem;
  }
`

export const FormButton = styled(FormInput)`
  padding: 0.5rem 1.5rem;
  margin: 1rem 0;
  padding: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #fff;
  font-weight: 600;
  color: #131313;
  border: none;
  outline: none;

  &:hover {
    transition: all 0.2s ease;
    background:#131313;
    color: #fff;
  }

  @media screen and (max-width: 386px) {
    font-size: 1rem;
  }
`

export const FormText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 386px) {
    font-size: 0.8rem;
  }
`

export const FormLink = styled(Link)`
  font-style: italic;
`