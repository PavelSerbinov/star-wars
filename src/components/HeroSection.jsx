import React from 'react';
import main from "../assets/main.jpg";

const HeroSection = () => {
    return (
        <section className="float-start w-25 me-3">
            <img className="w-100" src={main} alt="HeroSection"/>
        </section>
    );
};

export default HeroSection;