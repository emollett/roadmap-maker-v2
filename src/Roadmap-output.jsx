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
    var rA; //changes first circle radius
    var rB; //changes second circle radius
    var rC; //changes third circle radius
    var rF; //radius factor to switch between big circle and arc
    var cA; //changes center point of circle
    var wX; //the X position of the words
    var wY; //the Y position of the words
    var nextText; //changes second text
    var laterText; //changes third text
    var xPos; //switch between horizontal and vertical
    var yPos; //switch between horizontal and vertical

    if (this.props.selectedRadiusOption == "option1"){
        rA = 100;
        rB = 300;
        rC = 0;
        nextText = "Next";
        laterText = "Later";
      }else if (this.props.selectedRadiusOption == "option2"){
        rA = 100;
        rB = 250;
        rC = 400;
        nextText = "Next";
        laterText = "Later";
      }else if (this.props.selectedRadiusOption == "option3") {
        rA = 100;
        rB = 225;
        rC = 350;
        nextText = "Next month";
        laterText = "3 months"
      };

    if (this.props.selectedArcOption == "option4"){
        cA = 0;
        rF= 1;
        wX = 5;
        wY = 20;
        xPos = 1;
        yPos = 0;
      }else if (this.props.selectedArcOption == "option5"){
        cA = 200;
        rF = 0.5;
        wX = -18;
        wY = 8;
        xPos = 0;
        yPos = 1;
      }

    this.updateCanvas(rA, rB, rC, cA, rF, wX, wY, nextText, laterText, xPos, yPos);
  }

  updateCanvas(rA, rB, rC, cA, rF, wX, wY, nextText, laterText, xPos, yPos) {
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

      const ctxNow = this.refs.canvas.getContext('2d');
        ctxNow.font = (rF*20) + "px Arial";
        ctxNow.fillText("Now", cA+(wX*rF), cA+(wY*rF));

      const ctxNext = this.refs.canvas.getContext('2d');
        ctxNow.font = (rF*20) + "px Arial";
        ctxNow.fillText(nextText, cA+(rA*rF + 4), cA+(wY*rF));

      const ctxLater = this.refs.canvas.getContext('2d');
        ctxNow.font = (rF*20) + "px Arial";
        ctxNow.fillText(laterText, cA+(rB*rF + 4), cA+(wY*rF));
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
