import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {COLORS} from "../../common/Variables";

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100vw;
    height: 100%;
    background: ${COLORS.dark};
    display: grid;
    align-items: center;
    font-family: IBM Plex Sans,serif;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};

`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SideBarWrapper = styled.div`
    color: #fff;
`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 80px);
    text-align: center;
    padding: 0;
    text-transform: uppercase;
    
    @media screen and (max-width: 480px){
        grid-template-rows: repeat(auto-fitt, 60px);
    }
`

export const SideBarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: ${COLORS.third};
    cursor: pointer;

    &:hover{
        color: #d4b8b6;
        transition: 0.2s ease-in-out
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SideBarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #d4b8b6;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{ 
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const SideSocialNetBar = styled.ul`
    display: none;

    @media screen and (max-width: 768px){
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
        padding: 0 3vh;
    }
`;

export const SideSocialNetItem = styled.li`
    height: 10vh;
    width: auto;
    display: table;
    margin:0 auto 0 auto;
    align-items: center;
`;

export const SideResouce = styled.a`
     color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    width: auto;
    cursor: pointer;
    
    &:hover{
        transition: all 0.3s ease-in-out;
        color: #d4b8b6;
    }
`;
