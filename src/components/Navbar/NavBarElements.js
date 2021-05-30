import styled from "styled-components"
import {Link as LinkR} from "react-router-dom"
import {Link as LinkS} from "react-scroll"
import {COLORS} from "../../common/Variables";

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? COLORS.dark :'transparent')};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: fixed;
    top: 0;
    z-index: 10;
    font-family: IBM Plex Sans,serif;
    font-size: 20px;
    // box-shadow: ${({scrollNav}) => (scrollNav ? '0 10px 17px rgba(52, 53, 64, 0.49)':'none')};

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: ${COLORS.third};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${COLORS.third};
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color:${COLORS.third};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 500;
    text-transform: uppercase;
    
    &.active{
        height: 100%;
        border-bottom: 3px solid ${COLORS.dominant};
    }

    &:hover{
        transition: all 0.3s ease-in-out;
        color: ${COLORS.dominant};
    }
`;

export const NavResouce = styled.a`
     color: ${COLORS.third};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &:hover{
        transition: all 0.3s ease-in-out;
        color: ${COLORS.dominant};
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 1em;
    @media screen and (max-width: 768px){
        
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #E8B9D3;
    white-space: nowrap;
    padding: 5px 10px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor:pointer;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const NavSocialNetBar = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavSocialNetItem = styled.li`
    height: 80px;
`;

export const LogoImg = styled.div`
    background-repeat: no-repeat;
    background-size:cover;
    background-color:transparent;
    height: 80px;
    width: 120px;
`;