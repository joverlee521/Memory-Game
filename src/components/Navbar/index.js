import React from "react";
import "./style.css";

function NavBar(props){
    return(
        <ul className="nav sticky-top justify-content-between align-items-center flex-lg-row flex-column px-3">
            <li className="nav-item">
                <img src="/images/my-hero-logo.png" id="nav-img" alt="My Hero Academia"/>
            </li>
            <li className="nav-item text-white h3">
                Click an image to start!
            </li>
            <li className="nav-item text-white h3">Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    );
}

export default NavBar;