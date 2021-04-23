import React from 'react'
import {FaBars, FaLinkedin, FaGithub} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    // NavBtn,
    // NavBtnLink,
    NavSocialNetItem,
    NavSocialNetBar
} from './NavBarElements'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Alybek.
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars size="32" />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio">PORTFOLIO</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="erfahrung">ERFAHRUNG</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavSocialNetBar>
                            <NavSocialNetItem>
                                <NavLinks to='/www.linkedin.com/in/alybek-dandaev-322482207/'><FaLinkedin/></NavLinks>
                            </NavSocialNetItem>
                            <NavSocialNetItem>
                                <NavLinks to="portfolio"><FaGithub/></NavLinks>
                            </NavSocialNetItem>
                            <NavSocialNetItem>
                                
                            </NavSocialNetItem>
                        </NavSocialNetBar>
                    {/* <NavBtn>
                        <NavBtnLink to="/">Contat Me</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
