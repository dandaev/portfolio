import React from 'react'
import {SideBarContainer, 
    Icon,
    CloseIcon,
    SideBarWrapper, 
    SideBarMenu, 
    SideBarLink, 
    SideBtnWrap, 
    SideBarRoute
} from './SideBarElements'

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
                <SideBtnWrap>
                    <SideBarRoute to="youtube.com">Contact Me</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
