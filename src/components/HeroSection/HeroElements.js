import styled from 'styled-components';
import {Link} from 'react-scroll';
import {MdKeyboardArrowDown, MdArrowDownward} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0 px;
    height: 867px;
    z-index: 1; 
    background-color:transparent;
    /* Add : before */
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
    color: rgba(230,213,213,.2);
    font-size: 80px;
    text-align: center;
    mix-blend-mode: overlay;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const HeroImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const HeroImg = styled.img`
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 70px;
    display: block;

    @media screen and (max-width: 968px){
        width: 75%;
    }


`;

export const HeroBtnWrapper = styled.div`
    display: flex;
    width:50px;
    height:auto;
    left:50%;
    transform: translateX(-50%);
    position:absolute;
    bottom: 69px;
    flex-direction: column;
    align-items: center;
     /* @media screen and (max-width: 480px){
        width:25px;
    }  */
`;

export const AnimArrow = styled(Link)`
    position: absolute;
    width: 100%;
    left:50%;
    width:100%;
    transform: translate(-50%,-50%);
    span:nth-child(2){
        animation-delay: -0.4s;
    }
    span:nth-child(3){
        animation-delay: -0.8s;
    }
`;

export const Arrow = styled.span`
    display: block;
    width: 50%;
    padding-bottom: 50%;
    /* height: 25px; */
    border-bottom:2px solid #343540;
    border-right: 2px solid #343540;
    transform: rotate(45deg);
    margin: 0 auto -10px auto;
    animation: arrowdown 3s infinite;

    @keyframes arrowdown{
        0%{
            opacity: 0;
            transform:rotate(45deg) translate(-10px,-10px);  
            }
        50%{opacity: 1;}
        100%{
            opacity: 0;
            transform:rotate(45deg) translate(-10px,-10px);
            }
    }

    /* @media screen and (max-width: 480px){
        width: 14px;
        height: 14px;
        border-bottom: 1px solid #B9996C;
        border-right: 1px solid #B9996C;
        margin: -25px;
    } */
`;

export const ArrowText = styled.h5`
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    position: absolute;
    left:50%;
    bottom:-50%;
    transform: translateX(-50%);
    width:100%;
    margin-bottom:-10px;
    margin-top:5px;
    color: #343540;
    animation: arrowdowntext 3s infinite;
    animation-delay: 1.2s;

    @keyframes arrowdowntext{
        0%{
            opacity: 0; 
            }
        50%{opacity: 1;}
        100%{
            opacity: 0;
            }
    }
`;


