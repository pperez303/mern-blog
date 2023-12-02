import React from "react"
import "./header.css"
import hdrImage1 from "../../../assets/images/header2.jpg";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <div className="headerTitleSm">nubeWebDev</div>
            
            <div className="headerTitleLg">Blog</div>
        </div>
        {/*<img className="headerImage" src={headerImage} alt="" />*/}
        {/*<img className="headerImage" src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt={headerImage} /> */}
        {/*<img className = "headerImage" src={hdrImage1} alt="blog header"/>*/}
    </div>
  )
}