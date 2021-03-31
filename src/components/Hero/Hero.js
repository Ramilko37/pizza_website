import React, {useState} from 'react';
import {HeroContainer, HeroItems,
    HeroH1, HeroP, HeroBtn} from "./HeroElements";
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sibedar/Sidebar';


const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroItems>
                <HeroH1>Greatest Pizza Ever</HeroH1>
                <HeroP>Ready in 60 seconds</HeroP>
                <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
        </HeroContainer>
    )
}

export default Hero;