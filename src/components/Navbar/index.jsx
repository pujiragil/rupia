import icon from '/logo-icon.svg'
import { 
  Nav,
  NavContainer, 
  NavLogo,
  NavToggle,
  Bars,
  NavMenu,
  NavItem,
  NavLink,
  NavBtnWrapper,
  NavBtn
} from "./NavbarElements"

const Navbar = ({ open, isToggle }) => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo onClick={isToggle} activeClass="active" spy={true} smooth={true} offset={0} duration={500} to="discover">Rupia<img src={icon} alt="icon"/></NavLogo>
        <NavToggle onClick={isToggle}>
          <Bars open={open}></Bars>
          <Bars open={open}></Bars>
          <Bars open={open}></Bars>
        </NavToggle>
        <NavMenu>
          <NavItem><NavLink spy={true} smooth={true} offset={0} duration={500} to="discover">Discover</NavLink></NavItem>
          <NavItem><NavLink spy={true} smooth={true} offset={0} duration={500} to="about">About</NavLink></NavItem>
          <NavItem><NavLink spy={true} smooth={true} offset={0} duration={500} to="blog">Blog</NavLink></NavItem>
          <NavItem><NavLink spy={true} smooth={true} offset={0} duration={500} to="services">Services</NavLink></NavItem>
          <NavItem><NavLink spy={true} smooth={true} offset={0} duration={500} to="profile">Profile</NavLink></NavItem>
        </NavMenu>
        <NavBtnWrapper>
          <NavBtn to={'signup'}>SignUp</NavBtn>
          <NavBtn to={'signin'}>SignIn</NavBtn>
        </NavBtnWrapper>
      </NavContainer>
    </Nav>
  )
}

export default Navbar