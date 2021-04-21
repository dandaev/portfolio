import React, {useState} from 'react'
import Video from '../../videos/dark.mp4'
import {Button} from '../ButtonElements';
import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroBtnWrapper, 
    HeroText,
    ArrowDown,
    ArrowDownward,
} from "./HeroElements"

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hallo, Ich bin Alybek</HeroH1>
                <HeroText>
                    Ich studiere an der WHZ
                </HeroText>
                <HeroBtnWrapper>
                    <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover}>
                    About Me {hover ? <ArrowDownward/> : <ArrowDown/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
