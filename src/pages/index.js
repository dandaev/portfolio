import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import AboutMeSection from '../components/AboutMeSection'
import ErfahrungSection from '../components/ErfahrungSection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PortfolioSection from '../components/PortfolioSection'
import SideBar from '../components/SideBar'
import { SvgBg1,SvgBg2,SvgBg3 } from './PagesElements'
import {AnimArrow, Arrow, ArrowText, HeroBtnWrapper, HeroContent, HeroH1} from "../components/HeroSection/HeroElements";
import Typewriter from "typewriter-effect";



const Home = () => {
    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const [isOpen, setIsOpen] = useState(false);
    const toggle =() =>{
        setIsOpen(!isOpen)
    };

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll',handleScroll);
    },[]);



    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            {/* <SvgBg4 style={{ transform: `translateY(-${offsetY * 0.8}px)` }}/> */}

            <SvgBg3 style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
                <HeroContent style={{ transform: `translateY(${offsetY * 1.3}px)` }}>
                    <HeroH1 >
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
                <HeroBtnWrapper scrollNav = {scrollNav}>
                    <AnimArrow to='aboutme'
                               smooth = {true}
                               duration={1500}
                               spy={true}
                               delay={500}
                               exact = 'true'
                               offset={-77}>
                        <Arrow/>
                        <Arrow/>
                        <Arrow/>
                        <ArrowText>Über Mich</ArrowText>
                    </AnimArrow>
                </HeroBtnWrapper>
                <SvgBg2 style={{ transform: `translateY(-${offsetY * 0.2}px)` }}>
                    <SvgBg1 style={{ transform: `translateY(-${offsetY * 0.3}px)` }}>


                        <HeroSection/>
                        <AboutMeSection />
                        {/*<PortfolioSection/>*/}
                        {/*<ErfahrungSection/>*/}

                    </SvgBg1>
                </SvgBg2>
            </SvgBg3>
        </>
    );
};

export default Home
