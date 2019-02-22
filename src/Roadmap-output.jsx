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
    var rA;
    var rB;
    var rC;
    var rF;
    var cA;

    if (this.props.selectedRadiusOption == "option1"){
        rA = 100;
        rB = 300;
        rC = 0;
      }else if (this.props.selectedRadiusOption == "option2"){
        rA = 100;
        rB = 250;
        rC = 400;
      }else if (this.props.selectedRadiusOption == "option3") {
        rA = 100;
        rB = 225;
        rC = 350;
      };

    if (this.props.selectedArcOption == "option4"){
        cA = 0;
        rF= 1;
      }else if (this.props.selectedArcOption == "option5"){
        cA = 200;
        rF = 0.5;
      }

    this.updateCanvas(rA, rB, rC, cA, rF);
  }

  updateCanvas(rA, rB, rC, cA, rF) {
    console.log("cA is " + cA);
      const ctx = this.refs.canvas.getContext("2d");
        ctx.clearRect(0 ,0, 400, 400);

      const ctxA = this.refs.canvas.getContext('2d');
        ctxA.beginPath();
        ctxA.arc(cA, cA, rF*rA, 0, 2 * Math.PI);
        ctxA.stroke();

      const ctxB = this.refs.canvas.getContext('2d');
        ctxB.beginPath();
        ctxB.arc(cA, cA, rF*rB, 0, 2 * Math.PI);
        ctxB.stroke();

      const ctxC = this.refs.canvas.getContext('2d');
        ctxC.beginPath();
        ctxC.arc(cA, cA, rF*rC, 0, 2 * Math.PI);
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
