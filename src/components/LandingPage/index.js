import React from "react";
import "./style.css";

function LandingPage(props){
    return(
        <div className="jumbotron jumbotron-fluid p-1 custom-jumbo">
            <h1 className="display-4">Welcome To</h1>
            <img className="landing-img img-fluid" src={`${process.env.PUBLIC_URL}/images/my-hero-logo.png`} alt="My Hero Academia" />
            <h1 className="display-4">Memory Game!</h1>
            <hr></hr>
            <h3 class="text-center">Click on an image to earn points, but don't click on any more than once!</h3>
            <h3 class="text-center">Keep an eye on the timer, you only get 10 seconds per turn!</h3>
            <button onClick={props.startGame} className="mt-1 btn btn-danger">Start Game!</button>
        </div>
    );
}

export default LandingPage;