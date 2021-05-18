import React, {useEffect, useState} from 'react'
import AboutMeSection from '../components/AboutMeSection'
import ErfahrungSection from '../components/ErfahrungSection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PortfolioSection from '../components/PortfolioSection'
import SideBar from '../components/SideBar'
import {Cloud, Clouds, FarCloud, SvgBg1, SvgBg2, SvgBg3, SvgBg4} from './PagesElements'
import {AnimArrow, Arrow, ArrowText, HeroBtnWrapper, HeroContent, HeroH1} from "../components/HeroSection/HeroElements";
import Typewriter from "typewriter-effect";
import SvgCloud from '../images/cloud1.png'
import SvgCloud2 from '../images/cloud2.png'
import SvgCloud3 from '../images/cloud3.png'
import SvgCloud4 from '../images/cloud4.png'
import SvgCloud5 from '../images/cloud5.png'
import {aboutMeContentDE} from "../components/AboutMeSection/Data";

const Home = () => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    const [offsetY, setOffsetY] = useState(0);
    const [offsetYMinus, setOffsetYMinus] = useState(0);
    const handleScroll = () => {
        if (window.pageYOffset > 500) {
            setOffsetYMinus(-500)
            setOffsetY(500)
        } else {
            setOffsetYMinus(-window.pageYOffset)
            setOffsetY(window.pageYOffset);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
             <SvgBg4 style={{ transform: `translateY(${offsetY * 0.01}px)` }}/>
            <SvgBg3 style={{transform: `translateY(${offsetY * 0.62}px)`}}/>
            <SvgBg2 style={{transform: `translateY(${offsetY * 0.28}px)`}}/>
            <SvgBg1 style={{transform: `translateY(${offsetY * 0.0001}px)`}}/>
            <HeroContent style={{transform: `translateY(${offsetY * 2.3}px)`}}>
                <HeroH1>
                    <span>Hallo, Ich bin</span> &nbsp;
                    <Typewriter
                        options={{
                            strings: ['Alybek', 'Student', 'Full-Stack Entwickler'],
                            autoStart: true,
                            loop: true,
                            delay: 300,
                            deleteSpeed: 200,
                        }}
                    />
                </HeroH1>
            </HeroContent>
            <HeroBtnWrapper scrollNav={scrollNav}>
                <AnimArrow to='aboutme'
                           smooth={true}
                           duration={1700}
                           spy={true}
                           delay={500}
                           isDynamic={true}
                           exact='true'
                           offset={-77}>
                    <Arrow/>
                    <Arrow/>
                    <Arrow/>
                    <ArrowText>Über Mich</ArrowText>
                </AnimArrow>
            </HeroBtnWrapper>

            <Clouds style={{transform: `translateY(${offsetY }px)`}}>
                <Cloud src={SvgCloud}/>
                <Cloud src={SvgCloud2}/>
                <Cloud src={SvgCloud3}/>
                <Cloud src={SvgCloud4}/>
                <Cloud src={SvgCloud5}/>
            </Clouds>
            {/*<ErfahrungSection/>*/}
            <HeroSection/>
            <AboutMeSection {...aboutMeContentDE}/>
            <PortfolioSection/>
        </>
    );
};

export default Home
