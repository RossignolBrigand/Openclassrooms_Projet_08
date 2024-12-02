import React from "react";

import HeroSection from "../../components/Hero/HeroSection";

import './_homePage.scss'

//-------------------------------------------------------------------

function HomePage() {

    return (
        <div className="home-container">
            <h1>HOME PAGE</h1>
            <HeroSection />
        </div>
    )
};

export default HomePage;