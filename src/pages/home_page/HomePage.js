//import React from 'react';  
import "./homepage.css";

//components
import HomeSectionHero from "../../components/content/home_section_hero/HomeSectionHero";
import HomeSection1 from "../../components/content/home_section1/HomeSection1";
import HomeSection2 from "../../components/content/home_section2/HomeSection2";
import HomeSection3 from "../../components/content/home_section3/HomeSection3";

function Home() {  
    return (
    <main className="homeMain">
        <HomeSectionHero />
        <HomeSection2 />
        <HomeSection1 />

        <HomeSection3 />
    </main>
    )
}  
export default Home;  