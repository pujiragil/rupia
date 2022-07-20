import React from 'react'
import SignPage from '../components/Sign'

const SignIn = () => {
  return (
    <SignPage title="SignIn" buttonText="Login Now" bottomText="Don't have an account ?" bottomLink="/signup"/>
  )
}

export default SignIn