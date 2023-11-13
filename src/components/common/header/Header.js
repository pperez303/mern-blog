import React from "react"
import headerImage from "../../../assets/images/neo.jpg"
import "./header.css"
import hdrImage1 from "../../../assets/images/header1.jpg"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
            
        </div>
        {/*<img className="headerImage" src={headerImage} alt="" />*/}
        {/*<img className="headerImage" src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt={headerImage} /> */}
        <img className = "headerImage" src={hdrImage1} alt={headerImage}
        />
    </div>
  )
}