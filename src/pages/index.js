import React, {useState} from 'react'
import AboutMeSection from '../components/AboutMeSection'
import ErfahrungSection from '../components/ErfahrungSection'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import PortfolioSection from '../components/PortfolioSection'
import SideBar from '../components/SideBar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle =() =>{
        setIsOpen(!isOpen)
    };

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <AboutMeSection />
            <PortfolioSection/>
            <ErfahrungSection/>
        </>
    );
};

export default Home
