import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./leftsidebar.css";
import leftSideImage from "../../../assets/images/aboutImage.png"

//<img className src={leftSideImage} alt="left side image" />

function LeftSidebar() {

  return (
    <aside className="leftSideMain">
        <div className="leftSideImg">
            <img src={leftSideImage} alt="left side image" />
        </div>
        <div className="leftSideContent">
            <h3 className="leftSidecontentHeader">
                Build a Personal Website?
            </h3>
            <div className="leftSideContentText">
                <li>Create your personal brand</li>
                <li>Show your work</li>
                <li>Share information</li>
                <li>Easy way to contact you</li>         
            </div>
            <br></br>
            <h3 className="leftSidecontentHeader">
                Why Build Your Own?
            </h3>
            <div className="leftSideContentText">
                <li>Fun way to learn programming.</li>
                <li>Employment opportunities</li>
                <li>Develop your career</li>
            </div>
            <div className="leftSideButtonContainer">
                <button className="leftSideButton">
                    <Link className="link" to="/contact">
                        Go to build steps
                    </Link>
                </button>
            </div>
        </div>
    </aside>
  )
}

export default LeftSidebar;