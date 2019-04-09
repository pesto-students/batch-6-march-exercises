import React, { PureComponent } from 'react';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

const initialState = {
  currentMilliseconds: 0,
  timerRunning: false,
};
class StopWatch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, initialState);

    this.handleInterval = this.handleInterval.bind(this);
    this.toggleTimerState = this.toggleTimerState.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.timerRunning !== this.state.timerRunning) {
      this.handleInterval(this.state.timerRunning);
    }
  }
  handleInterval(timerRunningState) {
    let interval;
    if (timerRunningState) {
      const that = this;
      interval = setInterval(() => {
        that.setState({ currentMilliseconds: that.state.currentMilliseconds + 1 });
      }, 1);
    } else {
      clearInterval(interval);
    }
  }
  toggleTimerState() {
    this.setState({ timerRunning: !this.state.timerRunning });
  }
  clearTimer() {
    this.setState(Object.assign({}, initialState));
  }
  render() {
    const { currentMilliseconds, timerRunning } = this.state;
    const buttonText = timerRunning === true ? 'Stop' : 'Start';
    return (
      <div>
        <h3>{currentMilliseconds}</h3>
        <br />
        <button onClick={this.toggleTimerState}>{buttonText}</button>
        <br />
        <button>Clear</button>
      </div>
    );
  }
}

export default StopWatch;
