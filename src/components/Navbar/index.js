import React from "react";
import "./style.css";

function NavBar(props){
    const winLose = props.winLose;
    let message;
    if(winLose === "win"){
        message = "You Win!"
    }
    else if(winLose === "lose"){
        message = "You Lost!"
    }
    else{
        message = "Click an image to start!"
    }
    return(
        <ul className="nav sticky-top justify-content-between align-items-center flex-lg-row flex-column px-3">
            <li className="nav-item">
                <img src="/images/my-hero-logo.png" id="nav-img" alt="My Hero Academia"/>
            </li>
            <li className="nav-item text-white h3">
                {message}
            </li>
            <li className="nav-item text-white h4">Score: {props.score} | Top Score: {props.topScore}</li>
        </ul>
    );
}

export default NavBar;