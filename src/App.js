import React, { Component } from 'react';
import './App.css';
import Input from './Roadmap-input.jsx';
import Output from './Roadmap-output.jsx';

class App extends Component {

  handleRadiusOptionChange = changeEvent => {
    this.setState({
      selectedRadiusOption: changeEvent.target.value
    });
  };

  handleArcOptionChange = changeEvent => {
    this.setState({
      selectedArcOption: changeEvent.target.value
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedRadiusOption: "option1",
      selectedArcOption: "option4"
    };

  }

  render() {
    console.log("from app.js the option selected is " + this.state.selectedRadiusOption);
    return (
      <div>
        <Input selectedRadiusOption={this.state.selectedRadiusOption} selectedArcOption={this.state.selectedArcOption} handleRadiusOptionChange={this.handleRadiusOptionChange.bind(this)} handleArcOptionChange={this.handleArcOptionChange.bind(this)} />
        <Output selectedRadiusOption={this.state.selectedRadiusOption} selectedArcOption={this.state.selectedArcOption}/>
      </div>
    );
  }
}

export default App;
