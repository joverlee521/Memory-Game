import React, { Component } from "react";
import NavBar from "./components/Navbar";
import CardsWrapper from "./components/CardsWrapper";
import ImageCard from "./components/ImageCard";
import Footer from "./components/Footer";
import characters from "./characters.json"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      topScore: 0,
      clicked: [],
      win: false,
      lose: false
    }
  }

  updateScore = () => {
    let currentScore = this.state.score;
    currentScore++;
    this.setState({score: currentScore});
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

  clickState = id => {
    const clickedArray = this.state.clicked;
    if(clickedArray.includes(id)){
      this.updateTopScore();
      this.setState({lose: true, clicked: []})
    }
    else{
      clickedArray.push(id);
      if(clickedArray.length === characters.length){
        this.updateTopScore();
        this.setState({win: true, clicked: []});
      }
      else{
        this.updateScore();
        this.setState({clicked: clickedArray});
      }
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
    // if(this.state.win){
    //   return(<h1>You Win!</h1>)
    // }
    // else if(this.state.lose){
    //   return(<h1>You Lose!</h1>)
    // }
    // else{
      return (
        <div>
          <NavBar score={this.state.score} topScore={this.state.topScore}/>
          <CardsWrapper>
            {this.renderCharacters()}
          </CardsWrapper>
          <Footer />
        </div>
      );
    // }
  }
}

export default App;
