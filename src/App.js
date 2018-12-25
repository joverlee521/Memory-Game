import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/Navbar";
import CardsWrapper from "./components/CardsWrapper";
import ImageCard from "./components/ImageCard";
import characters from "./characters.json"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      topScore: 0
    }
  }

  renderCharacters = () => characters.map(character => <ImageCard character={character}/>);

  render() {
    return (
      <Wrapper>
        <NavBar score={this.state.score} topScore={this.state.topScore}/>
        <CardsWrapper>
          {this.renderCharacters()}
        </CardsWrapper>
      </Wrapper>
    );
  }
}

export default App;
