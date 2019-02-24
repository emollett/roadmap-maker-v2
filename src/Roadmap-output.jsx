import React, { Component } from 'react';
import './App.css';

const canvasSize = 400; //this will be variable later - hence changing other variables to be dependent on this

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
    var lastText; //changes fourth text
    var xPos; //switch between horizontal and vertical
    var yPos; //switch between horizontal and vertical
    var align; //word alignment

    if (this.props.selectedRadiusOption == "option1"){
        radiusA = 0.25*canvasSize;
        radiusB = 0.75*canvasSize;
        radiusC = 0;
        nextText = "Next";
        laterText = "Later";
        lastText = "";
      }else if (this.props.selectedRadiusOption == "option2"){
        radiusA = 0.25*canvasSize;
        radiusB = 0.5*canvasSize;
        radiusC = 0.75*canvasSize;
        nextText = "Next";
        laterText = "Later";
        lastText = "Verify";
      }else if (this.props.selectedRadiusOption == "option3") {
        radiusA = 0.25*canvasSize;
        radiusB = 0.5*canvasSize;
        radiusC = 0.75*canvasSize;
        nextText = "Next month";
        laterText = "3 months";
        lastText = "6 months";
      };

    if (this.props.selectedArcOption == "option4"){
        centerPos = 0;
        radiusFactor= 1;
        wordXPos = canvasSize/100;
        wordYPos = canvasSize/25;
        xPos = 1;
        yPos = 0;
        align = "start";
      }else if (this.props.selectedArcOption == "option5"){
        centerPos = canvasSize/2;
        radiusFactor = 0.5;
        wordXPos = 0;
        wordYPos = canvasSize/25;
        xPos = 0;
        yPos = 1;
        align = "center";
      }

    this.updateCanvas(radiusA, radiusB, radiusC, centerPos, radiusFactor, wordXPos, wordYPos, nextText, laterText, lastText, xPos, yPos, align);
  }

  updateCanvas(radiusA, radiusB, radiusC, centerPos, radiusFactor, wordXPos, wordYPos, nextText, laterText, lastText, xPos, yPos, align) {
    console.log("centerPos is " + centerPos);
      const ctx = this.refs.canvas.getContext("2d");
        ctx.clearRect(0 ,0, canvasSize, canvasSize);

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
        ctxNext.font = (16) + "px Arial";
        ctx.textAlign = align;
        ctxNext.fillText(nextText, centerPos+(radiusA*radiusFactor*xPos)+(wordXPos), centerPos+(radiusA*radiusFactor*yPos)+(wordYPos));

      const ctxLater = this.refs.canvas.getContext('2d');
        ctxLater.font = (16) + "px Arial";
        ctx.textAlign = align;
        ctxLater.fillText(laterText, centerPos+(radiusB*radiusFactor*xPos)+(wordXPos), centerPos+(radiusB*radiusFactor*yPos)+(wordYPos));

      const ctxLast = this.refs.canvas.getContext('2d');
        ctxLast.font = (16) + "px Arial";
        ctx.textAlign = align;
        ctxLast.fillText(lastText, centerPos+(radiusC*radiusFactor*xPos)+(wordXPos), centerPos+(radiusC*radiusFactor*yPos)+(wordYPos));
  }

  render() {
    return (
      <div className="outputContainer">
        <p>Output</p>
          <div className="innerBox">
            <canvas ref="canvas" width={canvasSize} height={canvasSize} className="canvas" />
          </div>
      </div>
    );
  }
}

export default Output;
