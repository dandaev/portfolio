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
                    <SideBarLink to="about" onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to="portfolio" onClick={toggle}>
                        Portfolio
                    </SideBarLink>
                    <SideBarLink to="erfahrung" onClick={toggle}>
                        Erfahrung
                    </SideBarLink>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/contactme">Contact Me</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
