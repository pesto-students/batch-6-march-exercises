/*
  Q1:

  Implement a radio group form control with the API found in <CompoundComponents> (Line 69).

  - Clicking a <RadioOption> should update the value of <RadioGroup>
  - The selected <RadioOption> should pass the correct value to its <RadioIcon>
  - The `defaultValue` should be set on first render.

  - Implement an `onChange` prop that communicates the <RadioGroup>'s state
    back to the parent so it can use it to render
  - Implement keyboard controls on the <RadioGroup>
    - Hint: Use tabIndex='0' on the <RadioOption>s so the keyboard will work
    - Enter and space bar should select the option
    - Arrow right, arrow down should select the next option
    - Arrow left, arrow up should select the previous option
*/

import React from "react";
import PropTypes from "prop-types";

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.defaultValue
    };
    this.onSelect = this.onSelect.bind(this);
  }
  static propTypes = {
    defaultValue: PropTypes.string,
    children: PropTypes.shape().isRequired
  };
  onSelect(newValue) {
    this.setState({ selected: newValue });
  }
  render() {
    let fn = child =>
      React.cloneElement(child, {
        selected: this.state.selected === child.props.value,
        onSelect: this.onSelect
      });
    return <div>{React.Children.map(this.props.children, fn)}</div>;
  }
}

class RadioOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onSelect(this.props.value);
  }
  static propTypes = {
    value: PropTypes.string,
    children: PropTypes.shape().isRequired
  };

  render() {
    console.log(this.props);
    return (
      <div onClick={this.handleClick}>
        <RadioIcon
          tabIndex={this.props.tabIndex}
          isSelected={this.props.selected}
        />{" "}
        {this.props.children}
      </div>
    );
  }
}

class RadioIcon extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div
        tabIndex={this.props.tabIndex}
        style={{
          borderColor: "#ccc",
          borderWidth: 3,
          borderStyle: this.props.isSelected ? "inset" : "outset",
          height: 16,
          width: 16,
          display: "inline-block",
          cursor: "pointer",
          background: this.props.isSelected ? "rgba(0, 0, 0, 0.05)" : ""
        }}
      />
    );
  }
}

class CompoundComponents extends React.Component {
  render() {
    return (
      <div>
        <h1>♬ It is about time that we all turned off the radio ♫</h1>

        <RadioGroup defaultValue="fm">
          <RadioOption tabIndex="0" value="am">
            AM
          </RadioOption>
          <RadioOption tabIndex="0" value="fm">
            FM
          </RadioOption>
          <RadioOption tabIndex="0" value="tape">
            Tape
          </RadioOption>
          <RadioOption tabIndex="0" value="aux">
            Aux
          </RadioOption>
        </RadioGroup>
      </div>
    );
  }
}

export default CompoundComponents;
