import React, { Component } from 'react';

import './App.css';


class Input extends Component {




  render() {
    return (
      <div className="inputContainer">
        <p>Input</p>

        <form className="input">

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="option1"
                checked={this.props.selectedOption === "option1"}
                onChange={this.props.handleOptionChange}
                className="form-check-input"
              />
              Now, Next, Later
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="option2"
                checked={this.props.selectedOption === "option2"}
                onChange={this.props.handleOptionChange}
                className="form-check-input"
              />
              Now, Next, Later, Verify
            </label>
          </div>

          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="option3"
                checked={this.props.selectedOption === "option3"}
                onChange={this.props.handleOptionChange}
                className="form-check-input"
              />
              Now, Next month, Next 3 months, Next 6 months
            </label>
          </div>

        </form>

      </div>
    );
  }
}

export default Input;
