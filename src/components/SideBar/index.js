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
import {FaLinkedin, FaGithub} from 'react-icons/fa'

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
                        About
                    </SideBarLink>
                    <SideBarLink to="portfolio" 
                    smooth = {true}
                    duration={500}
                    spy={true}
                    exact = 'true'
                    offset={-80}
                    onClick={toggle}>
                        Portfolio
                    </SideBarLink>
                    <SideBarLink to="erfahrung" 
                    smooth = {true}
                    duration={500}
                    spy={true}
                    exact = 'true'
                    offset={-80}
                    onClick={toggle}>
                        Erfahrung
                    </SideBarLink>
                </SideBarMenu>
                <SideSocialNetBar>
                            <SideSocialNetItem>
                                <SideResouce href='https://www.linkedin.com/in/alybek-dandaev-322482207/' target='_blank'><FaLinkedin/></SideResouce>
                            </SideSocialNetItem>
                            <SideSocialNetItem>
                                <SideResouce href='https://github.com/dandaev' target='_blank'><FaGithub/></SideResouce>
                            </SideSocialNetItem>
                            <SideSocialNetItem>     
                            </SideSocialNetItem>
                        </SideSocialNetBar>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
