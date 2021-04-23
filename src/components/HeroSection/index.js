import React, {useState} from 'react'
import Video from '../../videos/dark.mp4';
import {Button} from '../ButtonElements';
import Typing from 'react-typing-animation';
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
                <HeroH1>
                    Hallo
                    {/* <Typing speed={140} loop={false}>
                        <span>Hello, </span>
                        <Typing.Delay ms={600} />
                        <Typing.Backspace count={6} />
                        <Typing.Delay ms={100} />
                        <span>allo, Ich bin </span>
                        <Typing.Delay ms={7000} />
                    </Typing>
                    <Typing speed={120} loop = {true}>
                            <span>Alybek!</span>
                            <Typing.Delay ms={1000} />
                            <Typing.Backspace count={8} />
                            <span>Web Developer!</span>
                            <Typing.Delay ms={1000} />
                            <Typing.Backspace count={15} />
                            <span>Student!</span>
                            <Typing.Delay ms={1000} />
                            <Typing.Backspace count={8} />
                        </Typing> */}
                </HeroH1>
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
