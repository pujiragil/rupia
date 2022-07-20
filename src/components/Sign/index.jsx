import React from 'react'
import Icon from '/logo-icon.svg'
import { 
  Container,
  SignWrapper,
  Logo,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  FormText,
  FormLink
} from './SignElements'

const SignPage = ({ title, buttonText, bottomText, bottomLink }) => {
  return (
    <>
      <Container>
        <SignWrapper>
          <Logo to={'/'}>Rupia<img src={Icon} alt="logo"/></Logo>
        <FormContent>
            <Form>
              <FormH1>{title}</FormH1>
              <FormLabel>Email</FormLabel>
              <FormInput type={'email'} placeholder="Email..."/>
              <FormLabel>Password</FormLabel>
              <FormInput type={'password'} placeholder="Password..."/>
              <FormButton type={'submit'} value={buttonText}/>
              <FormText>{bottomText} <FormLink to={bottomLink}>SignIn</FormLink></FormText>
            </Form>
          </FormContent>
        </SignWrapper>
      </Container>
    </>
  )
}

export default SignPage