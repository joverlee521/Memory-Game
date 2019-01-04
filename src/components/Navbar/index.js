import React, {Component} from "react";
import "./style.css";

let myTimer;

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {timer: 9}
    }

    startTimer = () => {
        this.resetTimer();
        myTimer = setInterval(() => {
         this.setState({timer: this.state.timer - 1});
        }, 1000);
    }

    resetTimer = () => {
        clearInterval(myTimer);
        this.setState({timer: 10});
    }
    
    displayMessage = () => {
        const winLose = this.props.winLose;
        const score = this.props.score;
        const timer = this.state.timer;
        if(winLose === "win"){
            return "You Win!"
        }
        else if(winLose === "lose"){
            return "You Lost!"
        }
        else if(score === 0){
            return "Click an image to start!"
        }
        else{
            return "Keep clicking! " + timer + " seconds left!"
        }
    }  

    componentDidUpdate = (prevProps, prevState) => {
        console.log(prevState.timer);
        if(prevState.timer === 0){
            this.props.updateTopScore();
            this.props.loseGame();
            this.resetTimer();
        }
        else if(prevProps.score !== this.props.score && this.props.score !== 0){
            console.log("started timer");
            this.startTimer();
        }
    }

    render(){ 
        return(
            <ul className="nav sticky-top justify-content-between align-items-center flex-lg-row flex-column px-3">
                <li className="nav-item">
                    <img src={`${process.env.PUBLIC_URL}/images/my-hero-logo.png`} id="nav-img" alt="My Hero Academia"/>
                </li>
                <li className="nav-item text-white h3">
                    {this.displayMessage()}
                </li>
                <li className="nav-item text-white h4">Score: {this.props.score} | Top Score: {this.props.topScore}</li>
            </ul>
        );
    }
}

export default NavBar;