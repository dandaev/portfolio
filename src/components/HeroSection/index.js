import React, {useState,useEffect} from 'react'
import Typewriter from 'typewriter-effect';
// import image from '../../images/1.png'
// import image2 from '../../images/2.png'
// import image3 from '../../images/3.png'
// import image4 from '../../images/4.png'
import {
    HeroContainer,
} from "./HeroElements"


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll',handleScroll);
    },[]);

    return (
        
        <HeroContainer id='home'>
            {/* <HeroImgWrapper>
                    <HeroImg src={image}/>
                    <HeroImg src={image2}/>
                    <HeroImg src={image3}/>
                     <HeroImg src={image4}/>
                </HeroImgWrapper> */}
            {/*<HeroContent style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>*/}
            {/*    <HeroH1 >*/}
            {/*        <span>Hallo, Ich bin</span> &nbsp;*/}
            {/*        <Typewriter */}
            {/*                options={{*/}
            {/*                    strings: ['Alybek', 'Student', 'Full-Stack Entwickler'],*/}
            {/*                    autoStart: true,*/}
            {/*                    loop: true,*/}
            {/*                    delay: 300,*/}
            {/*                    deleteSpeed: 200,*/}
            {/*                }}*/}
            {/*        />*/}
            {/*    </HeroH1>*/}
            {/*    */}
            {/*</HeroContent>*/}

        </HeroContainer>
    )
}

export default HeroSection
