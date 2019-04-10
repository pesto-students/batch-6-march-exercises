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

import React from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    children: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.defaultValue,
    }
    this.optionClicked = this.optionClicked.bind(this);
  }

  optionClicked(value) {
    this.setState({ selected: value });
  }


  render() {
    return (
      <div tabindex="0">
      {
        React.Children.map(this.props.children, child => {
        const isSelected = this.state.selected === child.props.value;
        return React.cloneElement(child, { isSelected, optionClicked: this.optionClicked, tabindex:'-1' });
      })
      }
      </div>
    );
  }
}

class RadioOption extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    isSelected: PropTypes.bool,
    children: PropTypes.shape().isRequired,
  };

  optionChanged = () => this.props.optionClicked(this.props.value);

  handleKeyPress = (event) => {
    const charCode = event.charCode
    if (charCode === 13 || charCode === 32) {
      this.optionChanged();
    }
  }

  render() {
    return (
      <div onClick={this.optionChanged} onKeyPress={this.handleKeyPress}>
        <RadioIcon isSelected={this.props.isSelected} /> {this.props.children}
      </div>
    );
  }
}

class RadioIcon extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div
        style={{
          borderColor: '#ccc',
          borderWidth: 3,
          borderStyle: this.props.isSelected ? 'inset' : 'outset',
          height: 16,
          width: 16,
          display: 'inline-block',
          cursor: 'pointer',
          background: this.props.isSelected ? 'rgba(0, 0, 0, 0.05)' : '',
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
          <RadioOption value="am">AM</RadioOption>
          <RadioOption value="fm">FM</RadioOption>
          <RadioOption value="tape">Tape</RadioOption>
          <RadioOption value="aux">Aux</RadioOption>
        </RadioGroup>
      </div>
    );
  }
}

export default CompoundComponents;
