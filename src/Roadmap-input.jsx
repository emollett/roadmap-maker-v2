import React, { Component } from 'react';

import './App.css';


class Input extends Component {

  render() {
    return (
      <div className="inputContainer">
        <p>Choose your roadmap options</p>

        <form className="innerBox">
          <fieldset>
            <legend>Full circle or quarter circle radar</legend>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="arc-size"
                  value="option4"
                  checked={this.props.selectedArcOption === "option4"}
                  onChange={this.props.handleArcOptionChange}
                  className="form-check-input"
                />
                Quarter circle
              </label>
            </div>

            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="arc-size"
                  value="option5"
                  checked={this.props.selectedArcOption === "option5"}
                  onChange={this.props.handleArcOptionChange}
                  className="form-check-input"
                />
                Full circle
              </label>
            </div>
          </fieldset>
        </form>

        <form className="innerBox">
          <fieldset>
            <legend>Time chunks</legend>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="time-segments"
                  value="option1"
                  checked={this.props.selectedRadiusOption === "option1"}
                  onChange={this.props.handleRadiusOptionChange}
                  className="form-check-input"
                />
                Now, Next, Later
              </label>
            </div>

            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="time-segments"
                  value="option2"
                  checked={this.props.selectedRadiusOption === "option2"}
                  onChange={this.props.handleRadiusOptionChange}
                  className="form-check-input"
                />
                Now, Next, Later, Verify
              </label>
            </div>

            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="time-segments"
                  value="option3"
                  checked={this.props.selectedRadiusOption === "option3"}
                  onChange={this.props.handleRadiusOptionChange}
                  className="form-check-input"
                />
                Now, Next month, Next 3 months, Next 6 months
              </label>
            </div>
          </fieldset>
        </form>

      </div>
    );
  }
}

export default Input;
