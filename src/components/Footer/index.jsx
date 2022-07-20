import Logo from '/logo-icon.svg'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { 
  Foot,
  FootContainer,
  FootIcon,
  FootCopy,
  FootLogoWrap,
  FootLogoItem
} from "./FooterElements"

const Footer = () => {
  return (
    <Foot>
      <FootContainer>
        <FootIcon activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="discover">Rupia<img src={Logo}/></FootIcon>
        <FootCopy>Rupia © All rights reserved. Made by <a href='https://instagram.com/ragilsg_164' target="_blank">PujiRagil</a></FootCopy>
        <FootLogoWrap>
          <FootLogoItem href='https://instagram.com/ragilsg_164/' target="_blank"><FaInstagram/></FootLogoItem>
          <FootLogoItem href='https://github.com/pujiragil/' target="_blank"><FaGithub/></FootLogoItem>
          <FootLogoItem href='https://linkedin.com/in/pujiragil' target="_blank"><FaLinkedin/></FootLogoItem>
        </FootLogoWrap>
      </FootContainer>
    </Foot>
  )
}

export default Footer