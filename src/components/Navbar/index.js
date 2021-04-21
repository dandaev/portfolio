import React from 'react'
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
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
                        {/* <NavSocialNetBar>
                            <NavSocialNetItem>

                            </NavSocialNetItem>
                            <NavSocialNetItem>
                                
                            </NavSocialNetItem>
                            <NavSocialNetItem>
                                
                            </NavSocialNetItem>
                        </NavSocialNetBar> */}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/">Contat Me</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
