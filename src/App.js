import React, { Component } from "react";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/Navbar";
import CardsWrapper from "./components/CardsWrapper";
import MessageWrapper from "./components/MessageWrapper";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      start: false,
      score: 0,
      topScore: 0,
      clicked: [],
      winLose: ""
    }
  }

  startGame = () => {
    this.setState({start: true});
  }

  updateScore = (clickedArray) => {
    let currentScore = this.state.score;
    currentScore++;
    this.setState({score: currentScore}, () => {
      if(clickedArray.length === characters.length){
        this.updateTopScore();
        this.setState({winLose: "win", clicked: []});
      }
      else{
        this.setState({clicked: clickedArray});
      }
    });
  }

  updateTopScore = () => {
    let currentScore = this.state.score;
    let currentTopScore = this.state.topScore;
    if(currentScore > currentTopScore){
      currentTopScore = currentScore;
      this.setState({topScore: currentTopScore});
    }
    this.setState({score: 0});
  }

  resetGame = () => {
    this.setState({winLose: ""});
  }

  clickState = id => {
    const clickedArray = this.state.clicked;
    if(clickedArray.includes(id)){
      this.updateTopScore();
      this.setState({winLose: "lose", clicked: []})
    }
    else{
      clickedArray.push(id);
      this.updateScore(clickedArray);
    }
  }

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  renderCharacters = () => {
    const shuffledCharacters = this.shuffle(characters);
    return shuffledCharacters.map(character => <ImageCard character={character} clickState={this.clickState}/>);
  }

  render() {
    if(this.state.start){
    let content;
    if(this.state.winLose === "win" || this.state.winLose === "lose"){
      content = <MessageWrapper winLose={this.state.winLose} restart={this.resetGame}/>
    }
    else{
      content = <CardsWrapper>{this.renderCharacters()}</CardsWrapper>
    }
    return (
      <div className="wrapper">
        <NavBar score={this.state.score} topScore={this.state.topScore} winLose={this.state.winLose}/>
        <div className="content">
          {content}
        </div>
        <Footer />
      </div>
    );
    }
    else{
      return(
        <LandingPage startGame={this.startGame}/>
      )
    }
  }
}

export default App;
