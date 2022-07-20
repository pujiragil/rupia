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
        <HeroHeading>Investasi Keuangan Anda Sekarang</HeroHeading>
        <HeroText>Rupia adalah tempat judi slot terbaik dengan depo minimal 0 rupiah.</HeroText>
        <HeroBtnWrapper>
          <HeroButton smooth={true} spy={true} offset={-30} duration={500} to='profile'>Dapatkan Percobaan</HeroButton>
          <HeroButton smooth={true} spy={true} offset={-30} duration={500} to='blog' primary="true">Deposit Sekarang</HeroButton>
        </HeroBtnWrapper>
      </HeroContainer>
    </Hero>
  )
}

export default HeroComponents