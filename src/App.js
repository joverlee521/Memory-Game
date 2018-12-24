import React, { Component } from "react";
import NavBar from "./components/Navbar";
import ImageCard from "./components/ImageCard";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      score: 0,
      topScore: 0
    }
  }
  render() {
    return (
      <NavBar score={this.state.score} topScore={this.state.topScore}/>
    );
  }
}

export default App;
