import React, { Component } from 'react';
import './App.css';
import Input from './Roadmap-input.jsx';
import Output from './Roadmap-output.jsx';

class App extends Component {

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    };

  }

  render() {
    console.log("from app.js the option selected is " + this.state.selectedOption);
    return (
      <div>
        <Input selectedOption={this.state.selectedOption} handleOptionChange={this.handleOptionChange.bind(this)} />
        <Output selectedOption={this.state.selectedOption} handleOptionChange={this.handleOptionChange.bind(this)} />
      </div>
    );
  }
}

export default App;
