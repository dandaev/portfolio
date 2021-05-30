import React from 'react'
import {SideBarContainer, 
    Icon,
    CloseIcon,
    SideBarWrapper, 
    SideBarMenu, 
    SideBarLink,
    SideSocialNetBar,
    SideSocialNetItem,
    SideResouce 
} from './SideBarElements'
import {FaLinkedin, FaGithub, FaFacebook, FaTelegram} from 'react-icons/fa'
import {NavLinks} from "../Navbar/NavBarElements";

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
               <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="aboutme" 
                    smooth = {true}
                    duration={500}
                    spy={true}
                    exact = 'true'
                    offset={-80}
                    onClick={toggle}>
                        Über mich
                    </SideBarLink>
                    {/*<SideBarLink to="portfolio" */}
                    {/*smooth = {true}*/}
                    {/*duration={500}*/}
                    {/*spy={true}*/}
                    {/*exact = 'true'*/}
                    {/*offset={-80}*/}
                    {/*onClick={toggle}>*/}
                    {/*    Portfolio*/}
                    {/*</SideBarLink>*/}
                    {/*<SideBarLink to="erfahrung" */}
                    {/*smooth = {true}*/}
                    {/*duration={500}*/}
                    {/*spy={true}*/}
                    {/*exact = 'true'*/}
                    {/*offset={-80}*/}
                    {/*onClick={toggle}>*/}
                    {/*    Erfahrung*/}
                    {/*</SideBarLink>*/}
                </SideBarMenu>
                <SideSocialNetBar>
                            <SideSocialNetItem>
                                <SideResouce href='https://www.linkedin.com/in/alybek-dandaev-322482207/' target='_blank'><FaLinkedin style={{width:'4.5vh', height:'4.5vh'}}/></SideResouce>
                            </SideSocialNetItem>
                            <SideSocialNetItem>
                                <SideResouce href='https://github.com/dandaev' target='_blank'><FaGithub style={{width:'4.5vh', height:'4.5vh'}}/></SideResouce>
                            </SideSocialNetItem>
                            <SideSocialNetItem>
                                <SideResouce href='https://www.facebook.com/profile.php?id=100010958942979' target='_blank'><FaFacebook style={{width:'4.5vh', height:'4.5vh'}}/></SideResouce>
                            </SideSocialNetItem>
                            <SideSocialNetItem>
                                <SideResouce href='https://t.me/dandaev' target='_blank'><FaTelegram style={{width:'4.5vh', height:'4.5vh'}}/></SideResouce>
                            </SideSocialNetItem>
                        </SideSocialNetBar>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
