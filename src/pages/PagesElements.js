import styled from 'styled-components'
import SvgOcean from '../images/backOcean.svg'
import SvgStars from '../images/backRipple.svg'

export const SvgBg = styled.div`
    background-image: url(${SvgOcean}),url(${SvgStars});
    background-attachment: fixed;
    background-position:center;
    background-repeat: no-repeat;
    background-size:cover;
    position:fixed;
    height: 100vh;
    width:100vw;
    z-index: -5;
    animation-delay:0.9s;
`; 