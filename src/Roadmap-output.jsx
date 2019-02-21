import React, { Component } from 'react';
import './App.css';

class Output extends Component {

  componentDidMount() {
    this.toggleRoadmapType();
  }

  componentDidUpdate() {
    this.toggleRoadmapType();
  }

  toggleRoadmapType(){
    if (this.props.selectedOption == "option1"){
        var rA = 100;
        var rB = 300;
        var rC = 0;
      }else if (this.props.selectedOption == "option2"){
        var rA = 100;
        var rB = 250;
        var rC = 400;
      }else {
        var rA = 100;
        var rB = 225;
        var rC = 350;
      }
      this.updateCanvas(rA, rB, rC);
  }

  updateCanvas(rA, rB, rC) {
      const ctx = this.refs.canvas.getContext("2d");
        ctx.clearRect(0,0, 400, 400);

      const ctxA = this.refs.canvas.getContext('2d');
        ctxA.beginPath();
        ctxA.arc(0, 0, rA, 0, 0.5 * Math.PI);
        ctxA.stroke();

      const ctxB = this.refs.canvas.getContext('2d');
        ctxB.beginPath();
        ctxB.arc(0, 0, rB, 0, 0.5 * Math.PI);
        ctxB.stroke();

      const ctxC = this.refs.canvas.getContext('2d');
        ctxC.beginPath();
        ctxC.arc(0, 0, rC, 0, 0.5 * Math.PI);
        ctxC.stroke();
  }

  render() {
    return (
      <div className="outputContainer">
        <p>Output</p>
          <canvas ref="canvas" width={400} height={400} className="canvas" />
      </div>
    );
  }
}

export default Output;
