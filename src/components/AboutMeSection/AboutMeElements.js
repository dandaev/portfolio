import styled from 'styled-components'
import {COLORS} from "../../common/Variables";

export const AboutMeContainer = styled.div`
    color: #fff;
    background: rgb(52,53,64);
    background: linear-gradient(149deg, rgba(182,179,237,1) 0%, rgba(90,93,117,1) 24%, rgba(52,53,64,1) 100%);
    width: 100vw;
    height: 100vh;
    padding-top: 15vh;
    z-index: 1;
    @media screen and (max-width: 768px){
        padding:100px 0;
    }
`;

export const AboutMeRow = styled.div`
  height: 70vh;
  width: 70vw;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  background: rgb(43,146,142);
  background: linear-gradient(166deg, rgba(161,161,161,1) 4%, rgba(218,247,244,1) 54%, rgba(69,71,88,1) 90%);
  border-radius: 7vh;
  grid-auto-columns: 3fr 7fr;
  align-items: center;
  grid-template-areas: 'col2 col1';
  font-size: 100px;
  &:hover{
    transition: all 0.5s ease-in-out;
    //height: 80vh;
    //width: 95vw;
    box-shadow: 0 0 83px -20px rgba(0, 0, 0, 0.9);
  };
    @media screen and (max-width: 768px) {
      font-size: 69px;
      width: 100vw;
      grid-template-areas: 'col1 col1' 'col2 col2';
    }
`;

export const Column1 = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 ;
    overflow: hidden;
    grid-area: col1;
    z-index: 6;
    font-size: 100%;
`;

export const Column2 = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    //border-radius: 7vh;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 90%;
    max-height: 80%;
    padding: 5% 20% 10% 10%;
`;

export const TitleLine = styled.p`
    color: #5C586E;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 40%;
    //line-height: 1.1;
    font-weight: 700;
    background-color: ${COLORS.darkHeading1};
    background-image: linear-gradient(-5deg, ${COLORS.darkHeading1} 10%, ${COLORS.darkHeading2} 89%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const TextLine = styled.p`
    max-width: 100%;
    font-size: 23%;
    color: ${COLORS.darkText};
`;

export const AboutMeBtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    overflow: hidden;
    width: 100%;
    height: 100%;
  &:hover{
    transition: all 0.5s ease-in-out;
    box-shadow: 0 0 83px -20px rgba(0, 0, 0, 0.9);
  };
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-bottom-left-radius: 7vh;
    border-top-left-radius: 7vh;
    object-fit: cover;
`;