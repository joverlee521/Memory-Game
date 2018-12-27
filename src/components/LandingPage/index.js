import React from "react";
import "./style.css";

function LandingPage(props){
    return(
        <div className="jumbotron jumbotron-fluid custom-jumbo">
            <h1 className="display-4">Welcome To</h1>
            <img className="landing-img" src={`${process.env.PUBLIC_URL}/images/my-hero-logo.png`} alt="My Hero Academia" />
            <h1 className="display-4">Memory Game!</h1>
            <hr></hr>
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>
            <hr></hr>
            <button onClick={props.startGame} className="btn btn-danger">Start Game!</button>
        </div>
    );
}

export default LandingPage;