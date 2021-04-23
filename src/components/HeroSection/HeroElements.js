import styled from 'styled-components';
import {MdKeyboardArrowDown, MdArrowDownward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 px;
    height: 867px;
    z-index: 1;
    /* Add : before */
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    background-size: cover;
    height: 100vh;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #e6d5d5;
    font-size: 47px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const HeroText = styled.p`
    margin-top: 24px;
    color: #a1a1a1;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowDownward = styled(MdArrowDownward)`
    margin-left: 8px;
    font-size: 20px;
`


