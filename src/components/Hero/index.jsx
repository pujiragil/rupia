import React from 'react'
import { 
  Hero,
  HeroContainer, 
  HeroHeading,
  HeroText,
  HeroBtnWrapper,
  HeroButton
} from './HeroElements'

const HeroComponents = ({ id }) => {
  return (
    <Hero id={id}>
      <HeroContainer>
        <HeroHeading>Manage Your Financial Now</HeroHeading>
        <HeroText>Rupia gives you the best experience with all the features you need for financial and all this is free.</HeroText>
        <HeroBtnWrapper>
          <HeroButton to='profile'>Makan Bang</HeroButton>
          <HeroButton to='about' primary="true">Makan Bang</HeroButton>
        </HeroBtnWrapper>
      </HeroContainer>
    </Hero>
  )
}

export default HeroComponents