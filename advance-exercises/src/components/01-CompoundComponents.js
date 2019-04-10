/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
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
  constructor(props) {
    super(props);
    this.state = { selectedValue: props.defaultValue };

    this.onSelect = this.onSelect.bind(this);
  }
  onSelect(newValue) {
    this.setState({ selectedValue: newValue });
  }
  render() {
    const { selectedValue } = this.state;
    const { children } = this.props;
    return (
      <div>
        { React.Children.map(children, child =>
            React.cloneElement(child, {
              selected: selectedValue === child.props.value,
              onSelect: this.onSelect,
            }))
        }
      </div>
    );
  }
}

RadioGroup.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

class RadioOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPres = this.handleKeyPres.bind(this);
  }
  handleClick() {
    const { value, onSelect } = this.props;
    onSelect(value);
  }
  handleKeyPres(event) {
    const { value, onSelect } = this.props;
    if (event.keyCode === 13 || event.keyCode === 32) {
      onSelect(value);
    }
  }
  render() {
    const { selected } = this.props;
    return (
      <div
        onKeyDown={this.handleKeyPres}
        onClick={this.handleClick}
        role="button"
        tabIndex="0"
      >
        <RadioIcon isSelected={selected} /> {this.props.children}
      </div>
    );
  }
}
RadioOption.propTypes = {
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};
RadioOption.defaultProps = {
  selected: false,
  onSelect: () => {},
};
class RadioIcon extends React.Component {
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

RadioIcon.propTypes = {
  isSelected: PropTypes.bool.isRequired,
};

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
