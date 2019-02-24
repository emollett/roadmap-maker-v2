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
    var radiusA; //changes first circle radius
    var radiusB; //changes second circle radius
    var radiusC; //changes third circle radius
    var radiusFactor; //radius factor to switch between big circle and arc
    var centerPos; //changes center point of circle
    var wordXPos; //the X position of the words
    var wordYPos; //the Y position of the words
    var nextText; //changes second text
    var laterText; //changes third text
    var xPos; //switch between horizontal and vertical
    var yPos; //switch between horizontal and vertical
    var align; //word alignment

    if (this.props.selectedRadiusOption == "option1"){
        radiusA = 100;
        radiusB = 300;
        radiusC = 0;
        nextText = "Next";
        laterText = "Later";
      }else if (this.props.selectedRadiusOption == "option2"){
        radiusA = 100;
        radiusB = 250;
        radiusC = 400;
        nextText = "Next";
        laterText = "Later";
      }else if (this.props.selectedRadiusOption == "option3") {
        radiusA = 100;
        radiusB = 225;
        radiusC = 350;
        nextText = "Next month";
        laterText = "3 months"
      };

    if (this.props.selectedArcOption == "option4"){
        centerPos = 0;
        radiusFactor= 1;
        wordXPos = 4;
        wordYPos = 16;
        xPos = 1;
        yPos = 0;
        align = "start";
      }else if (this.props.selectedArcOption == "option5"){
        centerPos = 200;
        radiusFactor = 0.5;
        wordXPos = 0;
        wordYPos = 16;
        xPos = 0;
        yPos = 1;
        align = "center";
      }

    this.updateCanvas(radiusA, radiusB, radiusC, centerPos, radiusFactor, wordXPos, wordYPos, nextText, laterText, xPos, yPos, align);
  }

  updateCanvas(radiusA, radiusB, radiusC, centerPos, radiusFactor, wordXPos, wordYPos, nextText, laterText, xPos, yPos, align) {
    console.log("centerPos is " + centerPos);
      const ctx = this.refs.canvas.getContext("2d");
        ctx.clearRect(0 ,0, 400, 400);

      const ctxA = this.refs.canvas.getContext('2d');
        ctxA.beginPath();
        ctxA.arc(centerPos, centerPos, radiusFactor*radiusA, 0, 2 * Math.PI);
        ctxA.stroke();

      const ctxB = this.refs.canvas.getContext('2d');
        ctxB.beginPath();
        ctxB.arc(centerPos, centerPos, radiusFactor*radiusB, 0, 2 * Math.PI);
        ctxB.stroke();

      const ctxC = this.refs.canvas.getContext('2d');
        ctxC.beginPath();
        ctxC.arc(centerPos, centerPos, radiusFactor*radiusC, 0, 2 * Math.PI);
        ctxC.stroke();

      const ctxNow = this.refs.canvas.getContext('2d');
        ctxNow.font = (16) + "px Arial";
        ctx.textAlign = align;
        ctxNow.fillText("Now", centerPos+(wordXPos), centerPos+(wordYPos)+(-0.5*wordYPos*yPos));

      const ctxNext = this.refs.canvas.getContext('2d');
        ctxNow.font = (16) + "px Arial";
        ctx.textAlign = align;
        ctxNow.fillText(nextText, centerPos+(radiusA*radiusFactor*xPos)+(wordXPos), centerPos+(radiusA*radiusFactor*yPos)+(wordYPos));

      const ctxLater = this.refs.canvas.getContext('2d');
        ctxNow.font = (16) + "px Arial";
        ctx.textAlign = align;
        ctxNow.fillText(laterText, centerPos+(radiusB*radiusFactor*xPos)+(wordXPos), centerPos+(radiusB*radiusFactor*yPos)+(wordYPos));
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
