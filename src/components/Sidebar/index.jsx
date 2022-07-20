import { 
  Side,
  SideContainer,
  SideWrapper,
  SideMenu,
  SideItem,
  SideLink,
  SideBtnWrapper,
  SideBtnLink
} from "./SidebarElements"

const Sidebar = ({ open, isToggle }) => {
  return (
    <>
      <Side>
        <SideContainer>
          <SideWrapper open={open} onClick={isToggle}>
            <SideMenu>
              <SideItem><SideLink onClick={isToggle} spy={true} smooth={true} offset={-40} duration={500} to="discover">Discover</SideLink></SideItem>
              <SideItem><SideLink onClick={isToggle} spy={true} smooth={true} offset={-40} duration={500} to="about">About</SideLink></SideItem>
              <SideItem><SideLink onClick={isToggle} spy={true} smooth={true} offset={-40} duration={500} to="blog">Blog</SideLink></SideItem>
              <SideItem><SideLink onClick={isToggle} spy={true} smooth={true} offset={-40} duration={500} to="services">Services</SideLink></SideItem>
              <SideItem><SideLink onClick={isToggle} spy={true} smooth={true} offset={-40} duration={500} to="profile">Profile</SideLink></SideItem>
            </SideMenu>
            <SideBtnWrapper>
              <SideBtnLink to={'signup'}>SignUp</SideBtnLink>
              <SideBtnLink to={'signin'}>SignIn</SideBtnLink>
            </SideBtnWrapper>
          </SideWrapper>
        </SideContainer>
      </Side>
    </>
  )
}

export default Sidebar