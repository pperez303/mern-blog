//import React from 'react';  
import "./aboutpage.css";
import neo from "../../assets/images/neo.jpg"

//components
import Sidebar from "../../components/common/sidebar/Sidebar";
import Header from "../../components/common/header/Header";

function About () {  
    return (
    <div className="aboutMain">
        <Header />
        <div className="aboutArea">
            <div className="aboutInfo">
                <header className="aboutHeader">
                    <img className = "aboutImg" src={neo} alt="" />
                    <div className="aboutName">
                        <h3>Peter Perez</h3>
                        <p>Technical Project Manager</p>
                    </div>
                </header>
                <p className="aboutDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Modi laudantium atque quisquam, perferendis id maxime 
                    aliquam praesentium numquam ipsum debitis, eligendi 
                    aspernatur hic tempora ab. Quidem non exercitationem sit porro!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Nesciunt ab suscipit ducimus! Quod libero eligendi esse 
                    similique praesentium neque rem, assumenda rerum nesciunt 
                    alias voluptatem cum quo reprehenderit, voluptas sed.
                </p>
            </div>
            <Sidebar className="sidebar"/>
        </div>
    </div>
    )
}  
export default About;  