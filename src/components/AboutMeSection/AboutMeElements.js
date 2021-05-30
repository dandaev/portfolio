import styled from 'styled-components'
import {COLORS} from "../../common/Variables";

export const AboutMeContainer = styled.div`
    color: #fff;
    background: rgb(52, 53, 64);
    background: linear-gradient(to right bottom, #a8a8a8, #b0b1b3, #b6babe, #bbc4c8, #c0ced1, #b4c4c8, #a9bbbe, #9db1b5, #80929a, #677480, #505865, #3b3c4a);
    width: 100vw;
    height: 100vh;
    padding-top: 15vh;
    z-index: 1;
    letter-spacing: 1.2px;
    @media screen and (max-width: 480px){
        width: 100vw;
        padding-top: 2vh !important;
        height: auto;
        background: linear-gradient(to right bottom, #afb0b2, #b0b3b6, #b1b6ba, #b1b9be, #b1bcc1, #b4c2c7, #b8c8cc, #bbced1, #c2d8da, #cae2e3, #d2edec, #daf7f4);

    }
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const AboutMeRow = styled.div`
    height: 70vh;
    width: 70vw;
    margin-right: auto;
    margin-left: auto;
    display: grid;
    background: transparent;
    //background: rgb(43,146,142);
    //background: linear-gradient(166deg, rgba(161,161,161,1) 4%, rgba(218,247,244,1) 54%, rgba(69,71,88,1) 90%);
    grid-auto-columns: 3fr 7fr;
    align-items: center;
    grid-template-areas: 'col2 col1';
    font-size: 100px;
    border-bottom: ${COLORS.dark};
    border-bottom-style: solid;
    @media screen and (max-width: 480px){
        width: 100vw;
        height: auto;
        margin: 0;
        border-bottom: none;
    }
    //&:hover {
    //    transition: all 0.5s ease-in-out;
    //    //height: 80vh;
    //    //width: 95vw;
    //    box-shadow: 0 0 83px -20px rgba(0, 0, 0, 0.9);
    //}
    @media screen and (max-width: 820px) {
        font-size: 69px;
        grid-template-areas: 'col2 col2' 'col1 col1';
    }
    @media screen and (max-width: 1400px) {
        font-size: 85px;
        grid-auto-columns: 4fr 6fr;
        width: 100vw;
    }
`;

export const Column1 = styled.div`
    height: 100%;
    width: 100%;
    padding: 0;
    grid-area: col1;
    font-size: 100%;
`;

export const Column2 = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    //border-radius: 7vh;
    grid-area: col2;
    @media screen and (max-width: 480px){
        width: 94vw;
        padding: 0 3% 0 3%;
    }
    
`;

export const TextWrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
    align-items: center;
    padding: 5% 20% 10% 10%;
    @media screen and (max-width: 480px){
        padding: 0 3% 0 3%;
    }
`;

export const TitleLine = styled.p`
    color: #5C586E;
    font-size: 16%;
    line-height: 16%;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin: 2em 0 0.3em;
`;

export const Heading = styled.h1`
    margin: 0.3em 0 0;
    font-size: 40%;
    //line-height: 1.1;
    font-weight: 700;
    background-color: ${COLORS.darkHeading1};
    background-image: linear-gradient(-3deg, ${COLORS.darkHeading1} 20%, ${COLORS.darkHeading2} 80%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const ContactItemsWrapper = styled.div`
    width: 90%;
    margin: 0.3em auto 0.3em;
    align-items: center;
    display: list-item;
    list-style-type: none;
    @media screen and (max-width: 480px){
        width: 100%;
    }
`;

export const ContactItem = styled.li`
    margin-bottom: 0.5em;
    max-width: 100%;
    font-size: 1.2rem;
    color: ${COLORS.aboutMeTextDark};
    list-style-type: none;
    @media screen and (max-width: 480px){
        font-size: 1rem;
    }
`;

export const TextLine = styled.p`
    max-width: 100%;
    font-size: 22%;
    margin: 0 0 0.5em 0;
    letter-spacing: 1.2px;
    color: ${COLORS.aboutMeTextDark};
`;

export const AboutMeBtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    overflow: hidden;
    bottom: 0;
    width: 100%;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: scale-down;
    //@media screen and (max-width: 768px) {
    //    height: 30vh;
    //    width: 100vw;
    //}
    //@media screen and (max-width: 1400px) {
    //    height: 50vh;
    //    width: 40vw;
    //}
`;

export const AboutResouce = styled.a`
    color: ${COLORS.linkDark};
    //display: flex;
    //align-items: center;
    text-decoration: none;
    //padding: 0 1rem;
    //height: 100%;
    //cursor: pointer;

    &:hover {
        transition: all 0.3s ease-in-out;
        color: ${COLORS.dominant};
    }
`;

export const IconWrapp = styled.span`
    height: 20%;
`;