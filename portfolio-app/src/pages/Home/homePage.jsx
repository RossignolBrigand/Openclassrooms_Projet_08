import React from "react";

import HeroSection from "../../layout/Hero/HeroSection";
import SkillsSection from "../../layout/Skills/SkillsSection";

import './_homePage.scss'

//-------------------------------------------------------------------

function HomePage() {

    return (
        <div className="home-container">
            <h1>HOME PAGE</h1>
            <HeroSection />
            <SkillsSection />
        </div>
    )
};

export default HomePage;