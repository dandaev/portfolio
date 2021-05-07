import styled from 'styled-components'
import SvgOceanBottom from '../images/backOceanBottom.svg'
import SvgOceanUnderBottom from '../images/backOceanUnderBottom.svg'
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
    bottom: 0;
    left: 0;
    top: 0;
    object-fit:cover;
    pointer-events: none;
    height: 100vh;
    width:100vw;
    z-index: -1;
`; 
export const SvgBg4 = styled.div`
    background-image: url(${SvgOceanUnderBottom});
    background-attachment: fixed;
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
    position:absolute;
    bottom: 0;
    height: 100vh;
    width:100vw;
    z-index: 1;
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
    z-index: -2;
`; 
export const SvgBg3 = styled.div`
    background-image: url(${SvgOceanTop}),url(${SvgStars});
    background-attachment: fixed; 
    background-position:center;
    background-repeat: no-repeat;
    left: 0;
    top: 0;
    object-fit:cover;
    background-size:cover;
    position:absolute;
    height: 100vh;
    width:100vw;
    z-index: -5;
`; 

export const BgSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow:hidden;
    justify-content: center;
    align-items: center
`;