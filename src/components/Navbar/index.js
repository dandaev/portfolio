import React, {useState, useEffect} from 'react'
import {FaBars, FaLinkedin, FaGithub} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
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
    NavSocialNetBar,
    NavResouce,
    LogoImg
} from './NavBarElements'

const Navbar = ({toggle}) => {
    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome}>
                        Alybek.
                        {/* <LogoImg></LogoImg> */}
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars size="32" />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='aboutme' 
                            smooth = {true}
                            duration={500}
                            spy={true}
                            exact = 'true'
                            offset={-80}>ABOUTME</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="portfolio"
                            smooth = {true}
                            duration={500}
                            spy={true}
                            exact = 'true'
                            offset={-80}>PORTFOLIO</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="erfahrung"
                            smooth = {true}
                            duration={500}
                            spy={true}
                            exact = 'true'
                            offset={-80}>ERFAHRUNG</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavSocialNetBar>
                            <NavSocialNetItem>
                                <NavResouce href='https://www.linkedin.com/in/alybek-dandaev-322482207/' target='_blank'><FaLinkedin/></NavResouce>
                            </NavSocialNetItem>
                            <NavSocialNetItem>
                                <NavResouce href='https://github.com/dandaev' target='_blank'><FaGithub/></NavResouce>
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
