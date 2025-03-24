import React from 'react';
import main from "../assets/main.jpg";
import HeroSection from "./HeroSection.jsx";
import DreamTeamSection from "./DreamTeamSection.jsx";
import BasicText from "../constant/BasicText.jsx";

const Main = () => {
    return (
        <main className="clearfix">
            <HeroSection/>
            <DreamTeamSection/>
            <BasicText/>
        </main>
    );
};

export default Main;