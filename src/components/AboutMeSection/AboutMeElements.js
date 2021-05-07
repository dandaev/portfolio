import styled from 'styled-components'
import BgImage from '../../images/aboutMeContainer.svg'

export const AboutMeContainer = styled.section`
    color: #fff;
    background: rgba(52,53,64);
    //background-image: url(${BgImage});
    //background-repeat: no-repeat;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    @media screen and (max-width: 768px){
        padding:100px 0;
    }
`;

export const AboutMeWrapper = styled.div`
    display: grid;
    background: rgba(90,93,117);
    z-index: 1;
    height: 70vh;
    margin-top: 10vh;
    width: 90vw;
    margin-right: auto;
    margin-left: auto;
    padding: 0;
    justify-content: center;
`;

export const AboutMeRow = styled.div`
  display: grid;
  background: rgb(104,107,136);
  grid-auto-columns: 3fr 7fr;
  //grid-template-columns: 7fr 3fr;
  //grid-auto-flow: dense;
  align-items: center;
  width: 100%;
    grid-template-areas: 'col2 col1';

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1 col1' 'col2 col2';
      //grid-template-columns: 1fr;
    }
`;

export const Column1 = styled.div`
    height: 100%;
    padding: 0 15px;
    grid-area: col1;
    box-shadow: -20px 0 10px 0 rgba(0, 0, 0, 0.49);
  z-index: 6;
`;

export const Column2 = styled.div`
    height: 100%;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 90%;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TitleLine = styled.p`
    color: #d4b8b6;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const TextLine = styled.p`
    max-width: 100%;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
`;

export const AboutMeBtnWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrapper = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;