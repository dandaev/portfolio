import styled from 'styled-components';
import {Link} from 'react-scroll';

export const HeroContainer = styled.div`
    background: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 100vh;
    z-index: 1; 
    background-color:transparent;
    /* Add : before */
`;
export const HeroContent = styled.div`
    max-width: 1200px;
    position: absolute;
    left: 50%;
    top: 35%;
    right: 50%;
    bottom: 65%;
    transform: translate(-50%, -50%);
    padding: 8px 24px;
    margin-bottom: 186px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: -4;
    @media screen and (max-width: 768px){
        margin-bottom: 500px;
    }
`;

export const HeroH1 = styled.h1`
    color: rgba(104,107,136);
    font-size: 60px;
    text-align: center;
    mix-blend-mode: overlay;
    display: flex;
    white-space: nowrap;
    
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const HeroImgWrapper = styled.div`
    max-width: 10vw;
    height: 10vh;
    position: relative;
    left: 0;
    top: 0;
    z-index: 10;
    img:nth-child(1){
        animation-delay:0s;
    }
    img:nth-child(2){
        animation-delay:2s;
    }
    /* img:nth-child(3){
        animation-delay:2s;
    }
    img:nth-child(4){
        animation-delay:3s;
    } */
`;

export const HeroImg = styled.img`
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 70px;
    display: block;
    animation: cf4FadeInOut 2s ease-in-out infinite alternate-reverse; 

    @media screen and (max-width: 968px){
        width: 75%;
    }

    @keyframes cf4FadeInOut {
        0% {
            opacity:1;
        }
        /* 33% {
            opacity:0;
        }
        66% {
            opacity:0;
        } */
        100% {
            opacity:0;
        }
}

`;

export const HeroBtnWrapper = styled.div`
    display: ${({scrollNav}) => (scrollNav ? 'none':'flex')};;
    width:50px;
    height:auto;
    left:50%;
    transform: translateX(-50%);
    position:absolute;
    bottom: 69px;
    flex-direction: column;
    align-items: center;
    z-index: -1;
     /* @media screen and (max-width: 480px){
        width:25px;
    }  */
`;

export const AnimArrow = styled(Link)`
    position: absolute;
    width: 100%;
    left:50%;
    width:100%;
    z-index: -1;
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
    z-index: -1;

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


