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
                Build a personal website?
            </h3>
            <div className="leftSideContentText">
                <li><b>Fun way to learn programming.</b></li>
                <li><b>Fun way to learn programming.</b></li>
                
            </div>
            <br></br>
            <h3 className="leftSidecontentHeader">
                Why build a personal website?
            </h3>
            <div className="leftSideContentText">
                <li><b>Fun way to learn programming.</b></li>
                <li><b>Fun way to learn programming.</b></li>
                
            </div>
            <div className="leftSideButton">
                leftside button
            </div>
        </div>
    </aside>
  )
}

export default LeftSidebar;