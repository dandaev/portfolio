import React, {useState} from 'react'
import image from '../../images/hackerMan.png'
import {
    HeroContainer, 
    HeroContent, 
    HeroH1, 
    HeroBtnWrapper, 
    HeroImgWrapper,
    HeroImg,
    Arrow,
    AnimArrow,
    ArrowText,
} from "./HeroElements"


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
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
                <HeroImgWrapper>
                    <HeroImg src={image} alt="HeroPhoto"/>
                </HeroImgWrapper>
                
            </HeroContent>
            <HeroBtnWrapper>
                    <AnimArrow to='aboutme'
                    smooth = {true}
                    duration={500}
                    spy={true}
                    exact = 'true'
                    offset={-77}>
                        <Arrow/>
                        <Arrow/>
                        <Arrow/>
                        <ArrowText>About me</ArrowText> 
                    </AnimArrow>
                    {/* <Button to='aboutme' 
                    smooth = {true}
                    duration={500}
                    spy={true}
                    exact = 'true'
                    offset={-77}
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}>
                    About Me {hover ? <ArrowDownward/> : <ArrowDown/>}
                    </Button> */}
                </HeroBtnWrapper>
        </HeroContainer>
    )
}

export default HeroSection
