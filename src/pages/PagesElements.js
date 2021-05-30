import styled from 'styled-components'
import SvgOceanBottom from '../images/backOceanBottom.svg'
import SvgOceanMid from '../images/backOceanMid.svg'
import SvgOceanTop from '../images/backOceanTop.svg'
import SvgStars from '../images/backRipple.svg'

export const SvgBg1 = styled.div`
    background-image: url(${SvgOceanBottom});
    background-attachment: fixed;
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
    position:absolute;
    object-fit:cover;
    pointer-events: none;
    height: 100vh;
    width:100vw;
    z-index: -2;
`;
export const SvgBg2 = styled.div`
    background-image: url(${SvgOceanMid});
    background-attachment: fixed;
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
    position:absolute;
    height: 100vh;
    width:100vw;
    z-index: -3;
`; 
export const SvgBg3 = styled.div`
    background-image: url(${SvgOceanTop});
    background-attachment: fixed; 
    background-position:center;
    background-repeat: no-repeat;
    object-fit:cover;
    object-position: top;
    background-size:cover;
    position:absolute;
    height: 100vh;
    width:100vw;
    z-index: -5;
`;
export const SvgBg4 = styled.div`
    background-image: url(${SvgStars});
    background-attachment: fixed; 
    background-position:center;
    background-repeat: no-repeat;
    object-fit:cover;
    object-position: top;
    background-size:cover;
    position:absolute;
    height: 100vh;
    width:100vw;
    z-index: -5;
`;
export const Clouds = styled.div`
  position:absolute;
  top: 0;
  left: 0;
    bottom: 0;
  height: 100vh;
  width:100vw;
  overflow: hidden;
  z-index: -1;
  img:nth-child(1){
    --i: 1;
    }
  img:nth-child(2){
      --i: 2;
    }
  img:nth-child(3){
      --i: 3;
    }
  img:nth-child(4){
      --i: 4;
    }
  img:nth-child(5){
      --i: 5;
    }
`;
export const Cloud = styled.img`
  position:absolute;
  bottom: -15vh;
  opacity: 0.85;
  max-width: 100%;
  animation: cloudanimate calc(12s*var(--i)) linear infinite;
  
  @keyframes cloudanimate{
      0%{
        transform: translateX(-100%);
      } 
      100% {
        transform: translateX(100%);
      }
  }
    @media screen and (max-width: 480px){
        bottom: 0;
    }
`;

