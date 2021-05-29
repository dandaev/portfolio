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
    NavResouce, NavBtn, NavBtnLink,
} from './NavBarElements'
import {AnimArrow} from "../HeroSection/HeroElements";

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
                        <NavBtn>
                            <NavBtnLink>
                                Beta
                            </NavBtnLink>
                        </NavBtn>
                        {/* <LogoImg></LogoImg> */}
                    </NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars size="32" />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks   to='aboutme'
                                        smooth = {true}
                                        duration={1500}
                                        spy={true}
                                        delay={500}
                                        exact = 'true'
                                        offset={-80}>Über mich</NavLinks>
                        </NavItem>
                        {/*<NavItem>*/}
                        {/*    <NavLinks   to="portfolio"*/}
                        {/*                smooth = {true}*/}
                        {/*                duration={1500}*/}
                        {/*                spy={true}*/}
                        {/*                delay={500}*/}
                        {/*                exact = 'true'*/}
                        {/*                offset={-80}>PORTFOLIO</NavLinks>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem>*/}
                        {/*    <NavLinks   to="erfahrung"*/}
                        {/*                smooth = {true}*/}
                        {/*                duration={1500}*/}
                        {/*                spy={true}*/}
                        {/*                delay={500}*/}
                        {/*                exact = 'true'*/}
                        {/*                offset={-80}>ERFAHRUNG</NavLinks>*/}
                        {/*</NavItem>*/}
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
