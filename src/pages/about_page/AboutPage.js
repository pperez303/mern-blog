//import React from 'react';  
import "./aboutpage.css";
//import neo from "../../assets/images/neo.jpg"

//components
import Sidebar from "../../components/common/sidebar/Sidebar";
import Header from "../../components/common/header/Header";

function About () {  
    return (
    <div className="aboutMain">
        <Header />
        <div className="aboutArea">
            <div className="aboutInfo">
                <h1>About Me</h1>
                <h3>Developer and IT Project Manager</h3>

                <p className="aboutDesc">
                    My IT journey began in the US Army, where I served in the 25th and 9th Infantry Divisions between the years of 1972 to 1979.  
                </p>
                <p>Yes, I do remember the programming languages COBOL and assembler for the IBM 360 architecture. The good old days!</p>
                <p>
                    After aproximatly 7 years in the military I joined the Boeing company as software developer.  
                    My career continued to grow landing jobs at Rainer Bank, Arthur Young, Nike, Credit One Bank, and Barrick Gold.
                </p>
                <p>Now, I am a freelance consultant with a strong background in IT Project Management. The purpose of this website is to
                   share my expriences and knowledge to help individuals and companies acheive their goals.
                </p>
            </div>
            <div className="aboutSidebar">
                <div><Sidebar/></div> 
            </div>
            
        </div>
    </div>
    )
}  
export default About;  